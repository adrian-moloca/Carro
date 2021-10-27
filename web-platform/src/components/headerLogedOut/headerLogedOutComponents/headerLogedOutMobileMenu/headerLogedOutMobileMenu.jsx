import React from 'react';
import { Link, IconButton, MenuItem, Menu, Grid, Box } from "@material-ui/core";
import BasicSelect from '../../../buttons/languageButton/languageButton';
import SearchIcon from '@material-ui/icons/Search';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const RenderMobileMenu = () => {

  // State
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const handleMobileMenuClose = () => setMobileMoreAnchorEl(null);
  const handleMobileMenuOpen = (event) => setMobileMoreAnchorEl(event.currentTarget);

  const mobile = () => {
    return (
      <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
      >
        <Grid container display="flex" justifyContent="center" alignItems="center" fullWidth>
          <Grid item xs={12}>
            <MenuItem>
              <Link href="/login" underline= 'none' color= 'inherit'>
                <IconButton color="inherit">
                  <Box mr={2}>
                    <SearchIcon/>
                  </Box>
                  <Box>
                    Cauta Pachet
                  </Box>
                </IconButton>
              </Link>
            </MenuItem>
          </Grid>
          <Grid item xs={12}>
            <MenuItem>
              <Link href="/login" underline= 'none' color= 'inherit'>
                <IconButton color="inherit">
                  <Box mr={2}>
                    <DriveEtaIcon/>
                  </Box>
                  <Box>
                    Cauta Transport
                  </Box>
                </IconButton>
              </Link>
            </MenuItem>
          </Grid>
          <Grid item xs={12}>
            <MenuItem>
              <Link href="/login" underline= 'none' color= 'inherit'>
                <IconButton color="inherit">
                  <Box mr={2}>
                    <AccountCircleIcon/>
                  </Box>
                  <Box>
                    Autentificare
                  </Box>
                </IconButton>
              </Link>
            </MenuItem>
          </Grid>
          <Grid item xs={12}>
            <MenuItem>
              <Link href="/register" underline= 'none' color= 'inherit'>
                <IconButton color="inherit">
                  <Box mr={2}>
                    <ExitToAppIcon/>
                  </Box>
                  <Box>
                    Inregistrare
                  </Box>
                </IconButton>
              </Link>
            </MenuItem>
          </Grid>
          <Grid item xs={12}>
            <MenuItem>
              <BasicSelect/>
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
        onClick={handleMobileMenuOpen}
        color="inherit"
      >
        <MenuIcon />
      </IconButton>
      {mobile()}
    </Box>
  );
};

export default RenderMobileMenu;