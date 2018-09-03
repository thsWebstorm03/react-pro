import React from 'react'

function EventRow({ event, onClick }) {
  return (
    <tr className="test__event-row" onClick={() => onClick(event.id)}>
      <td>{event.title}</td>
      <td>{event.when}</td>
      <td>{event.where}</td>
    </tr>
  )
}

EventRow.propTypes = {}

export default EventRow
