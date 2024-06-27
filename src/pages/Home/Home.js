import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/Home.css';

const Home = () => {

    const navigate = useNavigate();

    const toScore = () =>{
        navigate('/score');
    };

    return (
        <div className="home">
            <button className='home-button' onClick={toScore}> 입장스~ </button>
        </div>
    );
};

export default Home;