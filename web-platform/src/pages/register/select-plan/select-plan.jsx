import React from "react";
import { Container, Grid, Typography, Box, Link } from "@material-ui/core";
import CheckIcon from "../../../assets/images/check.png";
import DeclinedIcon from "../../../assets/images/decline.png";
import PrimaryButton from "../../../components/buttons/primaryButton/primaryButton";
import useStyles from "./SelectPlanStyles";
import "../../../App.css";

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
            <img src={CheckIcon} className={classes.small} alt={""}/>
            <Typography>Lorem ipsum dolor </Typography>
          </Box>
          <Box className={classes.CheckingBox}>
            <img src={CheckIcon} className={classes.small} alt={""}/>
            <Typography>Lorem ipsum dolor </Typography>
          </Box>
          <Box className={classes.CheckingBox}>
            <img src={CheckIcon} className={classes.small} alt={""}/>
            <Typography>Lorem ipsum dolor </Typography>
          </Box>
          <Box className={classes.CheckingBox}>
            <img src={CheckIcon} className={classes.small} alt={""}/>
            <Typography>Lorem ipsum dolor </Typography>
          </Box>
          <Box className={classes.CheckingBox}>
            <img src={DeclinedIcon} className={classes.DeclineIcon} alt={""}/>
            <Typography>Lorem ipsum dolor </Typography>
          </Box>
          <Box className={classes.CheckingBox}>
            <img src={DeclinedIcon} className={classes.DeclineIcon} alt={""}/>
            <Typography>Lorem ipsum dolor </Typography>
          </Box>
          <Box className={classes.CheckingBox}>
            <img src={DeclinedIcon} className={classes.DeclineIcon} alt={""}/>
            <Typography>Lorem ipsum dolor </Typography>
          </Box>
          <Box className={classes.CheckingBox}>
            <img src={DeclinedIcon} className={classes.DeclineIcon} alt={""}/>
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
            <img src={CheckIcon} className={classes.small} alt={""}/>
            <Typography>Lorem ipsum dolor </Typography>
          </Box>
          <Box className={classes.CheckingBox}>
            <img src={CheckIcon} className={classes.small} alt={""}/>
            <Typography>Lorem ipsum dolor </Typography>
          </Box>
          <Box className={classes.CheckingBox}>
            <img src={CheckIcon} className={classes.small} alt={""}/>
            <Typography>Lorem ipsum dolor </Typography>
          </Box>
          <Box className={classes.CheckingBox}>
            <img src={CheckIcon} className={classes.small} alt={""}/>
            <Typography>Lorem ipsum dolor </Typography>
          </Box>
          <Box className={classes.CheckingBox}>
            <img src={CheckIcon} className={classes.small} alt={""}/>
            <Typography>Lorem ipsum dolor </Typography>
          </Box>
          <Box className={classes.CheckingBox}>
            <img src={CheckIcon} className={classes.small} alt={""}/>
            <Typography>Lorem ipsum dolor </Typography>
          </Box>
          <Box className={classes.CheckingBox}>
            <img src={CheckIcon} className={classes.small} alt={""}/>
            <Typography>Lorem ipsum dolor </Typography>
          </Box>
          <Box className={classes.CheckingBox}>
            <img src={CheckIcon} className={classes.small} alt={""}/>
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
            <PrimaryButton variant="contained"> 
              <Link href="/register/select-plan/add-card" underline= 'none' color= 'inherit'>
                SELECTEAZA
              </Link>
            </PrimaryButton>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SelectPlan;
