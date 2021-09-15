import React from "react";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import GoogleIcon from "../../assets/images/GoogleIcon.png";
import FacebookIcon from "../../assets/images/facebook-icon.png";

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
import EditIcon from '@material-ui/icons/Edit';
import "../../App.css";
import useStyles from "./profileStyle";
import CarroTextField from "../../components/textField/CarroTextField";
import PrimaryButton from "../../components/buttons/primaryButton/primaryButton";
import SeeProfileBtn from "../../components/buttons/textOnlyButtons/seeProfileBtn/seeProfileBtn"
import CarroDatePicker from "../../components/datePicker/CarroDatePicker";
import profilePhotoMiddle from "../../assets/images/photoprofile1.png";

const Profile = () => {
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
      <Box display="flex" justifyContent="end">
        <Grid xs={2}>
          <Box
            mt={3}
            color={"#00B4D8"}
            fontWeight={500}
            fontSize={22}
            textAlign={"center"}
          >
            VIZUALIZEAZA PROFILUL
          </Box>
        </Grid>
      </Box>
      <Grid container xs={12} display="flex" justifyContent="center">
        <Box mt={1} mb={2} fontWeight={400} fontSize={22} textAlign={"center"}>
          Profil
        </Box>
      </Grid>
      <Box display="flex" justifyContent="center" mb="3%">
        <img src={profilePhotoMiddle} />
      </Box>

      <Box display="flex" justifyContent="space-evenly" mt="1%">
        <Grid
          container
          xs={8}
          spacing={3}
          display="flex"
          justifyContent="center"
        >
          <Grid container item xs={6} justifyContent="center">
            <CarroTextField variant="outlined" label="Nume" fullWidth />
          </Grid>
          <Grid container item xs={6} justifyContent="center">
            <CarroTextField variant="outlined" label="Prenume" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <CarroTextField variant="outlined" label="Adresa" fullWidth />
          </Grid>

          <Grid container item xs={6} justifyContent="center">
            <CarroTextField
              variant="outlined"
              label="Numar de telefon"
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

          <Grid item xs={12} sm={6}>
            <CarroTextField
              variant="outlined"
              label="Limbi cunoscute"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CarroTextField
              variant="outlined"
              label="Adresa de email"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <CarroTextField
              variant="outlined"
              label="Particularitati"
              fullWidth
            />
          </Grid>
        </Grid>
      </Box>
      <Grid xs={12}>
        <Box
          mt={3}
          mb={3}
          color={"#00B4D8"}
          fontWeight={500}
          fontSize={22}
          textAlign={"center"}
        >
          INCARCA DOCUMENTELE OBLIGATORII
        </Box>
      </Grid>
      <Box display="flex" justifyContent="center" ml="1%">
        <Grid container xs={8}>
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
              label="Persoana Juridica"
            />
          </FormGroup>
        </Grid>
      </Box>
      <Grid xs={9}>
        <Box
          mt={3}
          mb={3}
          color={"#A0A0A0"}
          fontWeight={500}
          fontSize={22}
          textAlign={"center"}
        >
          INFORMATII AUTOTURISM (OPTIONAL)
        </Box>
      </Grid>
      <Box display="flex" justifyContent="space-evenly" mt="1%">
        <Grid
          container
          xs={8}
          spacing={3}
          display="flex"
          justifyContent="center"
        >
          <Grid container item xs={6} justifyContent="center">
            <CarroTextField variant="outlined" label="Marca" fullWidth />
          </Grid>
          <Grid container item xs={6} justifyContent="center">
            <CarroTextField variant="outlined" label="Model" fullWidth />
          </Grid>
          <Grid container item xs={6} justifyContent="center">
            <CarroTextField
              variant="outlined"
              label="Numar de inmatriculare"
              fullWidth
            />
          </Grid>
          <Grid container item xs={6} justifyContent="center">
            <CarroTextField variant="outlined" label="Culoare" fullWidth />
          </Grid>
        </Grid>
      </Box>

      <Box display="flex" justifyContent="center" mt="3%" mb="5%">
        <Grid container item xs={3}>
          <PrimaryButton fullWidth variant="contained" endIcon={<EditIcon />}>
            EDITEAZA
          </PrimaryButton>
          
        </Grid>
      </Box>
      

    </Container>
  );
};

export default Profile;
