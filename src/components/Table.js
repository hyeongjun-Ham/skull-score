import React, { useEffect, useState } from "react";
import Player from './Player';
import tableImg from '../assets/Table.png';
import '../styles/Table.css';
import mockPlayerData from '../data/mockPlayers.json'

const Table = () => {

  const [players, setPlayer] = useState([]);

  useEffect(() => {
    if (mockPlayerData && mockPlayerData.data && Array.isArray(mockPlayerData.data.playerList)) {
      setPlayer(mockPlayerData.data.playerList);
    } else {
      console.error('Data format is incorrect');
    }
  }, []);

  const tablePositions = {
    0: { top: '55%', left: '15%' },
    1: { top: '58%', left: '37%' },
    2: { top: '58%', left: '59%' },
    3: { top: '55%', left: '83%' },
    4: { top: '30%', left: '83%' },
    5: { top: '22%', left: '59%' },
    6: { top: '22%', left: '37%' },
    7: { top: '30%', left: '15%' }
  };

  return (
    <div className="table-container">
      <img className="tableImage" src={tableImg} alt="Table" />

      {players.map((player, index) => (
        <Player
          key={index}
          tableNum={player.tableNum}
          name={player.name}
          isWinner={player.isWinner}
          position={tablePositions[player.tableNum]} // 테이블 번호에 따른 위치를 전달합니다.
        />
      ))}
    </div>
  );
};

export default Table;