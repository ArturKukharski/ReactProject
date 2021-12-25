import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { Link } from 'react-router-dom'

const TableBody = ({ data, columns }) => {
  const renderContent = (item, column) => {
    if (columns[column].component) {
      const component = columns[column].component

      if (typeof component === 'function') return component(item)
      else return component
    } else return _.get(item, columns[column].path)
  }
  return (
    <tbody>
      {data.map((item) => (
        <tr key={item._id}>
          {Object.keys(columns).map((column, id) => {
            if (id) return <td key={column}>{renderContent(item, column)}</td>
            return (
              <td key={column}>
                <Link to={`users/${item._id}`} className="nav-link">
                  {renderContent(item, column)}
                </Link>
              </td>
            )
          })}
        </tr>
      ))}
    </tbody>
  )
}

TableBody.propTypes = {
  data: PropTypes.array.isRequired,
  columns: PropTypes.object.isRequired
}

export default TableBody
