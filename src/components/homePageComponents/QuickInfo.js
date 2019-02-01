import React, { Component } from "react";
import { Section, Title, SectionButton } from "../../utils";
import styled from "styled-components";
import { Link } from "gatsby";
import { styles } from "../../utils";

export default class QuickInfo extends Component {
  render() {
    return (
      <Section>
        <Title title="our mission" message="let us tell you" />
        <QuickInfoWrapper>
          <p className="text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
            temporibus? Accusantium necessitatibus impedit, non unde libero
            officiis minus, tempore consectetur obcaecati error quam quaerat est
            aperiam possimus provident vero voluptatem iure molestiae?
            Laboriosam nesciunt, quos numquam, alias vero placeat ipsa corporis
            modi explicabo iure nobis praesentium mollitia ducimus omnis ab!
          </p>
          <Link to="/about" style={{ textDecoration: "none" }}>
            <SectionButton style={{ margin: "2rem auto" }}>about</SectionButton>
          </Link>
        </QuickInfoWrapper>
      </Section>
    );
  }
}

const QuickInfoWrapper = styled.div`
  width: 90%;
  margin: 2rem auto;
  .text {
    line-height: 2rem;
    color: ${styles.colors.mainGrey};
    word-spacing: 0.2rem;
  }
  @media (min-width: 768px) {
    width: 70%;
  }
  @media (min-width: 992px) {
    width: 60%;
  }
`;
