import React from "react";
import AboutImg from "../../Assets/Images/about2.jpg";
import "./About.scss"
const About = () => {
  return (
    <div className="container-fluid about-container">
        <div className="row about-row">
            <div className="col-md-12 about" >
                <div className="col-md-6 about-img">
                    <img src={AboutImg} alt=""/>
                </div>
                <div className="col-md-6 about-text">
                    <div className="about-text title">
                        About Us
                    </div>
                    <div className="about-text text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe in corporis minima mollitia, voluptatum beatae ex dolorum animi recusandae perferendis at dolor, veniam architecto amet officiis debitis? Debitis sequi quam, fugit mollitia rem voluptatem qui. Possimus libero aliquid temporibus minima? Eligendi nam recusandae ab mollitia, quaerat debitis eius aut vel! Totam iste a ea libero maxime alias mollitia aliquid ad.
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default About;
