import React from 'react';
import Header from '../../components/Header/Header';
import './expert-account-creation-auth.css';

import addProfile from '../../assets/add-profile.png';
import addBanner from '../../assets/add-banner.png';

export default function ExpertAccountCreation_auth() {
    return (
        <>
            <Header />
            <div className="expert-account-creation-wrapper">
                <h2>Expert Account</h2>

                <div className="add-img">
                    <p>Add profile image</p>
                    <img src={addProfile} alt="" />
                </div>

                <div className="add-banner">
                    <p>Add banner</p>
                    <img src={addBanner} alt="" />
                </div>

                <div className="btn-group">
                    <button type="">Skip</button>
                    <p>You can do this later</p>
                </div>
            </div>
        </>
    )
}