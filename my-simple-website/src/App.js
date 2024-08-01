import './App.css';
import Game from './component/Game';
import GameTwoStep from './component/GameTwoStep';
import { Routes, Route } from 'react-router-dom';
import Home from './component/Home';
import NavBar from './component/Layout/NavBar.js';
/*
Can't resolve './component/NavBar'  ===> 에러가 발생한 페이지
        in 'C:\Users\user1\react-workspace\my-simple-website\src'
*/
import Header from './component/Layout/Header.js';
import Footer from './component/Layout/Footer.js';
import TodoList from './component/TodoList';
import TicTapToe from './component/TicTapToe/TicTacToe.js';
import TicTapToe2 from './component/TicTapToe/TicTapToe2.js'
import TicTapToeTwoStep from './component/TicTapToe/TicTapToeTwoStep.js';
import TypingTest from './component/TypingTest.js';
import Dodgegobelin from './component/Dodgrgobelin/Dodgegobelin.js';
import MovieRating from './component/Movie/MovieGrade.js';


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
        <Route path="/tictaptoe2" element={<TicTapToe2 />} />
        <Route path="/ttt-twoStep" element={<TicTapToeTwoStep/>} />
        <Route path="/typingTest" element={<TypingTest/>} />
        <Route path="/dodgegobelin" element={<Dodgegobelin />} />
        <Route path="/movieRate" element={<MovieRating />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;