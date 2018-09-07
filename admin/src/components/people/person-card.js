import React, { Component } from 'react'

class PersonCard extends Component {
  render() {
    const { person } = this.props
    return (
      <div>
        <h3>{person.email}</h3>
        <h4>{person.firstName}</h4>
        <h4>{person.lastName}</h4>
      </div>
    )
  }
}

export default PersonCard
