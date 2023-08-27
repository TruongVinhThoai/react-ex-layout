import React, { Component } from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

export default class LayoutComponent extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}
