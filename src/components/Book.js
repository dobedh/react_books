import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Book({ author, image, title, year }) {
  return (
    <div>
      <h4> {title}</h4>
      <h6> {author}</h6>
      <h6> {year} </h6>
      <img src={image} alt={title} title={title}></img>
    </div>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
};

export default Book;
