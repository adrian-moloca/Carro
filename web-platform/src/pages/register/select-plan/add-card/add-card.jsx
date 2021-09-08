import React from "react";
import useStyles from "./AddCardStyles";
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
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const AddCard = () => {
  const [state, setState] = React.useState({
    checkedA: true,
  });
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  const classes = useStyles();
  return (
    <Container className={"Primary-container-style"}>
      <Grid container spacing={3} className={"RegisterBoxAlign"}>
        <Grid item xs={12}>
          <Box mb={2} fontWeight={400} fontSize={21} textAlign={"center"}>
            ADAUGA CARD
          </Box>
        </Grid>

        <Grid item xs={6}>
          <TextField
            className={classes.TextFieldOutline}
            id="outlined-full-width"
            label="Numar card"
            id="outlined-margin-none"
            placeholder="XXXX XXXX XXXXX"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={6}>
          <form className={classes.container} noValidate>
            <TextField
              id="date"
              label="Data expirare"
              type="date"
              defaultValue="zz/ll/aaaa"
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </form>
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Nume Complet"
            id="outlined-margin-none"
            placeholder="Joe Doe"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label=" CVV"
            id="outlined-margin-none"
            placeholder="XXX"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
          />
        </Grid>

        <Grid item xs={12}>
          <FormGroup row>
            <FormControlLabel
              control={
                <Checkbox
                  checked={state.checkedA}
                  onChange={handleChange}
                  name="checkedA"
                  color="primary"
                />
              }
              label="Salveaza card "
            />
          </FormGroup>
        </Grid>
        <Grid item xs={6} className={classes.ButtonWidth}>
          <Button
            variant="outlined"
            color="secondary"
            className={classes.SecondaryButton}
          >
            ANULEAZA
          </Button>
        </Grid>
        <Grid item xs={6} className={classes.ButtonWidth}>
          <Button
            variant="contained"
            color="primary"
            className={classes.PrimaryButton}
          >
            SELECTEAZA
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AddCard;
