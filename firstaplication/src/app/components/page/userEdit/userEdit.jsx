import React, { useEffect, useState } from 'react'
import { validator } from '../../../utils/validator'
import PropTypes from 'prop-types'
import api from '../../../api'
import { useHistory } from 'react-router-dom'
import TextField from '../../common/form/textField'
import SelectField from '../../common/form/selectField'
import RadioField from '../../common/form/radioField'
import MultiSelectField from '../../common/form/multiSelectField'

const UserEdit = ({ userId }) => {
  const history = useHistory()
  const [user, setUser] = useState()
  const [errors, setErrors] = useState({})
  const [qualities, setQualities] = useState({})
  const [professions, setProfession] = useState()
  useEffect(() => {
    api.users.getById(userId).then(data => setUser(data))
    api.professions.fetchAll().then(data => setProfession(data))
    api.qualities.fetchAll().then(data => setQualities(data))
  }, [])

  const handleClick = () => {
    api.users.update(userId, user)
    history.goBack()
  }

  const getProfessionById = id => {
    for (const prof in professions) {
      const profData = professions[prof]
      if (profData._id === id) return profData
    }
  }

  const getQualities = elements => {
    const qualitiesArray = []
    for (const elem of elements) {
      for (const quality in qualities) {
        if (elem.value === qualities[quality]._id)
          qualitiesArray.push(qualities[quality])
      }
    }
    return qualitiesArray
  }

  const convertQualitiesForSelect = elements => {
    const qualitiesForSelect = []
    for (const elem of elements)
      qualitiesForSelect.push({ value: elem._id, label: elem.name })

    return qualitiesForSelect
  }

  const handleChange = target => {
    if (target.name === 'profession')
      target.value = getProfessionById(target.value)
    if (target.name === 'qualities') target.value = getQualities(target.value)
    setUser(prevState => ({
      ...prevState,
      [target.name]: target.value
    }))
  }

  const validatorConfig = {
    email: {
      isRequired: {
        message: 'Электронная почта обязательна для заполнения'
      },
      isEmail: {
        message: 'Email введен некорректно'
      }
    },
    name: {
      isRequired: {
        message: 'Введите ваше имя'
      }
    }
  }

  useEffect(() => validate(), [user])

  const validate = () => {
    const errors = validator(user, validatorConfig)
    console.log('111')
    setErrors(errors)
    return Object.keys(errors).length === 0
  }

  const isValid = Object.keys(errors).length === 0

  if (user && professions && qualities) {
    return (
      <div className='container mt-5'>
        <div className='row'>
          <div className='col-md-6 offset-md-3 shadow p-4'>
            <TextField
              label='Имя'
              name='name'
              onChange={handleChange}
              value={user.name}
              error={errors.name}
            />
            <TextField
              label='Электронная почта'
              type='email'
              name='email'
              onChange={handleChange}
              value={user.email}
              error={errors.email}
            />
            <SelectField
              label='Выбери свою профессию'
              options={professions}
              name='profession'
              onChange={handleChange}
              value={user.profession._id}
            />
            <RadioField
              options={[
                { name: 'Male', value: 'male' },
                { name: 'Female', value: 'female' },
                { name: 'Other', value: 'other' }
              ]}
              value={user.sex}
              name='sex'
              onChange={handleChange}
              label='Выберите ваш пол'
            />
            <MultiSelectField
              options={qualities}
              onChange={handleChange}
              defaultValue={convertQualitiesForSelect(user.qualities)}
              name='qualities'
              label='Выберите ваши качества'
            />
            <button
              className='btn btn-primary w-100 mx-auto'
              onClick={handleClick}
              disabled={!isValid}>
              Сохранить изменения
            </button>
          </div>
        </div>
      </div>
    )
  } else return <h1>Loading</h1>
}

UserEdit.propTypes = {
  userId: PropTypes.string.isRequired
}

export default UserEdit
