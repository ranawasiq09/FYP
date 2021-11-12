import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Card } from "react-bootstrap";
import Product from "../components/Product";
import Message from "../components/Message";
import Loader from "../components/Loader";
import Paginate from "../components/Paginate";
import ProductCarousel from "../components/ProductCarousel";
import Meta from "../components/Meta";
import { listProducts } from "../actions/productActions";
import { listCategory } from "../actions/categoryActions";
import { Container } from "react-bootstrap";
import { CATEGORY_DELETE_SUCCESS } from "../constants/categoryConstant";

const HomeScreen = ({ match }) => {
  const keyword = match.params.keyword;

  const pageNumber = match.params.pageNumber || 1;

  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const categorylist = useSelector((state) => state.categoryList);
  const { loading, error, products, page, pages } = productList;

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber));
    dispatch(listCategory("", ""));
  }, [dispatch, keyword, pageNumber]);

  return (
    <>
      <Meta />
      {!keyword ? (
        <ProductCarousel />
      ) : (
        <Link to="/" className="btn btn-light">
          Go Back
        </Link>
      )}
      <Container>
        <h3 className="display-6" style={{ marginTop: "25px" }}>
          Explore Popular Categories
        </h3>
        <Row style={{ marginTop: "25px", marginBottom: "25px" }}>
          {categorylist?.category?.map((v, k) => (
            <Col key={v._id} sm={4} md={3} lg={2} xl={2}>
              <Link
                to={{
                  pathname: "/allProduct",
                  state: { message: "all" },
                }}
              >
                <Card.Img
                  src={v.image}
                  variant="top"
                  style={{
                    height: "150px",
                  }}
                />

                <Card.Text
                  style={{
                    textAlign: "center",
                    marginTop: "20px",
                    fontSize: "15px",
                    fontWeight: "700",
                  }}
                >
                  {v.name}
                </Card.Text>
              </Link>
            </Col>
          ))}
        </Row>
        <h3 className="display-6 mt-5 mb-3">Auctions</h3>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <>
            <Row>
              {products.slice(0, 4).map((product) => (
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                  <Product product={product} />
                </Col>
              ))}
            </Row>
            <Paginate
              pages={pages}
              page={page}
              keyword={keyword ? keyword : ""}
            />
          </>
        )}
        <h3 className="display-6 mt-5 mb-3">Daily Product</h3>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <>
            <Row>
              {products.slice(4, 8).map((product) => (
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                  <Product product={product} />
                </Col>
              ))}
            </Row>
            <Paginate
              pages={pages}
              page={page}
              keyword={keyword ? keyword : ""}
            />
          </>
        )}
        <h3 className="display-6 mt-5 mb-3">Latest Products</h3>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <>
            <Row>
              {products.slice(8, 10000).map((product) => (
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                  <Product product={product} />
                </Col>
              ))}
            </Row>
            <Paginate
              pages={pages}
              page={page}
              keyword={keyword ? keyword : ""}
            />
          </>
        )}
      </Container>
    </>
  );
};

export default HomeScreen;
