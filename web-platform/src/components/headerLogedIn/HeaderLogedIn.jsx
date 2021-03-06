import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Box, Grid} from "@material-ui/core";
import CaroLogo from '../../assets/logo/CaroLogo.png';
import BadgeVisibility from '../NotificationsComponent/notificomp';
import ChatButtonVisibility from '../ChatComponent/chatcomp';
import BasicSelect from '../buttons/languageButton/languageButton'
import RenderMenuSBD from './headerLogedInMenu/headerLogedInMenu';
import LogedInMobileMenu from './headerLogedInMobileMenu/headerLogedInMobileMenu';
import HeaderLogedInProfileMenu from './headerLogedInProfileMenu/headerLogedInProfileMenu'
import useStyles from './HeaderLogedInStyle';

export default function PrimarySearchAppBar() {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.fundal}>
      <Toolbar>
        <Grid container justifyContent="space-between" alignItems="center">
          {/* render logo */}
          <Grid container item md={2}>
              <Link to="/home" style={{paddingTop:'10px', paddingBottom: '10px'}}>
                  <img src={CaroLogo} alt={""}/>
              </Link>
          </Grid>
          {/* render desktop btns */}
          <Grid container item md={5} spacing={2}  className={classes.sectionDesktop}>
              <RenderMenuSBD/>
          </Grid>
          {/* render right btns: notifications, my account, language */}
          <Grid container item md={3} justifyContent="flex-end"> 
            {/* notifications */}
            <Box className={[classes.sectionDesktop, classes.zoomIn].join(' ')} justifyContent="center" alignItems="center">
              {/* <Link to="/notifications" style={{underline:'none'}}> */}
                <BadgeVisibility />
              {/* </Link> */}
            </Box>
            {/* conversations */}
            <Box className={[classes.sectionDesktop, classes.zoomIn].join(' ')} style={{paddingLeft: 0}} justifyContent="center" alignItems="center">
                <ChatButtonVisibility />
            </Box>
            {/* profile menu */}
            <Box className={[classes.sectionDesktop, classes.zoomIn].join(' ')} justifyContent="center" alignItems="center">
              <HeaderLogedInProfileMenu/>
            </Box>
            {/* language btn */}
            <Box className={[classes.sectionDesktop, classes.zoomIn].join(' ')} justifyContent="center" alignItems="center">
              <BasicSelect/>
            </Box>
          </Grid>
        </Grid>
        {/* mobile */}
        <Box className={[classes.sectionMobile, classes.zoomIn].join(' ')} display="flex">
            <BadgeVisibility/>
        </Box>
        <Box className={[classes.sectionMobile, classes.zoomIn].join(' ')} display="flex">
            <ChatButtonVisibility/>
        </Box>
        <Box className={[classes.sectionMobile, classes.zoomIn].join(' ')} display="flex">
            <LogedInMobileMenu/>
        </Box>
      </Toolbar>
    </AppBar>
  );
}