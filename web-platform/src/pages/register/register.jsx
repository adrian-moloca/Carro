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
import PrimaryButton from "../../components/buttons/primaryButton/primaryButton";
import CarroDatePicker from "../../components/datePicker/CarroDatePicker";

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
      <Grid container xs={12} display="flex" justifyContent="center">
        <Box mt={3} mb={2} fontWeight={400} fontSize={21} textAlign={"center"}>
          Inregistrare
        </Box>
      </Grid>
      <Box display="flex" justifyContent="space-evenly" mt="1%">
        <Grid container xs={8} spacing={3} display="flex" justifyContent="center">
          <Grid container item xs={6} justifyContent="center">
            <CarroTextField variant="outlined" label="Nume" fullWidth />
          </Grid>
          <Grid container item xs={6} justifyContent="center">
            <CarroTextField variant="outlined" label="Prenume" fullWidth />
          </Grid>
          <Grid container item xs={6} justifyContent="center">
            <CarroTextField
              variant="outlined"
              label="Adresa de preluare"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CarroDatePicker
              label="Data de nastere"
              InputLabelProps={{
                style: { fontSize: "17px", marginTop: "3px" },
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <CarroTextField
              variant="outlined"
              label="Adresa de email"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CarroTextField
              variant="outlined"
              label="Password"
              type="password"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CarroTextField
              variant="outlined"
              label="Confirm Password"
              type="password"
              fullWidth
            />
          </Grid>
          
        </Grid>
      </Box>
      <Box display="flex" justifyContent="center" ml="1%">
      <Grid  container xs={8}> 
      
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
      </Grid>
      </Box>
      <Box display="flex" justifyContent="center" mt="3%" mb="5%">

      <Grid container item xs={8}>
        <PrimaryButton fullWidth variant="contained">
          CAUTA
        </PrimaryButton>
      </Grid>
      </Box>
      <Box display="flex" justifyContent="center" mb="3%">
      <Grid
        xs={8}
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
      </Box>
      <Box display="flex" justifyContent="center" mb="1%">
      <Grid container xs={8} justifyContent="space-evenly" mx="auto">
        <Box display="flex" justifyContent="center">
          <Avatar alt="Google" src={GoogleIcon} className={classes.large} />
        </Box>
        <Box display="flex" justifyContent="center">
          <Avatar alt="Facebook" src={FacebookIcon} className={classes.large} />
        </Box>
      </Grid>
      </Box>
    </Container>
  );
};

export default Register;
