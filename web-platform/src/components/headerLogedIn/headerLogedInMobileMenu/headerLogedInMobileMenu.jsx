import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { IconButton, List, ListItem, Drawer, Box } from "@material-ui/core";
import BasicSelect from '../../buttons/languageButton/languageButton';
import { Queue } from '@material-ui/icons';
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

  const handleSliderMenu = (value) => {
    setMobileMoreAnchorEl(value);
  }

  useEffect(() => {

  }, [t, setMobileMoreAnchorEl])

  const mobile = () => {
    return (
      <Drawer anchor={'right'} open={mobileMoreAnchorEl} onClose={() => handleSliderMenu(false)}>
        <List>
            <Link to="/add-package" className={classes.linkBtn}>
                    <ListItem onClick={() => handleSliderMenu(false)}>
                      <Queue/>
                      <Box  fontSize={18} marginLeft='10px'>
                        {t("HomePageLeftButtonText")}
                      </Box>
                    </ListItem>
            </Link>
            <Link to="/add-transport" className={classes.linkBtn}>
                    <ListItem onClick={() => handleSliderMenu(false)}>
                      <Queue/>
                      <Box  fontSize={18} marginLeft='10px'>
                        {t("HomePageRightButtonText")}
                      </Box>
                    </ListItem>
            </Link>
            <Link to="/search-package" className={classes.linkBtn}>  
                <ListItem onClick={() => handleSliderMenu(false)}>
                  <SearchIcon/>
                  <Box fontSize={18} marginLeft='10px'>
                  {t("SearchPackage")}
                  </Box>
                </ListItem>
            </Link>
            <Link to="/search-ride" className={classes.linkBtn}>
                <ListItem onClick={() => handleSliderMenu(false)}>
                  <DriveEtaIcon/>
                  <Box fontSize={18} marginLeft='10px'>
                  {t("SearchRideTitle")}
                  </Box>
                </ListItem>
            </Link>
                <HeaderLogedInProfileMenuMobile handler={handleSliderMenu}/>
            <ListItem className={[classes.sectionMobile, classes.zoomIn]}>
                <BasicSelect handler={handleSliderMenu}/>
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
        onClick={() => handleSliderMenu(true)}
        color="inherit"
      >
        <MenuIcon />
      </IconButton>
      {mobile()}
    </Box>
  );
};

export default LogedInMobileMenu;