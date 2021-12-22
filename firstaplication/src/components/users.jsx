import React, { useState, useEffect } from 'react'
import Pagination from './pagination'
import SearchStatus from './searchStatus'
import api from '../api'
import { paginate } from '../utils/paginate'
import GroupList from './groupList'
import _ from 'lodash'
import UserTable from './usersTable'

const Users = () => {
  const pageSize = 4
  const [currentPage, setCurrentPage] = useState(1)
  const [professions, setProfessions] = useState()
  const [selectedProf, setSelectedProf] = useState()
  const [sortBy, setSortBy] = useState({ path: 'name', order: 'asc' })

  const [users, setUsers] = useState()

  useEffect(() => {
    api.users.fetchAll().then((data) => setUsers(data))
  }, [])

  const handleDelete = (userId) => {
    setUsers(users.filter((user) => user._id !== userId))
  }

  const handleToggleBookMark = (userId) => {
    setUsers(
      users.filter((user) => {
        if (user._id === userId) user.bookmark = !user.bookmark
        return user
      })
    )
  }

  useEffect(() => {
    api.professions.fetchAll().then((data) => setProfessions(data))
  }, [])

  useEffect(() => {
    setCurrentPage(1)
  }, [selectedProf])

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex)
  }

  const handleProfessionSelect = (item) => {
    setSelectedProf(item)
  }

  const handleSort = (item) => {
    setSortBy(item)
  }
  if (users) {
    const filterUsers = selectedProf
      ? users.filter((user) => _.isEqual(user.profession, selectedProf))
      : users

    const count = filterUsers.length
    const sortedUsers = _.orderBy(filterUsers, [sortBy.path], [sortBy.order])
    const usersCrop = paginate(sortedUsers, currentPage, pageSize)
    const clearFilter = () => {
      setSelectedProf()
    }

    return (
      <div className="d-flex">
        {professions && (
          <div className="d-flex flex-column flex-shrink-0 p-3">
            <GroupList
              items={professions}
              onItemSelect={handleProfessionSelect}
              selectedItem={selectedProf}
            />
            <button className="btn btn-secondary mt-2" onClick={clearFilter}>
              Сбросить фильтрации
            </button>
          </div>
        )}
        <div className="d-f flex-column">
          <SearchStatus number={count} />
          {count > 0 && (
            <UserTable
              users={usersCrop}
              onSort={handleSort}
              selectedSort={sortBy}
              onDelete={handleDelete}
              onToggleBookMark={handleToggleBookMark}
            />
          )}
          <div className="d-flex justify-content-center">
            <Pagination
              itemsCount={count}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </div>
    )
  } else return <strong>Loading...</strong>
}

export default Users
