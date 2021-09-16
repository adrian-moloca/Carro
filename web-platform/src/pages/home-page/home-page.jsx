import React from "react";
import "./home-pageStyles.jsx";
import BoxIcon from "../../assets/images/box.png";
import CarIcon from "../../assets/images/car.png";
import {
  Container,
  Box,
  TextField,
  Grid,
  Checkbox,
  Typography,
  Button,
  Link
} from "@material-ui/core";
import useStyles from "./home-pageStyles";
const HomePage = () => {
  const classes = useStyles();

  return (
    <Container className={classes.FirstSection}>
      <Grid className={classes.MaxWidth}>
        <Grid item xs={12} className={classes.BgImg}>
          {" "}
          <Grid item={12} className={classes.BigHomeTextBox}>
            <Typography className={classes.BigHomeText}>
              FUTURE DELIVERY
            </Typography>
          </Grid>
          <Grid item xs={12} className={classes.HomescreenButtons}>
          <Link href="/add-package" undeline= 'none' color= 'inherit'>
            <Box className={classes.HomescreenPrimaryBox}><img src={BoxIcon}></img> 
                Trimite Pachet
            </Box>
          </Link> 
          <Link href="/add-transport" undeline= 'none' color= 'inherit'>
            <Box className={classes.HomescreenPrimaryBox}><img src={CarIcon}></img>
              Ofera Transport
            </Box>
          </Link> 
          </Grid>
        </Grid>
        <Typography className={classes.HomePageText}>Cele mai cautate transporturi:</Typography>
        <Grid item xs={12} className={classes.TopTransport}>
            <Box className={classes.TopTransportRoute}><Typography className={classes.TopTransportRouteText}>Bucuresti - Constanta</Typography>
            <Typography className={classes.TopTransportRouteText}>20 RON</Typography></Box>
            <Box className={classes.TopTransportRoute}><Typography className={classes.TopTransportRouteText}>Cluj-Napoca - Brasov</Typography>
            <Typography className={classes.TopTransportRouteText}>35 RON</Typography></Box>
            <Box className={classes.TopTransportRoute}><Typography className={classes.TopTransportRouteText}>Timisoara - Sibiu</Typography>
            <Typography className={classes.TopTransportRouteText}>30 RON</Typography></Box>
          </Grid>
      </Grid>
    </Container>
  );
};

export default HomePage;
