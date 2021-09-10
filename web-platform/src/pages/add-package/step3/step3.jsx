import React, {useState} from "react";
import { Fragment } from "react";
import { Box, Grid, InputAdornment, Select, MenuItem, FormControlLabel, Button} from "@material-ui/core";
import CarroTextField from "../../../components/textField/CarroTextField";
import CarroCheckbox from "../../../components/checkbox/CarroCheckbox";
import { Add } from "@material-ui/icons";

const packageSizes = [
    {
      value: 'small',
      label: 'Mic',
    },
    {
      value: 'medium',
      label: 'Mediu',
    },
    {
      value: 'big',
      label: 'Mare',
    },
  ];
  
  const currencies = [
    {
      value: 'ron',
      label: 'RON',
    },
    {
      value: 'eur',
      label: '€',
    },
    {
      value: 'usd',
      label: '$',
    },
    {
      value: 'gbp',
      label: '£',
    },
  ];

const StepThree = (props) =>{

    const[packageSize, setPackageSize] = useState(null);

    const[currency, setCurrency] = useState('ron');


    const handleSizeSelect = (event) =>{
        setPackageSize(event.target.value);
      };
    
      const handleCurrencySelect = (event) =>{
        setCurrency(event.target.value);
      };


    return(
        <Box display='flex' justifyContent='center' mt='8%'>
          <Grid container xs={12} spacing={3} >
            <Grid container item xs={6} justifyContent="center">
              <CarroTextField variant ='outlined' label='Marimea pachetului' fullWidth
                  select value={packageSize} onChange={handleSizeSelect}>
                      {packageSizes.map((option)=>(
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
              </CarroTextField>
            </Grid>
            <Grid container item xs={6} justifyContent="center">
              <CarroTextField variant ='outlined' label='Greutatea pachetului' fullWidth
                  InputProps={{startAdornment: <InputAdornment position="start">Kg</InputAdornment>}}/>
            </Grid>
            {packageSize==='big' ? (
                <Fragment>
                  <Grid  container item xs={4} justifyContent="center">
                      <CarroTextField variant ='outlined' label='Latime' fullWidth
                          InputProps={{startAdornment: <InputAdornment position="start">m</InputAdornment>}}/>
                  </Grid>
                  <Grid  container item xs={4} justifyContent="center">
                    <CarroTextField variant ='outlined' label='Inaltime' fullWidth
                      InputProps={{startAdornment: <InputAdornment position="start">m</InputAdornment>}}/>
                  </Grid>
                  <Grid  container item xs={4} justifyContent="center">
                    <CarroTextField variant ='outlined' label='Lungime' fullWidth
                        InputProps={{startAdornment: <InputAdornment position="start">m</InputAdornment>}}/>
                  </Grid>
                </Fragment>
            ):(null)}
            <Grid container item xs={12} justifyContent='center'>
              <CarroTextField variant ='outlined' label='Scurta descriere' fullWidth/>
            </Grid>
            <Grid container item xs={6} justifyContent="center">
              <CarroTextField variant ='outlined' label='Pret' fullWidth
                  InputProps={{startAdornment: 
                    <InputAdornment position="start">
                      <Select value={currency} onChange={handleCurrencySelect}>
                        {currencies.map((option)=>(
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </Select>
                    </InputAdornment>}}/>
            </Grid>
            <Grid container item xs={6} justifyContent="center">
              <CarroTextField variant ='outlined' label='Numar pachete' fullWidth/>
            </Grid>
            <Grid container item xs={12} justifyContent='center' multiline maxRows={5}>
              <CarroTextField variant ='outlined' label='Descriere' fullWidth/>
            </Grid>
            <Grid container item xs={12} justifyContent='space-between'>            
              <FormControlLabel control={<CarroCheckbox/>} 
              label='Inflamabil'/>
              <FormControlLabel control={<CarroCheckbox/>} 
              label='fragil'/>
              <FormControlLabel control={<CarroCheckbox/>} 
              label='Perisabil'/>
              <FormControlLabel control={<CarroCheckbox/>} 
              label='Animal'/>
            </Grid>
            <Grid container item xs={12} justifyContent='flex-end'>
                <Button startIcon = {<Add/>} variant='default' className='Primary-color'>Add package</Button>
            </Grid>
          </Grid>
      </Box>
    );
};

export default StepThree;