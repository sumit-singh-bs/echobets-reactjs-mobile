import React from 'react';
import Header from '../../components/Header/Header';
import MatchInfo from '../../components/MatchInfo/MatchInfo';
import heart from '../../assets/heart.png';
import addProfileImg from '../../assets/add-profile.png';

import metsImg from '../../assets/mets.png';
import marlinsImg from '../../assets/marlins.png';
import raysImg from '../../assets/rays.png';
import cubsImg from '../../assets/cubs.png';
import tigersImg from '../../assets/tigers.png';
import nationalsImg from '../../assets/nationals.png';
import pickDiamond from '../../assets/pick-diamond.png';
import pickGold from '../../assets/pick-gold.png';
import pickIron from '../../assets/pick-iron.png';
import tickImg from '../../assets/tick.png';
import crossImg from '../../assets/cross.png';

import './expert-profile-auth.css';

export default function ExpertProfile_auth() {
    return (
        <>
            <Header />
            <div class="expert-profile-auth-wrapper">
                <div className="banner">    
                    <img src={heart} alt="" class="heart"/>
                    <div className="text-container">
                        <h1>SPORTS</h1>
                        <h2>BETTING</h2>
                    </div>
                </div>

                <div className="expert-details">
                    <img src={addProfileImg} alt="" class="add-profile" />
                    <h2 className="expert-name">Expert 1</h2>
                    <div className="percent">
                        <p class="digits">66%</p>
                        <p className="wr">WR</p>
                    </div>
                </div>

                <div className="expert-counts">
                    <div className="picks">
                        <p>10</p>
                        <p>Picks</p>
                    </div>
                    <div className="followers">
                        <p>12</p>
                        <p>Followers</p>
                    </div>
                </div>
            </div>
            <MatchInfo page="expertProfileAuth" team1score1="-4.5" team1score2="-109" team2score1="+4.5" team2score2="331" teamName1="METS" teamName2="MARLINS" teamCity1="New York" teamCity2="Miami" teamImg1={metsImg} teamImg2={marlinsImg} pickOne={pickDiamond} />
            <MatchInfo page="expertProfileAuth" team1score1="-4.5" team1score2="-109" team2score1="+4.5" team2score2="331" teamName1="RAYS" teamName2="CUBS" teamCity1="Tampa Bay" teamCity2="Chicago" teamImg1={raysImg} teamImg2={cubsImg} cornerImg={tickImg} pickOne={pickGold} />
            <MatchInfo page="expertProfileAuth" team1score1="-4.5" team1score2="-109" team2score1="+4.5" team2score2="331" teamName1="TIGERS" teamName2="NATIONALS" teamCity1="Detroit" teamCity2="Washington" teamImg1={tigersImg} teamImg2={nationalsImg} cornerImg={crossImg} pickTwo={pickIron} />
        </>
    )
}