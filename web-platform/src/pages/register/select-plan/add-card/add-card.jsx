import React from "react";
import useStyles from "./AddCardStyles";
import {
  Container,
  Box,
  TextField,
  Grid,
  Checkbox,
  Button,
 
} from "@material-ui/core";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import CarroTextField from "../../../../components/textField/CarroTextField"
import PrimaryButton from "../../../../components/buttons/primaryButton/primaryButton"
import SecondaryButton from "../../../../components/buttons/secondaryButton/secondaryButton"
import { Link } from "react-router-dom";
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
          <Box mb={2} fontWeight={400} fontSize={25} textAlign={"center"}>
            Adauga card
          </Box>
        </Grid>

        <Grid item xs={6}>
           <CarroTextField variant= "outlined" label= "Numar card" />
          
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
        <CarroTextField variant= "outlined" label= "Nume Complet" />
          
        </Grid>
        <Grid item xs={6}>
        <CarroTextField variant= "outlined" label= "CVV" />
          
        </Grid>

        <Grid item xs={12}>
          <FormGroup row>
            <FormControlLabel
              control={
                <Checkbox
                  checked={state.checkedA}
                  onChange={handleChange}
                  name="checkedA"
                  color="default"
                />
              }
              label="Salveaza card "
            />
          </FormGroup>
        </Grid>
        <Grid item xs={6} className={classes.ButtonWidth}>
         <Link to='/payment-method' style={{textDecoration: 'none'}}> 
          <SecondaryButton variant="contained" fullWidth> ANULEAZA </SecondaryButton> 
         </Link>
        </Grid>
        <Grid item xs={6} className={classes.ButtonWidth}>
        <Link to='/payment-method/card-selected' style={{textDecoration: 'none'}}>
          <PrimaryButton variant="contained" fullWidth> SELECTEAZA</PrimaryButton>
        </Link> 
        </Grid>
      </Grid>
    </Container>
  );
};

export default AddCard;
