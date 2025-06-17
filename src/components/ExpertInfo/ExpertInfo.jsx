import React from 'react';
import './expert-info.css';

import expertImg from '../../assets/expert-img-lg.png';

export default function ExpertInfo({ expertName }) {
    return (
        <div className="expert-info">
            <div className="expert-details">
                <h2>{expertName}</h2>
                <img src={expertImg} />
            </div>

            <div className="value-col">
                <p>66%</p>
                <div className="letters-wrapper">
                    <span class="w">W</span>
                    <span class="l">L</span>
                    <span class="l">L</span>
                    <span class="w">W</span>
                    <span class="w">W</span>
                    <span class="l">L</span>
                    <span class="l">L</span>
                    <span class="l">L</span>
                    <span class="w">W</span>
                    <span class="w">W</span>
                </div>
            </div>
        </div>
    )
}
