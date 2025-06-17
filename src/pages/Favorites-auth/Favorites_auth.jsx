import React from 'react';
import Header from '../../components/Header/Header';
import HomePageTabs from '../../components/HomePageTabs/HomePageTabs';
import MatchInfo from '../../components/MatchInfo/MatchInfo';
import './favorites-auth.css';

import metsImg from '../../assets/mets.png';
import marlinsImg from '../../assets/marlins.png';
import raysImg from '../../assets/rays.png';
import cubsImg from '../../assets/cubs.png';
import tigersImg from '../../assets/tigers.png';
import nationalsImg from '../../assets/nationals.png';
import tickImg from '../../assets/tick.png';
import crossImg from '../../assets/cross.png';
import pickGold from '../../assets/pick-gold.png';
import pickDiamond from '../../assets/pick-diamond.png';
import pickIron from '../../assets/pick-iron.png';

export default function Favorites_auth() {
    return (
        <>
            <Header />
            <div className="favorites_auth-wrapper">
                <HomePageTabs />
                <div className="match-info-wrapper">
                    <MatchInfo pickOne={pickDiamond} expertName="Expert 1" firstScore="15" secondScore="10" team1score1="-4.5" team1score2="-109" team2score1="+4.5" team2score2="331" teamName1="METS" teamName2="MARLINS" teamCity1="New York" teamCity2="Miami" teamImg1={metsImg} teamImg2={marlinsImg} />
                    <MatchInfo pickOne={pickGold} expertName="Expert 1" firstScore="15" secondScore="10" team1score1="-4.5" team1score2="-109" team2score1="+4.5" team2score2="331" teamName1="RAYS" teamName2="CUBS" teamCity1="Tampa Bay" teamCity2="Chicago" teamImg1={raysImg} teamImg2={cubsImg} cornerImg={tickImg} />
                    <MatchInfo pickTwo={pickIron} expertName="Expert 2" firstScore="20" secondScore="12" team1score1="-4.5" team1score2="-109" team2score1="+4.5" team2score2="331" teamName1="RAYS" teamName2="CUBS" teamCity1="Tampa Bay" teamCity2="Chicago" teamImg1={raysImg} teamImg2={cubsImg} cornerImg={crossImg} />
                    <MatchInfo pickTwo={pickIron} expertName="Expert 1" firstScore="15" secondScore="10" team1score1="-4.5" team1score2="-109" team2score1="+4.5" team2score2="331" teamName1="TIGERS" teamName2="NATIONALS" teamCity1="Detroit" teamCity2="Washington" teamImg1={tigersImg} teamImg2={nationalsImg} cornerImg={crossImg} />
                </div>
            </div>
        </>
    )
}