import React from "react";

import Navbar from "../Navigation/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.scss";
const Header = () => {
  return (
    <div className="container-fluid header-container">
    <Navbar />
    <div className="row header-row">
      <div className="col-md-12 header">
        <h2 className="header-title">Find Your Book to Reach Your Soul...</h2>
        <h4 className="header-subtitle">
          When you sell a man a book you don’t sell him just twelve ounces of
          paper and ink and glue - you sell him a whole new life. Love and
          friendship and humour and ships at sea by night - there’s all heaven
          and earth in a book, a real book I mean.
        </h4>
        <SearchForm/>
      </div>
    </div>
  </div>
    
  );
};

export default Header;
