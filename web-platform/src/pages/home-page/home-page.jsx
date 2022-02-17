import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import BoxIcon from "../../assets/images/box.png";
import CarIcon from "../../assets/images/car.png";
import BoxHome from "../../assets/images/box-home.png";
import QuestionHome from "../../assets/images/question-home.png";
import CarHome from "../../assets/images/car-home.png";
import { Container, Box, Grid } from "@material-ui/core";
import useStyles from "./home-pageStyles";
import "./home-pageStyles.jsx";
import { useTranslation } from 'react-i18next';
import { connect } from "react-redux";

const HomePage = ({userData}) => {
  
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <Container className={classes.FirstSection}>
      <Grid container className={classes.BgImg} justifyContent='center' >
        {/* <Grid container item xs={10} justifyContent='center'>
            <Box mt='6%' fontSize={50} fontWeight={700} color='white' textAlign='center' justifyContent='center'>
              {t('title')}
            </Box> 
          </Grid> */}
        <Grid container item xs={12} sm={9} md={7} lg={5} xl={5} className={classes.HomeBtnsMobile} justifyContent='space-around' alignItems='center' >
          <Link to="/add-package" style={{textDecoration:'none', color:'inherit'}}>
            <Box display='flex' alignItems='center' justifyContent='center'  className={classes.BgColorBtn} >
              <Box mx={2}><img src={BoxIcon} alt={""}></img></Box> 
              <Box mx={2}>  {t('HomePageLeftButtonText')}</Box>
            </Box>
          </Link>
        {/* </Grid>
        <Grid container item xs={6} justifyContent='flex-start'> */}
          <Link to="/add-transport" style={{textDecoration:'none', color:'inherit'}} >
            <Box  display='flex' alignItems='center' justifyContent='center' className={classes.BgColorBtn} >
              <Box mx={2}><img src={CarIcon} alt={""}></img></Box>
              <Box mx={2}>{t('HomePageRightButtonText')}</Box>
            </Box>
          </Link> 
        </Grid>
      </Grid>
      <Grid container justifyContent="center">
        <Grid container item xs={12} justifyContent='center'>
            <Box px={2} m={1} fontSize={25} color={'grey.700'} fontWeight={700} fontStyle='italic' textAlign=''>{t('subtitle')}</Box>
        </Grid>
        <Grid container item xs={12} sm={12} md={6} lg={3} xl={3} justifyContent='center'>
            <Box m={2} minWidth='310px' display ='flex'  flexDirection='row' boxShadow={4} borderRadius='8px' 
            className={classes.BgColorBtnBlue} justifyContent='center' alignItems='center' p={2}>
              <Box display='flex' fontSize={20} fontWeight={600} color='white' textAlign='center' mx={2}><img src={BoxHome} alt={""}></img></Box> 
              <Box display='flex' fontSize={20} fontWeight={600} color='white' textAlign='center'>Bucuresti - Constanta</Box>
              {/* <Box display='flex' fontSize={20} fontWeight={600} color='white' textAlign='center'>20 RON</Box> */}
            </Box>
        </Grid>
        <Grid container item xs={12} sm={12} md={6} lg={3} xl={3} justifyContent='center'>
            <Box m={2} minWidth='310px' display ='flex' flexDirection='row' boxShadow={4} borderRadius='8px' 
            className={classes.BgColorBtnBlue} justifyContent='center' alignItems='center' p={2}>
              <Box display='flex' fontSize={20} fontWeight={600} color='white' textAlign='center' mx={2}><img src={BoxHome} alt={""}></img></Box> 
              <Box display='flex' fontSize={20} fontWeight={600} color='white' textAlign='center'>Cluj-Napoca - Brasov</Box>
              {/* <Box display='flex' fontSize={20} fontWeight={600} color='white' textAlign='center'>35 RON</Box> */}
            </Box>
        </Grid>
        <Grid container item xs={12} sm={12} md={6} lg={3} xl={3} justifyContent='center'>
            <Box m={2} minWidth='310px' display ='flex'  flexDirection='row' boxShadow={4} borderRadius='8px' 
            className={classes.BgColorBtnBlue} justifyContent='center' alignItems='center' p={2}>
              <Box display='flex' fontSize={20} fontWeight={600} color='white' textAlign='center' mx={2}><img src={BoxHome} alt={""}></img></Box> 
              <Box display='flex' fontSize={20} fontWeight={600} color='white' textAlign='center'>Timisoara - Sibiu</Box>
              {/* <Box display='flex' fontSize={20} fontWeight={600} color='white' textAlign='center'>30 RON</Box> */}
            </Box>
        </Grid>
      </Grid>
      <br/>
      <Grid container justifyContent="center">
      <Grid container item xs={12} md={4} lg={4} xl={4} justifyContent='center'>
            <Box m={2} minWidth='200px' display ='flex'  flexDirection='column' borderRadius='8px' justifyContent='center' alignItems='center' p={2}>
              <Box display='flex' fontSize={20} fontWeight={600} color='white' textAlign='center' mx={2}><img src={QuestionHome} alt={""}></img></Box> 
              <br/>
              <Box display='flex' fontSize={18} fontWeight={700} textAlign='center'>Ce este CARRO?</Box><br/>
              <Box display='flex' fontSize={16} fontWeight={400} textAlign='center' maxWidth="320px">CARRO reprezinta in primul rand dorinta de a fi cei mai buni in domeniul in care activam: sa fim prima optiune a utilizatorilor nostrii cand doresc sa solicite un serviciu de livrare. <br/><br/>Carro își propune să ofere posibilitatea fiecărei persoane de a trimite/ primi un pachet (colet, marfă, palet etc.) care să ajungă în aceeași zi la destinația dorită.</Box>
            </Box>
        </Grid>
        <Grid container item xs={12} md={4} lg={4} xl={4} justifyContent='center'>
            <Box m={2} minWidth='200px' display ='flex'  flexDirection='column' borderRadius='8px' justifyContent='center' alignItems='center' p={2}>
              <Box display='flex' fontSize={20} fontWeight={600} color='white' textAlign='center' mx={2}><img src={CarHome} alt={""}></img></Box> 
              <br/>
              <Box display='flex' fontSize={18} fontWeight={700} textAlign='center'>Cum livram?</Box><br/>
              <Box display='flex' fontSize={16} fontWeight={400} textAlign='center' maxWidth="320px">Suntem o comunitate de CARPOOLING.<br/><br/>Conceptul de CARPOOLING pus pe piata de CARRO este simplu: utilizatorii se inregistreaza in baza de date. Oricine are nevoie de un serviciu de transport colet, marfa, bunuri, documente, cauta in aplicatie un partener ce ofera cursa dorita.</Box>
            </Box>
        </Grid>
      </Grid>
    </Container>
  );
};
const mapStateToProps = (state) =>({userData: state.userData})
export default connect(mapStateToProps, null)(HomePage);
