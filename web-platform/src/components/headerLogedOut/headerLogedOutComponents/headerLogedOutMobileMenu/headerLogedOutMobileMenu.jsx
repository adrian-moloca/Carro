import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { IconButton, ListItem, List, Drawer, Box } from "@material-ui/core";
import BasicSelect from '../../../buttons/languageButton/languageButton';
import SearchIcon from '@material-ui/icons/Search';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import useStyles from '../../../headerLogedIn/HeaderLogedInStyle';
import { useTranslation } from 'react-i18next';

const LogedOutMobileMenu = () => {

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
      <Drawer anchor={'right'} open={mobileMoreAnchorEl} onClose={() => setMobileMoreAnchorEl(false)}>
        <List>
          <Link to="/login" className={classes.linkBtn}>  
              <ListItem onClick={() => setMobileMoreAnchorEl(false)}>
                <SearchIcon/>
                <Box fontSize={18} marginLeft='10px'>
                  {t("SearchPackage")}
                </Box>
              </ListItem>
          </Link>
          <Link to="/login" className={classes.linkBtn}>
              <ListItem onClick={() => setMobileMoreAnchorEl(false)}>
                <DriveEtaIcon/>
                <Box fontSize={18} marginLeft='10px'>
                  {t("SearchRideTitle")}
                </Box>
              </ListItem>
          </Link>
          <Link to="/login" className={classes.linkBtn}>  
              <ListItem onClick={() => setMobileMoreAnchorEl(false)}>
              <AccountCircleIcon/>
                <Box fontSize={18} marginLeft='10px'>
                  {t("Login")}
                </Box>
              </ListItem>
          </Link>
          <Link to="/register" className={classes.linkBtn}>  
              <ListItem onClick={() => setMobileMoreAnchorEl(false)}>
              <ExitToAppIcon/>
                <Box fontSize={18} marginLeft='10px'>
                  {t("Register")}
                </Box>
              </ListItem>
          </Link>
          <ListItem>
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
        onClick={() => setMobileMoreAnchorEl(true)}
        color="inherit"
      >
        <MenuIcon />
      </IconButton>
      {mobile()}
    </Box>
  );
};

export default LogedOutMobileMenu;