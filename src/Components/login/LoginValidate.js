const LoginValidate = (values) => {
  let error = {}

  if (!values.email) {
    error.email = 'email required'
  }

  if (!values.password) {
    error.password = 'password required'
  } else if (values.password.length < 6) {
    error.password = 'password must be at least 6'
  }

  return error
}

export default LoginValidate;
