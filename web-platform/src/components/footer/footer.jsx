import React from 'react';
import {Paper, Grid, IconButton, Box} from '@material-ui/core';
import facebook from "../../assets/icon/facebookIcon.png"
import instagram from "../../assets/icon/instagramIcon.png"
import twitter from "../../assets/icon/twitterIcon.png"
import useStyles from'./footerStyle'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
export default function NestedGrid() {
  const classes = useStyles();
  const { t } = useTranslation();
  function FormRow() {
    return (
      <Box mt={2}>
        <Grid item >
        <Link to="/frequent-questions" style={{textDecoration: "none"}}>
          <Paper className={classes.paper}>{t("HowItWorks")}</Paper>
        </Link>
        </Grid>
        <Grid item >
          <Paper className={classes.paper}>{t("AboutUs")}</Paper>
        </Grid>
        <Grid item >
          <Paper className={classes.paper}>{t("FAQ")}</Paper>
        </Grid>
        <Grid item >
          <Paper className={classes.paper}>{t("NewsAndFuturesPlans")}</Paper>
        </Grid>
      </Box>
    );
  }
  function FormRow1() {
    return (
      <Box mt={2}>
        <Grid item >
          <Paper className={classes.paper}>Contact</Paper>
        </Grid>
        <Grid item >
          <Paper className={classes.paper}>{t("TermsAndConditions")}</Paper>
        </Grid>
        <Grid item >
          <Paper className={classes.paper}>{t("Press")}</Paper>
        </Grid>
        <Grid item >
          <Paper className={classes.paper}>{t("Reviews")}</Paper>
        </Grid>
      </Box>
    );
  }
  function FormRow2() {
    return (
      <Box mt={2}>
        <Grid item >
          <Paper className={classes.paper}>{t("Career")}</Paper>
        </Grid>
        <Grid item >
          <Paper className={classes.paper}>{t("MobileApplication")}</Paper>
        </Grid>
        <Grid item >
          <Paper className={classes.paper}>{t("WhyUseOurServices")}</Paper>
        </Grid>
        <Grid item >
          <Paper className={classes.paper}>{t("Vouchers")}</Paper>
        </Grid>
      </Box>
    );
  }
  function FormRowMediaButtons() {
    return (
      <div className={classes.mediaButtonsContainer}>
        <IconButton>
          <img src={facebook} alt={""}></img>
        </IconButton>
        <IconButton>
          <img src={instagram} alt={""}></img>
        </IconButton>
        <IconButton>
          <img src={twitter} alt={""}></img>
        </IconButton>
      </div>
    );
  }

  return (
    <div>
      <FormRowMediaButtons />
      <div className={classes.footerSeparationLine}></div>
      <Grid container  justifyContent='center' spacing={1}>
        <Grid container direction="column" xs={12} sm={3} md={3} lg ={3} xl={3}  spacing={2} className={classes.noMargin}>
          <FormRow />
        </Grid>
        <Grid container direction="column" xs={12} sm={3} md={3} lg ={3} xl={3} spacing={2} className={classes.noMargin}>
          <FormRow1 />
        </Grid>
        <Grid container direction="column" xs={12} sm={3} md={3} lg ={3} xl={3} spacing={2} className={classes.noMargin}>
          <FormRow2 />
        </Grid>        
      </Grid>
    </div>
  );
}