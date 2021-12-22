import React from 'react'
import PropTypes from 'prop-types'

const SearchStatus = ({ number }) => {
  let phrase = ''
  if (number === 1) phrase = ` ${number} человек тусанет с тобой сегодня`
  else if (number > 4) phrase = `${number} человек тусанут с тобой сегодня`
  else if (number > 1 || (number < 5 && number !== 0))
    phrase = `${number} человека тусанут с тобой сегодня`
  else phrase = 'Ни кто с тобой не тусанет'

  return <span className="badge badge-large bg-primary">{phrase}</span>
}

SearchStatus.propTypes = {
  number: PropTypes.number.isRequired
}

export default SearchStatus
