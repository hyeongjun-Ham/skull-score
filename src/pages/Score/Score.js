import React, { useEffect, useState } from 'react';
import Sidebar from '../../components/Sidebar';
import '../../styles/Score.css';
import Topbar from '../../components/Topbar';
import Table from '../../components/Table';
import axios from 'axios';

const Score = () => {
    const [players, setPlayers] = useState([]);
    const [highestScoreIndices, setHighestScoreIndices] = useState([]);
    const [lowestScoreIndices, setLowestScoreIndices] = useState([]);
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedRound, setSelectedRound] = useState(null);

    useEffect(() => {
        if (selectedDate && selectedRound) {
            fetchScores(selectedDate, selectedRound);
        }
    }, [selectedDate, selectedRound]);

    const handleDateRoundSelect = (date, round) => {
        setSelectedDate(date);
        setSelectedRound(round);
        console.log(`Selected date: ${date}, round: ${round}`);
    };

    const fetchScores = (date, round) => {
        axios.post('http://192.168.0.7:3000/game/rounds/score', {
            'game_date': date,
            'round': round
        })
            .then(response => {
                const playersList = response.data.data.map(player => {
                    return {
                        name: player.player,
                        scores: player.score.map(round => round.score),
                        total: player.resultScore
                    };
                });
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
            })
            .catch(error => {
                console.error('Error fetching score data', error);
            });
    };

    return (
        <div className="score-page">
            <Topbar />
            <Sidebar onDateRoundSelect={handleDateRoundSelect} />

            <div className="content">
                <Table selectedDate={selectedDate} selectedRound={selectedRound} />
                <div className="score-grid">
                    <div className="grid-header">
                        <div className="grid-header-item">이름</div>
                        {[...Array(10)].map((_, i) => (
                            <div key={i} className="grid-header-item">{i + 1} 라운드</div>
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
