import { React, useState } from 'react';
import Header from '../../components/Header/Header';
import HomePageTabs from '../../components/HomePageTabs/HomePageTabs';
import ExpertPanel from '../../components/ExpertPanel/ExpertPanel';
import Input from '../../components/Input/Input';
import '../../common-styles/homepage.css';
import './homepage_unauth.css';

import banner from '../../assets/banner.png';

export default function Homepage_unauth() {
    const [activeSection, setActiveSection] = useState('expertPostIndex');

    const onTabClick = (section) => {
        setActiveSection(section)
    }

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const [validationTick, setValidationTick] = useState(false);

    const formik = useFormik({
        initialValues: {
            email: '',
            name: '',
            username: '',
            password: '',
            confirmPassword: ''
        },

        onSubmit: (values) => {
            console.log("onSubmit", values)
        },

        validate: (values) => {
            const errors = {}
            if (!values.email || !emailRegex.test(values.email)) {
                errors.email = 'Enter a valid Email'
            }
            if (values.name.length <= 3) {
                errors.name = 'Enter a valid name'
            }
            if (!values.username) {
                errors.username = 'Enter a valid username'
            }
            if (!values.password) {
                errors.password = 'Password is required'
            }
            if (values.password !== values.confirmPassword) {
                errors.password = 'Password does not match'
            }

            return errors;
        }
    })

    return (
        <>
            <Header />
            <div className="homepage-wrapper homepage_unauth-wrapper">
                <HomePageTabs onTabClick={onTabClick} />

                <div className={`expert-post-index ${activeSection === 'expertPostIndex' ? 'active' : ''}`}>
                    <div className="banner">
                        <img src={banner} alt="" />
                    </div>
                    <ExpertPanel expertName="Expert 1" firstScore="15" secondScore="10" />
                    <ExpertPanel expertName="Expert 2" firstScore="20" secondScore="12" />
                    <ExpertPanel expertName="Expert 3" firstScore="54" secondScore="36" />
                </div>

                <div className={`about-section ${activeSection === 'about' ? 'active' : ''}`}>
                    <h2>ABOUT ECHOBETS</h2>
                </div>

                <div className={`expert-application ${activeSection === 'join4free' ? 'active' : ''}`}>
                    <h2>Expert Application</h2>

                    <div className="form-wrapper">
                        <form onSubmit={formik.handleSubmit}>
                            <Input
                                label="Email"
                                id="email"
                                name="email"
                                onChange={formik.handleChange}
                                value={formik.values.email}
                                onBlur={formik.handleBlur}
                                tick={validationTick}
                            />
                            <div className="error">
                                {formik.errors.email && formik.touched.email && formik.errors.email}
                            </div>
                            <Input
                                label="Name"
                                id="name"
                                name="name"
                                onChange={formik.handleChange}
                                value={formik.values.name}
                                onBlur={formik.handleBlur}
                                tick={validationTick}
                            />
                            <div className="error">
                                {formik.errors.name && formik.touched.name && formik.errors.name}
                            </div>
                            <Input
                                label="Username"
                                id="username"
                                name="username"
                                onChange={formik.handleChange}
                                value={formik.values.username}
                                onBlur={formik.handleBlur}
                                tick={validationTick}
                            />
                            <div className="error">
                                {formik.errors.username && formik.touched.username && formik.errors.username}
                            </div>
                            <button type="">Apply</button>
                        </form>
                    </div>

                    <div className="links-wrapper">
                        <div className="row-1">
                            <p>Already have an account?</p>
                            <a href="">Sign In</a>
                        </div>

                        <div className="row-2">
                            <p>Become a Follower</p>
                            <a href="">Sign Up</a>
                        </div>
                    </div>
                </div>

                <div className={`expert-login ${activeSection === 'expertLogin' ? 'active' : ''}`}>
                    <h2>Sign up as Follower</h2>

                    <div className="form-wrapper">
                        <form onSubmit={formik.handleSubmit}>
                            <Input
                                label="Email"
                                name="email"
                                onChange={formik.handleChange}
                                value={formik.values.email}
                                onBlur={formik.handleBlur}
                            />
                            <div className="error">
                                {formik.errors.email && formik.touched.email && formik.errors.email}
                            </div>
                            <Input
                                label="Password"
                                type="password"
                                inputGroup="input-group-2"
                                name="password"
                                onChange={formik.handleChange}
                                value={formik.values.password}
                                onBlur={formik.handleBlur}
                            />
                            <div className="error">
                                {formik.errors.password && formik.touched.password && formik.errors.password}
                            </div>
                            <Input
                                label="Confirm Password"
                                type="password"
                                name="confirmPassword"
                                onChange={formik.handleChange}
                                value={formik.values.confirmPassword}
                                onBlur={formik.handleBlur}
                            />
                            <button type="">Register</button>
                        </form>
                    </div>

                    <div className="links-wrapper">
                        <div className="row-1">
                            <p>Already have an account?</p>
                            <a href="">Sign In</a>
                        </div>

                        <div className="row-2">
                            <p>Become a Follower</p>
                            <a href="">Sign Up</a>
                        </div>
                    </div>
                </div>

                <div className={`favorites-section ${activeSection === 'favorites' ? 'active' : ''}`}>
                    <h2>Already have an account?</h2>
                    <div className="row">
                        <a href="">Sign In </a>
                        <p>As Expert</p>
                    </div>

                    <div className="row">
                        <a href="">Sign In </a>
                        <p>As Follower</p>
                    </div>
                </div>
            </div>
        </>
    )
}