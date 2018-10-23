import React from 'react';

const ScoreBoard = (props) => (
    <div>
        <h1>Score: {props.score}</h1>
        <h1>High Score: {props.highScore}</h1>
    </div>
);

export default ScoreBoard;