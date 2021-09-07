import React from 'react';
import { Link } from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import facebook from "../../assets/icon/facebookIcon.png"
import instagram from "../../assets/icon/instagramIcon.png"
import twitter from "../../assets/icon/twitterIcon.png"
import Grid from '@material-ui/core/Grid';
import useStyles from'./footerStyle'

export default function NestedGrid() {
  const classes = useStyles();

  function FormRow() {
    return (
      <React.Fragment>
        <Grid item >
          <Paper className={classes.paper}>Cum functioneaza</Paper>
        </Grid>
        <Grid item >
          <Paper className={classes.paper}>Despre noi</Paper>
        </Grid>
        <Grid item >
          <Paper className={classes.paper}>Intrebari frecvente</Paper>
        </Grid>
        <Grid item >
          <Paper className={classes.paper}>Noutati si planuri de viitor</Paper>
        </Grid>
      </React.Fragment>
    );
  }
  function FormRow1() {
    return (
      <React.Fragment>
        <Grid item >
          <Paper className={classes.paper}>Contact</Paper>
        </Grid>
        <Grid item >
          <Paper className={classes.paper}>Termeni si conditii</Paper>
        </Grid>
        <Grid item >
          <Paper className={classes.paper}>Presa</Paper>
        </Grid>
        <Grid item >
          <Paper className={classes.paper}>Recenzii</Paper>
        </Grid>
      </React.Fragment>
    );
  }
  function FormRow2() {
    return (
      <React.Fragment>
        <Grid item >
          <Paper className={classes.paper}>Cariera</Paper>
        </Grid>
        <Grid item >
          <Paper className={classes.paper}>Aplicatie pentru mobil</Paper>
        </Grid>
        <Grid item >
          <Paper className={classes.paper}>De ce sa folosesti serviciile noastre</Paper>
        </Grid>
        <Grid item >
          <Paper className={classes.paper}>Vouchere</Paper>
        </Grid>
      </React.Fragment>
    );
  }
  function FormRowMediaButtons() {
    return (
      <div className={classes.mediaButtonsContainer}>
            <IconButton>
              <img src={facebook}></img>
            </IconButton>
            <IconButton>
              <img src={instagram}></img>
            </IconButton>
            <IconButton>
              <img src={twitter}></img>
            </IconButton>
      </div>
    );
  }
  

  return (
    <div className={classes.root}>
      <FormRowMediaButtons />
      <div className={classes.footerSeparationLine}></div>
      <Grid className={classes.footerLinksContainer} spacing={1} >
        <Grid container direction="column" item xs={3} spacing={2} className={classes.noMargin}>
          <FormRow />
        </Grid>
        <Grid container direction="column" item xs={3} spacing={2} className={classes.noMargin}>
          <FormRow1 />
        </Grid>
        <Grid container item  direction="column"xs={3} spacing={2} className={classes.noMargin}>
          <FormRow2 />
        </Grid>        
      </Grid>
    </div>
  );
}