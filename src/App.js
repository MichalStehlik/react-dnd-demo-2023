import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import './App.css';
import Container from './components/Fruits/Container'
import List from './components/Reorder/List'
import Board from './components/Chessboard/Board'

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <section>
        <h1>Ovoce</h1>
        <Container />
      </section>
      <section>
        <h1>Seznam</h1>
        <List />
      </section>
      <section>
      <h1>Dáma</h1>
      <Board />
      </section>
    </DndProvider>
  );
}

export default App;
