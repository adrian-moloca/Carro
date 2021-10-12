import React, { useState } from "react";
import { Link, IconButton, MenuItem, Menu, Grid, Box } from "@material-ui/core";
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import LocalShippingOutlinedIcon from '@material-ui/icons/LocalShippingOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import CreditCardOutlinedIcon from '@material-ui/icons/CreditCardOutlined';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MessageIcon from '@material-ui/icons/Message';
import SecurityIcon from '@material-ui/icons/Security';
import useStyles from './headerLogedInProfileMenuStyle'

const HeaderLogedInProfileMenu = () => {

  // State
  const [accountAnchorEl, setAccountAnchorEl] = React.useState(null);
  const isAccountMenuOpen = Boolean(accountAnchorEl);
  const handleProfileAccountMenuOpen = (event) => setAccountAnchorEl(event.currentTarget);
  const handleMenuAccountClose = () =>  setAccountAnchorEl(null);

  const [userType, setUserType] = useState(null);
  
  const classes = useStyles();

  const users = [
    {
      value: "userAdmin",
      label: "Profil admin",
    },
  ]
  
  const profile = () => {
    return (
      <Menu
        anchorEl={accountAnchorEl}
        keepMounted
        open={isAccountMenuOpen}
        onClose={handleMenuAccountClose}
        className={classes.widthMenu}
      >
        <Grid container display="flex" justifyContent="center" alignItems="center" flexDirection="column">
          <Grid item xs={12}>
            <Link href="/my-packages" underline= 'none' color= 'inherit'>
              <MenuItem dense>
                  <Box mr={2} className={"Primary-color"}>
                    <LocalMallOutlinedIcon/>
                  </Box>
                  <Box>
                    Pachetele mele
                  </Box>
              </MenuItem>
            </Link>
          </Grid>
          <Grid item xs={12}>
            <Link href="/my-rides" underline= 'none' color= 'inherit'>
              <MenuItem dense>
                  <Box mr={2} className={"Primary-color"}>
                    <LocalShippingOutlinedIcon/>
                  </Box>
                  <Box>
                    Transporturile mele
                  </Box>
              </MenuItem>
            </Link>
          </Grid>
          <Grid item xs={12}>
              <Link href="/profile" underline= 'none' color= 'inherit'>
                <MenuItem dense>
                  <Box mr={2} className={"Primary-color"}>
                    <AccountCircleOutlinedIcon/>
                  </Box>
                  <Box>
                    Profil
                  </Box>
                </MenuItem>
              </Link>
          </Grid>
          <Grid item xs={12}>
            <Link href="/payment-method" underline= 'none' color= 'inherit'>
              <MenuItem dense>
                  <Box mr={2} className={"Primary-color"}>
                    <CreditCardOutlinedIcon/>
                  </Box>
                  <Box>
                    Metoda de plata
                  </Box>
              </MenuItem>
            </Link>
          </Grid>
          <Grid item xs={12}>
            <Link href="/conversations" underline= 'none' color= 'inherit'>
              <MenuItem dense>
                  <Box mr={2} className={"Primary-color"}>
                    <MessageIcon/>
                  </Box>
                  <Box>
                    Conversatii
                  </Box>
              </MenuItem>
            </Link>
          </Grid>
          <Grid item xs={12}>
            <Link href="/" underline= 'none' color= 'inherit'>
              <MenuItem dense>
                  <Box mr={2} className={"Pink-carro"}>
                    <CancelOutlinedIcon/>
                  </Box>
                  <Box>
                    Iesire din cont
                  </Box>
              </MenuItem>
            </Link>
          </Grid>
          {/* {userType === "userAdmin" ? ( */}
            <Grid item xs={12}>
              <Box className={classes.borderForAdmin} fullWidth></Box>
            </Grid>
          {/* ): null}  */}
          {/* {userType === "userAdmin" ? ( */}
            <Grid item xs={12}>
              <Link href="/admin-panel" underline= 'none' color= 'inherit'>
                <MenuItem dense>
                      <Box mr={2} className={"Primary-color"}>
                        <SecurityIcon/>
                      </Box>
                      <Box>
                        Panou admin
                      </Box>
                </MenuItem>
              </Link>
            </Grid>
          {/* ): null}  */}
        </Grid> 
      </Menu>
    );
  };

  return(
    <Box>
      <IconButton
        aria-label="show more"
        aria-haspopup="true"
        onClick={handleProfileAccountMenuOpen}
        color="inherit"
      >
        <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center">
          <Box mr={2}>
            <AccountCircle/>
          </Box>
          <Box>
            Contul meu
          </Box>
        </Box>
      </IconButton>
      {profile()}
    </Box>
  );
};

export default HeaderLogedInProfileMenu;