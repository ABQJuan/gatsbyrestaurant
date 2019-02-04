import React from "react";
import styled from "styled-components";
import { styles } from "../../utils";
import Img from "gatsby-image";

export default function Product({ menu }) {
  const { name, price, ingredients } = menu;
  const { fixed } = menu.img;

  return (
    <ProductWrapper>
      <Img fixed={fixed} className="img" />
      <div className="text">
        <div className="product-content">
          <h3 className="name">{name}</h3>
          <h3 className="price">{price}</h3>
        </div>

        <p className="info">{ingredients}</p>
      </div>
    </ProductWrapper>
  );
}

const ProductWrapper = styled.div`
  background: #f3f3f3;
  @media (min-width: 576px) {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-column-gap: 1rem;
  }
  @media (min-width: 576px) {
  }
  @media (min-width: 576px) {
  }
  .img {
    border-radius: 0.5rem;
  }
  .product-content {
    display: flex;
    justify-content: space-between;
    margin: 0.5rem 0.5rem 0 0;
    font-size: 1.3rem;
    text-transform: uppercase;
  }
  .info {
    margin: 0.3rem 0.3rem;
    ${styles.textSlanted};
    word-spacing: 0.2rem;
    font-size: 1.5rem;
  }
  .name {
    color: ${styles.colors.mainYellow};
  }
  .price {
    color: ${styles.colors.mainYellow};
  }
`;
