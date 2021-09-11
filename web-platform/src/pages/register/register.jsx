import React from "react";
import {
  Container,
  Box,
  TextField,
  Grid,
  Checkbox,
  Typography,
  Button,
  Divider,
  StepConnector,
  Avatar,
} from "@material-ui/core";
import "../../App.css";
import useStyles from "./registerStyles";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import GoogleIcon from "../../assets/images/GoogleIcon.png";
import FacebookIcon from "../../assets/images/facebook-icon.png";
import CarroTextField from "../../components/textField/CarroTextField";
import PrimaryButton from "../../components/buttons/primaryButton/primaryButton"



const Register = () => {
  const classes = useStyles();

  const [checked, setChecked] = React.useState(true);
  const [state, setState] = React.useState({
    checkedA: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <Container className={"Primary-container-style"}>
      <Grid container spacing={3} className={"RegisterBoxAlign"}>
        <Grid item xs={12}>
          <Box mb={2} fontWeight={400} fontSize={21} textAlign={"center"}>
            INREGISTRARE
          </Box>
        </Grid>

        <Grid item xs={6}>
          <CarroTextField variant= "outlined" label= "Nume" />
          
        </Grid>
        <Grid item xs={6}>
        <CarroTextField variant= "outlined" label= "Prenume" />
        
        </Grid>
        <Grid item xs={6}>
          <CarroTextField variant= "outlined" label= "Adresa de preluare" />
        </Grid>
        <Grid item xs={6}>
        <form className={classes.container} noValidate>
    
    </form>
          <CarroTextField
            id="date"
            variant="outlined"
            label="Data de nastere"
            type="date"
            defaultValue="aaaa-ll-zz"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={12}>
        <CarroTextField variant= "outlined" label= "Adresa de email" fullWidth />
         
        </Grid>
        <Grid item xs={6}>
        <CarroTextField variant= "outlined" label= "Password" type="password" />
         
        </Grid>
        <Grid item xs={6}>
        <CarroTextField variant= "outlined" label= "Confirm Password" type="password" />
         
        </Grid>
        
        <FormGroup row>
          <FormControlLabel 
            classes={{ label: classes.label }}
            control={
              <Checkbox
                // className={classes.CheckBoxStyle}
                checked={state.checkedA}
                onChange={handleChange}
                name="checkedA"
                color="default"
              />
            }
            // className={classes.label}
            label="TERMENI SI CONDITII"
          />
        </FormGroup>

        <Grid item xs={12} className={classes.ButtonWidth}>
          <PrimaryButton variant="contained" fullWidth> INREGISTRARE</PrimaryButton>
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <StepConnector />
          <Box fontWeight={400} fontSize={16} textAlign={"center"}>
            INREGISTRARE PRIN
          </Box>
          <StepConnector />
        </Grid>
        <Box className={classes.SocialMediaAlign} justifyContent="space-evenly" >
          <Box display="flex" justifyContent="center">
            <Avatar alt="Google" src={GoogleIcon} className={classes.large} />
          </Box>
          <Box display="flex" justifyContent="center">
            <Avatar
              alt="Facebook"
              src={FacebookIcon}
              className={classes.large}
            />
          </Box>
        </Box>
      </Grid>
    </Container>
  );
};

export default Register;
