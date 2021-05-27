import React, { useState } from 'react'

const useForm = (LoginValidate) => {
  const [values, setValues] = useState({
    email: '',
    password: ''
  })

  const [error, setError] = useState({})

  const handleChange = e => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
  }

  const reset = () => {
    setValues({
      email: '',
      password: ''
    })
  }

  let alerLogin
  Object.values(values).map(i => (alerLogin = i))

  const handleSubmit = e => {
    e.preventDefault()
    setError(LoginValidate(values))

    if (alerLogin.length !== 0) {
      reset()
      alert('login successfully *')
    }
  }

  return { values, error, handleChange, handleSubmit }
}

export default useForm
