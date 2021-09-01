import React from "react";
import "./registerStyles.jsx";
import { Container, Box, TextField, Grid, Checkbox, Typography } from "@material-ui/core";
import "../../App.css";
import useStyles from "./registerStyles";
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

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
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Box mb={2} fontWeight={400} fontSize={21} textAlign={"center"}>
            INREGISTRARE
          </Box>
        </Grid>
    
        <Grid item xs={6}>
          <TextField
            label="Nume"
            id="outlined-margin-none"
            placeholder="Nume utilizator"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label=" Prenume"
            id="outlined-margin-none"
            placeholder="Prenume utilizator"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={6}>
        <TextField
          label="Adresa"
          id="outlined-margin-none"
          placeholder="Adresa de preluare"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
        </Grid>
        <Grid item xs={6}>
        <TextField
          id="date"
          label="Data de nastere"
          type="date"
          defaultValue="2017-05-24"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />
        </Grid>
        <Grid item xs={12}>
        <TextField
          id="outlined-full-width"
          label="Adresa de mail"
          style={{ margin: 8 }}
          placeholder="user@mail.com"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
        </Grid>
        <Grid item xs={6}>
        <TextField
          label="Password"
          label="Password"
          type="password"
          id="outlined-margin-none"
          placeholder="password"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          label="Password"
          label="Password"
          type="password"
          id="outlined-margin-none"
          placeholder="password"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
      </Grid>
      <FormGroup row>
      <FormControlLabel
        control={<Checkbox checked={state.checkedA} onChange={handleChange} name="checkedA" color="primary" />}
        label="TERMENI SI CONDITII"
      />
      </FormGroup>
      </Grid>
    </Container>
  );
};

export default Register;
