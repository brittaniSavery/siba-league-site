import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import {
  COLLEGE,
  COLLEGE_ABILITY_POINTS,
  COLLEGE_COACH_PERSONALITY,
  PRO,
  PRO_ABILITY_POINTS,
} from "../../lib/constants";

export default function TeamCard({ team, onEdit, onDelete }) {
  const [openDeleteConfirm, setOpenDeleteConfirm] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);

  const confirmDelete = (shouldDelete) => {
    setOpenDeleteConfirm(false);
    if (shouldDelete) onDelete(team.id);
  };

  return (
    <Col xs md={6} lg={4}>
      <Card>
        <Card.Body>
          <Card.Title>{team.basics.name}</Card.Title>
          {team.basics.tier && (
            <Card.Subtitle className="mb-2 text-muted">
              Tier {team.basics.tier}, Region: {team.basics.region}
            </Card.Subtitle>
          )}
          <Card.Text className="d-flex align-items-center">
            <b>Password:</b>&nbsp;{showPassword && team.basics.password}
            <Button
              variant="link"
              className="p-0 ml-2 border-0"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </Button>
          </Card.Text>

          <img
            className="coach-pic-face"
            src={`/files/${team.type}/Website/images/${
              team.type === PRO ? "nonplayers" : "coaches"
            }/fac/${team.coach.pic}.png`}
            alt=""
          />
          <img
            className="coach-pic-outfit"
            src={`/files/${team.type}/Website/images/${
              team.type === PRO ? "nonplayers" : "coaches"
            }/clothes/${team.coach.outfit}.png`}
            alt=""
          />
          <Card.Text>
            {`${team.type === PRO ? "General Manager" : "Head Coach"}`}
            <br />
            {`${team.coach.first_name} ${team.coach.last_name}`}
          </Card.Text>
          {team.type === PRO && (
            <>
              <p className="mb-0">
                <b>Personality:</b> {team.coach.personality}
              </p>
              <p>
                <b>Greed:</b> {team.coach.greed}
              </p>
              <SubheadingList
                title="Ability Points"
                list={PRO_ABILITY_POINTS}
                getLabel={(value) => value.label}
                getValue={(value) => team.coach[value.id]}
              />
            </>
          )}
          {team.type === COLLEGE && (
            <SubheadingList
              title="Personality"
              list={COLLEGE_COACH_PERSONALITY}
              getLabel={(value) => value}
              getValue={(value) => team.coach[value.toLowerCase()]}
            />
          )}
          {team.type === COLLEGE && (
            <SubheadingList
              title="Ability Points"
              list={COLLEGE_ABILITY_POINTS}
              getLabel={(value) => value.label}
              getValue={(value) => team.coach[value.id]}
            />
          )}
        </Card.Body>
        <Card.Footer>
          <Button variant="outline-primary" onClick={onEdit}>
            Edit
          </Button>{" "}
          <Button
            variant="outline-danger"
            onClick={() => setOpenDeleteConfirm(true)}
          >
            Remove
          </Button>
          <DeleteConfirmation
            open={openDeleteConfirm}
            onClose={confirmDelete}
            team={team}
          />
        </Card.Footer>
      </Card>
    </Col>
  );
}

function SubheadingList({ title, list, getLabel, getValue }) {
  return (
    <>
      <p className="h5 text-primary">{title}</p>
      {list.map((category, index) => (
        <p
          key={`${title}-${index}`}
          className={index < list.length - 1 ? "mb-0" : ""}
        >
          <b>{getLabel(category)}:</b> {getValue(category)}
        </p>
      ))}
    </>
  );
}

function DeleteConfirmation({ open, onClose, team }) {
  return (
    <Modal show={open} onHide={onClose} size="lg" centered>
      <Modal.Header>
        <Modal.Title>{`Remove ${team.basics.name} from your teams?`}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        By removing the {team.basics.name} from your selected teams, the team
        will no longer appear in the "Pick Your Teams" box under the{" "}
        <b>{team.type.toUpperCase()}</b> tab. All the information for the team
        will be removed as well, including the team password and{" "}
        {team.type === PRO ? "General Manager" : "Head Coach"}{" "}
        {team.coach.first_name} {team.coach.last_name}'s looks, personality, and
        skills. This action cannot be undone and you will have to re-add the
        team once it is removed. Do you still want to remove the{" "}
        {team.basics.name}?
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={() => onClose(true)}>
          Remove
        </Button>
        <Button variant="light" onClick={() => onClose(false)}>
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
