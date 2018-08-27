import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import emailValidator from 'email-validator'
import ErrorField from '../common/error-field'

class SignUpForm extends Component {
  static propTypes = {}

  render() {
    return (
      <div>
        <h3>Sign Up Form</h3>
        <form onSubmit={this.props.handleSubmit}>
          <Field name="email" label="Email" component={ErrorField} />
          <Field
            name="password"
            label="Password"
            component={ErrorField}
            type="password"
          />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    )
  }
}

const validate = ({ email, password }) => {
  const errors = {}

  if (!email) errors.email = 'email is a required field'
  else if (!emailValidator.validate(email)) errors.email = 'invalid email'

  if (!password) errors.password = 'password is a required field'
  else if (password.length < 8) errors.password = 'password to short'

  return errors
}

export default reduxForm({
  form: 'auth',
  validate
})(SignUpForm)
