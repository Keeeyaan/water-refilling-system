import React from "react";
import { Link } from "react-router-dom";
import Wrapper from "../wrapper/LandingPage";
import { Logo } from "../components/UI/index";
import Main from "/images/main.svg";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            <span>Water Refiling</span> System App
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi optio
            autem ea non id. Itaque eaque vero recusandae velit nihil corporis
            aspernatur. Quia molestias soluta et quibusdam aspernatur provident
            at?
          </p>
          <Link to="/register" className="btn btn-hero">
            Login/Register
          </Link>
        </div>
        <div>
          <img src={Main} className="img main-img" />
        </div>
      </div>
    </Wrapper>
  );
};

export default Landing;
