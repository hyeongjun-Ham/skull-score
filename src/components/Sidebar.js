import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/Sidebar.css'
import mockData from '../data/mockdatedata.json'

const Sidebar = () => {
    const navigate = useNavigate();
    const [dates, setDates] = useState([]);

    useEffect(() => {
        if (mockData && mockData.data && Array.isArray(mockData.data.dateList)) {
            setDates(mockData.data.dateList);
        } else {
            console.error('Data format is incorrect');
        }
    }, []);

    const toScore = (id) => {
        navigate(`/score/${id}`);
    };

    return (
        <div className="sidebar">
            {dates.map(date => (
                <button key={date.id} onClick={() => toScore(date.id)}>
                    {date.date}
                </button>
            ))}
        </div>
    );
};

export default Sidebar;