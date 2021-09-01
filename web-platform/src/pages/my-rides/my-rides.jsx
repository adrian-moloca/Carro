import React from 'react'
import useStyles from './my-ridesStyle'
import {AccordionDetails, AccordionSummary, Container, Typography, Accordion, Box, Card, List, ListItem, ListItemText} from '@material-ui/core' 
import {ExpandMore, ArrowForward} from '@material-ui/icons'
import { spacing, typography, borders, shadows, flexbox,  } from '@material-ui/system'
import '../../App.css'

const MyRides = () => {

  const classes = useStyles();

  return (
    <Container className={'Primary-container-style'} >
      <Box mb={2} fontWeight={400} fontSize={21} textAlign={'center'}>Transporturile mele</Box>
      <Box mb={1.5} boxShadow={4}>
          <Accordion>
            <AccordionSummary aria-controls="transport-content" id="transport-header">
                <Typography >1.</Typography>
                <Box pl='5%' pr={2} fontWeight= {600} fontStyle='italic'>Timisoara, Romania</Box>
                <ArrowForward className={'Primary-color'}/>
                <Box px='2%' fontWeight= {600} fontStyle='italic'>Bucuresti, Romania</Box>
                <Box px='2%'>26/08/2021 02:00 AM</Box>
                <Box px='9%' fontSize={16} className={'Primary-color'}>Finalizata</Box>
                <ExpandMore className={'Primary-color'}/>
            </AccordionSummary>
            <AccordionDetails>
                <Box display ='flex' flexDirection='column' px='5%'>
                  <Box display='flex' justifyContent='space-between' width={1} borderColor='grey.500' m='1%'>
                    <List dense='true' disablePadding='true'>
                      <ListItem>
                        <ListItemText primary='Plecare: Timisoara, Romania'/>                      
                      </ListItem>
                      <ListItem>
                        <ListItemText primary='Adresa de preluare: Lorem impsium Street'/>                      
                      </ListItem>
                      <ListItem>
                        <ListItemText primary='Data Plecarii: 26/08/2021 02:00 AM'/>                      
                      </ListItem>
                      <ListItem>
                        <ListItemText primary='Tipul de transport: Masina'/>                      
                      </ListItem>
                    </List>
                    <List dense ='true' disablePadding='true'>
                    <ListItem>
                        <ListItemText primary='Destinatie: Bucuresti'/>                      
                      </ListItem>
                      <ListItem>
                        <ListItemText primary='Adresa destinatie: Lorem Ipsium Street'/>                      
                      </ListItem>
                      <ListItem>
                        <ListItemText primary='Numarul estimat de ore: 5 ore'/>                      
                      </ListItem>
                      <ListItem>
                        <ListItemText primary='Telefon: 0888888888'/>                      
                      </ListItem>
                    </List>
                  </Box>
                  <Box fontSize={13} >
                      *Pentru a putea sterge, inchide sau edita un transport nu trebuie avute pachete in desfasurare. 
                      Pachetele trebuie sa nu fie acceptate (modificarile pot fii comunicate clientilor direct prin numarul de telefon).
                  </Box>
                </Box>
            </AccordionDetails>
          </Accordion>
      </Box>
      <Box mb={1.5} boxShadow={4}>
          <Accordion>
            <AccordionSummary aria-controls="transport-content" id="transport-header">
                  <Typography >2.</Typography>
                  <Box pl='5%' pr={2} fontWeight= {600} fontStyle='italic'>Timisoara, Romania</Box>
                  <ArrowForward className={'Primary-color'}/>
                  <Box px='2%' fontWeight= {600} fontStyle='italic'>Bucuresti, Romania</Box>
                  <Box px='2%'>26/08/2021 02:00 AM</Box>
                  <Box px='9%' fontSize={16} className={'Primary-color'}>Finalizata</Box>
                  <ExpandMore className={'Primary-color'}/>
              </AccordionSummary>
              <AccordionDetails>
                
              </AccordionDetails>
          </Accordion>
      </Box>
      <Box mb={1.5} boxShadow={4}>
          <Accordion>
            <AccordionSummary aria-controls="transport-content" id="transport-header">
                <Typography >3.</Typography>
                <Box pl='5%' pr={2} fontWeight= {600} fontStyle='italic'>Timisoara, Romania</Box>
                <ArrowForward className={'Primary-color'}/>
                <Box px='2%' fontWeight= {600} fontStyle='italic'>Bucuresti, Romania</Box>
                <Box px='2%'>26/08/2021 02:00 AM</Box>
                <Box px='9%' fontSize={16} className={'Primary-color'}>Finalizata</Box>
                <ExpandMore className={'Primary-color'}/>
            </AccordionSummary>
            <AccordionDetails>
              
            </AccordionDetails>
          </Accordion>
      </Box>
    </Container>
  )
}

export default MyRides;
