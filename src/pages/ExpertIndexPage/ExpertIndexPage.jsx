import React from 'react';
import Header from '../../components/Header/Header';
import ExpertInfo from '../../components/ExpertInfo/ExpertInfo';
import './expert-index-page.css';

export default function ExpertIndexPage() {
    return (
        <>
            <Header />
            <div className="expert-index-page-wrapper">
                <ExpertInfo expertName="Expert 1" />
                <ExpertInfo expertName="Expert 2" />
                <ExpertInfo expertName="Expert 3" />
                <ExpertInfo expertName="Expert 4" />
            </div>
        </>
    )
}