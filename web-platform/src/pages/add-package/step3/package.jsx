import React, {useState} from 'react';
import { Grid, InputAdornment, Select, MenuItem, FormControlLabel, Box} from "@material-ui/core";
import { Fragment } from "react";
import CarroTextField from "../../../components/textField/CarroTextField";
import CarroCheckbox from "../../../components/checkbox/CarroCheckbox";

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

const Package = (props)=>{

    const[packageSize, setPackageSize] = useState(null);

    const[currency, setCurrency] = useState('ron');

    const[Inflamabil, setInflamabil]= useState(false);
    const[Fragil, setFragil]= useState(false);
    const[Perisabil, setPerisabil]= useState(false);
    const[Animal, setAnimal]= useState(false);

    const handleSizeSelect = (event) =>{
        setPackageSize(event.target.value);
    };
    
    const handleCurrencySelect = (event) =>{
        setCurrency(event.target.value);
    };

    const handleInflamabilCheckboxClick = (event)=>{
        event.target.checked ? setInflamabil(true) : setInflamabil(false)
    } 

    const handleFragilCheckboxClick = (event)=>{
        event.target.checked ? setFragil(true) : setFragil(false)
    }

    const handlePerisabilCheckboxClick = (event)=>{
        event.target.checked ? setPerisabil(true) : setPerisabil(false)
    }

    const handleAnimalCheckboxClick = (event)=>{
        event.target.checked ? setAnimal(true) : setAnimal(false)
    }    

    return(
        <Grid container xs={12} spacing={3}>
            {console.log(Inflamabil, Fragil, Perisabil, Animal)}
            <Grid container item xs={6} justifyContent="center">
                <CarroTextField variant ='outlined' label='Marimea pachetului' fullWidth select value={packageSize} onChange={handleSizeSelect}>
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
            {packageSize==='small' ? (
                <Grid  container xs={12} justifyContent="center">
                    <Box fontSize={12} color={"#9C9C9C"}>{"Pachet mic - Latimea<=30cm, Lungimea<=30cm, Inaltimea<=30cm (ex. plicuri,cutii pantofi,cutii bijuterii, etc.)"}</Box>
                </Grid>
            ):(null)}
            {packageSize==='medium' ? (
                <Fragment>
                    <Grid  container xs={12} justifyContent="center">
                        <Box fontSize={12} color={"#9C9C9C"}>{"Pachet mediu - 30cm<Latimea<=100cm, 30cm<Lungimea<=100cm, 30cm<Inaltimea<=100cm (ex. bagaje de cala, cutii cu scaune, etc.)"}</Box>
                    </Grid>
                </Fragment>
            ):(null)}
            {packageSize==='big' ? (
                <Fragment>
                    <Grid  container item xs={4} justifyContent="center">
                        <CarroTextField variant ='outlined' label='Latime' fullWidth InputProps={{startAdornment: <InputAdornment position="start">m</InputAdornment>}}/>
                    </Grid>
                    <Grid  container item xs={4} justifyContent="center">
                        <CarroTextField variant ='outlined' label='Inaltime' fullWidth InputProps={{startAdornment: <InputAdornment position="start">m</InputAdornment>}}/>
                    </Grid>
                    <Grid  container item xs={4} justifyContent="center">
                        <CarroTextField variant ='outlined' label='Lungime' fullWidth InputProps={{startAdornment: <InputAdornment position="start">m</InputAdornment>}}/>
                    </Grid>
                    <Grid  container xs={12} justifyContent="center">
                        <CarroTextField label='Pachet Mare - Depaseste un metru cub' fullWidth />
                    </Grid>
                </Fragment>
            ):(null)}
            <Grid container item xs={12} justifyContent='center'>
                <CarroTextField variant ='outlined' label='Scurta descriere' fullWidth/>
            </Grid>
            <Grid container item xs={6} justifyContent="center">
                <CarroTextField variant ='outlined' label='Pret' fullWidth InputProps={{startAdornment: 
                    <InputAdornment position="start">
                        <Select value={currency} onChange={handleCurrencySelect}> {currencies.map((option)=>(
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>))}
                        </Select>
                    </InputAdornment>}}/>
            </Grid>
            <Grid container item xs={6} justifyContent="center">
                <CarroTextField variant ='outlined' label='Numar pachete' fullWidth/>
            </Grid>
            <Grid container item xs={12} justifyContent='center' maxRows={5}>
                <CarroTextField variant ='outlined' label='Descriere' multiline={4} rows={4} fullWidth/>
            </Grid>
            <Grid container item xs={12} justifyContent='space-between'>            
                <FormControlLabel onChange = {handleInflamabilCheckboxClick} control={<CarroCheckbox/>} label='Inflamabil'/>
                <FormControlLabel onChange = {handleFragilCheckboxClick} control={<CarroCheckbox/>} label='Fragil'/>
                <FormControlLabel onChange = {handlePerisabilCheckboxClick} control={<CarroCheckbox/>} label='Perisabil'/>
                <FormControlLabel onChange = {handleAnimalCheckboxClick} control={<CarroCheckbox/>} label='Animal'/>
            </Grid>
        </Grid>
    );

}

export default Package;