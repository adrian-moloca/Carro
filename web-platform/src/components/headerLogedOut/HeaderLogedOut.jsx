import React from 'react';
import { Link, AppBar, Toolbar, IconButton, Box, Grid } from "@material-ui/core";
import BasicSelect from '../../components/buttons/languageButton/languageButton';
import CaroLogo from '../../assets/logo/CaroLogo.png';
import RenderMobileMenu from './headerLogedOutComponents/headerLogedOutMobileMenu/headerLogedOutMobileMenu'
import RenderMenuSBD from './headerLogedOutComponents/headerLogedOutMenu/headerLogedOutMenu';
import useStyles from './HeaderLogedOutStyle'

export default function PrimarySearchAppBar() {

  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.fundal}>
      <Toolbar>
        <Grid container justifyContent="space-between" alignItems="center" flexDirection="row">
          {/* render logo */}
          <Grid item xs={1}>
            <Box justifyContent="center" alignItems="center">
              <Link href="/" underline= 'none' color= 'inherit'>
                <IconButton>
                  <img src={CaroLogo}></img>
                </IconButton>
              </Link>
            </Box>
          </Grid>
          {/* render desktop btns */}
          <Grid item xs={10} >
            <Box className={classes.sectionDesktop} justifyContent="center" alignItems="center">
              <RenderMenuSBD/>
            </Box>
          </Grid>
          {/* render language select */}
          <Grid item xs={1}>
            <Box className={classes.sectionDesktop} justifyContent="center" alignItems="center">
              <BasicSelect/>
            </Box>
          </Grid>
        </Grid>
        {/* render mobile menu btns*/}
        <Box className={classes.sectionMobile}>
          <RenderMobileMenu/>
        </Box>
      </Toolbar>
    </AppBar>
  );
}