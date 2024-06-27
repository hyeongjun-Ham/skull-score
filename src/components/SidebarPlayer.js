import React from "react"
import '../styles/Sidebar.css';

const SidebarPlayer = ({ onPlayerSelect }) => {
    const players = ['소장님', '서승완', '전창혁', '지선학', '함형준', '이가연', '황우현', '박주영'];

    return (
        <div className="sidebar">
            {players.map(player => (
                <button key={player} onClick={() => onPlayerSelect(player)}>
                    {player}
                </button>
            ))}
        </div>
    );
}

export default SidebarPlayer;
