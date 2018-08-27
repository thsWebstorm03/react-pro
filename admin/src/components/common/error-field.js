import React, { Component } from 'react'

class ErrorField extends Component {
  static propTypes = {}

  render() {
    const {
      label,
      input,
      meta: { error, touched },
      ...rest
    } = this.props
    const errorText = touched &&
      error && <h4 style={{ color: 'red' }}>{error}</h4>
    return (
      <div>
        {label}:<input {...input} {...rest} />
        {errorText}
      </div>
    )
  }
}

export default ErrorField
