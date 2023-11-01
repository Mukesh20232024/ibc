import React from "react";
import PropTypes from "prop-types";
import RotatingSpans from "./RotatingSpans/RotatingSpans";
import Button from "./Button/Button";
import { useNavigate } from "react-router-dom";


function Banner(props) {


  const navigate = useNavigate();
  const navigateToContactUs = () => {
    navigate('/ContactUs')
  };

  return (
    <div className="style-banner text-left">
      <h1 className="text-4xl">
        We IBC &nbsp;
        <RotatingSpans></RotatingSpans>
      </h1>
      <p className="mt-5">
        <strong> IGNITE BUSINESS CATALYST(IBC)</strong>
        is a team with many years of experience in comprehensive support of
        companies in the area of selection and recruitment of talented
        personnel. We are expert in training employee to increase the technical
        skills, knowledge, productivity and efficiency to perform a task in a
        much better way.
      </p>
      <div className="text-left mt-5">
        <Button text="Contact Us" onClick={navigateToContactUs} />
      </div>
    </div>
  );
}

Banner.propTypes = {};

export default Banner;
