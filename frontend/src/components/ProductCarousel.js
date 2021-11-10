import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Carousel, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./Loader";
import Message from "./Message";
import { listTopProducts } from "../actions/productActions";

const ProductCarousel = () => {
  const dispatch = useDispatch();

  const productTopRated = useSelector((state) => state.productTopRated);
  const { loading, error, products } = productTopRated;
  const color = ["#FAD7D3", "#213653", "#A2A0C7"];
  const text = ["black", "white", "black"];

  useEffect(() => {
    dispatch(listTopProducts());
  }, [dispatch]);

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant="danger">{error}</Message>
  ) : (
    <Carousel pause="hover" className="bg-dark ">
      {products.map((product, i) => (
        <Carousel.Item key={product._id}>
          <Link to={`/product/${product._id}`}>
            <div
              className="row  "
              style={{ height: "65vh", background: color[i] }}
            >
              <div className="col-lg-4 d-none d-md-block float-left">
                <h1 className="p-5 mt-0 display-5" style={{ color: text[i] }}>
                  Day Making <br /> Deals
                </h1>
                <h4 className="pl-5 " style={{ color: text[i] }}>
                  From top tech to the latest fashion must have, find it here
                </h4>
                <button
                  className="ml-5 mt-3 btn btn-outline-dark float-right"
                  style={{
                    color: i === 1 ? "white" : "",
                    backgroundColor: i === 1 ? "#343A40" : "",
                  }}
                >
                  Shop Now
                </button>
              </div>
              <Image
                style={{ height: "100%", width: "100%" }}
                className="d-block col-lg-8 col-12"
                src={product.image}
                alt={product.name}
              />
            </div>
          </Link>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ProductCarousel;
{
  /* 
<Carousel.Caption className="carousel-caption">
  <h2>
    {product.name} (${product.price})
  </h2>
</Carousel.Caption> */
}
