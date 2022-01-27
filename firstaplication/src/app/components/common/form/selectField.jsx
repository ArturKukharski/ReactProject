import React from 'react'
import PropTypes from 'prop-types'

const SelectField = ({
  label,
  value,
  name,
  onChange,
  defaultOption,
  options,
  error
}) => {
  const getInputClasses = () => {
    return 'form-select' + (error ? ' is-invalid' : '')
  }
  const optionsArray =
    !Array.isArray(options) && typeof options === 'object'
      ? Object.keys(options).map(optionName => ({
          name: options[optionName].name,
          value: options[optionName]._id
        }))
      : options
  return (
    <div className='mb-4'>
      <label htmlFor={name} className='form-label'>
        {label}
      </label>
      <select
        className={getInputClasses()}
        id={name}
        name={name}
        value={value}
        onChange={onChange}>
        <option selected={options === ''} disabled value=''>
          {defaultOption}
        </option>
        {optionsArray &&
          optionsArray.map(option => (
            <option key={option.value} value={option.value}>
              {option.name}
            </option>
          ))}
      </select>
      <div className='invalid-feedback'>{error}</div>
    </div>
  )
}

SelectField.defaultProps = {
  defaultOption: 'Choose...'
}
SelectField.propTypes = {
  defaultOption: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  options: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  onChange: PropTypes.func,
  error: PropTypes.string
}

export default SelectField
