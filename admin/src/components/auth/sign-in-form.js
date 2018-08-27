import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'

class SignInForm extends Component {
  static propTypes = {}

  render() {
    return (
      <div>
        <h3>Sign In Form</h3>
        <form onSubmit={this.props.handleSubmit}>
          <div>
            Email: <Field name="email" component="input" />
          </div>
          <div>
            Password:{' '}
            <Field
              name="password"
              component="input"
              type="password"
              foo="bar"
            />
          </div>
          <button type="submit">Sign In</button>
        </form>
      </div>
    )
  }
}

export default reduxForm({
  form: 'auth'
})(SignInForm)
