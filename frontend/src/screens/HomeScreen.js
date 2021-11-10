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
      <h1 style={{ marginTop: "25px" }}>ALL Category</h1>
      <Row style={{ marginTop: "25px", marginBottom: "25px" }}>
        {categorylist?.category?.map((v, k) => (
          <Col key={v._id} sm={12} md={6} lg={3} xl={3}>
            <Card.Img
              src={v.image}
              variant="top"
              style={{
                height: "150px",
                borderRadius: "100%",
                paddingLeft: "25px",
                paddingRight: "25px",
              }}
            />

            <Card.Text
              style={{
                textAlign: "center",
                marginTop: "20px",
                fontSize: "20px",
                fontWeight: "800",
              }}
            >
              {v.name}
            </Card.Text>
          </Col>
        ))}
      </Row>

      <h1>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <Row>
            {products.map((product) => (
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
    </>
  );
};

export default HomeScreen;
