import React, { PropTypes } from "react";
import { Link, IndexLink } from "react-router";

const Header = () => {
  return (
    <div>
      {" "}
      <nav>
        <IndexLink to="/" activeClassName="active">
          Home
        </IndexLink>
        {" | "}
        <Link to="/add" activeClassName="active">
          Add
        </Link>
        {" | "}
        <Link to="/cart" activeClassName="active">
          Cart
        </Link>
        {" | "}
        <Link to="/book" activeClassName="active">
          Book
        </Link>
      </nav>
      <hr />
      <br />
    </div>
  );
};

export default Header;
