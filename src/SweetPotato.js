import React, { useState } from 'react';
import { array } from './Answers';
import sweetpotato from './sweetpotato.gif';

export default props => {
    const [answer, setAnswer] = useState("What do you want to know?");

    const onClick = event => {
        setAnswer(array[Math.floor(Math.random() * array.length)]);
    }

    return (
    <div onClick={onClick}>
        <p>
            <img src={sweetpotato} alt="Sweet Potato pixel art gif" height="120px" with="120px" />
        </p>
        The Sweet Potato says:
        <p>
            "{answer}"
        </p>
    </div>
    )
}
