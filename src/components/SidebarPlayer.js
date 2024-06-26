import React from "react"
import '../styles/Sidebar.css';

const SidebarPlayer = ({ onPlayerSelect }) => {
    return (
        <div className="sidebar">
            <button onClick={() => onPlayerSelect('정창영')}>정창영</button>
            <button onClick={() => onPlayerSelect('서승완')}>서승완</button>
            <button onClick={() => onPlayerSelect('전창혁')}>전창혁</button>
            <button onClick={() => onPlayerSelect('지선학')}>지선학</button>
            <button onClick={() => onPlayerSelect('함형준')}>함형준</button>
            <button onClick={() => onPlayerSelect('이가연')}>이가연</button>
            <button onClick={() => onPlayerSelect('황우현')}>황우현</button>
            <button onClick={() => onPlayerSelect('박주영')}>박주영</button>
        </div>
    );
}

export default SidebarPlayer;
