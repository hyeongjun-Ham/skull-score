import React, { useEffect, useState } from "react";
import Player from './Player';
import tableImg from '../assets/Table.png';
import '../styles/Table.css';
import axios from "axios";

const Table = ({ selectedDate, selectedRound }) => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    if (selectedDate && selectedRound) {
      axios.post('http://192.168.0.7:3000/game/rounds/player', {
        "game_date": selectedDate,
        "round": selectedRound
      })
        .then(function (response) {
          setPlayers(response.data.data);
          console.log(response.data.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }, [selectedDate, selectedRound]);

  const tablePositions = {
    0: { top: '55%', left: '15%' },
    1: { top: '62%', left: '37%' },
    2: { top: '62%', left: '59%' },
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
          tableNum={index}
          name={player.player}
          isWinner={player.isWinner}
          position={tablePositions[index]} // 테이블 번호에 따른 위치를 전달합니다.
        />
      ))}
    </div>
  );
};

export default Table;
