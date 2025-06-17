import React from 'react';
import Header from '../../components/Header/Header';
import MatchInfo from '../../components/MatchInfo/MatchInfo';
import './games-expert-only-auth.css';

import baseballImg from '../../assets/baseball.png';
import pickBtn from '../../assets/pick-btn.png';
import tigersImg from '../../assets/tigers.png';
import nationalsImg from '../../assets/nationals.png';
import raysImg from '../../assets/rays.png';
import cubsImg from '../../assets/cubs.png';
import metsImg from '../../assets/mets.png';
import marlinsImg from '../../assets/marlins.png';

export default function GamesExpertOnly_auth() {
    return (
        <>
            <Header />
            <div class="games-expert-only-wrapper">
                <div className="games-wrapper">
                    <div className="games-box">
                        <img src={baseballImg} alt="" />
                    </div>
                </div>

                <div className="expert-tabs">
                    <div className="expert-tabs-wrapper">
                        <div className="tabs">
                            <p>NL</p>
                        </div>

                        <div className="tabs">
                            <p>AL</p>
                        </div>
                    </div>

                    <img src={pickBtn} alt="" />
                </div>

                <MatchInfo team1score1="-4.5" team1score2="-109" team2score1="+4.5" team2score2="331" teamName1="TIGERS" teamName2="NATIONALS" teamCity1="Detroit" teamCity2="Washington" teamImg1={tigersImg} teamImg2={nationalsImg} page="games-expert-only_auth" />
                <MatchInfo team1score1="0" team1score2="0" team2score1="0" team2score2="0" teamName1="RAYS" teamName2="CUBS" teamCity1="Tampa Bay" teamCity2="Chicago" teamImg1={raysImg} teamImg2={cubsImg} page="games-expert-only_auth" />
                <MatchInfo team1score1="0" team1score2="0" team2score1="0" team2score2="0" teamName1="METS" teamName2="MARLINS" teamCity1="New York" teamCity2="Miami" teamImg1={metsImg} teamImg2={marlinsImg} page="games-expert-only_auth" />
            </div>
        </>
    )
}