import React from 'react'
import { useParams } from 'react-router-dom'
import UserEdit from '../components/page/userEdit'
import UserPage from '../components/page/userPage'
import UsersListPage from '../components/page/usersListPage'
const Users = () => {
  const params = useParams()
  const { userId, userEdit } = params
  return (
    <>
      {userEdit ? (
        <UserEdit userId={userId} />
      ) : userId ? (
        <UserPage userId={userId} />
      ) : (
        <UsersListPage />
      )}
    </>
  )
}

export default Users
