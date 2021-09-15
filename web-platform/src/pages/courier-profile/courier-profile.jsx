import React, { useState } from "react";
import { Box, Grid, Container, InputAdornment } from "@material-ui/core";
import DriverProfileCard from '../../components/cards/driverProfileCard/driverProfileCard';
import CommentCard from '../../components/cards/commentCard/commentCard';
import profilePhotoMiddle from '../../assets/images/photoprofile2.png';
import PaginationSBD from '../../components/pagination/pagination';
import CarroTextField from '../../components/textField/CarroTextField'
import SendSharpIcon from '@material-ui/icons/SendSharp';
import SeeProfileBtn from '../../components/buttons/textOnlyButtons/seeProfileBtn/seeProfileBtn';
import useStyles from './courier-profileStyle';

const AddTransport = () =>{

  const classes = useStyles();

  return(
    <Container className='Primary-container-style'>
      <Box mb={2} fontWeight={400} fontSize={21} textAlign={'center'}>Nume Curier</Box>
      <Box m='2%' display='flex' flexDirection='column' justifyContent="center"  width='0.939' p={1} borderRadius='10px' boxShadow={3}>
        <DriverProfileCard
          image={profilePhotoMiddle} 
          masina='Dacia'
          an='1900'
          culoare='negru'
          totalCurse='10'/>
        <Box mb={2} className={'Secondary-color'} fontWeight={"normal"} fontSize={18}>Comentarii</Box>
        <CommentCard/>
        <PaginationSBD/>
        <Box mt={3} display='flex' justifyContent='center'  width='1' >
          <CarroTextField  
            label='Lasa un comentariu' 
            InputProps={{
              endAdornment: 
                <InputAdornment position="end">
                  <SeeProfileBtn endIcon={<SendSharpIcon/>}/>
                </InputAdornment>}}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default AddTransport;