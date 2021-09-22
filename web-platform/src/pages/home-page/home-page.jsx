import React from "react";
import "./home-pageStyles.jsx";
import BoxIcon from "../../assets/images/box.png";
import CarIcon from "../../assets/images/car.png";
import {
  Container,
  Box,
  TextField,
  Grid,
  Checkbox,
  Typography,
  Button,
  Link
} from "@material-ui/core";
import useStyles from "./home-pageStyles";
import { withStyles } from "@material-ui/styles";
import { grey } from "@material-ui/core/colors";

const MyGrid = withStyles ({

  'spacing-xs-5':{
    margin:0,
    padding:0,
  },

  'spacing-xs-3':{
    margin:0,
  }

})(Grid)

const HomePage = () => {
  const classes = useStyles();

  return (
    <Container className={classes.FirstSection}>
      <MyGrid container className={classes.BgImg} justifyContent='center' spacing={5}>
        <Grid container item xs={12} justifyContent='center'>
            <Box mt='6%' fontSize={50} fontWeight={700} color='white' textAlign='center' justifyContent='center'>
              FUTURE DELIVERY
            </Box>
          </Grid>
        <Grid container item xs={5} justifyContent='space-around' >
          <Link href="/add-package" underline= 'none' color= 'inherit'>
            <Box display='flex' alignItems='center' justifyContent='center' fontSize='22px'                    
                  borderRadius='15px' height='120px' width='100%' minWidth='220px' className={classes.BgColorBtn} >
              <Box mx={2}><img src={BoxIcon}></img></Box> 
              <Box mx={2}>Trimite pachet</Box>
            </Box>
          </Link> 
        {/* </Grid>
        <Grid container item xs={6} justifyContent='flex-start'> */}
          <Link href="/add-transport" underline= 'none' color= 'inherit' >
            <Box  display='flex' alignItems='center' justifyContent='center' fontSize='22px'
                  borderRadius='15px' height='120px' width='100%' minWidth='220px' className={classes.BgColorBtn} >
              <Box mx={2}><img src={CarIcon}></img></Box>
              <Box mx={2}>Ofera transport</Box>
            </Box>
          </Link> 
        </Grid>
      </MyGrid>
      <MyGrid container spacing={3} justifyContent="center">
        <Grid container item xs={12} justifyContent='flex-start'>
            <Box px={2} fontSize={25} color={'grey.700'} fontWeight={700} fontStyle='italic' textAlign=''>Cele mai cautate transporturi:</Box>
        </Grid>
        <Grid container item xs={12} md={3} lg={3} xl={3} justifyContent='center'>
            <Box minWidth='200px' display ='flex'  flexDirection='column' boxShadow={4} borderRadius='8px' 
            className={classes.BgColorBtnBlue} justifyContent='center' alignItems='center' p={2}>
              <Box display='flex' fontSize={20} fontWeight={600} color='white' textAlign='center'>Bucuresti - Constanta</Box>
              <Box display='flex' fontSize={20} fontWeight={600} color='white' textAlign='center'>20 RON</Box>
            </Box>
          </Grid>
          <Grid container item xs={12} md={3} lg={3} xl={3} justifyContent='center'>
            <Box minWidth='200px' display ='flex' flexDirection='column' boxShadow={4} borderRadius='8px' 
            className={classes.BgColorBtnBlue} justifyContent='center' alignItems='center' p={2}>
              <Box display='flex' fontSize={20} fontWeight={600} color='white' textAlign='center'>Cluj-Napoca - Brasov</Box>
              <Box display='flex' fontSize={20} fontWeight={600} color='white' textAlign='center'>35 RON</Box>
            </Box>
          </Grid>
          <Grid container item xs={12} md={3} lg={3} xl={3} justifyContent='center'>
            <Box minWidth='200px' display ='flex'  flexDirection='column' boxShadow={4} borderRadius='8px' 
            className={classes.BgColorBtnBlue} justifyContent='center' alignItems='center' p={2}>
              <Box display='flex' fontSize={20} fontWeight={600} color='white' textAlign='center'>Timisoara - Sibiu</Box>
              <Box display='flex' fontSize={20} fontWeight={600} color='white' textAlign='center'>30 RON</Box>
            </Box>
          </Grid>
        </MyGrid>
    </Container>
  );
};

export default HomePage;
