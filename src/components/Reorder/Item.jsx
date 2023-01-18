import {useRef} from 'react'
import { ItemTypes } from './List'
import { useDrag } from 'react-dnd'
import { useDrop } from 'react-dnd'

export const Item = ({content, order, moveAction}) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: ItemTypes.COUNTRY,
        item: {type: ItemTypes.COUNTRY, order: order},
        collect: (monitor) => ({
          isDragging: !!monitor.isDragging()
        })
      }))
    const [{isOver}, drop] = useDrop(()=>({
        accept: ItemTypes.COUNTRY,
        drop: (item, monitor) => moveAction(item.order, order),
          collect: monitor => ({
            isOver: !!monitor.isOver(),
          })
      }))
      const ref = useRef(null);
      drag(drop(ref));
  return <li ref={ref} className="item">{content}</li>
}

export default Item;