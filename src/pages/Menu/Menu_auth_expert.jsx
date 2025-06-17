import React from 'react';
import Header from '../../components/Header/Header';
import './menu.css';
import logoutImg from '../../assets/logout.png';

export default function Menu_auth_expert() {
    return (
        <>
            <Header />
            <div className="menu-wrapper">
                <p>ABOUT US</p>
                <p>BECOME AN EXPERT</p>
                <p>BECOME A FOLLOWER</p>
                <p>CONTACT US</p>
                <p>GAMES</p>
                <p>SETTINGS</p>

                <div className="logout-btn">
                    <img src={logoutImg} alt="" />
                    <p>Logout</p>
                </div>
            </div>
        </>
    )
}
