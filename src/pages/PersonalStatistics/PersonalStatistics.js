import React, { useState } from 'react';
import Topbar from '../../components/Topbar';
import SidebarPlayer from '../../components/SidebarPlayer';

const PersonalStatistics = () => {
    const [selectedPlayer, setSelectedPlayer] = useState('');

    const handlePlayerSelect = (player) => {
        setSelectedPlayer(player);
    };

    return (
        <div>
            <Topbar />
            <SidebarPlayer onPlayerSelect={handlePlayerSelect} />
            <div>
                <h2>Selected Player: {selectedPlayer}</h2>
                {/* 선택된 플레이어의 통계를 여기에서 렌더링 할 수 있습니다. */}
            </div>
        </div>
    );
};

export default PersonalStatistics;
