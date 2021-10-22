import React, { useState, Fragment} from "react";
import { Link } from "react-router-dom";
import { ButtonBase, MenuItem, Menu, Grid, Box} from "@material-ui/core";
import {LocalMallOutlined, LocalShippingOutlined, AccountCircleOutlined,
      CreditCardOutlined, CancelOutlined, AccountCircle,
      Message, Security} from '@material-ui/icons';
import { Fade } from "@material-ui/core";
import useStyles from './headerLogedInProfileMenuStyle'
import { useTranslation } from 'react-i18next';

const HeaderLogedInProfileMenu = () => {
  const { t } = useTranslation();
  // State
  const [anchorEl, setAnchorEl]= useState(null);
  const accountMenuOpen = Boolean(anchorEl);
  
  const handleToggleAccountMenuOpen = (event) =>{
    setAnchorEl(event.currentTarget);
  } 
  const handleAccountMenuClose = () =>{
    setAnchorEl(null);
  }

  const [userType, setUserType] = useState(null);
  
  const classes = useStyles();

  const users = [
    {
      value: "userAdmin",
      label: "Profil admin",
    },
  ]

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
            <Link to="/my-packages" style={{textDecoration:'none' ,color:'inherit'}}>
              <MenuItem dense onClick={handleAccountMenuClose}>
                  <Box mr={2} className={"Primary-color"}>
                    <LocalMallOutlined/>
                  </Box>
                  <Box fontWeight='500'>
                    {t("MyPackages")}
                  </Box>
              </MenuItem>
            </Link>
            <Link to="/my-rides" style={{textDecoration:'none' ,color:'inherit'}}>
              <MenuItem dense onClick={handleAccountMenuClose}>
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
              <MenuItem dense onClick={handleAccountMenuClose}>
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

export default HeaderLogedInProfileMenu;