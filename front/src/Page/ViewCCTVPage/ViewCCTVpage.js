import React from 'react';
import NevBar from '../../Components/NevBar/NevBar';
import ViewCCTV from '../../Components/ViewCCTV/ViewCCTV';
import './ViewCCTVpage.css';
// 자영 (240605) CCTV 상세보기 페이지 
const ViewCCTVPage = () => {

    return (

        <div className="CCTVpage_Main">
            <header className='nevibar_card'> <NevBar /></header>      
            <div className='CCTVpage_component' >
               <ViewCCTV />
            </div>
        </div>
        /** */



        
    );
};

export default ViewCCTVPage;