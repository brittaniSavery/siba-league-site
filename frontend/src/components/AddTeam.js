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
} from "../lib/constants";
import InputField from "./InputField";

export default function AddTeamModal({ open, onClose, type, options }) {
  const typeahead = useRef(null);
  const [pointSum, setPointSum] = React.useState(325);
  const [currentSum, setCurrentSum] = React.useState(50);
  const [validated, setValidated] = React.useState(false);
  const fullTeamType = type === PRO ? "Professional" : "College";
  const playerType = type === PRO ? "General Manager" : "Head Coach";
  const typeaheadOptions =
    type === COLLEGE
      ? {
          labelKey: "name",
          renderMenuItemChildren: (option, { text }) => (
            <>
              <Highlighter search={text}>{option.name}</Highlighter>
              <div>
                <small>
                  Tier: {option.tier}
                  <br />
                  Region: {option.region}
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
      const formJson = { type: type };
      const formData = new FormData(form);
      for (const [name, value] of formData) {
        formJson[name] = value.toString();
      }

      console.log(formJson);

      handleClose(formJson);
    }
  };

  const addCurrentSum = () => {
    const sum = ABILITY_POINTS.map(
      (points) => document.getElementById(points.id).value * 1
    ).reduce((sum, cur) => sum + cur);

    setCurrentSum(sum);
  };

  const handleClose = (form) => {
    if (!form?.hasOwnProperty("team")) form = null;
    setCurrentSum(50);
    setValidated(false);
    onClose(form);
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
                  typeahead.current.state.selected.length === 0 &&
                  "is-invalid"
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
              have is 10 and the maximum is 85. The maximum sum of the
              categories is {pointSum}.
            </p>
            {ABILITY_POINTS.map(({ label, id }) => (
              <InputField
                key={id}
                id={id}
                label={`${label}:`}
                type="number"
                defaultValue={10}
                min={10}
                max={85}
                onChange={addCurrentSum}
                error="Category amounts must be between 10 and 85."
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
              isInvalid={currentSum > pointSum}
              error={`Total sum cannot be more than ${pointSum}`}
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
