import React from "react";
import { useNavigate } from "react-router-dom";
import '../styles/Sidebar.css'

const Sidebar = () =>{
    const navigate = useNavigate();

    const toScore = () =>{
        navigate('/score');
    };

    return (
        <div className="sidebar">
            <button> tt </button>
            <button> test </button>
        </div>
    );
};

export default Sidebar;