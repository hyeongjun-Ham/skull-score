import React from 'react';
import '../styles/Player.css';

const Player = ({ name, tableNum, isWinner }) => {
  return (
    <div className="player">
      <span>{name} - 자리{tableNum}</span>
      {isWinner === "Y" && <span className="crown">👑</span>}
    </div>
  );
};

export default Player;