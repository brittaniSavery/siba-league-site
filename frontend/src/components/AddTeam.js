import React from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import InputField from "./InputField";
import { Link } from "react-router-dom";
import { COACH_GREED, COACH_PERSONALITY } from "../lib/constants";

export default function AddTeamModal({ open, onClose, type }) {
  const fullTeamType = type === "pro" ? "Professional" : "College";
  const playerType = type === "pro" ? "General Manager" : "Head Coach";
  const [info, setInfo] = React.useState({
    team: "",
    first_name: "",
    last_name: "",
    pic: 1,
    outfit: 1,
    personality: "",
    greed: "",
    offensive: 1,
    defensive: 1,
    potential: 1,
    strategy: 1,
    development: 1,
  });
  const [pointSum, setPointSum] = React.useState(325);
  const [test, setTest] = React.useState("");

  const handleOnChange = (event) => {
    console.log(event.target.value);
    setInfo({ ...info, [event.target.id]: event.target.value });
  };

  return (
    <>
      <Modal show={open} onHide={onClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{`Add ${fullTeamType} Team`}</Modal.Title>
        </Modal.Header>
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

          <Form>
            <Form.Row>
              <InputField
                key="first_name"
                id="first_name"
                label={`${playerType} First Name:`}
                value={test}
                onChange={(e) => setTest(e.target.value)}
                column
                required
              />
              <InputField
                id="last_name"
                label={`${playerType} Last Name:`}
                value={info.last_name}
                onChange={(e) => handleOnChange(e)}
                column
                required
              />
            </Form.Row>

            <InputField
              id="pic"
              type="number"
              label={`${playerType} Picture Number:"`}
              help="Type the number of the matching picture from graphics/nonplayers/fac."
              min={1}
              value={info.pic}
              onChange={(e) => handleOnChange(e)}
              htmlSize={4}
              required
            />
            <InputField
              id="outfit"
              type="number"
              label={`${playerType} Outfit Number:"`}
              help="Type the number of the matching picture from graphics/nonplayers/clothes."
              min={1}
              value={info.outfit}
              onChange={(e) => handleOnChange(e)}
              htmlSize={4}
              required
            />
            <InputField
              id="personality"
              as="select"
              label={`${playerType} Personality:"`}
              value={info.personality}
              onChange={(e) => handleOnChange(e)}
              required
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
              label={`${playerType} Greed Level:"`}
              value={info.greed}
              onChange={(e) => handleOnChange(e)}
              required
            >
              <option value=""></option>
              {COACH_GREED.map((level) => (
                <option key={level} value={level}>
                  {level}
                </option>
              ))}
            </InputField>
            <p className="h5">{`${playerType} Ability Points`}</p>
            <p>
              These are the skills that your {playerType.toLowerCase()} will
              have in evaluating players. The minimum that each category can
              have is 10 and the maximum is 85. The maximum sum of the
              categories is {pointSum}.
            </p>
            <InputField
              id="offensive"
              label="Evaluating Offensive Ability:"
              type="number"
              value={info.offensive}
              onChange={(e) => handleOnChange(e)}
              min={1}
              max={85}
              horizontal
              short
              required
            />
            <InputField
              id="defensive"
              label="Evaluating Defensive Ability:"
              type="number"
              value={info.defensive}
              onChange={(e) => handleOnChange(e)}
              min={1}
              max={85}
              horizontal
              short
              required
            />

            <InputField
              id="potential"
              label="Evaluating Potential:"
              type="number"
              value={info.potential}
              onChange={(e) => handleOnChange(e)}
              min={1}
              max={85}
              horizontal
              short
              required
            />
            <InputField
              id="strategy"
              label="Game Strategy:"
              type="number"
              value={info.strategy}
              onChange={(e) => handleOnChange(e)}
              min={1}
              max={85}
              horizontal
              short
              required
            />
            <InputField
              id="development"
              label="Player Development:"
              type="number"
              value={info.development}
              onChange={(e) => handleOnChange(e)}
              min={1}
              max={85}
              horizontal
              short
              required
            />
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
