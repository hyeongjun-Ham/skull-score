import React, { useEffect, useState } from "react";
import '../styles/Sidebar.css';
import axios from "axios";

const Sidebar = ({ onDateRoundSelect }) => {
    const [dates, setDates] = useState([]);
    const [openAccordions, setOpenAccordions] = useState([]);

    useEffect(() => {
        axios.get('http://192.168.0.7:3000/game/rounds')
            .then(function (response) {
                const dateData = response.data.data;
                setDates(dateData);
                if (dateData.length > 0) {
                    const latestDate = dateData[0].game_date;
                    const latestRound = dateData[0].last_round;
                    setOpenAccordions([0]); // 첫 번째 아코디언 열기
                    onDateRoundSelect(latestDate, latestRound);
                }
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);

    const toggleAccordion = (index) => {
        setOpenAccordions((prevOpenAccordions) =>
            prevOpenAccordions.includes(index)
                ? prevOpenAccordions.filter(i => i !== index)
                : [...prevOpenAccordions, index]
        );
    };

    const getDateRound = (gameDate, round) => {
        onDateRoundSelect(gameDate, round);
    };

    return (
        <div className="sidebar">
            {dates.map((date, index) => (
                <div key={date.game_date}>
                    <button
                        className={`accordion ${openAccordions.includes(index) ? 'active' : ''}`}
                        onClick={() => toggleAccordion(index)}
                    >
                        {date.game_date}
                    </button>
                    <div className={`accordion-content ${openAccordions.includes(index) ? 'show' : ''}`}>
                        {[...Array(date.last_round)].map((_, roundIndex) => (
                            <button key={roundIndex} onClick={() => getDateRound(date.game_date, roundIndex + 1)}>
                                Round {roundIndex + 1}
                            </button>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Sidebar;
