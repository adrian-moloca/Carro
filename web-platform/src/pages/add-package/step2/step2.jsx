import React from "react";
import { Box, Grid, } from "@material-ui/core";
import CarroTextField from "../../../components/textField/CarroTextField";

const StepTwo = () =>{
    return(
        <Box display='flex' justifyContent='center' mt='12%'>
            <Grid container xs={12} spacing={3} >
            <Grid container item xs={6} justifyContent="center">
                <CarroTextField variant ='outlined' label='Nume destinatar' fullWidth/>
            </Grid>
            <Grid container item xs={6} justifyContent="center">
                <CarroTextField variant ='outlined' label='Numar de telefon' fullWidth/>
            </Grid>
            <Grid container item xs={12} justifyContent='center'>
                <CarroTextField variant ='outlined' label='Adresa destinatar' fullWidth/>
            </Grid>
            </Grid>
        </Box>
    );
};

export default StepTwo;