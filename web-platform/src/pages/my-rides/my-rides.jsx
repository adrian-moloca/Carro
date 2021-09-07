import React from 'react';
import useStyles from './my-ridesStyle';
import {AccordionDetails, AccordionSummary, Container, Typography, Accordion, Box, Card, List, ListItem, ListItemText, CardMedia, Paper, SvgIcon, Button} from '@material-ui/core'; 
import {ExpandMore, ArrowForward} from '@material-ui/icons';
import { spacing, typography, borders, shadows, flexbox,  } from '@material-ui/system';
//import '../../App.css'
import packageImg from '../../assets/images/box-small.png';
import {ReactComponent as fragileIco} from '../../assets/icon/fragile.svg';
import {ReactComponent as fishIco} from '../../assets/icon/fish.svg';
import {ReactComponent as fireIco} from '../../assets/icon/fire.svg';
import {ReactComponent as handboxIco} from '../../assets/icon/handbox.svg';
import {ReactComponent as animalprintsIco} from '../../assets/icon/animalprints.svg';
import { grey } from '@material-ui/core/colors';

const MyRides = () => {

  const classes = useStyles();

  return (
    <Container className={'Primary-container-style'} >
      <Box mb={2} fontWeight={400} fontSize={21} textAlign={'center'}>Transporturile mele</Box>
      <Box mb={1.5} borderRadius='10px' boxShadow={10} >
          <Accordion square='true' className={classes.AccordionBorderRadius}>
            <AccordionSummary aria-controls="transport-content" id="transport-header">
                <Typography >1.</Typography>
                <Box pl='5%' pr={2} fontWeight= {600} fontStyle='italic'>Timisoara, Romania</Box>
                <ArrowForward className={'Primary-color'}/>
                <Box px='2%' fontWeight= {600} fontStyle='italic'>Bucuresti, Romania</Box>
                <Box px='2%'>26/08/2021 02:00 AM</Box>
                <Box px='9%' fontSize={16} className={'Primary-color'}>Finalizata</Box>
                <ExpandMore className={'Primary-color'}/>
            </AccordionSummary>
            <AccordionDetails className={classes.AccordionDetailsFlex}>
                <Box borderRadius='10px'  boxShadow={3} display ='flex' flexDirection='column' mt = '-1%' mx='3%'px='2%'>
                  <Box display='flex' justifyContent='space-between' px='2%'>
                    <List dense='true'  disablePadding='true'>
                      <ListItem>
                        <Box mt = {1} fontSize={18} fontWeight={500}>Plecare: Timisoara, Romania</Box>
                        {/* <ListItemText disableTypography='true' primary='Plecare: Timisoara, Romania'/> */}                      
                      </ListItem>
                      <ListItem>
                        <Box mt={-2} fontSize={18} fontWeight={500}>Adresa de preluare: Lorem impsium Street</Box>
                        {/* <ListItemText disableTypography='true' primary='Adresa de preluare: Lorem impsium Street'/> */}                      
                      </ListItem>
                      <ListItem>
                        <Box mt={-2} fontSize={18} fontWeight={500}>Data Plecarii: 26/08/2021 02:00 AM</Box>
                        {/* <ListItemText disableTypography='true' primary='Data Plecarii: 26/08/2021 02:00 AM'/> */}                      
                      </ListItem>
                      <ListItem>
                        <Box mt={-2} fontSize={18} fontWeight={500}>Tipul de transport: Masina</Box>  
                        {/* <ListItemText disableTypography='true' primary='Tipul de transport: Masina'/> */}                      
                      </ListItem>
                    </List>
                    <List dense ='true' disablePadding='true'>
                      <ListItem>
                        <Box mt = {1}fontSize={18} fontWeight={500}>Destinatie: Bucuresti</Box>
                        {/* <ListItemText disableTypography='true' primary='Destinatie: Bucuresti'/> */}                      
                      </ListItem>
                      <ListItem>
                        <Box mt={-2} fontSize={18} fontWeight={500}>Adresa destinatie: Lorem Ipsium Street</Box>
                        {/* <ListItemText disableTypography='true' primary='Adresa destinatie: Lorem Ipsium Street'/> */}                      
                      </ListItem>
                      <ListItem>
                        <Box mt={-2} fontSize={18} fontWeight={500}>Numarul estimat de ore: 5 ore</Box>  
                        {/* <ListItemText disableTypography='true' primary='Numarul estimat de ore: 5 ore'/> */}                      
                      </ListItem>
                      <ListItem>
                        <Box mt={-2} fontSize={18} fontWeight={500}>Telefon: 0888888888</Box>
                        {/* <ListItemText disableTypography='true' primary='Telefon: 0888888888'/> */}                      
                      </ListItem>
                    </List>
                  </Box>
                  <Box mb='1%' fontSize={13} className={'Secondary-color'}>
                      *Pentru a putea sterge, inchide sau edita un transport nu trebuie avute pachete in desfasurare. 
                      Pachetele trebuie sa nu fie acceptate (modificarile pot fii comunicate clientilor direct prin numarul de telefon).
                  </Box>
                </Box>
                <Box mx={-2} mt={1} borderTop={1} borderColor= 'grey.400' >
                  <Box width = '23%' ml = {2} mt={2} border={2} borderColor='grey.400' borderRadius='10px'>
                    <Box display='flex' justifyContent='center' mt={2} pb={1} borderBottom={1.5} borderColor='grey.400'>
                       <img src={packageImg}/>
                    </Box>
                    <Box p={1} fontSize={10} borderBottom={1.5} borderColor='grey.400'>
                      <Box>Cantitate: 1</Box>
                      <Box>Dimensiuni(m): 0x0x0</Box>
                      <Box>Greutate: 1Kg</Box>
                    </Box>
                    <Box p={1} fontSize={10} borderBottom={1.5} borderColor='grey.400'>
                      <Box>Data ridicare: 26/08/2021 04:30 AM</Box>
                      <Box>Adresa ridicare: Lorem Ipsium Street</Box>
                      <Box>Adresa destinatie: Lorem Ipsium Street</Box>
                    </Box>
                    <Box p={1} borderBottom={1.5} borderColor='grey.400'>
                      <Box display ='flex' justifyContent='center' fontSize={14}>PRET</Box>
                      <Box display ='flex' justifyContent='center' fontSize={20}>15 LEI</Box>  
                    </Box>
                    <Box display='flex' justifyContent='center' mx={1} my ={2} borderColor='grey.400'>
                      <Box px={0.3}><SvgIcon component={fragileIco} viewBox='0 0 322 512'/></Box>
                      <Box px={0.3}><SvgIcon component={fishIco} viewBox='0 0 18 19'/></Box>
                      <Box px={0.3}><SvgIcon component={fireIco} viewBox='0 0 23 22'/></Box>
                      <Box px={0.3}><SvgIcon component={handboxIco} viewBox='0 0 21 21'/></Box>
                      <Box px={0.3}><SvgIcon component={animalprintsIco} viewBox='0 0 20 20'/></Box>
                    </Box>
                    <Box display='flex' flexDirection='column' alignItems='center' my={2} px={2}>
                      <Box>
                        <Button size='medium' variant = 'contained' className={classes.GreenButton}>
                          PREDARE
                        </Button>
                      </Box>
                      <Box py ={1}>
                        <Button size='small' variant = 'contained' className={'primarybutton'}>
                          DETALII
                        </Button>
                      </Box>
                    </Box>
                  </Box>
                </Box>
            </AccordionDetails>
          </Accordion>
      </Box>
      <Box mb={1.5} borderRadius='10px' boxShadow={10} >
          <Accordion square='true' className={classes.AccordionBorderRadius}>
            <AccordionSummary aria-controls="transport-content" id="transport-header">
                  <Typography >2.</Typography>
                  <Box pl='5%' pr={2} fontWeight= {600} fontStyle='italic'>Timisoara, Romania</Box>
                  <ArrowForward className={'Primary-color'}/>
                  <Box px='2%' fontWeight= {600} fontStyle='italic'>Bucuresti, Romania</Box>
                  <Box px='2%'>26/08/2021 02:00 AM</Box>
                  <Box px='9%' fontSize={16} className={'Primary-color'}>Finalizata</Box>
                  <ExpandMore className={'Primary-color'}/>
            </AccordionSummary>
            <AccordionDetails className={classes.AccordionDetailsFlex}>
              <Box borderRadius='10px'  boxShadow={3} display ='flex' flexDirection='column' mt = '-1%' mx='3%'px='2%'>
                  <Box display='flex' justifyContent='space-between' px='2%'>
                    <List dense='true'  disablePadding='true'>
                      <ListItem>
                        <Box mt = {1} fontSize={18} fontWeight={500}>Plecare: Timisoara, Romania</Box>
                        {/* <ListItemText disableTypography='true' primary='Plecare: Timisoara, Romania'/> */}                      
                      </ListItem>
                      <ListItem>
                        <Box mt={-2} fontSize={18} fontWeight={500}>Adresa de preluare: Lorem impsium Street</Box>
                        {/* <ListItemText disableTypography='true' primary='Adresa de preluare: Lorem impsium Street'/> */}                      
                      </ListItem>
                      <ListItem>
                        <Box mt={-2} fontSize={18} fontWeight={500}>Data Plecarii: 26/08/2021 02:00 AM</Box>
                        {/* <ListItemText disableTypography='true' primary='Data Plecarii: 26/08/2021 02:00 AM'/> */}                      
                      </ListItem>
                      <ListItem>
                        <Box mt={-2} fontSize={18} fontWeight={500}>Tipul de transport: Masina</Box>  
                        {/* <ListItemText disableTypography='true' primary='Tipul de transport: Masina'/> */}                      
                      </ListItem>
                    </List>
                    <List dense ='true' disablePadding='true'>
                      <ListItem>
                        <Box mt = {1}fontSize={18} fontWeight={500}>Destinatie: Bucuresti</Box>
                        {/* <ListItemText disableTypography='true' primary='Destinatie: Bucuresti'/> */}                      
                      </ListItem>
                      <ListItem>
                        <Box mt={-2} fontSize={18} fontWeight={500}>Adresa destinatie: Lorem Ipsium Street</Box>
                        {/* <ListItemText disableTypography='true' primary='Adresa destinatie: Lorem Ipsium Street'/> */}                      
                      </ListItem>
                      <ListItem>
                        <Box mt={-2} fontSize={18} fontWeight={500}>Numarul estimat de ore: 5 ore</Box>  
                        {/* <ListItemText disableTypography='true' primary='Numarul estimat de ore: 5 ore'/> */}                      
                      </ListItem>
                      <ListItem>
                        <Box mt={-2} fontSize={18} fontWeight={500}>Telefon: 0888888888</Box>
                        {/* <ListItemText disableTypography='true' primary='Telefon: 0888888888'/> */}                      
                      </ListItem>
                    </List>
                  </Box>
                  <Box mb='1%' fontSize={13} className={'Secondary-color'}>
                      *Pentru a putea sterge, inchide sau edita un transport nu trebuie avute pachete in desfasurare. 
                      Pachetele trebuie sa nu fie acceptate (modificarile pot fii comunicate clientilor direct prin numarul de telefon).
                  </Box>
                </Box>
                <Box mx={-2} mt={1} borderTop={1} borderColor= 'grey.400' >
                  <Box width = '23%' ml = {2} mt={2} border={2} borderColor='grey.400' borderRadius='10px'>
                    <Box display='flex' justifyContent='center' mt={2} pb={1} borderBottom={1.5} borderColor='grey.400'>
                       <img src={packageImg}/>
                    </Box>
                    <Box p={1} fontSize={10} borderBottom={1.5} borderColor='grey.400'>
                      <Box>Cantitate: 1</Box>
                      <Box>Dimensiuni(m): 0x0x0</Box>
                      <Box>Greutate: 1Kg</Box>
                    </Box>
                    <Box p={1} fontSize={10} borderBottom={1.5} borderColor='grey.400'>
                      <Box>Data ridicare: 26/08/2021 04:30 AM</Box>
                      <Box>Adresa ridicare: Lorem Ipsium Street</Box>
                      <Box>Adresa destinatie: Lorem Ipsium Street</Box>
                    </Box>
                    <Box p={1} borderBottom={1.5} borderColor='grey.400'>
                      <Box display ='flex' justifyContent='center' fontSize={14}>PRET</Box>
                      <Box display ='flex' justifyContent='center' fontSize={20}>15 LEI</Box>  
                    </Box>
                    <Box display='flex' justifyContent='center' mx={1} my ={2} borderColor='grey.400'>
                      <Box px={0.3}><SvgIcon component={fragileIco} viewBox='0 0 322 512'/></Box>
                      <Box px={0.3}><SvgIcon component={fishIco} viewBox='0 0 18 19'/></Box>
                      <Box px={0.3}><SvgIcon component={fireIco} viewBox='0 0 23 22'/></Box>
                      <Box px={0.3}><SvgIcon component={handboxIco} viewBox='0 0 21 21'/></Box>
                      <Box px={0.3}><SvgIcon component={animalprintsIco} viewBox='0 0 20 20'/></Box>
                    </Box>
                    <Box display='flex' flexDirection='column' alignItems='center' my={2} px={2}>
                      <Box>
                        <Button size='medium' variant = 'contained' className={classes.GreenButton}>
                          PREDARE
                        </Button>
                      </Box>
                      <Box py ={1}>
                        <Button size='small' variant = 'contained' className={'primarybutton'}>
                          DETALII
                        </Button>
                      </Box>
                    </Box>
                  </Box>
                </Box>
            </AccordionDetails>
          </Accordion>
      </Box>
      <Box mb={1.5} borderRadius='10px' boxShadow={10} >
          <Accordion square='true' className={classes.AccordionBorderRadius}>
            <AccordionSummary aria-controls="transport-content" id="transport-header">
                <Typography >3.</Typography>
                <Box pl='5%' pr={2} fontWeight= {600} fontStyle='italic'>Timisoara, Romania</Box>
                <ArrowForward className={'Primary-color'}/>
                <Box px='2%' fontWeight= {600} fontStyle='italic'>Bucuresti, Romania</Box>
                <Box px='2%'>26/08/2021 02:00 AM</Box>
                <Box px='9%' fontSize={16} className={'Primary-color'}>Finalizata</Box>
                <ExpandMore className={'Primary-color'}/>
            </AccordionSummary>
            <AccordionDetails className={classes.AccordionDetailsFlex}>
              <Box borderRadius='10px'  boxShadow={3} display ='flex' flexDirection='column' mt = '-1%' mx='3%'px='2%'>
                  <Box display='flex' justifyContent='space-between' px='2%'>
                    <List dense='true'  disablePadding='true'>
                      <ListItem>
                        <Box mt = {1} fontSize={18} fontWeight={500}>Plecare: Timisoara, Romania</Box>
                        {/* <ListItemText disableTypography='true' primary='Plecare: Timisoara, Romania'/> */}                      
                      </ListItem>
                      <ListItem>
                        <Box mt={-2} fontSize={18} fontWeight={500}>Adresa de preluare: Lorem impsium Street</Box>
                        {/* <ListItemText disableTypography='true' primary='Adresa de preluare: Lorem impsium Street'/> */}                      
                      </ListItem>
                      <ListItem>
                        <Box mt={-2} fontSize={18} fontWeight={500}>Data Plecarii: 26/08/2021 02:00 AM</Box>
                        {/* <ListItemText disableTypography='true' primary='Data Plecarii: 26/08/2021 02:00 AM'/> */}                      
                      </ListItem>
                      <ListItem>
                        <Box mt={-2} fontSize={18} fontWeight={500}>Tipul de transport: Masina</Box>  
                        {/* <ListItemText disableTypography='true' primary='Tipul de transport: Masina'/> */}                      
                      </ListItem>
                    </List>
                    <List dense ='true' disablePadding='true'>
                      <ListItem>
                        <Box mt = {1}fontSize={18} fontWeight={500}>Destinatie: Bucuresti</Box>
                        {/* <ListItemText disableTypography='true' primary='Destinatie: Bucuresti'/> */}                      
                      </ListItem>
                      <ListItem>
                        <Box mt={-2} fontSize={18} fontWeight={500}>Adresa destinatie: Lorem Ipsium Street</Box>
                        {/* <ListItemText disableTypography='true' primary='Adresa destinatie: Lorem Ipsium Street'/> */}                      
                      </ListItem>
                      <ListItem>
                        <Box mt={-2} fontSize={18} fontWeight={500}>Numarul estimat de ore: 5 ore</Box>  
                        {/* <ListItemText disableTypography='true' primary='Numarul estimat de ore: 5 ore'/> */}                      
                      </ListItem>
                      <ListItem>
                        <Box mt={-2} fontSize={18} fontWeight={500}>Telefon: 0888888888</Box>
                        {/* <ListItemText disableTypography='true' primary='Telefon: 0888888888'/> */}                      
                      </ListItem>
                    </List>
                  </Box>
                  <Box mb='1%' fontSize={13} className={'Secondary-color'}>
                      *Pentru a putea sterge, inchide sau edita un transport nu trebuie avute pachete in desfasurare. 
                      Pachetele trebuie sa nu fie acceptate (modificarile pot fii comunicate clientilor direct prin numarul de telefon).
                  </Box>
                </Box>
                <Box mx={-2} mt={1} borderTop={1} borderColor= 'grey.400' >
                  <Box width = '23%' ml = {2} mt={2} border={2} borderColor='grey.400' borderRadius='10px'>
                    <Box display='flex' justifyContent='center' mt={2} pb={1} borderBottom={1.5} borderColor='grey.400'>
                       <img src={packageImg}/>
                    </Box>
                    <Box p={1} fontSize={10} borderBottom={1.5} borderColor='grey.400'>
                      <Box>Cantitate: 1</Box>
                      <Box>Dimensiuni(m): 0x0x0</Box>
                      <Box>Greutate: 1Kg</Box>
                    </Box>
                    <Box p={1} fontSize={10} borderBottom={1.5} borderColor='grey.400'>
                      <Box>Data ridicare: 26/08/2021 04:30 AM</Box>
                      <Box>Adresa ridicare: Lorem Ipsium Street</Box>
                      <Box>Adresa destinatie: Lorem Ipsium Street</Box>
                    </Box>
                    <Box p={1} borderBottom={1.5} borderColor='grey.400'>
                      <Box display ='flex' justifyContent='center' fontSize={14}>PRET</Box>
                      <Box display ='flex' justifyContent='center' fontSize={20}>15 LEI</Box>  
                    </Box>
                    <Box display='flex' justifyContent='center' mx={1} my ={2} borderColor='grey.400'>
                      <Box px={0.3}><SvgIcon component={fragileIco} viewBox='0 0 322 512'/></Box>
                      <Box px={0.3}><SvgIcon component={fishIco} viewBox='0 0 18 19'/></Box>
                      <Box px={0.3}><SvgIcon component={fireIco} viewBox='0 0 23 22'/></Box>
                      <Box px={0.3}><SvgIcon component={handboxIco} viewBox='0 0 21 21'/></Box>
                      <Box px={0.3}><SvgIcon component={animalprintsIco} viewBox='0 0 20 20'/></Box>
                    </Box>
                    <Box display='flex' flexDirection='column' alignItems='center' my={2} px={2}>
                      <Box>
                        <Button size='medium' variant = 'contained' className={classes.GreenButton}>
                          PREDARE
                        </Button>
                      </Box>
                      <Box py ={1}>
                        <Button size='small' variant = 'contained' className={'primarybutton'}>
                          DETALII
                        </Button>
                      </Box>
                    </Box>
                  </Box>
                </Box>              
            </AccordionDetails>
          </Accordion>
      </Box>
    </Container>
  );
};

export default MyRides;
