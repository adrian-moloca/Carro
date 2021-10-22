import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Box, Grid, ButtonBase } from "@material-ui/core";
import {Search, DriveEta} from '@material-ui/icons';
import { useTranslation } from 'react-i18next';
import useStyles from '../HeaderLogedInStyle';

const RenderMenuSBD = () => {

  const classes=useStyles();

  const {t}=useTranslation();

  return(
    <Fragment>
        <Grid container item md={6} justifyContent='flex-end'>
          <Link to="/search-package" className={classes.linkBtn}> 
                  <Search/>
                  <Box fontSize={18} marginLeft='10px'>
                    {t("SearchPackage")}
                  </Box>
          </Link>
        </Grid>
        <Grid container item md={6}  justifyContent='flex-start'>
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