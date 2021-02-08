import React, { useRef } from "react";
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

export default function AddTeamModal({ open, onClose, type, options }) {
  const typeahead = useRef(null);
  const [pointLimits, setPointLimits] = React.useState({
    min: 10,
    max: 85,
    sum: 325,
  });
  const [currentSum, setCurrentSum] = React.useState(0);
  const [validated, setValidated] = React.useState(false);
  const fullTeamType = type === PRO ? "Professional" : "College";
  const playerType = type === PRO ? "General Manager" : "Head Coach";
  const typeaheadOptions =
    type === COLLEGE
      ? {
          labelKey: "name",
          onChange: (selected) => {
            if (selected.length === 0) return;

            switch (selected[0].tier) {
              case "3":
                setPointLimits({
                  min: 5,
                  max: 45,
                  sum: 150,
                });
                break;
              case "2":
                setPointLimits({
                  min: 5,
                  max: 65,
                  sum: 240,
                });
                break;
              default:
                setPointLimits({
                  min: 10,
                  max: 85,
                  sum: 325,
                });
            }
          },
          renderMenuItemChildren: (option, { text }) => (
            <>
              <Highlighter search={text}>{option.name}</Highlighter>
              <div>
                <small>
                  Tier: {option.tier}, Region: {option.region}
                </small>
              </div>
            </>
          ),
        }
      : {};

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();

    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      setValidated(true);
    } else {
      const team = { type: type, basics: {}, coach: {} };
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

  const addCurrentSum = () => {
    const sum = (type === PRO ? PRO_ABILITY_POINTS : COLLEGE_ABILITY_POINTS)
      .map((points) => document.getElementById(points.id).value * 1)
      .reduce((sum, cur) => sum + cur);

    setCurrentSum(sum);
  };

  const handleClose = (team) => {
    if (!team?.hasOwnProperty("basics")) team = null;
    setCurrentSum(50);
    setValidated(false);
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
                to={`/${type === "pro" ? "siba" : type}/downloads`}
                target="_blank"
              >
                Downloads
              </Link>
              .
            </p>

            <p className="h5">Team Basics</p>
            <Form.Row>
              <Col xs={12} lg={6}>
                <Form.Group>
                  <Form.Label>Team Selection</Form.Label>
                  <Typeahead
                    id="team"
                    ref={typeahead}
                    className={
                      validated &&
                      (typeahead.current.state.selected.length === 0
                        ? "is-invalid"
                        : "is-valid")
                    }
                    options={options}
                    {...typeaheadOptions}
                    inputProps={{ required: true, name: "team" }}
                    highlightOnlyResult
                  />
                  <Form.Control.Feedback type="invalid">
                    This field is required.
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>

              <InputField
                id="password"
                label="Team Password:"
                type="password"
                column
                required
              />
            </Form.Row>

            <p className="h5">{`${playerType} Basics`}</p>
            <Form.Row>
              <InputField id="first_name" label="First Name:" column required />
              <InputField id="last_name" label="Last Name:" column required />
            </Form.Row>

            <Form.Row>
              <InputField
                id="pic"
                type="number"
                label="Picture Number:"
                help={`Type the number of the matching picture from graphics/${
                  type === PRO ? "nonplayers" : "coaches"
                }/fac.`}
                min={1}
                max={171}
                error="Picture number must be between 1 and 171"
                required
                column
              />
              <InputField
                id="outfit"
                type="number"
                label="Outfit Number:"
                help={`Type the number of the matching picture from graphics/${
                  type === PRO ? "nonplayers" : "coaches"
                }/clothes.`}
                min={1}
                max={55}
                error="Outfit number must be between 1 and 55"
                required
                column
              />
            </Form.Row>

            <CoachPersonalityFields type={type} />

            <p className="h5">{`${playerType} Ability Points`}</p>
            <p>
              These are the skills that your {playerType.toLowerCase()} will
              have in evaluating players. The minimum that each category can
              have is {pointLimits.min} and the maximum is {pointLimits.max}.
              The maximum sum of the categories is {pointLimits.sum}.
            </p>
            {(type === PRO ? PRO_ABILITY_POINTS : COLLEGE_ABILITY_POINTS).map(
              ({ label, id }) => (
                <InputField
                  key={id}
                  id={id}
                  label={`${label}:`}
                  type="number"
                  min={pointLimits.min}
                  max={pointLimits.max}
                  onChange={addCurrentSum}
                  error={`Category amounts must be between ${pointLimits.min} and ${pointLimits.max}.`}
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
              Add
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

function CoachPersonalityFields({ type }) {
  return type === PRO ? (
    <Form.Row>
      <InputField
        id="personality"
        as="select"
        label="Personality:"
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
      <InputField id="greed" as="select" label="Greed Level:" column required>
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
          id={category.toLowerCase()}
          as="select"
          label={category}
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
