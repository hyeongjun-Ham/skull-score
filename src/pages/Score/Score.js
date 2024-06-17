import React, { useEffect, useState } from 'react';
import Sidebar from '../../components/Sidebar';
import '../../styles/Score.css'
import scoreData from '../../data/mockScore.json'
import Topbar from '../../components/Topbar';

const Score = () => {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        if (scoreData && scoreData.data && Array.isArray(scoreData.data.scoreList)) {
            setPlayers(scoreData.data.scoreList);
        } else {
            console.error('Data format is incorrect');
        }
    }, []);


    return (
        <div className="score-page">
            <Sidebar />
            <Topbar />
            <div>
                
            </div>
            <div className="content">
                <div className="score-grid">
                    <div className="grid-header">
                        <div className="grid-header-item">이름</div>
                        {[...Array(10)].map((_, i) => (
                            <div key={i} className="grid-header-item">라운드 {i + 1}</div>
                        ))}
                        <div className="grid-header-item">총점</div>
                    </div>
                    {players.map((player, index) => (
                        <div key={index} className="grid-row">
                            <div className="grid-item">{player.name}</div>
                            {player.scores.map((score, i) => (
                                <div key={i} className="grid-item">{score}</div>
                            ))}
                            <div className="grid-item">{player.total}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Score;