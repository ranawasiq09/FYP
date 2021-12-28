import React from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import Rating from "./Rating";

const Product = ({ product }) => {
  return (
    <>
      <Card>
        <Card.Img
          variant="top"
          src={product.image}
          style={{ height: "150px" }}
          className="border-bottom"
        />
        <Card.Body>
          <Card.Title
            style={{
              textTransform: "capitalize",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            {product.name}
            <p style={{ fontWeight: "800" }}>{product.price}Rs</p>
          </Card.Title>
          <Card.Text>
            <div style={{ height: "9vh", marginTop: "-20px" }}>
              <p>Description:{product.description.substring(0, 20)} ...</p>
            </div>
            <Rating
              value={product.rating}
              text={`${product.numReviews} reviews`}
            />
          </Card.Text>
          <Link
            to={`/product/${product._id}`}
            style={{ textDecoration: "none" }}
          >
            <div
              className="btn btn-block  btn-outline-dark mt-4"
              style={{ padding: "8.5px", border: "2px solid white", color: "#fff" }}
            >
              View Details
            </div>
          </Link>
        </Card.Body>
      </Card>
      {/* <Card className="my-3 p-3 rounded">
        <Link to={`/product/${product._id}`}>
          <Card.Img
            src={product.image}
            variant="top"
            style={{ height: "180px" }}
          />
        </Link>

        <Card.Body>
          <Link to={`/product/${product._id}`}>
            <Card.Title as="div">
              <strong>{product.name}</strong>
            </Card.Title>
          </Link>

          <Card.Text as="div">
            <Rating
              value={product.rating}
              text={`${product.numReviews} reviews`}
            />
          </Card.Text>

          <Card.Text as="h3">${product.price}</Card.Text>
        </Card.Body>
      </Card> */}
    </>
  );
};

export default Product;
