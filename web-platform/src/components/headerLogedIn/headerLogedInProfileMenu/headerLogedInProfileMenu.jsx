import React from 'react';
import { Link, IconButton, MenuItem, Menu, Grid, Box } from "@material-ui/core";
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import LocalShippingOutlinedIcon from '@material-ui/icons/LocalShippingOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import CreditCardOutlinedIcon from '@material-ui/icons/CreditCardOutlined';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MessageIcon from '@material-ui/icons/Message';

const HeaderLogedInProfileMenu = () => {

  // State
  const [accountAnchorEl, setAccountAnchorEl] = React.useState(null);
  const isAccountMenuOpen = Boolean(accountAnchorEl);
  const handleProfileAccountMenuOpen = (event) => setAccountAnchorEl(event.currentTarget);
  const handleMenuAccountClose = () =>  setAccountAnchorEl(null);

  const profile = () => {
    return (
      <Menu
        anchorEl={accountAnchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isAccountMenuOpen}
        onClose={handleMenuAccountClose}
      >
        <Grid container display="flex" justifyContent="center" alignItems="center" flexDirection="column" fullWidth>
          <Grid item xs={12}>
            <MenuItem>
              <Link href="/my-packages" underline= 'none' color= 'inherit'>
                <IconButton color="inherit">
                  <Box mr={2} className={"Primary-color"}>
                    <LocalMallOutlinedIcon/>
                  </Box>
                  <Box>
                    Pachetele mele
                  </Box>
                </IconButton>
              </Link>
            </MenuItem>
          </Grid>
          <Grid item xs={12}>
            <MenuItem>
              <Link href="/my-rides" underline= 'none' color= 'inherit'>
                <IconButton color="inherit">
                  <Box mr={2} className={"Primary-color"}>
                    <LocalShippingOutlinedIcon/>
                  </Box>
                  <Box>
                    Transporturile mele
                  </Box>
                </IconButton>
              </Link>
            </MenuItem>
          </Grid>
          <Grid item xs={12}>
            <MenuItem>
              <Link href="/profile" underline= 'none' color= 'inherit'>
                <IconButton color="inherit">
                  <Box mr={2} className={"Primary-color"}>
                    <AccountCircleOutlinedIcon/>
                  </Box>
                  <Box>
                    Profil
                  </Box>
                </IconButton>
              </Link>
            </MenuItem>
          </Grid>
          <Grid item xs={12}>
            <MenuItem>
              <Link href="/payment-method" underline= 'none' color= 'inherit'>
                <IconButton color="inherit">
                  <Box mr={2} className={"Primary-color"}>
                    <CreditCardOutlinedIcon/>
                  </Box>
                  <Box>
                    Metoda de plata
                  </Box>
                </IconButton>
              </Link>
            </MenuItem>
          </Grid>
          <Grid item xs={12}>
            <MenuItem>
              <Link href="/conversations" underline= 'none' color= 'inherit'>
                <IconButton color="inherit">
                  <Box mr={2} className={"Primary-color"}>
                    <MessageIcon/>
                  </Box>
                  <Box>
                    Conversatii
                  </Box>
                </IconButton>
              </Link>
            </MenuItem>
          </Grid>
          <Grid item xs={12}>
            <MenuItem>
              <Link href="/" underline= 'none' color= 'inherit'>
                <IconButton color="inherit">
                  <Box mr={2} className={"Pink-carro"}>
                    <CancelOutlinedIcon/>
                  </Box>
                  <Box>
                    Iesire din cont
                  </Box>
                </IconButton>
              </Link>
            </MenuItem>
          </Grid>
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