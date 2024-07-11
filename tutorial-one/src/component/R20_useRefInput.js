import React, {useRef, useEffect} from 'react';

const RefInputFocus = () => {
    const inputRef = useRef(null);

    const 버튼클릭 = () => {
        if(inputRef.current){
            inputRef.current.focus();
        }
    };

    return(
        <div>
            <input ref={inputRef} type="text" />
            <button onClick={버튼클릭}>input안에 값이 비었으면 input으로 위치 이동</button>
        </div>
    )
}
export default RefInputFocus;