import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Lý Đức Anh </span>
            from <span className="purple"> Hà Nội, Việt Nam.</span>
            <br />
            I am currently employed as a software developer.
            <br />I am also senior student at <span> </span>
            <a
              target="_blank"
              className="purple"
              style={{ "text-decoration": "none" }}
              href="https://portal.ptit.edu.vn/"
            >
              PTIT.
            </a>
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "First, solve the problem. Then, write the code."{" "}
          </p>
          <footer className="blockquote-footer">John Johnson</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
