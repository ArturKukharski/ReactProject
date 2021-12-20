import React from 'react'
import PropTypes from 'prop-types'

const Qualitie = ({ color, name }) => {
  const classes = 'badge bg-' + color

  return <span className={classes}>{name}</span>
}

Qualitie.propTypes = {
  color: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}

export default Qualitie
