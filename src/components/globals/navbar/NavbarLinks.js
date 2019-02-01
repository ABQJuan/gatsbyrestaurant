import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { styles } from "../../../utils";

export default class NavbarLinks extends Component {
  state = {
    links: [
      {
        id: 0,
        path: "/",
        name: "home"
      },
      {
        id: 1,
        path: "/about/",
        name: "about"
      },
      {
        id: 2,
        path: "/menu/",
        name: "menu"
      },
      {
        id: 3,
        path: "/contact/",
        name: "contact"
      }
    ]
  };
  render() {
    //console.log(this.props.navbarOpen);
    return (
      <LinkWrapper open={this.props.navbarOpen}>
        {this.state.links.map(link => {
          return (
            <li key={link.id}>
              <Link className="nav-link" to={link.path}>
                {link.name}
              </Link>
            </li>
          );
        })}
      </LinkWrapper>
    );
  }
}

const LinkWrapper = styled.ul`
  li {
    list-style-type: none;
  }
  .nav-link {
    display: block;
    text-decoration: none;
    padding: 0.5rem 1rem;
    color: ${styles.colors.mainGrey};
    font-weight: 700;
    text-transform: capitalize;
    cursor: pointer;
    ${styles.transDefault};
    &:hover {
      background: ${styles.colors.mainGrey};
      color: ${styles.colors.mainYellow};
      padding: 0.5rem 1rem 0.5rem 1.3rem;
    }
  }
  height: ${props => (props.open ? "152px" : "0px")};
  overflow: hidden;
  ${styles.transObject({ time: "1s" })};
  @media (min-width: 768px) {
    height: auto;
    display: flex;
    margin: 0 auto;
    .nav-link:hover {
      background: ${styles.colors.mainWhite};
      padding: 0.5rem 1rem;
    }
  }
`;