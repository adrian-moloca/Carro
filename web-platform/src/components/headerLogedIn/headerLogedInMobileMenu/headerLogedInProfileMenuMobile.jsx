import React, {useState, Fragment, useEffect} from 'react';
import { AccountCircle, ExpandLess, ExpandMore, LocalMallOutlined,LocalShippingOutlined, AccountCircleOutlined, CreditCardOutlined, CancelOutlined, Security } from '@material-ui/icons';
import { List, ListItem, Collapse, Box, Grid} from '@material-ui/core';
import { Link, useHistory } from "react-router-dom";
import useStyles from '../headerLogedInProfileMenu/headerLogedInProfileMenuStyle'
import { useTranslation } from 'react-i18next';
import { connect } from "react-redux";
import { compose } from "redux";
import { fetchLogout } from "../../../redux/types/UserTypes";
import { fetchMyPackages } from "../../../redux/actions/MyPackagesActions";
import { withRouter } from "react-router";
import { fetchMyRides } from "../../../redux/actions/MyRidesActions";

const HeaderLogedInProfileMenuMobile = ({userData, fetchLogout, fetchMyPackages, fetchMyRides, myPackagesData, myRidesData, setMobileMoreAnchorEl}) => {

    const {t} = useTranslation();
    const history = useHistory();
    const classes = useStyles();

    const [open, setOpen] = useState(true);
    const [fetchMyPackagesSuccess, setFetchMyPackagesSuccess] = useState(false);
    const [fetchMyRidesSuccess, setFetchMyRidesSuccess] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    const myPackageLinkAction = () => {

        fetchMyPackages(userData.token);

        setMobileMoreAnchorEl(false);

        setTimeout(() => {
            if(fetchMyPackagesSuccess === true)
                history.push('/my-packages');
            else 
                history.push('/home');
        }, 500);
        
    }

    const myRideLinkAction = () => {

        fetchMyRides(userData.token);

        setMobileMoreAnchorEl(false);

        setTimeout(() => {
            if(fetchMyRidesSuccess === true)
                history.push('/my-rides');
            else 
                history.push('/home');
        }, 500);
        
    }

    const logOutAction = () => {

        fetchLogout();

        setMobileMoreAnchorEl(false);

        localStorage.removeItem('state');

    }

    useEffect(()=>{
        setFetchMyPackagesSuccess(myPackagesData.hasErrors === true ? false : true);
      }, [myPackagesData, userData]);

    useEffect(() => {
    setFetchMyRidesSuccess(myRidesData.hasErrors === true ? false : true);
    }, [myRidesData, userData])

    return(
        <Fragment>
            <ListItem button onClick={handleClick}>
                <AccountCircle/>
                <Box fontSize={18} marginLeft='10px'>{t("MyAccount")}</Box>
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <Link to="/my-rides" style={{textDecoration:'none' ,color:'inherit'}}>
                        <ListItem dense onClick={() => myPackageLinkAction()}>
                            <Box mr={2} className={"Primary-color"}>
                                <LocalMallOutlined/>
                            </Box>
                            <Box fontWeight='500'>
                                {t("MyPackages")}
                            </Box>
                        </ListItem>
                    </Link>
                    <Link to="/my-rides" style={{textDecoration:'none' ,color:'inherit'}}>
                        <ListItem dense onClick={() => myRideLinkAction()}>
                            <Box mr={2} className={"Primary-color"}>
                                <LocalShippingOutlined/>
                            </Box>
                            <Box fontWeight='500'>
                                {t("MyRides")}
                            </Box>
                        </ListItem>
                    </Link>
                    <Link to="/profile" style={{textDecoration:'none' ,color:'inherit'}}>
                        <ListItem dense onClick={() => setMobileMoreAnchorEl(false)}>
                            <Box mr={2} className={"Primary-color"}>
                                <AccountCircleOutlined/>
                            </Box>
                            <Box fontWeight='500'>
                                {t("Profile")}
                            </Box>
                        </ListItem>
                    </Link>
                    <Link to="/payment-method" style={{textDecoration:'none' ,color:'inherit'}}>
                        <ListItem dense onClick={() => setMobileMoreAnchorEl(false)}>
                            <Box mr={2} className={"Primary-color"}>
                                <CreditCardOutlined/>
                            </Box>
                            <Box fontWeight='500'>
                                {t("PaymentMethod")}
                            </Box>
                        </ListItem>
                    </Link>
                    {/* <Link to="/conversations" style={{textDecoration:'none' ,color:'inherit'}}>
                    <ListItem dense onClick={() => setMobileMoreAnchorEl(false)}>
                        <Box mr={2} className={"Primary-color"}>
                            <Message/>
                        </Box>
                        <Box>
                            Chat
                        </Box>
                    </ListItem>
                    </Link> */}
                    <Link to="/" style={{textDecoration:'none' ,color:'inherit'}}>
                        <ListItem dense onClick={() => logOutAction()}>
                            <Box mr={2} className={"Pink-carro"}>
                                <CancelOutlined/>
                            </Box>
                            <Box>
                                {t("Logout")}
                            </Box>
                        </ListItem>
                    </Link>
                    {userData.UserRole === "Admin" ? (
                        <div>
                            <Grid item xs={12}>
                                <Box className={classes.borderForAdmin}></Box>
                            </Grid>
                            <Link to="/admin-panel" style={{textDecoration:'none' ,color:'inherit'}}>
                                <ListItem dense onClick={() => setMobileMoreAnchorEl(false)}>
                                    <Box mr={2} className={"Primary-color"}>
                                        <Security/>
                                    </Box>
                                    <Box fontWeight='500'>
                                        {t("AdminPanel")}
                                    </Box>
                                </ListItem>
                            </Link>
                        </div>
                        )  : null
                    }
                </List>
            </Collapse>
      </Fragment>
    )
}

const mapDispatchToProps = (dispatch) => ({
    fetchLogout: () => dispatch(fetchLogout()),
    fetchMyPackages: (token) => dispatch(fetchMyPackages(token)),
    fetchMyRides: (token) => dispatch(fetchMyRides(token))
  })
  
  const mapStateToProps = state =>({userData: state.userData, myPackagesData: state.myPackagesData, myRidesData: state.myRidesData})

export default compose(withRouter,connect(mapStateToProps, mapDispatchToProps))(HeaderLogedInProfileMenuMobile);
