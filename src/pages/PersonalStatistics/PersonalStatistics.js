import React, { useState } from 'react';
import Topbar from '../../components/Topbar';
import SidebarPlayer from '../../components/SidebarPlayer';
import '../../styles/PersonalStatistics.css'

const PersonalStatistics = () => {
    const [selectedPlayer, setSelectedPlayer] = useState('소장님');
    const playerImage = require(`../../assets/${selectedPlayer}.png`);
    

    const handlePlayerSelect = (player) => {
        setSelectedPlayer(player);
    };

    return (
        <div>
            <Topbar />
            <SidebarPlayer onPlayerSelect={handlePlayerSelect} />
            <div>
            <img src={playerImage} alt={selectedPlayer} className="player-image" />
                <h2>Selected Player: {selectedPlayer}</h2>
                
                {/* 선택된 플레이어의 통계를 여기에서 렌더링 할 수 있습니다. */}
            </div>
        </div>
    );
};

export default PersonalStatistics;
