import React, {useState} from 'react';
import {BrowserRouter as Router , Route, Switch} from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import HeaderLogedOut from '../../components/headerLogedOut/HeaderLogedOut';
import HeaderLogedIn from '../../components/headerLogedIn/HeaderLogedIn';
import Footer from '../../components/footer/footer';
import Login from '../../pages/login/login';
import ForgotPassword from '../../pages/login/forgot-password/forgot-password';
import EmailSent from '../../pages/login/forgot-password/email-sent/email-sent';
import ResetPassword from '../../pages/login/reset-password/reset-password';
import Register from '../../pages/register/register';
import SelectPlan from '../../pages/register/select-plan/select-plan';
import AddCard from '../../pages/register/select-plan/add-card/add-card';
import AddCardPaymentMethod from '../../pages/payment-method/add-card/add-card';
import HomePage from '../../pages/home-page/home-page';
import AddPackage from '../../pages/add-package/add-package';
import MyPackages from '../../pages/my-packages/my-packages';
import MyRides from '../../pages/my-rides/my-rides';
import Notifications from '../../pages/notifications/notifications';
import PaymentMethod from '../../pages/payment-method/payment-method';
import CardSelected from '../../pages/payment-method/card-selected/card-selected';
import Profile from '../../pages/profile/profile';
import SearchPackage from '../../pages/search-package/search-package';
import SearchRide from '../../pages/search-ride/search-ride';
import AddTransport from '../../pages/add-transport/add-transport';
import CourierProfile from '../../pages/courier-profile/courier-profile';
import './Routing.css';

const Routes = () => {
    
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const history = useHistory();
    const [collapsed, setCollapsed] = useState(false);
    const onCollapse = () => {
        setCollapsed(!collapsed);
      };
    

    // if(isLoggedIn === false) {
    //     history.push('/login');
    // }
    
    // useEffect(() => {
    //     setIsLoggedIn(false)
    // }, [isLoggedIn])

    return(
        <Router>
            {
                // history.location.pathname === '/login' ||  history.location.pathname === '/forgotpassword' && isLoggedIn === false ? (
                //     <Switch>
                //         <Route path="/login" exact component={Login}/>
                //         {/* <Route path="/forgotpassword" exact component={ForgotPassword}/> */}
                //     </Switch>
                // ) : (
                    <div className="sbd-container">
                        <div className="sbd-container-header">
                            <HeaderLogedIn/>
                        </div>
                        <div className="sbd-container-content">
                            <Switch>
                                <Route path="/" exact component={HomePage}/>
                                <Route path="/add-package" exact component={AddPackage}/>  {/* checked */}
                                <Route path="/my-packages" exact component={MyPackages}/>  {/* checked */}
                                <Route path="/my-rides" exact component={MyRides}/>  {/* checked */}
                                <Route path="/notifications" exact component={Notifications}/>  {/* checked */}
                                <Route path="/payment-method" exact component={PaymentMethod}/>
                                <Route path="/payment-method/add-card" exact component={AddCardPaymentMethod}/>
                                <Route path="/add-card" exact component={AddCardPaymentMethod}/>
                                <Route path="/profile" exact component={Profile}/>  {/* checked */}
                                <Route path="/search-package" exact component={SearchPackage}/>  {/* checked */}
                                <Route path="/search-ride" exact component={SearchRide}/>  {/* checked */}
                                <Route path="/login" exact component={Login}/>
                                <Route path="/login/forgot-password" exact component={ForgotPassword}/>
                                <Route path="/reset-password" exact component={ResetPassword}/>
                                <Route path="/login/forgot-password/email-sent" exact component={EmailSent}/>
                                <Route path="/register" exact component={Register}/>
                                <Route path="/register/select-plan" exact component={SelectPlan}/>
                                <Route path="/register/select-plan/add-card" exact component={AddCard}/>
                                <Route path="/add-transport" exact component={AddTransport}/>  {/* checked */}
                                <Route path="/courier-profile" exact component={CourierProfile}/>
                                <Route component={HomePage} />
                            </Switch>
                        </div>
                        <div className="sbd-container-footer">
                            <Footer/>
                        </div>
                    </div>
                // )
            }
        </Router>
    )
}

export default Routes;
