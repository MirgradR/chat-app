import { Route } from 'react-router';
import './Content.css'
import React from 'react';
import Preloader from '../Common/Preloader/Preloader';

const LoginContainer = React.lazy(() => import('./Login/LoginContainer') )
const FriendsContainer = React.lazy(() => import('./Friends/FriendsContainer') )
const ProfileContainer = React.lazy(() => import('./Profile/ProfileContainer') )
const MessagesContainer = React.lazy(() => import('./Messages/MessagesContainer') )

const Content = (props) => {
    return (
        <div className="content wrapper__content">
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
        </div>
    );
}
export default Content