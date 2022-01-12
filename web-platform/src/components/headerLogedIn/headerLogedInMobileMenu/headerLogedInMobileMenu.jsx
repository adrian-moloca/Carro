import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { IconButton, List, ListItem, Drawer, Box } from "@material-ui/core";
import BasicSelect from '../../buttons/languageButton/languageButton';
import SearchIcon from '@material-ui/icons/Search';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import MenuIcon from '@material-ui/icons/Menu';
import useStyles from '../HeaderLogedInStyle';
import { useTranslation } from 'react-i18next';
import HeaderLogedInProfileMenuMobile from './headerLogedInProfileMenuMobile';

const LogedInMobileMenu = () => {

  const classes = useStyles();
  const {t} = useTranslation();

  // State
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(false);

  useEffect(() => {

  }, [t])

  const mobile = () => {
    return (
      <Drawer anchor={'right'} open={mobileMoreAnchorEl} onClose={() => setMobileMoreAnchorEl(false)}>
        <List>
            <Link to="/search-package" className={classes.linkBtn}>  
                <ListItem onClick={() => setMobileMoreAnchorEl(false)}>
                  <SearchIcon/>
                  <Box fontSize={18} marginLeft='10px'>
                  {t("SearchPackage")}
                  </Box>
                </ListItem>
            </Link>
            <Link to="/search-ride" className={classes.linkBtn}>
                <ListItem onClick={() => setMobileMoreAnchorEl(false)}>
                  <DriveEtaIcon/>
                  <Box fontSize={18} marginLeft='10px'>
                  {t("SearchRideTitle")}
                  </Box>
                </ListItem>
            </Link>
                <HeaderLogedInProfileMenuMobile setMobileMoreAnchorEl={setMobileMoreAnchorEl}/>
            <ListItem>
                <BasicSelect setMobileMoreAnchorEl={setMobileMoreAnchorEl}/>
            </ListItem>
          </List>
      </Drawer>
    );
  };

  return(
    <Box>
      <IconButton
        aria-label="show more"
        aria-haspopup="true"
        onClick={() => setMobileMoreAnchorEl(true)}
        color="inherit"
      >
        <MenuIcon />
      </IconButton>
      {mobile()}
    </Box>
  );
};

export default LogedInMobileMenu;