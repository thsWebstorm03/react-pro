import React from 'react'
import { DropTarget } from 'react-dnd'

function SelectedEventCard({
  event,
  connectDropTarget,
  hovered,
  canDrop,
  dragType
}) {
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
    console.log(
      '---',
      'eventId:',
      props.event.id,
      'personId:',
      monitor.getItem().id
    )
  }
}

const collect = (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  hovered: monitor.isOver(),
  canDrop: monitor.canDrop()
})

export default DropTarget(['person'], spec, collect)(SelectedEventCard)
