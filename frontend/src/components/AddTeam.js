import React from "react";
import Modal from "react-bootstrap/Modal";
import InputField from "./InputField";
import { Link } from "react-router-dom";
import { COACH_GREED, COACH_PERSONALITY } from "../lib/constants";

export default function AddTeamModal({ open, onClose, type }) {
  const fullType = type === "pro" ? "Professional" : "College";
  const [info, setInfo] = React.useState({
    team: "",
    name: "",
    pic: 1,
    outfit: 1,
    personality: "",
    greed: "",
    offensive: 0,
    defensive: 0,
    potential: 0,
    strategy: 0,
    development: 0,
  });
  const [pointSum, setPointSum] = React.useState(325);

  const handleOnChange = (event) => {
    setInfo({ ...info, [event.target.id]: event.target.value });
  };

  return (
    <>
      <Modal show={open} onHide={onClose}>
        <Modal.Header closeButton>
          <Modal.Title>{`Add ${fullType} Team`}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            This form includes all the details needed about your team and coach.
            When selecting your coach face and outfit, be sure to use the
            graphics found in{" "}
            <Link
              to={`/${type === "pro" ? "siba" : type}/downloads`}
              target="_blank"
            >
              Downloads
            </Link>
            .
          </p>

          <InputField
            id="name"
            label="Coach Full Name:"
            value={info.personality}
            onChange={(e) => handleOnChange(e)}
            required
          />

          <InputField
            id="pic"
            type="number"
            label="Coach Picture Number:"
            help="Type the number of the matching picture from graphics/nonplayers/fac."
            min={1}
            value={info.pic}
            onChange={(e) => handleOnChange(e)}
            required
          />
          <InputField
            id="outfit"
            type="number"
            label="Coach Outfit Number:"
            help="Type the number of the matching picture from graphics/nonplayers/clothes."
            min={1}
            value={info.outfit}
            defaultValue={1}
            onChange={(e) => handleOnChange(e)}
            required
          />
          <InputField
            id="personality"
            as="select"
            label="Coach Personality:"
            value={info.personality}
            onChange={(e) => handleOnChange(e)}
            required
          >
            <option value=""></option>
            {COACH_PERSONALITY.map((level) => (
              <option value={level}>{level}</option>
            ))}
          </InputField>
          <InputField
            id="greed"
            as="select"
            label="Coach Greed Level:"
            value={info.greed}
            onChange={(e) => handleOnChange(e)}
            required
          >
            <option value=""></option>
            {COACH_GREED.map((level) => (
              <option value={level}>{level}</option>
            ))}
          </InputField>
          <p class="h5">Coach Ability Points</p>
          <p>
            These are the skills that your{" "}
            {type === "pro" ? "General Manager" : "Head Coach"} will have in
            evaluating players. The minimum that each category can have is 10
            and the maximum is 85. The maximum sum of the categories is{" "}
            {pointSum}.
          </p>
        </Modal.Body>
      </Modal>
    </>
  );
}
