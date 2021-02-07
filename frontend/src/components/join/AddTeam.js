import React, { useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import { Highlighter, Typeahead } from "react-bootstrap-typeahead";
import {
  ABILITY_POINTS,
  COACH_GREED,
  COACH_PERSONALITY,
  COLLEGE,
  PRO,
} from "../../lib/constants";
import InputField from "../InputField";

export default function AddTeamModal({ open, onClose, type, options }) {
  const typeahead = useRef(null);
  const [pointLimits, setPointLimits] = React.useState({
    min: 10,
    max: 85,
    sum: 325,
  });
  const [currentSum, setCurrentSum] = React.useState(50);
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
      const team = { type: type, coach: {} };
      const formData = new FormData(form);
      for (const [name, value] of formData) {
        //handle team separately due to custom input component, otherwise use form name to fill out json
        if (name === "team") {
          const selected = typeahead.current.state.selected[0];
          team.basics =
            typeof selected === "string" ? { name: selected } : selected;
        } else team.coach[name] = value.toString();
      }

      handleClose(team);
    }
  };

  const addCurrentSum = () => {
    const sum = ABILITY_POINTS.map(
      (points) => document.getElementById(points.id).value * 1
    ).reduce((sum, cur) => sum + cur);

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
                help="Type the number of the matching picture from graphics/nonplayers/fac."
                min={1}
                htmlSize={4}
                required
                column
              />
              <InputField
                id="outfit"
                type="number"
                label="Outfit Number:"
                help="Type the number of the matching picture from graphics/nonplayers/clothes."
                min={1}
                htmlSize={4}
                required
                column
              />
            </Form.Row>
            <Form.Row>
              <InputField
                id="personality"
                as="select"
                label="Personality:"
                required
                column
              >
                <option value=""></option>
                {COACH_PERSONALITY.map((level) => (
                  <option key={level} value={level}>
                    {level}
                  </option>
                ))}
              </InputField>
              <InputField
                id="greed"
                as="select"
                label="Greed Level:"
                column
                required
              >
                <option value=""></option>
                {COACH_GREED.map((level) => (
                  <option key={level} value={level}>
                    {level}
                  </option>
                ))}
              </InputField>
            </Form.Row>
            <p className="h5">{`${playerType} Ability Points`}</p>
            <p>
              These are the skills that your {playerType.toLowerCase()} will
              have in evaluating players. The minimum that each category can
              have is {pointLimits.min} and the maximum is {pointLimits.max}.
              The maximum sum of the categories is {pointLimits.sum}.
            </p>
            {ABILITY_POINTS.map(({ label, id }) => (
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
            ))}

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
