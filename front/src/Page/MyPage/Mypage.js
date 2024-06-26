import React, { useEffect, useState } from 'react';
import './Mypage.css';
import Myuserinfo from './My_userinfo/Myuserinfo';
import Notification from './My_alram/Notification';
import MyCapture from './My_capture/MyCapture';
import UserUpdate from './My_modify/UserUpdate';
import NevBar from '../../Components/NevBar/NevBar';

const MyPage = () => {
    const sessionId = sessionStorage.getItem('userId'); // session에 있는 id 값 
    const [activeComponent, setActiveComponent] = useState('capture'); // 기본값은 'capture'
    const [missingIdx, setMissingIdx] = useState(null);
    const [selectedMissing, setSelectedMissing] = useState(null);

    const handleIconClick = (component) => {
        console.log('Changing active component to:', component); // 상태 변화 로깅
        setActiveComponent(component);
    };

    const handleDivClick = (missing) => {
        console.log('missing', missing);
        setMissingIdx(missing ? missing.MISSING_IDX : null); // missing이 null이면 missingIdx도 null로 설정
        setSelectedMissing(missing); // Update selected missing person
    };

    const handleMissingClick = (missing) => {
        setSelectedMissing(missing); // Update selected missing person
        setMissingIdx(missing ? missing.MISSING_IDX : null); // Update missingIdx
    };

    return (
        <div className="Mypages">
            <header><NevBar /></header>
            <div className='Mypage_main'>
                <div className="Mypage_container">
                    <div className='Mypage_userinfo'>
                        <Myuserinfo sessionId={sessionId} onIconClick={handleIconClick} onDivClick={handleDivClick} />
                    </div>
                    <div className='Mypage_content'>
                        {activeComponent === 'capture' && (
                            <div className='Mypage_capture'>
                                <MyCapture sessionId={sessionId} missingIdx={missingIdx} selectedMissing={selectedMissing} onMissingClick={handleMissingClick} />
                            </div>
                        )}
                        {activeComponent === 'update' && (
                            <div className='Mypage_modify'>
                                <UserUpdate sessionId={sessionId} />
                            </div>
                        )}
                        {activeComponent === 'notification' && (
                            <div className='Mypage_alarm'>
                                <Notification sessionId={sessionId} missingIdx={missingIdx} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyPage;