import React from 'react'
import { ItemTypes } from './Board'
import { useDrag } from 'react-dnd'

export const Stone = ({color, x, y}) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: ItemTypes.STONE,
        item: {type: ItemTypes.STONE, color: color, x: x, y: y},
        collect: (monitor) => ({
          isDragging: monitor.isDragging()
        })
      }))
  return <span ref={drag} className={"stone " + color} >♟︎</span>
}

export default Stone;