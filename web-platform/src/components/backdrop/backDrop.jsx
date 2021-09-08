import Reeact, { useState } from 'react';
import { Backdrop, Box, Container, FormControlLabel, List, ListItem, Radio, RadioGroup} from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import { Star, StarHalf, StarBorder, } from '@material-ui/icons';
import ListItemPersonalized from '../list/listItemad/listItemPersonalized';
import PrimaryButton from '../buttons/primaryButton/primaryButton';
import SecondaryButton from '../buttons/secondaryButton/secondaryButton';
import useStyles from './backDropStyle';

const BackdropSelectDriver=(props)=>{

    const[payment, setPayment] = useState('cardOnline');

    const classes = useStyles();

    const MyBackdrop = withStyles({
        '& element.style':{
            visibility: 'visible',
        },

        /* '.MuiBackdrop-root' */
        root:{
            zIndex:'1',
            backgroundColor: 'black 0.7',
            
        },

    })(Backdrop);

    const handlePayment = (event)=>{
        setPayment(event.target.value);
    }

    return(
        <MyBackdrop open={props.open} onClick={props.clicked}>
            <Container className={classes.containerBackdrop}>
                <Box  mb={2} borderBottom={1} fontWeight={400} fontSize={21} textAlign={'left'}>
                    Selecteaza Curierul
                </Box>
                <Box display='flex' justifyContent='center'><img src={props.image}/></Box>
                <Box mt = {2} fontSize={22} fontWeight={600}display= 'flex' justifyContent='center'>{props.name}</Box>
                <Box display='flex' px='15%' my={2}  justifyContent='space-between' borderBottom={1}>
                    <List>
                        <ListItemPersonalized>Plecare: {props.plecare}</ListItemPersonalized>
                        <ListItemPersonalized>Destinatie: {props.destinatie}</ListItemPersonalized>
                        <ListItemPersonalized>telefon: {props.telefon}</ListItemPersonalized>
                    </List>
                    <List>
                        <ListItemPersonalized>Data plecare: {props.dataPlecare}</ListItemPersonalized>
                        <ListItemPersonalized>
                            <Star className={classes.starsStyle}/>
                            <Star className={classes.starsStyle}/>
                            <Star className={classes.starsStyle}/>
                            <StarHalf className={classes.starsStyle}/>
                            <StarBorder className={classes.starsStyle}/>
                        </ListItemPersonalized>
                    </List>
                </Box>
                <Box mb={2} px='17%' fontWeight='500'>Metoda de plata</Box>
                <Box px='22%' display='flex' >
                    <RadioGroup row value = {payment} onChange={handlePayment} className={classes.radioGroupStyle}>                   
                        <FormControlLabel value = 'cardOnline' control={<Radio/>} label='card Online'/>
                        <FormControlLabel value = 'ordinDePlata' control={<Radio/>} label='ordin de Plata'/>
                        <FormControlLabel value = 'ramburs' control={<Radio/>} label='Ramburs'/>
                    </RadioGroup>
                </Box>
                <Box px='30%' mt ={4} display='flex' justifyContent='space-between'>
                    <SecondaryButton variant='outlined' onClick={props.clicked}>ANULEAZA</SecondaryButton>
                    <PrimaryButton variant='contained'>SELECTEAZA</PrimaryButton>
                </Box>
            </Container>
        </MyBackdrop>

    );
};

export default BackdropSelectDriver;