import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";
import { styles, Section } from "../../utils";

const GET_IMAGES = graphql`
  {
    getImages: allFile(filter: { relativeDirectory: { eq: "homeGallery" } }) {
      edges {
        node {
          id
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;

export default function Gallery() {
  return (
    <StaticQuery
      query={GET_IMAGES}
      render={data => {
        const images = data.getImages.edges;
        const menu = ["pizza", "lunch", "dinner"];
        return (
          <Section>
            <GalleryWrapper>
              {images.map(({ node }, index) => {
                return (
                  <div key={node.id} className={`item item-${index + 1}`}>
                    <Img fluid={node.childImageSharp.fluid} />
                    <p className="info">awesome {menu[index]}</p>
                  </div>
                );
              })}
            </GalleryWrapper>
          </Section>
        );
      }}
    />
  );
}

const GalleryWrapper = styled.div`
  display: grid;
  grid-template-rows: auto;
  grid-row-gap: 1rem;
  .item {
    position: relative;
  }
  .info {
    position: absolute;
    top: 0;
    left: 0;
    background: ${styles.colors.mainYellow};
    padding: 0.1rem 0.3rem;
    text-transform: capitalize;
  }
  @media (min-width: 576px) {
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 1rem;
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 992px) {
    .gatsby-image-wrapper {
      height: 100%;
    }
    grid-template-areas:
      "img1 img1 img2 img2"
      "img1 img1 img3 img3";

    .item-1 {
      grid-area: img1;
    }
    .item-2 {
      grid-area: img2;
    }
    .item-3 {
      grid-area: img3;
    }
  }
`;
