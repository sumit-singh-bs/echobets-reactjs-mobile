import React from 'react';
import './expert-panel.css';

import expertImg from '../../assets/expert-img.png';
import img1 from '../../assets/img-1.png';
import img2 from '../../assets/img-2.png';

export default function ExpertPanel({ expertName, firstScore, secondScore }) {
    return (
        <div className="expert-panel-row">
            <div className="col col-1">
                <div className="expert-box">
                    <p className="expert-name">{expertName}</p>
                    <div className="expert-img">
                        <img src={expertImg} alt="" />
                    </div>
                </div>
                <div className="expert-score">
                    <p className="winning">{firstScore}</p>
                    <p className="hyphen">-</p>
                    <p className="losing">{secondScore}</p>
                </div>
            </div>

            <div className="col col-2">
                <img src={img1} alt="" />
            </div>

            <div className="col col-3">
                <img src={img2} alt="" />
            </div>
        </div>
    )
}