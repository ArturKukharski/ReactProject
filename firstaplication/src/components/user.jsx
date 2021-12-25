import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import QualitiesList from './qualitiesList'
import api from '../api'

const User = () => {
  const { userId } = useParams()
  const history = useHistory()
  const [user, setUser] = useState()

  useEffect(() => {
    api.users.getById(userId).then((data) => setUser(data))
  }, [])

  const handleAllUsers = () => {
    history.replace('/users')
  }

  if (user) {
    return (
      <div className="container-fluid">
        <h1>{user.name}</h1>
        <h3>Профессия: {user.profession.name}</h3>
        <QualitiesList qualities={user.qualities} />
        <h3>Рейтинг: {user.rate}</h3>
        <h3>Количество встреч: {user.completedMeetings}</h3>
        <button
          className="btn btn-dark btn-lg"
          onClick={() => handleAllUsers()}
        >
          Все пользователи
        </button>
      </div>
    )
  } else return <strong>Loading...</strong>
}

export default User
