import React, { Component } from 'react'
import { DragLayer } from 'react-dnd'

const style = {
  position: 'fixed',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  zIndex: 99999,
  pointerEvents: 'none'
}

class CustomDragLayer extends Component {
  static propTypes = {}

  get preview() {
    const { item, offset } = this.props

    if (!item || !offset) return null

    const { DragPreview, ...previewProps } = item

    if (!DragPreview) return null

    const style = {
      transform: `translate(${offset.x}px, ${offset.y}px)`
    }

    return (
      <div style={style}>
        <DragPreview {...previewProps} />
      </div>
    )
  }

  render() {
    const preview = this.preview

    if (!preview) return null

    return <div style={style}>{preview}</div>
  }
}

const collect = (monitor) => ({
  isDragging: monitor.isDragging(),
  item: monitor.getItem(),
  offset: monitor.getSourceClientOffset()
})

export default DragLayer(collect)(CustomDragLayer)
