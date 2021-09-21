import React, {useState} from 'react';
import {BrowserRouter as Router , Route, Switch} from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Login from '../../pages/login/login';
import ForgotPassword from '../../pages/login/forgot-password/forgot-password';
import HomePage from '../../pages/home-page/home-page';
import StatisticsPage from '../../pages/statistics/statistics';
import UsersPage from '../../pages/users/users';
import LocationPage from '../../pages/location/location';
import './Routing.css'

const Routes = () => {
    
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const history = useHistory();
    const [collapsed, setCollapsed] = useState(false);
    const onCollapse = () => {
        setCollapsed(!collapsed);
      };
    

    if(isLoggedIn === false) {
        history.push('/login');
    }
    
    useEffect(() => {
        setIsLoggedIn(false)
    }, [isLoggedIn])

    return(
        <Router>
            {
                history.location.pathname === '/login' ||  history.location.pathname === '/forgotpassword' && isLoggedIn === false ? (
                    <Switch>
                        <Route path="/login" exact component={Login}/>
                        <Route path="/login/forgotpassword" exact component={ForgotPassword}/>
                    </Switch>
                ) : (
                    <div className="sbd-div-background-side-linear">
                        <div>
                            <Header />
                            <div className="sbd-container">
                                <Switch>
                                    <Route path="/" exact component={HomePage}/>
                                    <Route path="/statistics" exact component={StatisticsPage}/>
                                    <Route path="/users" exact component={UsersPage}/>
                                    <Route path="/location" exact component={LocationPage}/>
                                </Switch>
                            </div>
                            <Footer/>
                        </div>
                    </div>
                )
            }
        </Router>
    )
}

export default Routes;
