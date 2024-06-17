import React, {useEffect, useState} from "react";
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
  
    return (
      <div className="table">
        <img className="tableImage" src={tableImg}></img>

        {players.map((player, index) => (
          <Player
            key={index}
            tableNum = {player.tableNum}
            name={player.name}
            isWinner={player.isWinner}
            
          />
        ))}
      </div>
    );
  };
  
  export default Table;