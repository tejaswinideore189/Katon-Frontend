import { Container, Typography } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <div>
      <Container>
        <Typography variant="h6" mt={18}>
          About us
        </Typography>
        <Typography mb={19}>
          KATON is a 360-degree knowledge hub recognized for its innovative
          <br />
          educational Technology framework that has been developed to provide
          <br />
          quality education to students and secure the future of the educational
          <br />
          sector regardless of boundaries. In the quest to transform education
          <br />
          globally, KATON promotes innovation and creativity. in the educational
          <br />
          sector making it more accessible, affordable, effificient, and
          <br />
          effective.
          <br />
          <br /> The KATON infrastructure delivers the ideal learning
          <br />
          experience using sustainable learning and tutoring methods thereby
          <br />
          positioned to serve as a world-class EdTech application. Stakeholders
          <br />
          can be assured of the best value for money as the KATON team works
          <br />
          tirelessly to continuously transform education through ICT
        </Typography>
      </Container>
    </div>
  );
};

export default About;
