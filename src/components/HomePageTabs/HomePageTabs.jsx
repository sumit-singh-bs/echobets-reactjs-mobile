import React from 'react'
import './homepage-tabs.css';

export default function HomePageTabs({ onTabClick }) {
    return (
        <div className="tabs-wrapper">
            <div className="tab" onClick={() => onTabClick('about')}>
                <p>ABOUT</p>
            </div>
            <div className="tab" onClick={() => onTabClick('join4free')}>
                <p>JOIN FOR FREE</p>
            </div>
            <div className="tab" onClick={() => onTabClick('expertLogin')}>
                <p>EXPERT LOGIN</p>
            </div>
            <div className="tab" onClick={() => onTabClick('favorites')}>
                <p>FAVORITES</p>
            </div>
        </div>
    )
}