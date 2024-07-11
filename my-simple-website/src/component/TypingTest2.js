import React,{useState} from "react";
import Result from './Result';
import { Link } from "react-router-dom";
import './TypingTest.css';

const 타자대회2 = () =>{
    const [텍스트입력, set텍스트입력] = useState('');
    const [결과확인, set결과확인] = useState(false);
    const 타이핑문제 = '이번 문제는 난이도가 조금 상승하였습니다.';

    const 값변경하기 = (e) => {
        set텍스트입력(e.target.value);

        if(e.target.value === 타이핑문제){
            set결과확인(true);
        }
    }

    const 다시시작 = () => {
        set텍스트입력('');
        set결과확인(false);
    }

    return(
        <div className="typing-test">
            <h1>타자치기대회</h1>
            <p>오늘의 문제 : {타이핑문제}</p>
            <div className="typing-container">
                <img src="/hancom.jpg" className="character-image"/>
                <textarea
                    value={텍스트입력}
                    onChange={값변경하기}
                    disabled={결과확인}
                />
            </div>
            {결과확인 && <Result inputText={텍스트입력} correctText={타이핑문제} />}
            {결과확인 && <button onClick={다시시작}>다시 시작하는버튼</button>}
            {결과확인 === true && (
                <Link to="/typingTest">
                    <button>처음으로 돌아가기</button>
                </Link>
            )}

       </div>
    )
}

export default 타자대회2;