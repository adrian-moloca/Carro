import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Box, Grid } from "@material-ui/core";
import BasicSelect from '../../components/buttons/languageButton/languageButton';
import CaroLogo from '../../assets/logo/CaroLogo.png';
import LogedOutMobileMenu from './headerLogedOutComponents/headerLogedOutMobileMenu/headerLogedOutMobileMenu'
import RenderMenuSBD from './headerLogedOutComponents/headerLogedOutMenu/headerLogedOutMenu';
import useStyles from './HeaderLogedOutStyle'

export default function PrimarySearchAppBar() {

  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.fundal}>
      <Toolbar>
        <Grid container justifyContent="space-between" alignItems="center" >
          {/* render logo */}
          <Grid container item md={3} justifyContent='flex-start'>
              <Link to="/" style={{paddingTop:'10px', paddingBottom: '10px'}}> 
                  <img src={CaroLogo} alt={""}></img>
              </Link>
          </Grid>
          {/* render desktop btns */}
          <Grid container item md={6} className={classes.sectionDesktop}>
              <RenderMenuSBD/>
          </Grid>
          {/* render language select */}
          <Grid container item md={3} justifyContent='flex-end'>
            <Box className={[classes.sectionDesktop, classes.zoomIn].join(' ')} justifyContent="center" alignItems="center">
              <BasicSelect/>
            </Box>
          </Grid>
        </Grid>
        {/* render mobile menu btns*/}
        <Box className={[classes.sectionMobile, classes.zoomIn].join(' ')}>
          <LogedOutMobileMenu/>
        </Box>
      </Toolbar>
    </AppBar>
  );
}