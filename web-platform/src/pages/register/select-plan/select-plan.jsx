import React from "react";
import "./SelectPlanStyles";
import { Container, Grid, Typography, Button, Box } from "@material-ui/core";
import "../../../App.css";
import useStyles from "./SelectPlanStyles";
import CheckIcon from "../../../assets/images/check.png";
import DeclinedIcon from "../../../assets/images/decline.png";
import PrimaryButton from "../../../components/buttons/primaryButton/primaryButton";

const SelectPlan = () => {
  const classes = useStyles();
  return (
    <Container className={classes.SelectPlanContainterWidth}>
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid xs={5} className={classes.SmallContainer}>
          <Typography className={classes.SmallContainerContent}>
            Cont Basic
          </Typography>
          <Typography className={classes.SmallContainerContentText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            accumsan mauris eget sapien auctor dictum. Aliquam ullamcorper
            sapien in molestie vulputate.
          </Typography>
          <Box className={classes.CheckingBox}>
            <img src={CheckIcon} className={classes.small} />
            <Typography>Lorem ipsum dolor </Typography>
          </Box>
          <Box className={classes.CheckingBox}>
            <img src={CheckIcon} className={classes.small} />
            <Typography>Lorem ipsum dolor </Typography>
          </Box>
          <Box className={classes.CheckingBox}>
            <img src={CheckIcon} className={classes.small} />
            <Typography>Lorem ipsum dolor </Typography>
          </Box>
          <Box className={classes.CheckingBox}>
            <img src={CheckIcon} className={classes.small} />
            <Typography>Lorem ipsum dolor </Typography>
          </Box>
          <Box className={classes.CheckingBox}>
            <img src={DeclinedIcon} className={classes.DeclineIcon} />
            <Typography>Lorem ipsum dolor </Typography>
          </Box>
          <Box className={classes.CheckingBox}>
            <img src={DeclinedIcon} className={classes.DeclineIcon} />
            <Typography>Lorem ipsum dolor </Typography>
          </Box>
          <Box className={classes.CheckingBox}>
            <img src={DeclinedIcon} className={classes.DeclineIcon} />
            <Typography>Lorem ipsum dolor </Typography>
          </Box>
          <Box className={classes.CheckingBox}>
            <img src={DeclinedIcon} className={classes.DeclineIcon} />
            <Typography>Lorem ipsum dolor </Typography>
          </Box>
          <Typography className={classes.SmallContainerPackage}>
            {" "}
            GRATIS
          </Typography>
          <Grid
            container
            xs={12}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <PrimaryButton variant="contained"> SELECTEAZA</PrimaryButton>
          </Grid>
        </Grid>
        <Grid xs={5} className={classes.SmallContainer}>
          <Typography className={classes.SmallContainerContent}>
            Cont Premium
          </Typography>
          <Typography className={classes.SmallContainerContentText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            accumsan mauris eget sapien auctor dictum. Aliquam ullamcorper
            sapien in molestie vulputate.
          </Typography>
          <Box className={classes.CheckingBox}>
            <img src={CheckIcon} className={classes.small} />
            <Typography>Lorem ipsum dolor </Typography>
          </Box>
          <Box className={classes.CheckingBox}>
            <img src={CheckIcon} className={classes.small} />
            <Typography>Lorem ipsum dolor </Typography>
          </Box>
          <Box className={classes.CheckingBox}>
            <img src={CheckIcon} className={classes.small} />
            <Typography>Lorem ipsum dolor </Typography>
          </Box>
          <Box className={classes.CheckingBox}>
            <img src={CheckIcon} className={classes.small} />
            <Typography>Lorem ipsum dolor </Typography>
          </Box>
          <Box className={classes.CheckingBox}>
            <img src={CheckIcon} className={classes.small} />
            <Typography>Lorem ipsum dolor </Typography>
          </Box>
          <Box className={classes.CheckingBox}>
            <img src={CheckIcon} className={classes.small} />
            <Typography>Lorem ipsum dolor </Typography>
          </Box>
          <Box className={classes.CheckingBox}>
            <img src={CheckIcon} className={classes.small} />
            <Typography>Lorem ipsum dolor </Typography>
          </Box>
          <Box className={classes.CheckingBox}>
            <img src={CheckIcon} className={classes.small} />
            <Typography>Lorem ipsum dolor </Typography>
          </Box>
          <Typography className={classes.SmallContainerPackage}>
            {" "}
            500 RON
          </Typography>
          <Grid
            container
            xs={12}
            display="flex"
            justifyContent="center"
            alignItems="center"
            direction="column"
          >
            <PrimaryButton variant="contained"> SELECTEAZA</PrimaryButton>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SelectPlan;
