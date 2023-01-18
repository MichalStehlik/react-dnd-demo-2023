import React, {useState} from 'react'
import Item from "./Item"

export const ItemTypes = {COUNTRY: "country"}

export const List = () => {
  const [items, setItems] = useState(["Německo","Česko","Itálie"]);
  const moveItems = (from, to) => {
    console.log(from, to);
    let newItems = [...items];
    var element = items[from];
    newItems.splice(from, 1);
    newItems.splice(to, 0, element);
    setItems(newItems);
  }
    return (       
        <ol className="list">
          {items.map((item, index) => (<Item key={index} content={item} order={index} moveAction={moveItems} />))}
        </ol>
    )
}

export default List;