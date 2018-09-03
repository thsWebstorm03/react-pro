import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectedEventsListSelector } from '../../ducks/events'

class SelectedEvents extends Component {
  static propTypes = {}

  render() {
    console.log('---', this.props.events)
    return this.props.events.map((event) => (
      <div key={event.id}>{event.title}</div>
    ))
  }
}

export default connect((state) => ({
  events: selectedEventsListSelector(state)
}))(SelectedEvents)
