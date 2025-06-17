import React from 'react';
import './match-info.css';
import expertImg from '../../assets/expert-img.png';

export default function MatchInfo({ expertName, firstScore, secondScore, team1score1, team1score2, team2score1, team2score2, teamName1, teamName2, teamCity1, teamCity2, teamImg1, teamImg2, cornerImg, pickOne, pickTwo, page }) {
    return (
        <div className={`match-info ${page === 'expertProfileAuth' ? 'matchInfo4expertProfile' : ''}`}>
            <img src={cornerImg} alt="" class="corner-img" />
            <div className={`col info-col ${page === 'games-expert-only_auth' ? 'hide' : ''}`}>
                <div className="expert-info">
                    <p className="expert-name">
                        {expertName}
                    </p>

                    <div className="expert-img">
                        <img src={expertImg} alt="" />
                    </div>
                </div>

                <div className="score">
                    <p className="winning">{firstScore}</p>
                    <p>-</p>
                    <p className="losing">{secondScore}</p>
                </div>
            </div>

            <div className={`team-wrapper ${page === 'games-expert-only_auth' ? 'team-wrapper-2' : ''}`}>
                <p class="date">DD-MM-YYYY</p>
                <div className="team-col team-col-1">
                    <div className="subcol score-subcol">
                        <p>{team1score1}</p>
                        <p>{team1score2}</p>
                    </div>

                    <div className="subcol team-info-subcol">
                        <div className="team-img">
                            <img src={teamImg1} alt="" />
                        </div>
                        <p className="team-name">{teamName1}</p>
                        <p className="team-city">{teamCity1}</p>
                        <img src={pickOne} alt="" class="pick" />
                    </div>
                </div>

                <div className="team-col team-col-2">
                    <div className="subcol team-info-subcol">
                        <div className="team-img">
                            <img src={teamImg2} alt="" />
                        </div>
                        <p className="team-name">{teamName2}</p>
                        <p className="team-city">{teamCity2}</p>
                        <img src={pickTwo} alt="" class="pick" />
                    </div>

                    <div className="subcol score-subcol">
                        <p>{team2score1}</p>
                        <p>{team2score2}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}