import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

const Navbar = (props) => {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Bag{" "}
          <span className="badge badge-pill badge-secondary">
            ({props.totalCounters} Products)
          </span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
