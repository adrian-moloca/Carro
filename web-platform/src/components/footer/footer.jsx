import React from 'react';
import {Paper, Grid, IconButton, Box, Link} from '@material-ui/core';
import facebook from "../../assets/icon/facebookIcon.png"
import instagram from "../../assets/icon/instagramIcon.png"
import useStyles from'./footerStyle'

export default function NestedGrid() {
  const classes = useStyles();

  function FormRow() {
    return (
      <Box mt={2}>
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
          <Paper className={classes.paper}>Termeni si conditii</Paper>
        </Grid>
        <Grid item >
          <Paper className={classes.paper}>Presa</Paper>
        </Grid>
        <Grid item >
          <Paper className={classes.paper}>Recenzii</Paper>
        </Grid>
      </Box>
    );
  }
  function FormRow2() {
    return (
      <Box mt={2}>
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
      </Box>
    );
  }
  function FormRowMediaButtons() {
    return (
      <div className={classes.mediaButtonsContainer}>
        <Link href="https://www.facebook.com/Carro-Future-Delivery-297489362056201" target="_blank" rel="noopener"  underline= 'none' color= 'inherit'>
          <IconButton>
            <img src={facebook} alt={"facebookButton"}></img>
          </IconButton>
        </Link>
        <Link href="https://www.instagram.com/carrofuturedelivery/" target="_blank" rel="noopener" underline= 'none' color= 'inherit'>
          <IconButton>
            <img src={instagram} alt={"instaButton"}></img>
          </IconButton>
        </Link>
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