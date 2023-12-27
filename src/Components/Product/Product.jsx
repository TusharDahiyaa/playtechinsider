import React from "react";
import styled from "styled-components";

const Card = styled.div`
  border: none;
  box-shadow: 0 8px 6px -6px black;
  height: 100%;
  width: 100%;

  @media (max-width: 575.98px) {
    font-size: 1rem;
  }

  @media (min-width: 575.98px) and (max-width: 1200px) {
    font-size: 0.9rem;
  }
`;

const Image = styled.img`
  height: 30vh;
`;

const Button = styled.button`
  position: relative;
  bottom: 12px;
  left: 5%;
`;

const Product = ({
  name,
  description,
  imageUrl,
  old_price,
  new_price,
  addToCart,
}) => {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
      <Card className="card text-center">
        <Image src={imageUrl} alt={name} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
          <div className="list-inline">
            <div className="list-inline-item me-5">
              <small className="card-text">
                <strike>{old_price}</strike>
              </small>
              <br />
              <p className="card-text">{new_price}</p>
            </div>
            <Button
              className="btn btn-outline-primary list-inline-item"
              onClick={addToCart}
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Product;
