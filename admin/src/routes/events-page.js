import React, { Component } from 'react'
import EventsTable from '../components/events/virtualized-events-table'

class EventsPage extends Component {
  static propTypes = {}

  render() {
    return (
      <div>
        <EventsTable />
      </div>
    )
  }
}

export default EventsPage
