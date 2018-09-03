import React from 'react'

function EventRow({ event }) {
  return (
    <tr className="test__event-row">
      <td>{event.title}</td>
      <td>{event.when}</td>
      <td>{event.where}</td>
    </tr>
  )
}

EventRow.propTypes = {}

export default EventRow
