import React from "react";
import { useNavigate } from "react-router-dom";
import '../styles/Topbar.css'

const Topbar = () => {
    const navigate = useNavigate();

    const handleMainClick = () => {
        navigate('/score')
    };

    const handleStatsClick = () => {
        console.log('통계 버튼 클릭됨');
        navigate('/statistics')
    };

    const handlePersonalStatsClick = () => {
        navigate('/personal-statistics')
    };
    
    return (
        <div className="topbar">
            <div className="topbar-left"></div>
            <div className="topbar-center">
                <h1>스컬킹</h1>
            </div>
            <div className="topbar-right">
                <nav>
                    <ul>
                        <li><button onClick={handleMainClick}>메인</button></li>
                        <li><button onClick={handleStatsClick}>통계</button></li>
                        <li><button onClick={handlePersonalStatsClick}>개인 통계</button></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};
export default Topbar;