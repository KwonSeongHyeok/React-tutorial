import React, {useState} from 'react';
import { Link } from 'react-router-dom';

const GameTwoStep = () => {
    const [guess, setGuess] = useState('');
    const [message, setMessage] = useState('');
    const [number, setNumber] = useState(Math.floor(Math.random() * 30) +1 );
    const [attempts, setAttempts] = useState(0);
    const [isCorrect, setIsCorrect] = useState(false);

    const handleChange = (e) => {
        setGuess(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const userGuess = parseInt(guess, 10);

        setAttempts(attempts+1);

        if(userGuess === number) {
            setMessage('축하합니다. 정답입니다.');
            setIsCorrect(true);
        } else if(userGuess > number) {
            setMessage('다운!');
        } else {
            setMessage('업!');
        }

        setGuess('');
    }
    const handleRestart = (e) => {
        const newNumber = Math.floor(Math.random()*30) + 1;
        setNumber(newNumber);
        setAttempts(0);
        setMessage('');
        setGuess('');
        setIsCorrect(false);
    }

    return (
        <div>
            <h1>GameTwoStep</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type='number'
                    value={guess}
                    onChange={handleChange}
                    placeholder='1에서 30사이 숫자 맞추기'
                />
                <button type='submit'>추측하기</button>
                <p>{message}</p>
                {isCorrect ? (<Link to="/game"><button>처음으로 돌아가기</button></Link>) : (<button onClick={handleRestart}>재시작버튼</button>)}
                
            </form>

        </div>
    )
    

}
export default GameTwoStep;