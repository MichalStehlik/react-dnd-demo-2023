import {useState} from 'react'
import {ItemTypes} from "./Container"
import { useDrop } from 'react-dnd'

export const Basket = () => {
    const [count, setCount] = useState(0);
    const [{isOver}, drop] = useDrop(
        () => ({
            accept: [ItemTypes.APPLE],
            drop: (item, monitor) => {console.log(count, item); setCount(prev => prev + item.value);}, 
            collect: monitor => ({
                isOver: !!monitor.isOver(),
            })
        })
    );
    return (       
        <div ref={drop} className={"basket " + (isOver ? "over" : null)}>
          {count}
        </div>
    );
}

export default Basket;