import './App.css';
import Game from './component/Game';
import GameTwoStep from './component/GameTwoStep';
import { Routes, Route } from 'react-router-dom';
import Home from './component/Home';
import NavBar from './component/NavBar';
import Header from './component/Header';
import TodoList from './component/TodoList';
import TicTapToe from './component/TicTacToe';
import TicTapToe2 from './component/TicTapToe2.js'
import TicTapToeTwoStep from './component/TicTapToeTwoStep.js';
import TypingTest from './component/TypingTest.js';
import Dodgegobelin from './component/Dodgegobelin.js';


function App() {
  return (
    <div>
      <Header />
      <NavBar />
      <Routes> {/* 링크 모음  예전에는 Switch라고 작성했지만 v6부터 Routes이름 사용 */}
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
        <Route path="/game-twoStep" element={<GameTwoStep />} />
        <Route path="/todoList" element={<TodoList />} />
        <Route path="/tictaptoe" element={<TicTapToe />} />
        <Route path="/tictaptoe2" element={<TicTapToe2 />} />
        <Route path="/ttt-twoStep" element={<TicTapToeTwoStep/>} />
        <Route path="/typingTest" element={<TypingTest/>} />
        <Route path="/dodgegobelin" element={<Dodgegobelin />} />



      </Routes>
    </div>
  );
}

export default App;