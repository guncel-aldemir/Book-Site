import React from "react";
import LoaderImg from "../../Assets/Images/refresh.png"
import "./Loader.scss";
const Loader = () => {
  return (
    <div className="loader">
        <img src={LoaderImg} alt=""/>
    </div>
  );
};

export default Loader;
