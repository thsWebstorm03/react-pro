import React from 'react'
import { DropTarget } from 'react-dnd'
import { connect } from 'react-redux'
import { addEventToPerson } from '../../ducks/people'

function SelectedEventCard({ event, connectDropTarget, hovered, canDrop }) {
  const borderColor = canDrop ? (hovered ? 'green' : 'red') : 'black'
  return connectDropTarget(
    <div style={{ border: `1px solid ${borderColor}`, height: 100 }}>
      <h3>{event.title}</h3>
      <div>{event.where}</div>
    </div>
  )
}

SelectedEventCard.propTypes = {}

const spec = {
  drop(props, monitor) {
    props.addEventToPerson(props.event.id, monitor.getItem().id)
  }
}

const collect = (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  hovered: monitor.isOver(),
  canDrop: monitor.canDrop()
})

export default connect(
  null,
  { addEventToPerson }
)(DropTarget(['person'], spec, collect)(SelectedEventCard))
