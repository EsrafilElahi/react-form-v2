import React, { useState } from 'react'

const useForm = validate => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  })

  const [error, setError] = useState({})

  const handleChange = e => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
  }

  const reset = () => {
    setValues({
      name: '',
      email: '',
      password: '',
      password2: ''
    })
  }

  let alerUser
  Object.values(values).map(i => (alerUser = i))

  const handleSubmit = e => {
    e.preventDefault()
    setError(validate(values))

    if (alerUser.length !== 0) {
      reset()
      alert('create a user successfully *')
    }
  }

  return { values, error, handleChange, handleSubmit }
}

export default useForm
