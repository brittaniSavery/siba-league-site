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

function hasErrors(fields) {
  const fieldValueArray = Object.values(fields);
  return fieldValueArray.some((v) => v.error !== null);
}

function validate(state, name, value) {
  switch (name) {
    case "teamName":
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
        console.log("College", process.env.REACT_APP_COLLEGE_LEAGUE_PASSWORD);
        console.log("Pro", process.env.REACT_APP_PRO_LEAGUE_PASSWORD);
        return "The league type and league password do not match.";
      } else return null;
    default:
      return null;
  }
}

function formReducer(state, action) {
  switch (action.type) {
    case UPLOAD_CHANGE:
      const newValue = {
        value: action.payload.value,
        error: validate(state, action.payload.name, action.payload.value),
      };
      const newFields = { ...state.fields, [action.payload.name]: newValue };

      return {
        ...state,
        errors: hasErrors(newFields),
        fields: newFields,
      };
    case UPLOAD_SUBMIT:
      return { ...state, submitting: true };
    case UPLOAD_SUBMIT_SUCCESS:
      return {
        ...state,
        submit: true,
        submitting: false,
        submitSucceeded: true,
        submitResponse: `Your team file was successfully uploaded to the ${state.fields.leagueType.value} league.`,
        teamName: { value: "" },
        teamFile: { value: "" },
        leaguePass: { value: "" },
        leagueType: { value: "" },
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

function Upload() {
  const initialForm = {
    errors: false,
    submit: false,
    submitSucceeded: false,
    submitResponse: "",
    submitting: false,
    fields: {
      teamName: { value: "", error: null },
      teamFile: { value: "", error: null },
      leaguePass: { value: "", error: null },
      leagueType: { value: "", error: null },
    },
  };
  const [form, dispatch] = useReducerWithThunk(formReducer, initialForm);

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

        const response = await fetch(process.env.REACT_APP_UPLOAD_URL, {
          method: "POST",
          body: formData,
        });

        if (response.ok) {
          dispatch({ type: UPLOAD_SUBMIT_SUCCESS });
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
        Use the form below to upload your .tem file that is generated from the
        Draft Day Sports Program. These files are used by the commission to run
        the simulation. Make sure to select the correct league for your team as
        well as the corresponding league password. Then input your team's name
        and the latest .tem file.
      </p>

      {form.submit && (
        <Alert bsStyle={form.submitSucceeded ? "success" : "danger"}>
          <p>
            <b>{form.submitSucceeded ? "Success!" : "Error!"}</b>
            <br />
            {form.submitResponse}
          </p>
        </Alert>
      )}

      <form onSubmit={(e) => dispatch(handleSubmit(e))}>
        <InputField
          id="teamName"
          type="text"
          label="Team:"
          help={form.fields.teamName.error}
          validation={form.fields.teamName.error && "error"}
          value={form.fields.teamName.value}
          onChange={(e) =>
            dispatch({
              type: UPLOAD_CHANGE,
              payload: { name: e.target.id, value: e.target.value },
            })
          }
          disabled={form.formSending}
        />

        <InputField
          id="leagueType"
          label="League:"
          value={form.fields.leagueType.value}
          onChange={(e) =>
            dispatch({
              type: UPLOAD_CHANGE,
              payload: { name: e.target.id, value: e.target.value },
            })
          }
          help={form.fields.leagueType.error}
          validation={form.fields.leagueType.error && "error"}
          componentClass="select"
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

        <Button type="submit" disabled={form.submitting || form.errors}>
          {!form.submitting ? "Submit" : "Loading..."}
        </Button>
      </form>
    </Content>
  );
}

export default Upload;
