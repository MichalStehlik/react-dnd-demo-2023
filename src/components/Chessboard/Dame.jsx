import { ItemTypes } from './Board'
import { useDrag } from 'react-dnd'

export const Dame = ({color, x, y}) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: ItemTypes.DAME,
        item: {type: ItemTypes.DAME, color: color, x: x, y: y},
        collect: (monitor) => ({
          isDragging: !!monitor.isDragging()
        })
      }))
  return <span ref={drag} className={"dame " + color} >♕</span>
}

export default Dame;