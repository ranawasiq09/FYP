import React, { useEffect, useState, PureComponent } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Bar } from "react-chartjs-2";

import { Table, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { listOrders } from "../actions/orderActions";
import { VictoryBar, VictoryChart } from "victory";

const Dashboard = ({ history }) => {
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(0);
  const [totalOrder, setTotalOrder] = useState(0);
  const [totalPaidOrder, setTotalPaidOrder] = useState(0);
  const [totalUnPaidOrder, setTotalUnPaidOrder] = useState(0);
  const userId = useSelector((state) => state.userLogin.userInfo._id);
  const orderList = useSelector((state) => state.orderList);
  const { loading, error, orders } = orderList;
  const [renderOrder, setRenderOrder] = useState([]);
  const [data, setData] = useState([]);
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listOrders());
    } else {
      history.push("/login");
    }
  }, [dispatch, history, userInfo]);
  useEffect(() => {
    let or = orders?.filter((or) => or.orderItems[0].owner === userId);
    let totalA = or?.reduce((b, order) => b + parseInt(order.totalPrice), 0);
    setAmount(totalA);

    var totalpaid = or?.filter((order) => order.isPaid).length;
    var totalunpaid = or?.filter((order) => !order.isPaid).length;
    var totalLength = or?.length;
    setTotalPaidOrder(totalpaid);
    setTotalUnPaidOrder(totalunpaid);
    setTotalOrder(totalLength);

    setRenderOrder(or);

    const groups = or?.reduce((groups, game) => {
      const date = game.createdAt.split("T")[0];
      if (!groups[date]) {
        groups[date] = [];
      }
      groups[date].push(game);
      return groups;
    }, {});
    if (groups) {
      let last = Object.keys(groups).map((date) => {
        let sum = 0;
        groups[date].map((v, k) => {
          sum = v.totalPrice + sum;
        });
        return { name: date, uv: sum };
      });
      setData(last);
    }
  }, [orders, userId]);
  return (
    <>
      <h1 className="mt-2 mb-5">Dashboard</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <Row>
            <Col
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
              }}
              xs={3}
            >
              <h4 style={{ fontSize: "14px" }}>Total Amount Of Order</h4>
              <p style={{ fontWeight: "400" }} className="pt-1">
                ${isNaN(amount) ? 0 : amount}
              </p>
            </Col>
            <Col
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
              }}
              xs={3}
            >
              <h4 style={{ fontSize: "14px" }}>Total Order</h4>
              <p style={{ fontWeight: "400" }} className="pt-1">
                {isNaN(totalOrder) ? 0 : totalOrder}
              </p>
            </Col>

            <Col
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
              }}
              xs={3}
            >
              <h4 style={{ fontSize: "14px" }}>Total Paid Order</h4>
              <p style={{ fontWeight: "400" }} className="pt-1">
                {isNaN(totalPaidOrder) ? 0 : totalPaidOrder}
              </p>
            </Col>

            <Col
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
              }}
              xs={3}
            >
              <h4 style={{ fontSize: "14px" }}>Total UnPaid Order</h4>
              <p style={{ fontWeight: "400" }} className="pt-1">
                {isNaN(totalUnPaidOrder) ? 0 : totalUnPaidOrder}
              </p>
            </Col>
            <Col xs={12}></Col>
          </Row>
        </>
      )}
    </>
  );
};

export default Dashboard;
