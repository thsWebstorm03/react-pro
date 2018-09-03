import React from 'react'

function SelectedEventCard({ event }) {
  return (
    <div style={{ border: '1px solid black', height: 100 }}>
      <h3>{event.title}</h3>
      <div>{event.where}</div>
    </div>
  )
}

SelectedEventCard.propTypes = {}

export default SelectedEventCard
