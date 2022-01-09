import React, { useState, Fragment, useEffect} from "react";
import { Link, useHistory, Redirect } from "react-router-dom";
import { ButtonBase, MenuItem, Menu, Grid, Box} from "@material-ui/core";
import {LocalMallOutlined, LocalShippingOutlined, AccountCircleOutlined,
      CreditCardOutlined, CancelOutlined, AccountCircle,
      Message, Security} from '@material-ui/icons';
import { Fade } from "@material-ui/core";
import useStyles from './headerLogedInProfileMenuStyle'
import { useTranslation } from 'react-i18next';
import { connect } from "react-redux";
import { compose } from "redux";
import { fetchLogout } from "../../../redux/types/UserTypes";
import { fetchMyPackages } from "../../../redux/actions/MyPackagesActions";
import { withRouter } from "react-router";
import { fetchMyRides } from "../../../redux/actions/MyRidesActions";

const HeaderLogedInProfileMenu = ({userData, fetchLogout, fetchMyPackages, fetchMyRides, myPackagesData, myRidesData}) => {
  const { t } = useTranslation();
  const history = useHistory();
  // State
  const[fetchMyPackagesSuccess, setFetchMyPackagesSuccess] = useState(false);
  const[fetchMyRidesSuccess, setFetchMyRidesSuccess] = useState(false);
  const [anchorEl, setAnchorEl]= useState(null);
  const accountMenuOpen = Boolean(anchorEl);
  
  const handleToggleAccountMenuOpen = (event) =>{
    setAnchorEl(event.currentTarget);
  } 
  const handleAccountMenuClose = () =>{
    setAnchorEl(null);
  }
  const redirectAfterFetchMyPackagesSuccess = () => {
    if(fetchMyPackagesSuccess === true)
        history.push('/my-packages');
    else 
        history.push('/home');
  }

  const redirectAfterFetchMyRidesSuccess = () => {
    if(fetchMyRidesSuccess === true)
        history.push('/my-rides');
    else 
        history.push('/home');
  }

  useEffect(() => {
    setFetchMyRidesSuccess(myRidesData.hasErrors === true ? false : true);
  }, [myRidesData, userData])

  useEffect(()=>{
    setFetchMyPackagesSuccess(myPackagesData.hasErrors === true ? false : true);
  }, [myPackagesData, userData])



  const [userType, setUserType] = useState(null);
  
  const classes = useStyles();

  return(
    <Fragment>
      <ButtonBase
        disableRipple
        aria-controls="account-menu"
        aria-haspopup="true"
        onClick={handleToggleAccountMenuOpen}
        color="inherit"
      >
        <AccountCircle/>
        <Box fontSize={18} marginLeft='10px'>{t("MyAccount")}</Box>
      </ButtonBase>
      <Menu open={accountMenuOpen}
            className={classes.widthMenu}
            keepMounted
            anchorEl={anchorEl}
            TransitionComponent={Fade}
            onClose={handleAccountMenuClose}
            id="account-menu"
      >
              <MenuItem dense onClick={()=>{
                        handleAccountMenuClose();
                        setTimeout(()=>redirectAfterFetchMyPackagesSuccess(), 500)
                        fetchMyPackages(userData.token);
                }}>
                  <Box mr={2} className={"Primary-color"}>
                    <LocalMallOutlined/>
                  </Box>
                  <Box fontWeight='500'>
                    {t("MyPackages")}
                  </Box>
              </MenuItem>
            <Link to="/my-rides" style={{textDecoration:'none' ,color:'inherit'}}>
              <MenuItem dense onClick={()=>{
                        handleAccountMenuClose();
                        redirectAfterFetchMyRidesSuccess()
                        fetchMyRides(userData.token);
                }}>
                  <Box mr={2} className={"Primary-color"}>
                    <LocalShippingOutlined/>
                  </Box>
                  <Box fontWeight='500'>
                    {t("MyRides")}
                  </Box>
              </MenuItem>
            </Link>
            <Link to="/profile" style={{textDecoration:'none' ,color:'inherit'}}>
              <MenuItem dense onClick={handleAccountMenuClose}>
                <Box mr={2} className={"Primary-color"}>
                  <AccountCircleOutlined/>
                </Box>
                <Box fontWeight='500'>
                {t("Profile")}
                </Box>
              </MenuItem>
            </Link>
            <Link to="/payment-method" style={{textDecoration:'none' ,color:'inherit'}}>
              <MenuItem dense onClick={handleAccountMenuClose}>
                  <Box mr={2} className={"Primary-color"}>
                    <CreditCardOutlined/>
                  </Box>
                  <Box fontWeight='500'>
                    {t("PaymentMethod")}
                  </Box>
              </MenuItem>
            </Link>
            <Link to="/conversations" style={{textDecoration:'none' ,color:'inherit'}}>
              <MenuItem dense onClick={handleAccountMenuClose}>
                  <Box mr={2} className={"Primary-color"}>
                    <Message/>
                  </Box>
                  <Box>
                    Chat
                  </Box>
              </MenuItem>
            </Link>
            <Link to="/" style={{textDecoration:'none' ,color:'inherit'}}>
              <MenuItem dense onClick={() => {setAnchorEl(null); localStorage.removeItem('state'); fetchLogout()}}>
                  <Box mr={2} className={"Pink-carro"}>
                    <CancelOutlined/>
                  </Box>
                  <Box>
                  {t("Logout")}
                  </Box>
              </MenuItem>
            </Link>
          {/* {userType === "userAdmin" ? ( */}
            <Grid item xs={12}>
              <Box className={classes.borderForAdmin}></Box>
            </Grid>
          {/* ): null}  */}
          {/* {userType === "userAdmin" ? ( */}
              <Link to="/admin-panel" style={{textDecoration:'none' ,color:'inherit'}}>
                <MenuItem dense onClick={handleAccountMenuClose}>
                      <Box mr={2} className={"Primary-color"}>
                        <Security/>
                      </Box>
                      <Box fontWeight='500'>
                        {t("AdminPanel")}
                      </Box>
                </MenuItem>
              </Link>
          {/* ): null}  */}
      </Menu>
    </Fragment>

  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchLogout: () => dispatch(fetchLogout()),
  fetchMyPackages: (token) => dispatch(fetchMyPackages(token)),
  fetchMyRides: (token) => dispatch(fetchMyRides(token))
})

const mapStateToProps = state =>({userData: state.userData, myPackagesData: state.myPackagesData, myRidesData: state.myRidesData})

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
)(HeaderLogedInProfileMenu);