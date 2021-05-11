import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Book({ author, image, title, year, pages }) {
  return (
    <Link
      to={{
        pathname: `/book/${pages}`,
        state: { author, image, title, year, pages },
      }}
    >
      <div>
        <h4> {title}</h4>
        <h6> {author}</h6>
        <h6> {year} </h6>
        <img src={image} alt={title} title={title}></img>
      </div>
    </Link>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  pages: PropTypes.number.isRequired,
};

export default Book;
