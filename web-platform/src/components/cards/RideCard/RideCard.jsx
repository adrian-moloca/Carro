import React, {useState} from 'react';
import {Box, Grid, SvgIcon } from '@material-ui/core';
import PrimaryButton from '../../buttons/primaryButton/primaryButton';
import GreenCaroButton from '../../buttons/GreenCaroButton/GreenCaroButton';
import BackdropDeliverPackage from '../../backdrop/deliver-package/deliver-package';
import packageImg from '../../../assets/images/box-small.png';
import {ReactComponent as fragileIco} from '../../../assets/icon/fragile.svg';
import {ReactComponent as fishIco} from '../../../assets/icon/fish.svg';
import {ReactComponent as fireIco} from '../../../assets/icon/fire.svg';
import {ReactComponent as handboxIco} from '../../../assets/icon/handbox.svg';
import {ReactComponent as animalprintsIco} from '../../../assets/icon/animalprints.svg';
import greyLine from '../../../assets/images/greyLine.png';
import useStyles from './RideCardStyle';
import { useTranslation } from 'react-i18next';

const RideCard = (props) =>{

    const classes = useStyles();
    const { t } = useTranslation();
    const[open, setOpen]=useState(false);
    const[status, setSatus] = useState(true);
    const handleBtn =()=> setOpen(!open);
    const handleCloseBd=(event)=>{
        if(event.target === document.getElementById('backdrop'))
            setOpen(false)
    };
    const handleCloseBdByBtn=(event)=>{ setOpen(false)};

    return (
        <Box paddingBottom='3%' border={2} borderColor='grey.400' borderRadius='10px' display='flex' justifyContent='center' className={'mobile-width-full'}>
            <Grid container xs ={12} spacing={2} justifyContent='center'>
                <Grid container item xs={12} justifyContent = 'center'>
                    <img src={packageImg} className={classes.boxesImageStyle} alt={""}/>
                </Grid>
                <Grid container item xs={12} justifyContent = 'center'>
                    <img src={greyLine} className={classes.greyLinesStyle} alt={""}/>
                </Grid>
                <Grid container item xs={12} spacing={1}justifyContent = 'flex-start'>
                    <Box px={1} fontSize={14}>{t('Quantity')} 1</Box>
                    <Box px={1} fontSize={14}>{t('Sizing')} 0x0x0</Box>
                    <Box px={1} fontSize={14}>{t('Weight')} 1Kg</Box>
                </Grid>
                <Grid container item xs={12} justifyContent = 'center'>
                    <img src={greyLine} className={classes.greyLinesStyle} alt={""}/>
                </Grid>
                <Grid container item xs={12} spacing={1}justifyContent = 'flex-start'>
                    <Box px={1} fontSize={14}>{t('PickupDate')} 26/08/2021 04:30 AM</Box>   
                    <Box px={1} fontSize={14}>{t('PickupAddress')} Lorem Ipsium Street</Box>
                    <Box px={1} fontSize={14}>{t('DriverCardDestinationAddress')} Lorem Ipsium Street</Box>
                </Grid>
                <Grid container item xs={12} justifyContent = 'center'>
                    <img src={greyLine} className={classes.greyLinesStyle} alt={""}/>
                </Grid>
                <Grid container item xs={12} justifyContent = 'center'>
                    <Box width='100%' textAlign='center' fontSize={16}>{t('Price')}</Box>  
                    <Box width='100%' textAlign='center' fontSize={22}>15 LEI</Box>
                </Grid>
                <Grid container item xs={12} xl={10} justifyContent = 'space-around' >
                    <SvgIcon component={fragileIco} viewBox='0 0 512 512'/>
                    <SvgIcon component={fishIco} viewBox='0 0 18 19'/>
                    <SvgIcon component={fireIco} viewBox='0 0 23 22'/>
                    <SvgIcon component={handboxIco} viewBox='0 0 21 21'/>
                    <SvgIcon component={animalprintsIco} viewBox='0 0 20 20'/>
                </Grid>
                <Grid container item xs={10} justifyContent = 'center'>
                    {
                        props.status ? (<GreenCaroButton variant='contained' onClick={handleBtn} size='medium' fullWidth>
                       {t('DeliverButton')}
                    </GreenCaroButton>) : 
                    ( <Box width='100%' textAlign='center' fontSize={16} color="#9C9C9C">
                    <h4> {t('Reason')}</h4>
                    <p>Nu mai plec</p>
                    </Box>
                    )
                    }
                    
                </Grid>
                <Grid container item xs={7}  spacing={1}justifyContent = 'center'>
                    <PrimaryButton size='medium' variant = 'contained' fullWidth>
                    {t('DriverCardDetailsButton')}
                    </PrimaryButton>
                </Grid>
            </Grid>
            <BackdropDeliverPackage 
                open={open} 
                clicked={handleCloseBd}
                clickedClose={handleCloseBdByBtn}/>
        </Box>
    );
};

export default RideCard;