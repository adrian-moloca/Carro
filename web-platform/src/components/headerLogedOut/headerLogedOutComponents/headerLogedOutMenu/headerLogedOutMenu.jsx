import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';
import { Grid, IconButton, Box } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useTranslation } from "react-i18next";
import useStyles from '../../HeaderLogedOutStyle';

const RenderMenuSBD = () => {
  const { t } = useTranslation();

  const classes = useStyles();

  return(
      <Fragment>
        <Grid container item md={3} justifyContent='center'>
          <Link to="/login" className={classes.linkBtn}>
              <SearchIcon/>
              <Box fontSize={18} paddingLeft='5px'>
              {t("SearchPackage")}
              </Box>
          </Link>
        </Grid>
        <Grid container item md={3} justifyContent='center'>
          <Link to="/login" className={classes.linkBtn}>
              <DriveEtaIcon/>
              <Box fontSize={18} paddingLeft='5px'>
              {t("SearchRide")}
              </Box>
          </Link>
        </Grid>
        <Grid container item md={3} justifyContent='center'>
          <Link to="/login"  className={classes.linkBtn}>
              <AccountCircleIcon/>
              <Box fontSize={18} paddingLeft='5px'>
              {t("Login")}
              </Box>
          </Link>
        </Grid>
        <Grid container item md={3} justifyContent='center'>
          <Link to="/register" className={classes.linkBtn}>
              <ExitToAppIcon/>
              <Box fontSize={18} paddingLeft='5px'>
                {t("Register")}
              </Box>
          </Link>
        </Grid>
      </Fragment>
  );
};

export default RenderMenuSBD;