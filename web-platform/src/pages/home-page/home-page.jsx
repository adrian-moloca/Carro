import React from "react";
import BoxIcon from "../../assets/images/box.png";
import CarIcon from "../../assets/images/car.png";
import { Container, Box, Grid, Link } from "@material-ui/core";
import useStyles from "./home-pageStyles";
import "./home-pageStyles.jsx";
import { useTranslation } from 'react-i18next';

const HomePage = () => {
  
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <Container className={classes.FirstSection}>
      <Grid container className={classes.BgImg} justifyContent='center' >
        <Grid container item xs={10} justifyContent='center'>
            <Box mt='6%' fontSize={50} fontWeight={700} color='white' textAlign='center' justifyContent='center'>
              {t('title')}
            </Box>
          </Grid>
        <Grid container item xs={5} justifyContent='space-around' >
          <Link href="/add-package" underline= 'none' color= 'inherit'>
            <Box display='flex' alignItems='center' justifyContent='center' fontSize='22px'                    
                  borderRadius='15px' height='120px' width='100%' minWidth='220px' className={classes.BgColorBtn} >
              <Box mx={2}><img src={BoxIcon} alt={""}></img></Box> 
              <Box mx={2}>Trimite pachet</Box>
            </Box>
          </Link> 
        {/* </Grid>
        <Grid container item xs={6} justifyContent='flex-start'> */}
          <Link href="/add-transport" underline= 'none' color= 'inherit' >
            <Box  display='flex' alignItems='center' justifyContent='center' fontSize='22px'
                  borderRadius='15px' height='120px' width='100%' minWidth='220px' className={classes.BgColorBtn} >
              <Box mx={2}><img src={CarIcon} alt={""}></img></Box>
              <Box mx={2}>Ofera transport</Box>
            </Box>
          </Link> 
        </Grid>
      </Grid>
      <Grid container justifyContent="center">
        <Grid container item xs={12} justifyContent='flex-start'>
            <Box px={2} m={1} fontSize={25} color={'grey.700'} fontWeight={700} fontStyle='italic' textAlign=''>Cele mai cautate transporturi:</Box>
        </Grid>
        <Grid container item xs={12} md={3} lg={3} xl={3} justifyContent='center'>
            <Box m={2} minWidth='200px' display ='flex'  flexDirection='column' boxShadow={4} borderRadius='8px' 
            className={classes.BgColorBtnBlue} justifyContent='center' alignItems='center' p={2}>
              <Box display='flex' fontSize={20} fontWeight={600} color='white' textAlign='center'>Bucuresti - Constanta</Box>
              <Box display='flex' fontSize={20} fontWeight={600} color='white' textAlign='center'>20 RON</Box>
            </Box>
        </Grid>
        <Grid container item xs={12} md={3} lg={3} xl={3} justifyContent='center'>
            <Box m={2} minWidth='200px' display ='flex' flexDirection='column' boxShadow={4} borderRadius='8px' 
            className={classes.BgColorBtnBlue} justifyContent='center' alignItems='center' p={2}>
              <Box display='flex' fontSize={20} fontWeight={600} color='white' textAlign='center'>Cluj-Napoca - Brasov</Box>
              <Box display='flex' fontSize={20} fontWeight={600} color='white' textAlign='center'>35 RON</Box>
            </Box>
        </Grid>
        <Grid container item xs={12} md={3} lg={3} xl={3} justifyContent='center'>
            <Box m={2} minWidth='200px' display ='flex'  flexDirection='column' boxShadow={4} borderRadius='8px' 
            className={classes.BgColorBtnBlue} justifyContent='center' alignItems='center' p={2}>
              <Box display='flex' fontSize={20} fontWeight={600} color='white' textAlign='center'>Timisoara - Sibiu</Box>
              <Box display='flex' fontSize={20} fontWeight={600} color='white' textAlign='center'>30 RON</Box>
            </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomePage;
