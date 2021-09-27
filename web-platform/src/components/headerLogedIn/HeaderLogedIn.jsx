import React from 'react';
import { Link, AppBar, Toolbar, IconButton, Box, Grid } from "@material-ui/core";
import CaroLogo from '../../assets/logo/CaroLogo.png';
import BadgeVisibility from '../NotificationsComponent/notificomp';
import BasicSelect from '../buttons/languageButton/languageButton'
import RenderMenuSBD from './headerLogedInMenu/headerLogedInMenu';
import RenderMobileMenu from './headerLogedInMobileMenu/headerLogedInMobileMenu';
import HeaderLogedInProfileMenu from './headerLogedInProfileMenu/headerLogedInProfileMenu'
import useStyles from './HeaderLogedInStyle';

export default function PrimarySearchAppBar() {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.fundal}>
      <Toolbar>
        <Grid container justifyContent="space-between" alignItems="center" flexDirection="row">
          {/* render logo */}
          <Grid item xs={3}>
            <Box justifyContent="center" alignItems="center">
              <Link href="/" underline= 'none' color= 'inherit'>
                <IconButton>
                  <img src={CaroLogo} alt={""}></img>
                </IconButton>
              </Link>
            </Box>
          </Grid>
          {/* render desktop btns */}
          <Grid item xs={6} >
            <Box className={classes.sectionDesktop} justifyContent="center" alignItems="center">
              <RenderMenuSBD/>
            </Box>
          </Grid>
          {/* render right btns: notifications, my account, language */}
          <Grid item xs={3} container flexDirection="row" justifyContent="flex-end"> 
            {/* notifications */}
            <Box className={classes.sectionDesktop} justifyContent="center" alignItems="center">
              <Link href="/notifications" undeline= 'none' color= 'inherit'>
                <BadgeVisibility/>
              </Link>
            </Box>
            {/* profile menu */}
            <Box className={classes.sectionDesktop} justifyContent="center" alignItems="center">
              <HeaderLogedInProfileMenu/>
            </Box>
            {/* language btn */}
            <Box className={classes.sectionDesktop} justifyContent="center" alignItems="center">
              <BasicSelect/>
            </Box>
          </Grid>
        </Grid>
        {/* mobile */}
        <Box className={classes.sectionMobile} display="flex" flexDirection="row">
          <Link href="/notifications" undeline= 'none' color= 'inherit'>
            <BadgeVisibility/>
          </Link>
          <RenderMobileMenu/>
        </Box>
      </Toolbar>
    </AppBar>
  );
}