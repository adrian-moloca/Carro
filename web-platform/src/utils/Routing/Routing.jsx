import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
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
import PhoneNumberVerification from '../../pages/register/phone-number-verification/phone-number-verification';
import PremiumPlanPayment from '../../pages/register/select-plan/add-card/add-card';
import HomePage from '../../pages/home-page/home-page';
import AddPackage from '../../pages/add-package/add-package';
import MyPackages from '../../pages/my-packages/my-packages';
import MyRides from '../../pages/my-rides/my-rides';
import Notifications from '../../pages/notifications/notifications';
import PaymentMethod from '../../pages/payment-method/payment-method';
import AddPaymentMethod from '../../pages/payment-method/add-payment-method/add-payment-method';
import Profile from '../../pages/profile/profile';
import SearchPackage from '../../pages/search-package/search-package';
import SearchRide from '../../pages/search-ride/search-ride';
import AddTransport from '../../pages/add-transport/add-transport';
import CourierProfile from '../../pages/courier-profile/courier-profile';
import Conversations from '../../pages/conversations/conversations';
import Chat from '../../pages/conversations/chat/chat';
import adminPanel from '../../pages/admin-panel/adminPanel';
import HowItWorks from '../../pages/footer-pages/how-it-works/how-it-works';
import AboutUs from '../../pages/footer-pages/about-us/about-us';
import FrequentQuestions from '../../pages/footer-pages/frequent-questions/frequent-questions';
import NewsAndFuturePlans from '../../pages/footer-pages/news-and-future-plans/news-and-future-plans';
import Contact from '../../pages/footer-pages/contact/contact';
import TermsAndConditions from '../../pages/footer-pages/terms-and-conditions/terms-and-conditions';
import Press from '../../pages/footer-pages/press/press';
import Reviews from '../../pages/footer-pages/reviews/reviews';
import Career from '../../pages/footer-pages/career/career';
import MobileApplication from '../../pages/footer-pages/mobile-application/mobile-application';
import WhyUseOurServices from '../../pages/footer-pages/why-use-our-services/why-use-our-services';
import Vouchers from '../../pages/footer-pages/vouchers/vouchers';
import ProtectedRoute from '../ProtectedRoute/protected-route';
import PrivacyPolicy from '../../pages/footer-pages/privacy-policy/privacyPolicy';
import CookiesPolicy from '../../pages/footer-pages/cookies-policy/cookiesPolicy';
import './Routing.css';
import { connect } from 'react-redux';

const Routes = ({data}) => {
    const [collapsed, setCollapsed] = useState(false);
    const onCollapse = () => {
        setCollapsed(!collapsed);
      };

    const[isLoggedIn, setIsLoggedIn] = useState(Boolean(localStorage.getItem('isLoggedIn')))

    useEffect(()=>{
        localStorage.setItem('isLoggedIn', true);
    }, [])
    

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
                        <div className="sbd-header">
                            {isLoggedIn === false ? <HeaderLogedIn/> : <HeaderLogedOut/>}
                        </div>
                        <div className="sbd-container-content">
                            <Switch>
                                <ProtectedRoute path="/add-package" exact component={AddPackage}/>  {/* checked */}
                                <ProtectedRoute path="/my-packages" exact component={MyPackages}/>  {/* checked */}
                                <ProtectedRoute path="/my-rides" exact component={MyRides}/>  {/* checked */}
                                <ProtectedRoute path="/notifications" exact component={Notifications}/>  {/* checked */}
                                <ProtectedRoute path="/payment-method" exact component={PaymentMethod}/>
                                <ProtectedRoute path="/payment-method/add-payment-method" exact component={AddPaymentMethod}/>
                                <ProtectedRoute path="/profile" exact component={Profile}/>
                                <ProtectedRoute path="/search-package" exact component={SearchPackage}/>
                                <ProtectedRoute path="/search-ride" exact component={SearchRide}/>
                                <ProtectedRoute path="/conversations" exact component={Conversations}/>
                                <ProtectedRoute path="/conversations/chat" exact component={Chat}/>
                                <ProtectedRoute path="/add-transport" exact component={AddTransport}/>  {/* checked */}
                                <Route path="/" exact component={HomePage}/>
                                <Route path="/home" exact component={HomePage}/>
                                <Route path="/login" exact component={Login}/>
                                <Route path="/login/forgot-password" exact component={ForgotPassword}/>
                                <Route path="/reset-password" exact component={ResetPassword}/>
                                <Route path="/login/forgot-password/email-sent" exact component={EmailSent}/>
                                <Route path="/register" exact component={Register}/>
                                <Route path="/register/phone-number-verification" exact component={PhoneNumberVerification}/>
                                <Route path="/register/select-plan" exact component={SelectPlan}/>
                                <Route path="/register/select-plan/add-card" exact component={PremiumPlanPayment}/>
                                <Route path="/courier-profile" exact component={CourierProfile}/>
                                <Route path="/admin-panel" exact component={adminPanel}/>
                                <Route path="/how-it-works" exact component={HowItWorks}/>
                                <Route path="/about-us" exact component={AboutUs}/>
                                <Route path="/frequent-questions" exact component={FrequentQuestions}/>
                                <Route path="/news-and-future-plans" exact component={NewsAndFuturePlans}/>
                                <Route path="/contact" exact component={Contact}/>
                                <Route path="/terms-and-conditions" exact component={TermsAndConditions}/>
                                <Route path="/press" exact component={Press}/>
                                <Route path="/reviews" exact component={Reviews}/>
                                <Route path="/career" exact component={Career}/>
                                <Route path="/mobile-application" exact component={MobileApplication}/>
                                <Route path="/why-use-our-services" exact component={WhyUseOurServices}/>
                                <Route path="/vouchers" exact component={Vouchers}/>
                                <Route path="/privacy-policy" exact component={PrivacyPolicy}/>
                                <Route path="/cookies-policy" exact component={CookiesPolicy}/>
                                <Route component={HomePage} />
                            </Switch>
                        </div>
                        <div className='sbd-footer'>
                            <Footer />
                        </div>
                    </div>
                // )
            }
        </Router>
    )
}

const mapStateToProps = state => ({data: state.userData})

export default connect(mapStateToProps, null)(Routes);
