import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Box, Grid} from "@material-ui/core";
import {Search, DriveEta, Queue} from '@material-ui/icons';
import { useTranslation } from 'react-i18next';
import useStyles from '../HeaderLogedInStyle';

const RenderMenuSBD = () => {

  const classes=useStyles();

  const {t}=useTranslation();

  return(
    <Fragment>
        <Grid container item md={3}  justifyContent='center'>
          <Link to="/add-package" className={classes.linkBtn}>
                  <Queue/>
                  <Box  fontSize={18} marginLeft='10px'>
                    {t("HomePageLeftButtonText")}
                  </Box>
          </Link>
        </Grid>
        <Grid container item md={3}  justifyContent='center'>
          <Link to="/add-transport" className={classes.linkBtn}>
                  <Queue/>
                  <Box  fontSize={18} marginLeft='10px'>
                    {t("HomePageRightButtonText")}
                  </Box>
          </Link>
        </Grid>
        <Grid container item md={3} justifyContent='center'>
          <Link to="/search-package" className={classes.linkBtn}> 
                  <Search/>
                  <Box fontSize={18} marginLeft='10px'>
                    {t("SearchPackage")}
                  </Box>
          </Link>
        </Grid>
        <Grid container item md={3}  justifyContent='center'>
          <Link to="/search-ride" className={classes.linkBtn}>
                  <DriveEta/>
                  <Box  fontSize={18} marginLeft='10px'>
                    {t("SearchRideTitle")}
                  </Box>
          </Link>
        </Grid>
    </Fragment>
  );
};

export default RenderMenuSBD;