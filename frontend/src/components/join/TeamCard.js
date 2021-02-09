import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import {
  COLLEGE,
  COLLEGE_ABILITY_POINTS,
  COLLEGE_COACH_PERSONALITY,
  PRO,
  PRO_ABILITY_POINTS,
} from "../../lib/constants";

export default function TeamCard({ team, onEdit, onDelete }) {
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
          <Card.Text>
            <b>Password:</b> {team.basics.password}
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
          <Button variant="outline-danger" onClick={onDelete}>
            Delete
          </Button>
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
