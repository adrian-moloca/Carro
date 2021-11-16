import React from "react";
import { Container, Grid, Typography, Box } from "@material-ui/core";
import CheckIcon from "../../../assets/images/check.png";
import DeclinedIcon from "../../../assets/images/decline.png";
import PrimaryButton from "../../../components/buttons/primaryButton/primaryButton";
import useStyles from "./SelectPlanStyles";
import "../../../App.css";
import { withStyles } from "@material-ui/core/styles"
import { useTranslation } from "react-i18next";
const ColorText = withStyles({
  root: {
    color: "#00B4D8",
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '20px',
    lineHeight: '150%',
    letterSpacing: '0.15px',
    marginBottom: '20px',
    marginTop: '20px'
  }
})(Typography);

const SelectPlan = () => {
  const { t } = useTranslation();
  const classes = useStyles();
  return (
    <Container>
      <Grid container justifyContent="space-between" alignItems="center">
      
        <Grid xs={12} xl={5} justifyContent="space-between" alignItems="center">
          <Box mt='15%' mb='10%' className={classes.SmallContainer} display="flex" flexDirection="column" alignItems="center">
          <Typography variant="h6" gutterBottom component="div">
            Cont Basic
          </Typography>
          <Typography className={classes.SmallContainerContentText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            accumsan mauris eget sapien auctor dictum. Aliquam ullamcorper
            sapien in molestie vulputate.
          </Typography>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Box m="8px">
            <img src={CheckIcon} className={classes.small} alt={""}/>
            </Box>
            <Typography>Lorem ipsum dolor </Typography>
          </Box>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Box m="8px">
            <img src={CheckIcon} className={classes.small} alt={""}/>
            </Box>
            <Typography>Lorem ipsum dolor </Typography>
          </Box>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Box m="8px">
            <img src={CheckIcon} className={classes.small} alt={""}/>
            </Box>
            <Typography>Lorem ipsum dolor </Typography>
          </Box>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Box m="8px">
            <img src={CheckIcon} className={classes.small} alt={""}/>
            </Box>
            <Typography>Lorem ipsum dolor </Typography>
          </Box>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Box m="8px">
            <img src={DeclinedIcon} className={classes.small} alt={""}/>
            </Box>
            <Typography>Lorem ipsum dolor </Typography>
          </Box>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Box m="8px">
            <img src={DeclinedIcon} className={classes.small} alt={""}/>
            </Box>
            <Typography>Lorem ipsum dolor </Typography>
          </Box>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Box m="8px">
            <img src={DeclinedIcon} className={classes.small} alt={""}/>
            </Box>
            <Typography>Lorem ipsum dolor </Typography>
          </Box>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Box m="8px">
            <img src={DeclinedIcon} className={classes.small} alt={""}/>
            </Box>
            <Typography>Lorem ipsum dolor </Typography>
          </Box>
         
          <ColorText >
            {" "}
            GRATIS
          </ColorText>
         
          <Grid
            container
            xs={12}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <PrimaryButton variant="contained"> {t("DriverCardSelectButton")}</PrimaryButton>
          </Grid>
          </Box>
        </Grid>
        <Grid xs={12} xl={5} justifyContent="space-between" alignItems="center">
          <Box mt='10%' mb='15%' className={classes.SmallContainer} display="flex" flexDirection="column" alignItems="center">
          <Typography variant="h6" gutterBottom component="div">
            Cont Premium
          </Typography>
          <Typography className={classes.SmallContainerContentText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            accumsan mauris eget sapien auctor dictum. Aliquam ullamcorper
            sapien in molestie vulputate.
          </Typography>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Box m="8px">
            <img src={CheckIcon} className={classes.small} alt={""}/>
            </Box>
            <Typography>Lorem ipsum dolor </Typography>
          </Box>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Box m="8px">
            <img src={CheckIcon} className={classes.small} alt={""}/>
            </Box>
            <Typography>Lorem ipsum dolor </Typography>
          </Box>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Box m="8px">
            <img src={CheckIcon} className={classes.small} alt={""}/>
            </Box>
            <Typography>Lorem ipsum dolor </Typography>
          </Box>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Box m="8px">
            <img src={CheckIcon} className={classes.small} alt={""}/>
            </Box>
            <Typography>Lorem ipsum dolor </Typography>
          </Box>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Box m="8px">
            <img src={CheckIcon} className={classes.small} alt={""}/>
            </Box>
            <Typography>Lorem ipsum dolor </Typography>
          </Box>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Box m="8px">
            <img src={CheckIcon} className={classes.small} alt={""}/>
            </Box>
            <Typography>Lorem ipsum dolor </Typography>
          </Box>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Box m="8px">
            <img src={CheckIcon} className={classes.small} alt={""}/>
            </Box>
            <Typography>Lorem ipsum dolor </Typography>
          </Box>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Box m="8px">
            <img src={CheckIcon} className={classes.small} alt={""}/>
            </Box>
            <Typography>Lorem ipsum dolor </Typography>
          </Box>
         
          <ColorText >
            {" "}
            500 RON
          </ColorText>
         
          <Grid
            container
            xs={12}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <PrimaryButton variant="contained"> {t("DriverCardSelectButton")}</PrimaryButton>
          </Grid>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SelectPlan;
