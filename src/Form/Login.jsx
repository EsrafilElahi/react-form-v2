import React from 'react'
import useLogin from '../Components/login/useLogin'
import LoginValidate from '../Components/login/LoginValidate'


function Login ({ setFlag }) {
  const { values, error, handleChange, handleSubmit } = useLogin(LoginValidate)

  return (
    <div>
      <h1>login</h1>

      <div className='container'>
        <form onSubmit={handleSubmit}>
          <div className='email-div'>
            <label htmlFor='email' />
            email :
            <input type='email' name='email' value={values.email} onChange={handleChange} />
            {error.email && <p style={{color:'red'}}>{error.email}</p>}
          </div>

          <div className='password-div'>
            <label htmlFor='password' />
            password :
            <input type='password' name='password' value={values.password} onChange={handleChange} />
            {error.password && <p style={{color:'red'}}>{error.password}</p>}
          </div>

          <button type='submit'>login</button>

          <div>
            <label htmlFor='register'>no account ? {''}</label>
            <a name='register' onClick={() => setFlag(true)}>
              register here
            </a>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
