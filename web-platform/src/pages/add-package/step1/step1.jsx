import React from "react";
import { Box, Grid, } from "@material-ui/core";
import CarroTextField from "../../../components/textField/CarroTextField";

const StepOne = () =>{
    return(
    <Box display='flex' justifyContent='center' mt='8%'>
        <Grid container xs={12} spacing={3} >
        <Grid container item xs={6} justifyContent="center">
            <CarroTextField variant ='outlined' label='Tara de plecare' fullWidth/>
        </Grid>
        <Grid container item xs={6} justifyContent="center">
            <CarroTextField variant ='outlined' label='Oras de plecare' fullWidth/>
        </Grid>
        <Grid container item xs={6} justifyContent='center'>
            <CarroTextField variant ='outlined' label='Tara destinatie' fullWidth/>
        </Grid>
        <Grid container item xs={6} justifyContent='center'>
            <CarroTextField variant ='outlined' label='Oras destinatie' fullWidth/>
        </Grid>
        <Grid container item xs={6} justifyContent='center'>
            <CarroTextField variant ='outlined' label='Adresa de preluare' fullWidth/>
        </Grid>
        <Grid container item xs={6} justifyContent='center'>
            <CarroTextField variant ='outlined' label='Data si ora de plecare' 
            id="departTime" type="datetime-local"
            InputLabelProps={{shrink: true}} fullWidth/>
        </Grid>
        </Grid>
    </Box>
    );
};

export default StepOne;