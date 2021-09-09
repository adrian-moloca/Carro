import React from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Container, TextField, Box, Grid, Checkbox,} from "@material-ui/core";
import primaryButton from '../../components/buttons/primaryButton/primaryButton';
import useStyles from './add-packageStyle.jsx'
import { classes } from 'istanbul-lib-coverage';
import CarroTextField from '../../components/textField/CarroTextField'
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";


function getSteps() {
  return ['step1', 'step2', 'step3', 'step4'];
}

const GetStepContent = (stepIndex) => {

  const [stateCheckedInflamabil, setStateCheckedInflamabil] = React.useState({
    checkedA: false,
  });
  const [stateCheckedFragil, setStateCheckedFragil] = React.useState({
    checkedA: false,
  });
  const [stateCheckedPerisabil, setStateCheckedPerisabil] = React.useState({
    checkedA: false,
  });
  const [stateCheckedAnimal, setStateCheckedAnimal] = React.useState({
    checkedA: false,
  });

  const handleChangeInflamabil = (event) => {
    setStateCheckedInflamabil({ ...stateCheckedInflamabil, [event.target.name]: event.target.checked });
  };
  const handleChangeFragil = (event) => {
    setStateCheckedFragil({ ...stateCheckedFragil, [event.target.name]: event.target.checked });
  };
  const handleChangePerisabil = (event) => {
    setStateCheckedPerisabil({ ...stateCheckedPerisabil, [event.target.name]: event.target.checked });
  };
  const handleChangeAnimal = (event) => {
    setStateCheckedAnimal({ ...stateCheckedAnimal, [event.target.name]: event.target.checked });
  };
   
  switch (stepIndex) {
    case 0:
      return (
        <Container className="addPackagesContainer">
          <Box my={4}>
            <Grid 
              container
              direction="row"
              justifyContent="space-around"
              alignItems="center" >
              <Grid item xs={5}>
                <CarroTextField
                  type="select"
                  label="Tara de plecare"
                  placeholder="lkgjheworisesoj"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={5}>
                <CarroTextField
                  label="Oras de plecare"
                  placeholder="" 
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                />
              </Grid>
            </Grid>
          </Box>
          <Box my={4}>
            <Grid 
              container
              direction="row"
              justifyContent="space-around"
              alignItems="center" >
              <Grid item xs={5}>
                <CarroTextField
                  label="Tara de destinatie"
  
                  placeholder=""
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={5}>
                <CarroTextField
                  label="Oras de destinatie"
                  placeholder="" 
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                />
              </Grid>
            </Grid>
          </Box>
          <Box my={4}>
            <Grid 
              container
              direction="row"
              justifyContent="space-around"
              alignItems="center" >
              <Grid item xs={5} >
                <CarroTextField
                  label="Adresa de preluare"
  
                  placeholder=""
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={5}>
              <CarroTextField
                id="date"
                label="Next appointment"
                type="date"
                defaultValue="2017-05-24T10:30"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
              />
              </Grid>
            </Grid>
          </Box>
        </Container>
      );
    case 1:
      return (
        <Container className="addPackagesContainer">
          <Box my={4}>
            <Grid 
              container
              direction="row"
              justifyContent="space-around"
              alignItems="center" >
              <Grid item xs={5}>
                <CarroTextField
                  type="select"
                  label="Nume destinatar"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={5}>
                <CarroTextField
                  label="Numar de telefon"
                  placeholder="" 
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                />
              </Grid>
            </Grid>
          </Box>
          <Box>
            <Grid 
                container
                direction="row"
                justifyContent="center"
                >
              <CarroTextField
                  fullWidth = {true}
                  label="Adresa destinatar"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                />
            </Grid>
          </Box>
        </Container>
      );
    case 2:
      return (
        <Container className="addPackagesContainer">
          <Box my={4}>
            <Grid 
              container
              direction="row"
              justifyContent="space-around"
              alignItems="center" >
                <Grid item xs={3}>
                  <FormGroup row>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={stateCheckedInflamabil.checkedA}
                          onChange={handleChangeInflamabil}
                          name="checkedA"
                          color="default"
                        />
                      }
                      label="Inflamabil"
                    />
                  </FormGroup>
                </Grid>
                <Grid item xs={3}>
                  <FormGroup row>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={stateCheckedFragil.checkedA}
                          onChange={handleChangeFragil}
                          name="checkedA"
                          color="default"
                        />
                      }
                      label="Fragil"
                    />
                  </FormGroup>
                </Grid>
                <Grid item xs={3}>
                  <FormGroup row>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={stateCheckedPerisabil.checkedA}
                          onChange={handleChangePerisabil}
                          name="checkedA"
                          color="default"
                        />
                      }
                      label="Perisabil"
                    />
                  </FormGroup>
                </Grid>
                <Grid item xs={3}>
                  <FormGroup row>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={stateCheckedAnimal.checkedA}
                          onChange={handleChangeAnimal}
                          name="checkedA"
                          color="default"
                        />
                      }
                      label="Animal"
                    />
                  </FormGroup>
                </Grid>
            </Grid>
          </Box>
        </Container>
      );
    case 3:
      return (
        <Container className={"Primary-container-style"}>

        </Container>
      );
    // default:
    //   return 'Unknown stepIndex';
  }
}

export default function HorizontalLabelPositionBelowStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>All steps completed</Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>{GetStepContent(activeStep)}</Typography>
            <div className={classes.buttonsSpacing}>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}