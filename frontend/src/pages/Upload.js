import React from "react";
import { Alert, Button } from "react-bootstrap";
import InputField from "../components/InputField";
import useReducerWithThunk from "../hooks/useReducerWithThunk";
import {
  UPLOAD_CHANGE,
  UPLOAD_SUBMIT,
  UPLOAD_SUBMIT_FAIL,
  UPLOAD_SUBMIT_SUCCESS,
} from "../lib/constants";
import Content from "../layout/Content";
import moment from "moment";

export default function Upload() {
  const [form, dispatch] = useReducerWithThunk(formReducer, undefined, init);
  const [proTeams, setProTeams] = React.useState([]);
  const [collegeTeams, setCollegeTeams] = React.useState([]);

  React.useEffect(() => {
    const fetchTeams = async () => {
      const proResponse = await fetch(
        `${process.env.REACT_APP_TEAMS_URL}?league=pro`
      );
      const collegeResponse = await fetch(
        `${process.env.REACT_APP_TEAMS_URL}?league=college`
      );

      if (proResponse.ok) {
        const pro = await proResponse.json();
        setProTeams(pro);
      }

      if (collegeResponse.ok) {
        const college = await collegeResponse.json();
        setCollegeTeams(college);
      }
    };

    fetchTeams();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    return async (dispatch, getState) => {
      dispatch({ type: UPLOAD_SUBMIT });
      const currentForm = getState();

      let fields = {};
      Object.keys(currentForm.fields).forEach((name) => {
        const value = currentForm.fields[name].value;
        const error = validate(currentForm, name, value);
        fields[name] = { name: name, value: value, error: error };
      });

      const formErrors = hasErrors(fields);
      if (formErrors) {
        dispatch({
          type: UPLOAD_SUBMIT_FAIL,
          payload: {
            errors: formErrors,
            fields: fields,
            response: "There are form errors. Please see below.",
          },
        });
        return;
      }

      try {
        //validation is good, continue with uploading
        let formData = new FormData();
        for (const [field, { value }] of Object.entries(currentForm.fields)) {
          formData.append(field, value);
        }
        const uploadDate = moment.utc().format("YYYY-MM-DD HH:mm:ss");
        formData.append("uploadDate", uploadDate);

        const response = await fetch(process.env.REACT_APP_UPLOAD_URL, {
          method: "POST",
          body: formData,
        });

        if (response.ok) {
          let message = "";
          let currentTeam =
            currentForm.fields.leagueType.value === "pro"
              ? proTeams
              : collegeTeams;

          currentTeam.forEach((team) => {
            if (team.id === currentForm.fields.teamId.value) {
              team.uploadDate = uploadDate;
              message = `Your file for the ${team.name} was successfully uploaded to the ${currentForm.fields.leagueType.value} league.`;
            }
          });

          dispatch({ type: UPLOAD_SUBMIT_SUCCESS, payload: message });
          document.getElementById("teamFile").value = null;
        } else {
          const json = await response.json();
          dispatch({
            type: UPLOAD_SUBMIT_FAIL,
            payload: { errors: true, response: json.message },
          });
        }
      } catch (error) {
        dispatch({
          type: UPLOAD_SUBMIT_FAIL,
          payload: {
            errors: true,
            response: `Something has gone wrong. Please copy the following to the webmaster: ${error}`,
          },
        });
      }
    };
  };

  return (
    <Content header="Upload">
      <p>
        Use the form below to upload your multi-player files that is generated
        from the Draft Day Sports Program. These files are used by the
        commission to run the simulation.
      </p>

      <p>
        First, select the league, either professional or college. Then input the
        correct league password. Feel feel to ask on{" "}
        <a href="https://join.slack.com/t/sibabball/shared_invite/zt-grkrrq9i-je57xB2Y7NGoPTh0GlKNNg">
          Slack
        </a>{" "}
        if you're unsure of the password. Then select your team name from the
        dropdown. You can see the last upload date when your team is selected.
        And finally, select your updated file and click Submit.
      </p>

      {form.submit && (
        <Alert variant={form.submitSucceeded ? "success" : "danger"}>
          <Alert.Heading>
            {form.submitSucceeded ? "Success!" : "Error!"}
          </Alert.Heading>
          <p>{form.submitResponse}</p>
        </Alert>
      )}

      <form onSubmit={(e) => dispatch(handleSubmit(e))}>
        <InputField
          id="leagueType"
          as="select"
          label="League:"
          value={form.fields.leagueType.value}
          onChange={(e) =>
            dispatch({
              type: UPLOAD_CHANGE,
              payload: {
                name: e.target.id,
                value: e.target.value,
                teams: e.target.value === "pro" ? proTeams : collegeTeams,
              },
            })
          }
          help={form.fields.leagueType.error}
          validation={form.fields.leagueType.error && "error"}
        >
          <option value=""></option>
          <option value="pro">Professional (SIBA)</option>
          <option value="college">College (SICBA)</option>
        </InputField>

        <InputField
          id="leaguePass"
          type="password"
          label="League Password:"
          help={form.fields.leaguePass.error}
          validation={form.fields.leaguePass.error && "error"}
          value={form.fields.leaguePass.value}
          onChange={(e) =>
            dispatch({
              type: UPLOAD_CHANGE,
              payload: { name: e.target.id, value: e.target.value },
            })
          }
          disabled={form.submitting}
        />

        <InputField
          id="teamId"
          as="select"
          label="Team:"
          help={form.fields.teamId.error || form.fields.teamId.info}
          validation={form.fields.teamId.error && "error"}
          value={form.fields.teamId.value}
          onChange={(e) =>
            dispatch({
              type: UPLOAD_CHANGE,
              payload: { name: e.target.id, value: e.target.value },
            })
          }
          disabled={form.formSending}
        >
          <option value=""></option>
          {form.options.teams.map((team) => (
            <option key={team.name} value={team.id}>
              {team.name}
            </option>
          ))}
        </InputField>

        <InputField
          id="teamFile"
          type="file"
          label="Team File:"
          help={form.fields.teamFile.error}
          validation={form.fields.teamFile.error && "error"}
          onChange={(e) =>
            dispatch({
              type: UPLOAD_CHANGE,
              payload: { name: e.target.id, value: e.target.files[0] },
            })
          }
          disabled={form.submitting}
        />

        <Button type="submit" disabled={form.submitting}>
          {!form.submitting ? "Submit" : "Loading..."}
        </Button>
      </form>
    </Content>
  );
}

function init() {
  return {
    errors: false,
    submit: false,
    submitSucceeded: false,
    submitResponse: "",
    submitting: false,
    options: {
      teams: [],
    },
    fields: {
      teamId: { value: "", error: null },
      teamFile: { value: "", error: null },
      leaguePass: { value: "", error: null },
      leagueType: { value: "", error: null },
    },
  };
}

function hasErrors(fields) {
  const fieldValueArray = Object.values(fields);
  return fieldValueArray.some((v) => v.error !== null);
}

function validate(state, name, value) {
  switch (name) {
    case "teamId":
      if (!value) return "Team name is required.";
      else return null;
    case "teamFile":
      if (!value) return "Team file is required.";
      else return null;
    case "leagueType":
      if (!value) return "Select either the pro or college league.";
      else return null;
    case "leaguePass":
      if (!value) return "League password is required.";
      else if (
        (state.fields.leagueType.value === "pro" &&
          value !== process.env.REACT_APP_PRO_LEAGUE_PASSWORD) ||
        (state.fields.leagueType.value === "college" &&
          value !== process.env.REACT_APP_COLLEGE_LEAGUE_PASSWORD)
      ) {
        return "The league type and league password do not match.";
      } else return null;
    default:
      return null;
  }
}

function getUploadDate(name, value, teams) {
  if (name !== "teamId") return null;
  const uploadDate = teams.find((t) => t.id === value).uploadDate;
  return uploadDate
    ? `Last Upload: ${moment.utc(uploadDate).local().format("LLL")}`
    : "No recent upload";
}

function formReducer(state, action) {
  switch (action.type) {
    case UPLOAD_CHANGE:
      const newValue = {
        value: action.payload.value,
        error: validate(state, action.payload.name, action.payload.value),
        info: getUploadDate(
          action.payload.name,
          action.payload.value,
          state.options.teams
        ),
      };

      const newFields = {
        ...state.fields,
        [action.payload.name]: newValue,
      };

      //if the league type was change, populate with new teams from league
      const newTeams = action.payload.teams || state.options.teams;

      return {
        ...state,
        errors: hasErrors(newFields),
        fields: newFields,
        options: { ...state.options, teams: newTeams },
      };
    case UPLOAD_SUBMIT:
      return { ...state, submitting: true };
    case UPLOAD_SUBMIT_SUCCESS:
      const cleanState = init();
      return {
        ...cleanState,
        submit: true,
        submitting: false,
        submitSucceeded: true,
        submitResponse: action.payload,
      };
    case UPLOAD_SUBMIT_FAIL:
      let newState = { ...state };

      if (action.payload.fields)
        newState = { ...newState, fields: action.payload.fields };

      return {
        ...newState,
        errors: action.payload.errors,
        submit: true,
        submitting: false,
        submitSucceeded: false,
        submitResponse: action.payload.response,
      };
    default:
      return state;
  }
}
