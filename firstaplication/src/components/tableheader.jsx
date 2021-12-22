import React from 'react'
import PropTypes from 'prop-types'

const TableHeader = ({ onSort, selectedSort, columns }) => {
  let caret = <i className="bi bi-caret-down-fill"></i>

  if (selectedSort.order === 'asc')
    caret = <i className="bi bi-caret-up-fill"></i>

  const handleSort = (item) => {
    if (selectedSort.path === item) {
      onSort(() => ({
        ...selectedSort,
        order: selectedSort.order === 'asc' ? 'desc' : 'asc'
      }))
    } else onSort({ path: item, order: 'asc' })
  }
  return (
    <thead>
      <tr>
        {Object.keys(columns).map((column) => (
          <th
            key={column}
            onClick={() =>
              columns[column].path && handleSort(columns[column].path)
            }
            {...{ role: columns[column].path && 'button' }}
            scope="col"
          >
            {columns[column].name}
            {selectedSort.path !== columns[column].path || caret}
          </th>
        ))}
      </tr>
    </thead>
  )
}

TableHeader.propTypes = {
  onSort: PropTypes.func.isRequired,
  selectedSort: PropTypes.object.isRequired,
  columns: PropTypes.object.isRequired
}

export default TableHeader
