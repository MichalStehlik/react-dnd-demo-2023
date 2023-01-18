import {useState} from 'react'
import Square from './Square'

export const WHITE = "white";
export const BLACK = "black";

export const ItemTypes = {
  STONE: "stone",
  DAME: "dame"
}

export const Board = () => {
  const [figures, setFigures] = useState([
    [{type: ItemTypes.STONE, color: WHITE}, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, {type: ItemTypes.DAME, color: BLACK}, null, null, null, null, null],
    [null, null, null, null, null, null, {type: ItemTypes.STONE, color: BLACK}, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null]]);
  
  const moveFigure = (x,y,figure) => {
    setFigures(prev => {
        let newFigures = JSON.parse(JSON.stringify(prev));
        newFigures[figure.x][figure.y] = null;
        newFigures[x][y] = {type: figure.type, color: figure.color};
        return newFigures;
    });
    console.log(x,y,figure);
  };

  return (
      <table className="board">
        <tbody>
        {figures.map((item, row) => (
        <tr key={row}>
          {item.map((item2, column) => (<Square key={column} color={(row+column)%2 === 0 ? "light" : "dark"} row={row} column={column} figure={figures[row][column]} moveFigure={moveFigure} />))}
        </tr>))}
        </tbody>
      </table>
  )
}

export default Board;