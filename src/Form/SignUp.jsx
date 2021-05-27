import React from 'react'
import useForm from '../Components/sign up/useForm'
import Validate from '../Components/sign up/Validate'

function SignUp ({ setFlag }) {
  const { values, error, handleChange, handleSubmit } = useForm(Validate)

  return (
    <div>
      <h1 className='title'>sign up</h1>

      <div className='container'>
        <form onSubmit={handleSubmit}>
          <div className='name-div'>
            <label htmlFor='name' />
            username :
            <input
              type='text'
              name='name'
              value={values.name}
              onChange={handleChange}
            />
            {error.name && <p style={{ color: 'red' }}>{error.name}</p>}
          </div>

          <div className='email-div'>
            <label htmlFor='email' />
            email :
            <input
              type='email'
              name='email'
              value={values.email}
              onChange={handleChange}
            />
            {error.email && <p style={{ color: 'red' }}>{error.email}</p>}
          </div>

          <div className='password-div'>
            <label htmlFor='password' />
            password :
            <input
              type='password'
              name='password'
              value={values.password}
              onChange={handleChange}
            />
            {error.password && <p style={{ color: 'red' }}>{error.password}</p>}
          </div>

          <div className='password2-div'>
            <label htmlFor='password2' />
            confirm password :
            <input
              type='password'
              name='password2'
              value={values.password2}
              onChange={handleChange}
            />
            {error.password2 && (
              <p style={{ color: 'red' }}>{error.password2}</p>
            )}
          </div>

          <button className='btn' type='submit'>sign up</button>

          <div className='have-account-div'>
            <label htmlFor='login'>already have an account ? {''}</label>
            <a name='login' onClick={() => setFlag(false)}>
              login here
            </a>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUp
