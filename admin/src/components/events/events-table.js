import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  fetchAllEvents,
  eventListSelector,
  loadedSelector,
  loadingSelector
} from '../../ducks/events'
import Loader from '../common/loader'
import EventRow from './event-row'

export class EventsTable extends Component {
  static propTypes = {}

  componentDidMount() {
    this.props.fetchAllEvents()
  }

  render() {
    if (this.props.loading && !this.props.loaded) return <Loader />
    return (
      <table>
        <tbody>{this.getRows()}</tbody>
      </table>
    )
  }

  getRows = () => this.props.events.map(this.getRow)

  getRow = (event) => (
    <EventRow key={event.id} event={event} onClick={this.props.handleSelect} />
  )
}

export default connect(
  (state) => ({
    events: eventListSelector(state),
    loading: loadingSelector(state),
    loaded: loadedSelector(state)
  }),
  { fetchAllEvents }
)(EventsTable)
