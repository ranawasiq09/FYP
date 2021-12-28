import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import FormContainer from "../components/FormContainer";
import { register } from "../actions/userActions";
import axios from "axios";
import { useHistory } from "react-router";

const Rentt = ({ location, history }) => {
  const historyss = useHistory();
  const [name, setName] = useState("");
  const [cnic, setCnic] = useState("");
  const [date, setDate] = useState("");
  const [timee, setTime] = useState("");
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    window.scrollTo(0, 0)
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const submitHandler = async (e) => {
    console.log("Booked with us");
    e.preventDefault();
    if (name === "") {
      setMessage("Please Enter Name");
    } else if (cnic === "") {
      setMessage("Please Enter CNIC");
    } else if (date === "") {
      setMessage("Please Enter Date");
    } else if (timee === "") {
        setMessage("Please Enter Time");
    } else {
      try {
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };

        await axios
          .post("/api/RentForm", { name, cnic, date , timee }, config)
          .then((data) => {
            setMessage("Booking Succesfully");
          });
        historyss.push("/login").catch((error) => {
          setMessage(
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message
          );
        });
      } catch (error) {}
    }
  };

  return (
    <FormContainer id="test">
      <h1>Booking Form</h1>
      {message && <Message variant="danger">{message}</Message>}
      {error && <Message variant="danger">{error}</Message>}
      {loading && <Loader />}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="name"
            placeholder="Enter name"
            value={name}
            onChange={(e) => {
              let value = e.target.value;
              value = value.replace(/[^A-Za-z]/gi, "");

              setName(value);
            }}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="cnic">
          <Form.Label>CNIC</Form.Label>
          <Form.Control
            type="cnic"
            placeholder="Enter CNIC"
            value={cnic}
            onChange={(e) => setCnic(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="date">
          <Form.Label>Date</Form.Label>
          <Form.Control
            type="date"
            placeholder="Enter Date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="timee">
          <Form.Label>Set Time</Form.Label>
          <Form.Control
            type="timee"
            placeholder="confirm time"
            value={timee}
            onChange={(e) => setTime(e.target.value)}
          ></Form.Control>
        </Form.Group>


        
        <Button type="submit" variant="primary">
          Booked
        </Button>
      </Form>
      

      </FormContainer>
  );
};

export default Rentt;
