import React from "react";

import logo from "../assets/logo.svg";

const Hero = () => (
  <div className="text-center hero my-5">
    <img className="mb-3 app-logo" src={logo} alt="Enquero logo" width="120" />
    <h1 className="mb-4">Welcome to online Exam page </h1>

    <p className="lead">
      Your college exam start on July 15th
       <a href="https://enquero.com">Enquero</a>
    </p>
  </div>
);

export default Hero;
