import { Redirect, Route } from 'react-router';
import './Content.css'
import React from 'react';
import Preloader from '../Common/Preloader/Preloader';

const LoginContainer = React.lazy(() => import('./Login/LoginContainer') )
const FriendsContainer = React.lazy(() => import('./Friends/FriendsContainer') )
const ProfileContainer = React.lazy(() => import('./Profile/ProfileContainer') )
const MessagesContainer = React.lazy(() => import('./Messages/MessagesContainer') )
const SettingsContainer = React.lazy(() => import('./Settings/SettingsContainer') )

const Content = () => {
    return (
        <div className="content wrapper__content">
            <Route exact
                path='/'
                render={() => {
                    return <Redirect to = {'/content/profile'} />
                }}
            />
            <Route
                path='/Content/Profile/:userId?'
                render={() => {
                    return <React.Suspense fallback={<div><Preloader/></div>}>
                        <ProfileContainer />
                    </React.Suspense>
                }}
            />
            <Route
                path='/Content/Messages'
                render={() => {
                    return <React.Suspense fallback={<div><Preloader/></div>}>
                        <MessagesContainer />
                    </React.Suspense>
                }}
            />
            <Route
                path='/Content/Friends'
                render={() => {
                    return <React.Suspense fallback={<div><Preloader /></div>}>
                        <FriendsContainer />
                    </React.Suspense>
                }}
            />
            <Route
                path='/Content/Login'
                render={() => {
                    return <React.Suspense fallback={<div><Preloader /></div>}>
                        <LoginContainer />
                    </React.Suspense>
                }}
            />
            <Route
                path='/Content/Settings'
                render={() => {
                    return <React.Suspense fallback={<div><Preloader /></div>}>
                        <SettingsContainer />
                    </React.Suspense>
                }}
            />
        </div>
    );
}
export default Content