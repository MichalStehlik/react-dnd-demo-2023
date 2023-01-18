import {ItemTypes} from "./Container"
import { useDrag } from 'react-dnd'

export const Apple = ({value}) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: ItemTypes.APPLE,
        item: {type: ItemTypes.APPLE, value: value},
        end: (item, monitor) => {console.log(item, monitor)},
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    }));
    return <span className="apple" ref={drag}>{isDragging ? "😱" : "🍎"}</span>
}

Apple.defaultProps = {
    value: 1
  }

export default Apple;