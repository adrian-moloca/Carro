import React from 'react';
import HeaderLogedInProfileMenu from '../headerLogedInProfileMenu/headerLogedInProfileMenu'
import { Link } from 'react-router-dom';
import { IconButton, MenuItem, Menu, Grid, Box } from "@material-ui/core";
import BasicSelect from '../../buttons/languageButton/languageButton';
import SearchIcon from '@material-ui/icons/Search';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import MenuIcon from '@material-ui/icons/Menu';
import useStyles from '../HeaderLogedInStyle';

const RenderMobileMenu = () => {

  const classes=useStyles();

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
            <Link to="/search-package" className={classes.linkBtn}>  
                <MenuItem onClick={handleMobileMenuClose}>
                  <SearchIcon/>
                  <Box fontSize={18} marginLeft='10px'>
                    Cauta Pachet
                  </Box>
                </MenuItem>
            </Link>
            <Link to="/search-ride" className={classes.linkBtn}>
                <MenuItem onClick={handleMobileMenuClose}>
                  <DriveEtaIcon/>
                  <Box fontSize={18} marginLeft='10px'>
                    Cauta Transport
                  </Box>
                </MenuItem>
            </Link>
            <MenuItem onClick={handleMobileMenuClose}>
                <HeaderLogedInProfileMenu/>
            </MenuItem>
            <MenuItem onClick={handleMobileMenuClose}>
                <BasicSelect/>
            </MenuItem>
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