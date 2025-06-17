import React from 'react';
import logo from '../../assets/logo.png';
import postLink from '../../assets/post-links.png'
import './header.css';

export default function Header() {
    return (
        <div className="header">
            <div className="header-wrapper">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>

                <div className="button-group">
                    <div className="hamburger">
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                    </div>

                    <div className="post-link">
                        <img src={postLink} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}