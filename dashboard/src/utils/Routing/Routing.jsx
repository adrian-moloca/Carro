import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router , Route, Switch, Redirect} from 'react-router-dom';
import Login from '../../pages/login/login';
import ForgotPassword from '../../pages/login/forgot-password/forgot-password';
import HomePage from '../../pages/home-page/home-page';
import StatisticsPage from '../../pages/statistics/statistics';
import UsersPage from '../../pages/users/users';
import LocationPage from '../../pages/location/location';
import ResetPassword from '../../pages/reset-password/reset-password';
import SideMenu from '../../components/side-menu/side-menu';
import './Routing.css';

const Routes = () => {
    
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const [collapsed, setCollapsed] = useState(false);

    const onCollapse = () => {
        setCollapsed(!collapsed);
      };

    if(isLoggedIn === false) {
        window.location.pathname.replace(window.location.pathname ,'/login');
    }
    
    useEffect(() => {
        setIsLoggedIn(false)
    }, [isLoggedIn])

    const[currentPage, setCurrentPage] = useState(window.location.pathname.substr(1));

    return(
        <Router>
            {
                window.location.pathname.includes('/login') ||  window.location.pathname.includes('/reset-password') && isLoggedIn === false ? (
                    <Switch>
                        <Route path="/login" exact component={Login}/>
                        <Route path="/login/forgot-password" exact component={ForgotPassword}/>
                        <Route path="/reset-password" exact component={ResetPassword}/>
                    </Switch>
                ) : ( 
                        <div className='sbd-layout-container'>
                                <SideMenu currentPage={currentPage} onChangePage={()=>setCurrentPage(window.location.pathname.substr(1))}/>
                                <Switch>
                                    <Route exact path="/" render={() => {
                                                return ( isLoggedIn ?
                                                            <Redirect to="/home" /> :
                                                            <Redirect to="/login" />
                                    )}}/>
                                    <Route exact path="" render={() => {
                                                return ( isLoggedIn ?
                                                            <Redirect to="/home" /> :
                                                            <Redirect to="/login" />
                                    )}}/>
                                    <Route path="/home" exact component={HomePage}/>
                                    <Route path="/statistics" exact component={StatisticsPage}/>
                                    <Route path="/users" exact component={UsersPage}/>
                                    <Route path="/location" exact component={LocationPage}/>
                                </Switch>
                        </div>
                )
            }
        </Router>
    )
}

export default Routes;
