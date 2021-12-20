import React, { useState } from 'react'
import Users from './components/users'
import SearchStatus from './components/searchStatus'
import 'bootstrap/dist/css/bootstrap.css'
import api from './api'

function App() {
  const [users, setUsers] = useState(api.users.fetchAll())

  const handleDelete = (userId) => {
    setUsers(users.filter((user) => user._id !== userId))
  }

  const handleToggleBookMark = (userId) => {
    setUsers(
      users.map((user) => {
        if (user._id === userId) user.bookmark = !user.bookmark
        return user
      })
    )
  }

  return (
    <>
      <SearchStatus number={users.length} />
      <Users
        users={users}
        onDelete={handleDelete}
        onToggleBookMark={handleToggleBookMark}
      />
    </>
  )
}

export default App
