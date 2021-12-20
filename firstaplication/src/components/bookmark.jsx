import React from "react";

const BookMark = ({ _id, status, onToggleBookMark }) => {
  return (
    <>
      <button onClick={() => onToggleBookMark(_id)}>
        {status ? (
          <i className="bi bi-bookmark-fill"></i>
        ) : (
          <i className="bi bi-bookmark"></i>
        )}
      </button>
    </>
  );
};

export default BookMark;
