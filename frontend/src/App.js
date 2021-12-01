import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";
import UserListScreen from "./screens/UserListScreen";
import UserEditScreen from "./screens/UserEditScreen";
import ProductListScreen from "./screens/ProductListScreen";
import ProductEditScreen from "./screens/ProductEditScreen";
import OrderListScreen from "./screens/OrderListScreen";
import CategoryListScreen from "./screens/CategoryListScreen";
import CategoryEditScreen from "./screens/CategoryEditScreen";
import AllProduct from "./screens/AllProduct";
import Dashboard from "./screens/Dashboard";

const App = () => {
  return (
    <Router>
      <Header />
      <main className="">
        <Route path="/search/:keyword" component={AllProduct} exact />
        <Route path="/page/:pageNumber" component={AllProduct} exact />
        <Route
          path="/search/:keyword/page/:pageNumber"
          component={AllProduct}
          exact
        />
        <Route path="/" component={HomeScreen} exact />
        <Container>
          <Route path="/order/:id" component={OrderScreen} />
          <Route path="/shipping" component={ShippingScreen} />
          <Route path="/payment" component={PaymentScreen} />
          <Route path="/placeorder" component={PlaceOrderScreen} />
          <Route path="/login" component={LoginScreen} />
          <Route path="/register" component={RegisterScreen} />
          <Route path="/profile" component={ProfileScreen} />
          <Route path="/product/:id" component={ProductScreen} />
          <Route path="/cart/:id?" component={CartScreen} />
          <Route path="/dashboard" component={Dashboard} />
          {/* <Route path="/admin/userlist" component={UserListScreen} /> */}
          {/* <Route path="/admin/user/:id/edit" component={UserEditScreen} /> */}
          <Route path="/allProduct" component={AllProduct} />
          <Route
            path="/admin/productlist"
            component={ProductListScreen}
            exact
          />
          <Route
            path="/admin/productlist/:pageNumber"
            component={ProductListScreen}
            exact
          />
          <Route path="/admin/product/:id/edit" component={ProductEditScreen} />
          <Route
            path="/admin/category/:id/edit"
            component={CategoryEditScreen}
          />

          <Route path="/admin/orderlist" component={OrderListScreen} />

          <Route path="/admin/categorylist" component={CategoryListScreen} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
