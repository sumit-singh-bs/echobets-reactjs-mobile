import React from 'react'
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './components/Header/Header';
import Homepage_unauth from './pages/Homepage-unauth/Homepage_unauth';
import Homepage_auth from './pages/Homepage-auth/Homepage_auth';
import Settings from './pages/Settings/Settings';
import Menu_unauth from './pages/Menu/Menu_unauth';
import Menu_auth_follower from './pages/Menu/Menu_auth_follower';
import Menu_auth_expert from './pages/Menu/Menu_auth_expert';
import ExpertAccountCreation_auth from './pages/ExpertAccountCreation-auth/ExpertAccountCreation_auth';
import ExpertPostUI_auth from './pages/ExpertPostUI-auth/ExpertPostUI_auth';
import Favorites_auth from './pages/Favorites-auth/Favorites_auth';
import GamesExpertOnly_auth from './pages/Games-expert-only-auth/GamesExpertOnly_auth';
import ExpertProfile_auth from './pages/ExpertProfile-auth/ExpertProfile_auth';
import ExpertIndexPage from './pages/ExpertIndexPage/ExpertIndexPage';

function App() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Header />
        },
        {
            path: '/homepage_unauth',
            element: <Homepage_unauth />
        },
        {
            path: '/homepage_auth',
            element: <Homepage_auth />
        },
        {
            path: '/settings',
            element: <Settings />
        },
        {
            path: '/menu_unauth',
            element: <Menu_unauth />
        },
        {
            path: '/menu_auth_follower',
            element: <Menu_auth_follower />
        },
        {
            path: '/menu_auth_expert',
            element: <Menu_auth_expert />
        },
        {
            path: '/expert-account-creation_auth',
            element: <ExpertAccountCreation_auth />
        },
        {
            path: 'expert-post-ui_auth',
            element: <ExpertPostUI_auth />
        },
        {
            path: '/favorites_auth',
            element: <Favorites_auth />
        },
        {
            path: '/games-expert-only_auth',
            element: <GamesExpertOnly_auth />
        },
        {
            path: '/expert-profile_auth',
            element: <ExpertProfile_auth />
        },
        {
            path: '/expert-index-page',
            element: <ExpertIndexPage />
        }
    ])

    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}

export default App