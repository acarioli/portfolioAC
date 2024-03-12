import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }} className="p-4">
            Hi Everyone, I am <span className="purple">Aldana Carioli </span>
            from <span className="purple"> Buenos Aires, Argentina.</span>
            <br />
            <br />
            I am currently employed as a marketing manager at Pragmatic Play.
            <br />
            <br />
            I have obtained degrees in Marketing and International Business, along with a diploma in Full Stack Web Development.
            <br />
            <br />
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
