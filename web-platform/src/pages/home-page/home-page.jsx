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
            <Box className={classes.HomescreenPrimaryBox}><img src={BoxIcon}></img> Trimite Pachet</Box>
            <Box className={classes.HomescreenPrimaryBox}><img src={CarIcon}></img>Ofera Transport</Box>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomePage;
