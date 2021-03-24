import React from "react";
import PropTypes from "prop-types";
import "./profile.css";
const profile = (props) => {
  const style = {
    fontFamily: "Indie Flower, cursive",
    fontSize: 20,
    fontWeight: 600,
  };

  return (
    <div>
      {props.handleName(props.fullName)}
      <h2>{props.fullName}</h2>
      <h2>{props.profession}</h2>
      <h5 style={style}>{props.bio}</h5>
      {props.children}
    </div>
  );
};

profile.defaultProps = {
  fullName: "Not defined",
  profession: "Not defined",
  bio: "Not defined",
};

profile.propTypes = {
  fullName: PropTypes.string,
  profession: PropTypes.string,
  bio: PropTypes.string,
};

export default profile;
