import React from "react";
import styled from "styled-components";
import { StaticQuery, graphql, Link } from "gatsby";

import { Section, Title, SectionButton } from "../../utils";
import Product from "./Product";

const getMenu = graphql`
  {
    menuItems: allContentfulMenu {
      edges {
        node {
          id
          name
          price
          ingredients
          img {
            fixed(width: 150, height: 150) {
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
    }
  }
`;

export default function Menu() {
  return (
    <Section>
      <Title title="Menu" message="Popular selections from our kitchen" />
      <ProductList>
        <StaticQuery
          query={getMenu}
          render={data => {
            const items = data.menuItems.edges;
            return items.map(({ node }) => {
              return <Product key={node.id} menu={node} />;
            });
          }}
        />
      </ProductList>
    </Section>
  );
}

const ProductList = styled.div`
  margin: 3rem 0;
  display: grid;
  grid-template-columns: 100%;
  grid-row-gap: 3rem;
  @media (min-width: 576px) {
    grid-template-columns: 95%;
  }
  @media (min-width: 776px) {
    grid-template-columns: 80%;
    justify-content: center;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
  }
`;
