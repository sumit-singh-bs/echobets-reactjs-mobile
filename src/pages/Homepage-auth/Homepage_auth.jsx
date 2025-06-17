import React from 'react';
import Header from '../../components/Header/Header';
import HomePageTabs from '../../components/HomePageTabs/HomePageTabs';
import ExpertPanel from '../../components/ExpertPanel/ExpertPanel';

import banner from '../../assets/banner.png';

export default function Homepage_auth() {
    return (
        <>
            <Header />
            <div className="homepage-wrapper homepage_auth-wrapper">
                <HomePageTabs />

                <div className="expert-post-index">
                    <div className="banner">
                        <img src={banner} alt="" />
                    </div>
                    <ExpertPanel expertName="Expert 1" firstScore="15" secondScore="10" />
                    <ExpertPanel expertName="Expert 2" firstScore="20" secondScore="12" />
                    <ExpertPanel expertName="Expert 3" firstScore="4" secondScore="6" />
                </div>
            </div>
        </>

    )
}
