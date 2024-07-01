import React, { useState } from 'react';
import Topbar from '../../components/Topbar';
import SidebarPlayer from '../../components/SidebarPlayer';
import '../../styles/PersonalStatistics.css';

const PersonalStatistics = () => {
    const [selectedPlayer, setSelectedPlayer] = useState('소장님');
    const playerImage = require(`../../assets/${selectedPlayer}.png`);

    const handlePlayerSelect = (player) => {
        setSelectedPlayer(player);
    };

    return (
        <div className="container">
            <Topbar />
            <SidebarPlayer onPlayerSelect={handlePlayerSelect} />
            <div className="main-content">
                <div className="player-info">
                    <div className="photo">
                        <img src={playerImage} alt={selectedPlayer} className="player-image" />
                        <h2>{selectedPlayer}</h2>
                    </div>
                    <div className="stats">
                        <div className="stat-item">최고점수: <span id="high-score">100</span></div>
                        <div className="stat-item">최저점수: <span id="low-score">10</span></div>
                        <div className="stat-item">평균점수: <span id="average-score">50</span></div>
                        <div className="stat-item">게임참여 횟수: <span id="games-played">20</span></div>
                        <div className="stat-item">최대 연승: <span id="max-win-streak">5</span></div>
                        <div className="stat-item">최대 연패: <span id="max-lose-streak">3</span></div>
                        <div className="stat-item">실수 벌점 횟수: <span id="mistake-points">2</span></div>
                        <div className="stat-item">최대 보너스 점수: <span id="max-bonus">15</span></div>
                        <div className="stat-item">1 등시 우측에 가장 많이 있던 사람: <span id="most-right">Player A</span></div>
                        <div className="stat-item">1 등시 좌측에 가장 많이 있던 사람: <span id="most-left">Player B</span></div>
                    </div>
                </div>
                <div className="tables">
                    <div className="table-container">
                        <h3>각 라운드 당 적중률</h3>
                        <table>
                            <tr>
                                <td className='round-cell'>1라운드</td>
                                <td>100</td>
                                <td className='round-cell'>6라운드</td>
                                <td>120</td>
                            </tr>
                            <tr>
                                <td className='round-cell'>2라운드</td>
                                <td>100</td>
                                <td className='round-cell'>7라운드</td>
                                <td>120</td>
                            </tr>
                            <tr>
                                <td className='round-cell'>3라운드</td>
                                <td>100</td>
                                <td className='round-cell'>8라운드</td>
                                <td>120</td>
                            </tr>
                            <tr>
                                <td className='round-cell'>4라운드</td>
                                <td>100</td>
                                <td className='round-cell'>9라운드</td>
                                <td>120</td>
                            </tr>
                            <tr>
                                <td className='round-cell'>5라운드</td>
                                <td>100</td>
                                <td className='round-cell'>10라운드</td>
                                <td>120</td>
                            </tr>
                        </table>
                        <h4>전체 적중률 :</h4>
                        <h4>0승 적중률 :</h4>
                    </div>
                    <div className="table-container">
                        <h3>각 라운드 0승 빈도</h3>
                        <table>
                            <tr>
                                <td className='round-cell'>1라운드</td>
                                <td>100</td>
                                <td className='round-cell'>6라운드</td>
                                <td>120</td>
                            </tr>
                            <tr>
                                <td className='round-cell'>2라운드</td>
                                <td>100</td>
                                <td className='round-cell'>7라운드</td>
                                <td>120</td>
                            </tr>
                            <tr>
                                <td className='round-cell'>3라운드</td>
                                <td>100</td>
                                <td className='round-cell'>8라운드</td>
                                <td>120</td>
                            </tr>
                            <tr>
                                <td className='round-cell'>4라운드</td>
                                <td>100</td>
                                <td className='round-cell'>9라운드</td>
                                <td>120</td>
                            </tr>
                            <tr>
                                <td className='round-cell'>5라운드</td>
                                <td>100</td>
                                <td className='round-cell'>10라운드</td>
                                <td>120</td>
                            </tr>
                        </table>
                        <h4>전체 0승 빈도 :</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PersonalStatistics;
