import React from 'react';
import Header from '../../components/Header/Header';
import Input from '../../components/Input/Input';
import './expert-post-ui-auth.css';

export default function ExpertPostUI_auth() {
    return (
        <>
            <Header />
            <div className="expert-post-ui-auth-wrapper">
                <div className="submit-youtube">
                    <p>Submit YouTube embed link</p>
                    <Input inputGroup="embed-link" />
                </div>

                <div className="submit-twitter">
                    <p>Submit Twitter embed link</p>
                    <Input inputGroup="embed-link" />
                </div>

                <button type="">Confirm</button>
            </div>
        </>
    )
}