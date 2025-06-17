import React, { useState } from 'react';
//import useForm from '../../Hooks/useForms';
import Header from '../../components/Header/Header';
import Input from '../../components/Input/Input';
import './settings.css';
import userImg from '../../assets/add-user.png';
import bannerImg from '../../assets/setting-banner.png';

export default function Settings() {
    const [activeMenu, setActiveMenu] = useState('account');

    const [inputFields, setInputFields] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    })
    const [errors, setErrors] = useState({});
    const [submitting, setSubmitting] = useState(false);

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    const validateValues = (inputValues) => {
        let errors = {};
        if (inputValues.email.length < 15) {
            errors.email = "Email is too short";
        }
        if (inputValues.password.length < 5) {
            errors.password = "Password is too short";
        }
        return errors;
    };

    const handleChange = (e) => {
        setInputFields({ ...inputFields, [e.target.name]: e.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(validateValues(inputFields));
        setSubmitting(true);
    };

    const finishSubmit = () => {
        console.log(inputFields);
    };

    useEffect(() => {
        if (Object.keys(errors).length === 0 && submitting) {
            finishSubmit();
        }
    }, [errors]);

    const onMenuClick = (menuItem) => {
        setActiveMenu(menuItem)
    }


    return (
        <>
            <Header />
            <div className="settings-wrapper">
                <div className="left-col">
                    <h2>SETTINGS</h2>
                    <div className="menu-group">
                        <div className="menu" onClick={() => onMenuClick('account')}>
                            <p className={activeMenu === 'account' ? 'active' : ''}>ACCOUNT</p>
                        </div>

                        <div className="menu" onClick={() => onMenuClick('profile')}>
                            <p className={activeMenu === 'profile' ? 'active' : ''}>PROFILE</p>
                        </div>

                        <div className="menu" onClick={() => onMenuClick('socials')}>
                            <p className={activeMenu === 'socials' ? 'active' : ''}>SOCIALS</p>
                        </div>
                    </div>
                </div>
                <div className="right-col">
                    <div className={`account-setting ${activeMenu === 'account' ? 'active' : ''}`}>
                        <form onSubmit={handleSubmit}>
                            <div className="input-wrapper-1">
                                <Input
                                    label="Email"
                                    id="email"
                                    name="email"
                                    value={inputFields.email}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="input-wrapper-2">
                                <Input
                                    label="Password"
                                    type="password"
                                    id="password"
                                    onChange={handleChange}
                                />
                            </div>

                            <Input
                                label="Confirm Password"
                                type="password"
                                id="confirmPassword"
                                onChange={handleChange}
                            />
                            <button type="submit">Confirm</button>
                        </form>
                    </div>

                    <div className={`profile-setting ${activeMenu === 'profile' ? 'active' : ''}`}>
                        <div className="user-info">
                            <img src={userImg} alt="" />
                            <p>
                                Expert 1
                            </p>
                        </div>
                        <form>
                            <Input
                                label="Username"
                                id="username"
                                name="username"
                            />
                            <div className="error">
                                {/* {usernameError &&
                                    <p>Enter a valid username</p>
                                } */}
                            </div>
                            <div className="banner">
                                <img src={bannerImg} alt="" />
                            </div>
                            <button type="">Upload</button>
                        </form>
                    </div>

                    <div className={`socials-setting ${activeMenu === 'socials' ? 'active' : ''}`}>
                        <div className="channel channel-1">
                            <h3>Your YouTube Channel</h3>
                            <Input type="text" inputRow="channel" />
                        </div>

                        <div className="channel channel-2">
                            <h3>Your Twitter Account</h3>
                            <Input type="text" inputRow="channel" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}