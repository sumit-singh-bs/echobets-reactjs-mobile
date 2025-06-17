import React from 'react'
import Header from '../../components/Header/Header';
import './menu.css'

export default function Menu_unauth() {
    return (
        <>
            <Header />
            <div className="menu-wrapper">
                <p>ABOUT US</p>
                <p>BECOME AN EXPERT</p>
                <p>BECOME A FOLLOWER</p>
                <p>CONTACT US</p>
            </div>
        </>
    )
}