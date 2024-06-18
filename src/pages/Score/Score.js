import React, { useEffect, useState } from 'react';
import Sidebar from '../../components/Sidebar';
import '../../styles/Score.css';
import scoreData from '../../data/mockScore.json';
import Topbar from '../../components/Topbar';
import Table from '../../components/Table';

const Score = () => {
    const [players, setPlayers] = useState([]);
    const [highestScoreIndices, setHighestScoreIndices] = useState([]);
    const [lowestScoreIndices, setLowestScoreIndices] = useState([]);

    useEffect(() => {
        if (scoreData && scoreData.data && Array.isArray(scoreData.data.scoreList)) {
            const playersList = scoreData.data.scoreList;
            setPlayers(playersList);

            const scores = playersList.map(player => player.total);
            const highestScore = Math.max(...scores);
            const lowestScore = Math.min(...scores);

            const highestScoreIndices = scores.reduce((acc, score, index) => {
                if (score === highestScore) {
                    acc.push(index);
                }
                return acc;
            }, []);

            const lowestScoreIndices = scores.reduce((acc, score, index) => {
                if (score === lowestScore) {
                    acc.push(index);
                }
                return acc;
            }, []);

            setHighestScoreIndices(highestScoreIndices);
            setLowestScoreIndices(lowestScoreIndices);
        } else {
            console.error('Data format is incorrect');
        }
    }, []);

    return (
        <div className="score-page">
            <Sidebar />
            <Topbar />
            <div className="content">

                <Table />
                <div className="score-grid">
                    <div className="grid-header">
                        <div className="grid-header-item">이름</div>
                        {[...Array(10)].map((_, i) => (
                            <div key={i} className="grid-header-item">라운드 {i + 1}</div>
                        ))}
                        <div className="grid-header-item">총점</div>
                    </div>
                    {players.map((player, index) => (
                        <div
                            key={index}
                            className={`grid-row ${highestScoreIndices.includes(index) ? 'highest-score-row' : ''} ${lowestScoreIndices.includes(index) ? 'lowest-score-row' : ''}`}
                        >
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
