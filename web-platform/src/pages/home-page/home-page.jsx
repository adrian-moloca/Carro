import React from 'react';
import './home-pageStyles.jsx';
import {
  Container,
  Box,
  TextField,
  Grid,
  Checkbox,
  Typography,
  Button,
  
} from "@material-ui/core";
import useStyles from "./home-pageStyles";
const HomePage = () => { 

  const classes = useStyles();

  return (
    <Container className={classes.FirstSection} >
      <Grid >
    <Grid item xs={12} className={classes.BgImg}>
poza
    </Grid>
      </Grid>
    </Container>
  )
}

export default HomePage;
