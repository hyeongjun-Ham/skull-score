import React from 'react';
import '../styles/Player.css';

const Player = ({ name, tableNum, isWinner, position }) => {

  const playerImage = require(`../assets/${name}.png`);

  return (
    <div className="player" style={position}>
      <div className='player-container'>
        {isWinner === "Y" && <span className="crown">👑</span>}
        <img src={playerImage} alt={name} className="player-image" />
        <span className='player-name'>{name} - 자리 {tableNum}</span>
      </div>

    </div>
  );
};

export default Player;