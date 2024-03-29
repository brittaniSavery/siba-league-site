import React, { useRef, useState, useEffect } from "react";
import { Highlighter, Typeahead } from "react-bootstrap-typeahead";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import {
  COACH_LEVELS_HIGH_LOW,
  COACH_LEVELS_TERRIBLE_GREAT,
  COLLEGE,
  COLLEGE_ABILITY_POINTS,
  COLLEGE_COACH_PERSONALITY,
  PRO,
  PRO_ABILITY_POINTS,
} from "../../lib/constants";
import InputField from "../InputField";
import ProbationIcon from "../ProbationIcon";

export default function TeamInfoForm({
  open,
  onClose,
  current,
  allTeams,
  options,
}) {
  const typeahead = useRef(null);
  const [pointLimits, setPointLimits] = useState(
    getPointLimitsByTier(current?.basics?.tier || "")
  );
  const [currentSum, setCurrentSum] = useState(0);
  const [validated, setValidated] = useState(false);
  const [teamError, setTeamError] = useState("");
  const isPro = current.type === PRO;
  const isCollege = current.type === COLLEGE;
  const fullTeamType = isPro ? "Professional" : "College";
  const playerType = isPro ? "General Manager" : "Head Coach";

  const getTeamValidationPattern = () => {
    let pattern = ".*";

    if (
      isCollege &&
      allTeams.length > 0 &&
      allTeams.some((t) => t.type === COLLEGE)
    ) {
      const editingCurrent = current?.basics?.name
        ? `(.*${current.basics.name}.*)|`
        : "";
      const selectedTiers = allTeams.map((a) => a.basics.tier).join("");
      const selectedRegions = allTeams.map((a) => a.basics.region).join("|");

      pattern = `${editingCurrent}.*[^${selectedTiers}]-(?!${selectedRegions}).*`;
    }

    return pattern;
  };

  const validateTeamSelection = () => {
    let error = "";
    const selectedArray = typeahead.current?.state?.selected || [];
    if (selectedArray.length === 0) {
      error = "This field is required.";
    } else if (isCollege && allTeams.length > 0) {
      const selectedTeam = selectedArray[0];

      //excluding the currently selected team (just in case for editing a team)
      const teams = allTeams.filter((t) => t.basics.name !== selectedTeam.name);

      const tiers = teams.map((t) => t.basics.tier);
      const regions = teams.map((t) => t.basics.region);

      error = tiers.includes(selectedTeam.tier)
        ? `You already have a ${selectedTeam.tier} Tier team.`
        : regions.includes(selectedTeam.region)
        ? `You already have a team in the ${selectedTeam.region} region.`
        : "";
    }

    setTeamError(error);
  };

  const typeaheadOptions = isCollege
    ? {
        labelKey: (option) =>
          `${option.name} (${option.tier}-${option.region})`,
        inputProps: {
          required: true,
          pattern: getTeamValidationPattern(),
          name: "team",
        },
        onChange: () => {
          if (typeahead.current.state.selected.length === 0) return;
          setPointLimits(
            getPointLimitsByTier(typeahead.current.state.selected[0].tier)
          );

          validated && validateTeamSelection();
        },
        renderMenuItemChildren: (option, { text }) => (
          <>
            {option.probation && <ProbationIcon isPadded />}
            <Highlighter search={text}>{option.name}</Highlighter>
            <div>
              <small>
                Tier: {option.tier}, Region: {option.region}
              </small>
            </div>
            {option.probation && (
              <div>
                <small>{option.probation}</small>
              </div>
            )}
          </>
        ),
      }
    : {
        inputProps: { required: true, name: "team" },
      };

  useEffect(() => {
    setPointLimits(getPointLimitsByTier(current?.basics?.tier || ""));
    setCurrentSum(addCurrentSum(isPro, current));
  }, [current, isPro]);

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();

    const form = event.currentTarget;
    validateTeamSelection();

    if (form.checkValidity() === false || teamError) {
      setValidated(true);
    } else {
      const team = { ...current, basics: {}, coach: {} };
      if (!team.id) team.id = `team-${Date.now().valueOf()}`;

      const formData = new FormData(form);
      for (const [name, value] of formData) {
        //handle team separately due to custom input component, otherwise use form name to fill out json
        if (name === "team") {
          const selected = typeahead.current.state.selected[0];
          const teamInfo =
            typeof selected === "string" ? { name: selected } : selected;
          team.basics = { ...team.basics, ...teamInfo };
        } else if (name === "password") {
          team.basics.password = value;
        } else team.coach[name] = value.toString();
      }

      handleClose(team);
    }
  };

  const handleClose = (team) => {
    if (!team?.hasOwnProperty("basics")) team = null;
    setCurrentSum(0);
    setValidated(false);
    setTeamError("");
    onClose(team);
  };

  return (
    <>
      <Modal show={open} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{`Add ${fullTeamType} Team`}</Modal.Title>
        </Modal.Header>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Modal.Body>
            <p>
              This form includes all the details needed about your team and{" "}
              {playerType.toLowerCase()}. When selecting your coach face and
              outfit, be sure to use the graphics found in{" "}
              <Link
                to={`/${isPro ? "siba" : COLLEGE}/downloads`}
                target="_blank"
              >
                Downloads
              </Link>
              . Teams that have an exclamation icon (<ProbationIcon />) are on
              probation.
            </p>

            <p className="h5">Team Basics</p>
            <Form.Row>
              <Col xs={12} lg={6}>
                <Form.Group>
                  <Form.Label>Team Selection</Form.Label>
                  <Typeahead
                    id="team"
                    ref={typeahead}
                    defaultSelected={current?.basics ? [current.basics] : []}
                    className={
                      validated && teamError ? "is-invalid" : "is-valid"
                    }
                    options={options}
                    {...typeaheadOptions}
                    highlightOnlyResult
                  />
                  <Form.Control.Feedback type="invalid">
                    {teamError}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>

              <InputField
                id="password"
                label="Team Password:"
                type="password"
                defaultValue={current?.basics?.password}
                column
                required
              />
            </Form.Row>

            <p className="h5">{`${playerType} Basics`}</p>
            <Form.Row>
              <InputField
                id="first_name"
                label="First Name:"
                defaultValue={current?.coach?.first_name}
                column
                required
              />
              <InputField
                id="last_name"
                label="Last Name:"
                defaultValue={current?.coach?.last_name}
                column
                required
              />
            </Form.Row>

            <Form.Row>
              <InputField
                id="pic"
                type="number"
                label="Picture Number:"
                help={`Type the number of the matching picture from graphics/${
                  isPro ? "nonplayers" : "coaches"
                }/fac.`}
                min={1}
                max={1022}
                error="Picture number must be between 1 and 1022"
                defaultValue={current?.coach?.pic}
                required
                column
              />
              <InputField
                id="outfit"
                type="number"
                label="Outfit Number:"
                help={`Type the number of the matching picture from graphics/${
                  isPro ? "nonplayers" : "coaches"
                }/clothes.`}
                min={1}
                max={55}
                error="Outfit number must be between 1 and 55"
                defaultValue={current?.coach?.outfit}
                required
                column
              />
            </Form.Row>

            <CoachPersonalityFields team={current} />

            <p className="h5">{`${playerType} Ability Points`}</p>
            <p>
              These are the skills that your {playerType.toLowerCase()} will
              have in evaluating players. The minimum that each category can
              have is {pointLimits.min} and the maximum is {pointLimits.max}.
              The maximum sum of the categories is {pointLimits.sum}.
            </p>
            {(isPro ? PRO_ABILITY_POINTS : COLLEGE_ABILITY_POINTS).map(
              ({ label, id }) => (
                <InputField
                  key={id}
                  id={id}
                  label={`${label}:`}
                  type="number"
                  min={pointLimits.min}
                  max={pointLimits.max}
                  onChange={() => setCurrentSum(addCurrentSum(isPro))}
                  error={`Category amounts must be between ${pointLimits.min} and ${pointLimits.max}.`}
                  defaultValue={current?.coach && current?.coach[id]}
                  horizontal
                  short
                  required
                />
              )
            )}

            <hr />
            <InputField
              id="sum"
              label="Total Sum:"
              value={currentSum}
              isInvalid={currentSum > pointLimits.sum}
              error={`Total sum cannot be more than ${pointLimits.sum}`}
              short
              horizontal
              readOnly
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" type="submit">
              {current?.basics ? "Edit" : "Add"}
            </Button>
            <Button variant="light" onClick={handleClose}>
              Cancel
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

function CoachPersonalityFields({ team }) {
  return team.type === PRO ? (
    <Form.Row>
      <InputField
        id="personality"
        as="select"
        label="Personality:"
        defaultValue={team?.coach?.personality}
        required
        column
      >
        <option value=""></option>
        {COACH_LEVELS_TERRIBLE_GREAT.map((level) => (
          <option key={level} value={level}>
            {level}
          </option>
        ))}
      </InputField>
      <InputField
        id="greed"
        as="select"
        label="Greed Level:"
        defaultValue={team?.coach?.greed}
        column
        required
      >
        <option value=""></option>
        {COACH_LEVELS_HIGH_LOW.map((level) => (
          <option key={level} value={level}>
            {level}
          </option>
        ))}
      </InputField>
    </Form.Row>
  ) : (
    <>
      <p className="h5">Head Coach Personality</p>
      <p>
        These are the different aspects of the coach's personality. For
        Ambition, Integrity, and Temper, the level indicates the amount a coach
        has for the category. For Academics and Discipline, the level determines
        how important the category is to the coach. For example, a coach with
        high integrity and low academics will not bribe players but also doesn't
        care if students have good grades.
      </p>
      {COLLEGE_COACH_PERSONALITY.map((category) => (
        <InputField
          key={`college-${category.toLowerCase()}`}
          id={category.toLowerCase()}
          as="select"
          label={category}
          defaultValue={team?.coach && team?.coach[category.toLowerCase()]}
          required
        >
          <option value=""></option>
          {COACH_LEVELS_HIGH_LOW.map((level) => (
            <option key={level} value={level}>
              {level}
            </option>
          ))}
        </InputField>
      ))}
    </>
  );
}

function getPointLimitsByTier(tier) {
  switch (tier) {
    case "3":
      return {
        min: 5,
        max: 45,
        sum: 150,
      };
    case "2":
      return {
        min: 5,
        max: 65,
        sum: 240,
      };
    default:
      return {
        min: 10,
        max: 85,
        sum: 325,
      };
  }
}

function addCurrentSum(isPro, current) {
  const pointLabels = isPro ? PRO_ABILITY_POINTS : COLLEGE_ABILITY_POINTS;
  const points = pointLabels.map((label) => {
    const stringNum = current?.hasOwnProperty("coach")
      ? current.coach[label.id]
      : document.getElementById(label.id)?.value;
    return stringNum * 1;
  });

  return points.reduce(
    (previousValue, currentValue) => previousValue + currentValue
  );
}
