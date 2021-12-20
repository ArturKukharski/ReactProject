import React from "react";

const BookMark = ({ _id, status, onToggleBookMark }) => {
  const classes = status ? "bi bi-bookmark-fill" : "bi bi-bookmark";
  return (
    <>
      <button onClick={() => onToggleBookMark(_id)}>
        <i className={classes}></i>
      </button>
    </>
  );
};

export default BookMark;
