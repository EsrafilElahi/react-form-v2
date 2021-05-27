const Validate = (values) => {
  let error = {}

  if (!values.name.trim()) {
    error.name = 'name required'
  } else if (values.name.length < 2) {
    error.name = 'name must be at least 2'
  }

  if (!values.email) {
    error.email = 'email required'
  }

  if (!values.password) {
    error.password = 'password required'
  } else if (values.password.length < 6) {
    error.password = 'password must be at least 6'
  }

  if (!values.password2) {
    error.password2 = 'confirm password required'
  } else if (values.password !== values.password2) {
    error.password2 = 'do not match'
  }

  return error
}

export default Validate;
