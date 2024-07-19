import React, {useEffect, useState } from 'react';
import '../TicTapToe.css';

const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

const TicTapToe= () => {
  const [numbers, setNumbers] = useState(shuffleArray([...Array(9).keys()].map(n => n + 1)));
  const [nextNumber, setNextNumber] = useState(1); 
  const [message, setMessage] = useState('');

  const handleNumberClick = (index) => {
    if (numbers[index]===nextNumber) {
      if ( nextNumber === 9) { 
        setMessage('맞췄습니다.');
      } else {
        setNextNumber(nextNumber + 1);
        const btnId = document.getElementById('btn_'+index);
        btnId.classList.replace("number-button", "number-button-disabled");
      }
    } else {
        setMessage('틀렸습니다.');

    }
  };

  const handleRestart = () => {
    setNumbers(shuffleArray([...Array(9).keys()].map(n => n + 1)));
    setNextNumber(1); 
    setMessage('');
  };

  return (
    <div className="tic-tap-container">
      <h1>TicTap</h1>
      <div className="grid">
        {numbers.map((number,index) => (
          <button key={index} onClick={() => handleNumberClick(index)}id={'btn_'+index}className="number-button">
            {number}
          </button>
        ))}
      </div>
      <p className="message">{message}</p>
      <button onClick={handleRestart} className="restart-button">게임 재시작</button>
    </div>
  );
};

export default TicTapToe;
