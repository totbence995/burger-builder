import React, { Component } from "react";

import Order from "../../components/Order/Order";
import axios from "../../axios-orders";

class Orders extends Component {
  state = {
    orders: [],
    loading: true
  };

  componentDidMount() {
    axios
      .get("/orders.json")
      .then(resp => {
        console.log({ resp });
        let fetchedOrders = [];
        for (let key in resp.data) {
          fetchedOrders = [...fetchedOrders, ...resp.data[key]];
        }
        this.setState({ orders: fetchedOrders, loading: false });
      })
      .catch(err => {
        this.setState({ loading: false });
      });
  }

  render() {
    const orders = this.state.orders.map((order, i) => (
      <Order key={i} ingredients={order.ingredients} price={order.price} />
    ));
    return <div>{orders}</div>;
  }
}

export default Orders;
