import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { IconButton, MenuItem, Menu, Grid, Box } from "@material-ui/core";
import BasicSelect from '../../../buttons/languageButton/languageButton';
import SearchIcon from '@material-ui/icons/Search';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const RenderMobileMenu = () => {

  // State
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
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
        <Grid container display="flex" justifyContent="center" alignItems="center">
          <Grid item xs={12}>
            <MenuItem>
              <Link to="/login" style={{display: 'flex', textDecoration:'none', color: 'inherit', width:'100%'}}>
                  <Box mr={2}>
                    <SearchIcon/>
                  </Box>
                  <Box>
                    Cauta Pachet
                  </Box>
              </Link>
            </MenuItem>
          </Grid>
          <Grid item xs={12}>
            <MenuItem>
              <Link to="/login"  style={{display: 'flex', textDecoration:'none',color: 'inherit', width:'100%'}}>
                  <Box mr={2}>
                    <DriveEtaIcon/>
                  </Box>
                  <Box>
                    Cauta Transport
                  </Box>
              </Link>
            </MenuItem>
          </Grid>
          <Grid item xs={12}>
            <MenuItem>
              <Link to="/login"  style={{display: 'flex', textDecoration:'none', color: 'inherit', width:'100%'}}>
                  <Box mr={2}>
                    <AccountCircleIcon/>
                  </Box>
                  <Box>
                    Autentificare
                  </Box>
              </Link>
            </MenuItem>
          </Grid>
          <Grid item xs={12}>
            <MenuItem>
              <Link to="/register"  style={{display: 'flex', textDecoration:'none', color: 'inherit', width:'100%'}}>
                  <Box mr={2}>
                    <ExitToAppIcon/>
                  </Box>
                  <Box>
                    Inregistrare
                  </Box>
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