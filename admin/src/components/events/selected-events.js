import React, { Component } from 'react'
import { connect } from 'react-redux'
import { List } from 'react-virtualized'
import { selectedEventsListSelector } from '../../ducks/events'
import SelectedEventCard from './selected-event-card'

class SelectedEvents extends Component {
  static propTypes = {}

  render() {
    return (
      <List
        width={400}
        height={300}
        rowCount={this.props.events.length}
        rowHeight={100}
        rowRenderer={this.rowRenderer}
      />
    )
  }

  rowRenderer = ({ index, key, style }) => (
    <div key={key} style={style}>
      <SelectedEventCard event={this.props.events[index]} />
    </div>
  )
}

export default connect((state) => ({
  events: selectedEventsListSelector(state)
}))(SelectedEvents)
