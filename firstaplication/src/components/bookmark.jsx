import React from 'react'
import PropTypes from 'prop-types'

const BookMark = ({ _id, status, onToggleBookMark }) => {
  const classes = status ? 'bi bi-bookmark-fill' : 'bi bi-bookmark'
  return (
    <>
      <button onClick={() => onToggleBookMark(_id)}>
        <i className={classes}></i>
      </button>
    </>
  )
}

BookMark.propTypes = {
  _id: PropTypes.symbol.isRequired,
  status: PropTypes.bool.isRequired,
  onToggleBookMark: PropTypes.func.isRequired
}

export default BookMark
