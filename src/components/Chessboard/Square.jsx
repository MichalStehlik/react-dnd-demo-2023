import { ItemTypes } from './Board'
import { useDrop } from 'react-dnd'
import Stone from './Stone'
import Dame from './Dame'

export const Square = ({ row, column, color, figure, moveFigure }) => {
  const [{isOver}, drop] = useDrop(
    () => ({
      accept: [ItemTypes.STONE, ItemTypes.DAME],
      drop: (item, monitor) => moveFigure(row, column, item),
      collect: monitor => ({
        isOver: !!monitor.isOver(),
      })
    }),
    [row, column]
  )
  return (<td ref={drop} className={color + " " + (isOver ? "selected" : null)}>
    {
    figure !== null 
    ? 
      figure.type === ItemTypes.STONE 
      ? 
      <Stone color={figure.color} x={row} y={column} /> 
      : 
      figure.type === ItemTypes.DAME ? <Dame color={figure.color} x={row} y={column} /> : null
    : 
    null
    }
  </td>);
}

export default Square;