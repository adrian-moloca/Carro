import React, { useState, Fragment, useEffect, useLayoutEffect } from 'react';
import {Grid, Box, Select, MenuItem, InputAdornment} from '@material-ui/core';
import CarroAutocomplete from '../../../autocomplete/CarroAutocomplete';
import CarroCheckbox from '../../../checkbox/CarroCheckbox';
import CarroTextField from '../../../textField/CarroTextField';
import CarroDatePicker from '../../../datePicker/CarroDatePicker';
import PhoneTextField from '../../../telephoneNumberField/PhoneTextField';
import { FormControlLabel } from '@material-ui/core';
import { getCountries, getCities } from '../../../../utils/Functions/countries-city-functions';
import { numberValidator, phoneValidator, addressValidator, nameValidator } from '../../../../utils/Functions/input-validators';
import { useTranslation } from "react-i18next";
import GetPackagesSizesContent from '../../../../utils/Functions/get-packages-sizes-content';

const   FormPackage = (props) =>{
    const { t } = useTranslation();

    const packageSizes = [
        {
          value: 'small',
          label: t("Small"),
        },
        {
          value: 'medium',
          label: t("Medium"),
        },
        {
          value: 'big',
          label: t("Big"),
        },
    ];
      
    const currencies = [
        {
            value: 'ron',
            label: 'RON',
        },
        {
            value: 'eur',
            label: '€',
        },
        {
            value: 'usd',
            label: '$',
        },
        {
            value: 'gbp',
            label: '£',
        },
    ];

    const [inputValuePhoneNumber, setInputValuePhoneNumber] = useState('');
    const [countryPhoneCode, setCountryPhoneCode] = useState('');

    useLayoutEffect(()=>{
        props.setPhoneNumber(countryPhoneCode + inputValuePhoneNumber)
    }, [inputValuePhoneNumber, countryPhoneCode])

    useEffect(()=>{
        props.setHasErrors(addressValidator(props.pickUpAddress))
    }, [props.pickUpAddress])

    useEffect(()=>{
        props.setHasErrors(nameValidator(props.destinataryName))
    }, [props.destinataryName])

    useEffect(()=>{
        props.setHasErrors(phoneValidator(inputValuePhoneNumber))
    }, [inputValuePhoneNumber])

    useEffect(()=>{
        props.setHasErrors(addressValidator(props.destinataryAddress))
    }, [props.destinataryAddress])
    
    useEffect(()=>{
        props.setHasErrors(numberValidator(props.weight))
    }, [props.weight])

    useEffect(()=>{
        props.setHasErrors(numberValidator(props.width))
    }, [props.width])

    useEffect(()=>{
        props.setHasErrors(numberValidator(props.height))
    }, [props.height])

    useEffect(()=>{
        props.setHasErrors(numberValidator(props.length))
    }, [props.length])

    useEffect(()=>{
        props.setHasErrors(numberValidator(props.price))
    }, [props.price])

    useEffect(()=>{
        props.setHasErrors(props.smallDescription.length <= 3 && props.smallDescription!='')
    }, [props.smallDescription])

    useEffect(()=>{
        props.setHasErrors(props.description.length < 25 && props.description!='')
    }, [props.description])

    const handleFlammableCheckboxClick = (event) => {
        event.target.checked ? props.setFlammable(true) : props.setFlammable(false);
    };
    
    const handleFragileCheckboxClick = (event) => {
        event.target.checked ? props.setFragile(true) : props.setFragile(false);
    };
    
    const handleFoodGradeCheckboxClick = (event) => {
        event.target.checked ? props.setFoodGrade(true) : props.setFoodGrade(false);
    };
    
    const handleAnimalCheckboxClick = (event) => {
        event.target.checked ? props.setAnimal(true) : props.setAnimal(false);
    };
    
    const handleHandleWithCareCheckboxClick = (event) => {
        event.target.checked ? props.setHandleWithCare(true) : props.setHandleWithCare(false);
    };

    return(
        <Box display='flex' justifyContent='center' mt='5%' mb='5%' fontSize='13px'>
            <Grid container spacing={1} >
                <Grid container item xs={12} md ={6} xl={6} justifyContent="center">
                            <CarroAutocomplete value={props.departureCountry} options={getCountries()}  label={t('SearchRideDepartureCountry')} onChange={(e)=>props.setDepartureCountry(e.target.textContent)}/>
                </Grid>
                <Grid container item xs={12}  md ={6} xl={6} justifyContent="center">
                            <CarroAutocomplete value={props.departureCity} options={getCities(props.departureCountry)} label={t('SearchRideDepartureCity')} onChange={(e)=>props.setDepartureCity(e.target.textContent)}/>
                </Grid>
                <Grid container item xs={12}  md ={6} xl={6} justifyContent='center'>
                            <CarroTextField error={addressValidator(props.pickUpAddress)} helperText={addressValidator(props.pickUpAddress) ? t('ValidAddress') : ''}
                                        value = {props.pickUpAddress} onChange={(e)=>props.setPickUpAddress(e.target.value)}
                                        variant ='outlined' label={t('PickupAddress')} fullWidth/>
                </Grid>
                <Grid container item xs={12}  md ={6} xl={6} justifyContent='center'>
                            <CarroDatePicker label={t('PickupDate')} format='dd/MM/yyyy'
                                        value={props.departureDate} onChange={(date)=>props.setDepartureDate(date)} disablePast/>
                </Grid>
                <Grid container item xs={12} md ={6} xl={6} justifyContent="center">
                <CarroTextField error={nameValidator(props.destinataryName)} helperText={nameValidator(props.destinataryName) ? t('OnlyChars') : ''}
                                            value={props.destinataryName} onChange={(e)=> props.setDestinataryName(e.target.value)} variant ='outlined' label={t('ReceiverNume')}  fullWidth/>
                </Grid>
                <Grid container item xs={12} md ={6} xl={6} justifyContent="center">
                            <PhoneTextField value={inputValuePhoneNumber} onChange = {(e)=>setInputValuePhoneNumber(e.target.value)}
                                            countryPhoneCode={countryPhoneCode} handleSelectCountry = {(e)=>setCountryPhoneCode(e.target.value)}
                                            error={phoneValidator(inputValuePhoneNumber)} helperText={phoneValidator(inputValuePhoneNumber) ? t('ValidPhoneNumber') : ''}/>
                </Grid>
                <Grid container item xs={12}  md ={6} xl={6} justifyContent='center'>
                            <CarroAutocomplete value={props.destinationCountry} options={getCountries()} label={t('SearchRideDestinationCountry')} onChange={(e)=>props.setDestinationCountry(e.target.textContent)}/>
                </Grid>
                <Grid container item xs={12}  md ={6} xl={6} justifyContent='center'>
                            <CarroAutocomplete value = {props.destinationCity} options={getCities(props.destinationCountry)} label={t('SearchRideDestinationCity')} onChange={(e)=>props.setDestinationCity(e.target.textContent)}/>
                </Grid>
                <Grid container item xs={12} justifyContent='center'>
                            <CarroTextField value={props.destinataryAddress} error={addressValidator(props.destinataryAddress)} helperText={addressValidator(props.destinataryAddress) ? t('ValidAddress') : ''}
                                            onChange={(e)=>props.setDestinataryAddress(e.target.value)} variant ='outlined' label={t('DestinationAddress')} fullWidth/>
                </Grid>
                <Grid container item xs={12} md ={6} xl={6} justifyContent="center">
                            <CarroTextField variant ='outlined' label={t("Sizing")} fullWidth select value={props.packageSize} onChange={(e)=>props.setPackageSize(e.target.value)}>
                                            {packageSizes.map((option)=>(
                                                    <MenuItem key={option.value} value={option.value}>
                                                                        {option.label}
                                                    </MenuItem>
                                            ))}
                            </CarroTextField>
                </Grid>
                <Grid container item xs={12}  md ={6} xl={6} justifyContent="center">
                            <CarroTextField type='number' error={numberValidator(props.weight)} helperText={numberValidator(props.weight) ? t('OnlyNumbers') : ''}
                                            value={props.weight}
                                            onChange={(e)=>props.setWeight(e.target.value)}
                                            variant="outlined"
                                            label={t("Weight")}
                                            fullWidth
                                            InputProps={{
                                                startAdornment: (
                                                <InputAdornment position="start">Kg</InputAdornment>
                                                ),
                                            }}
                            />
                </Grid>
                <GetPackagesSizesContent size={props.packageSize} width={props.width} length={props.length} height={props.height} setWidth={props.setWidth} setLength={props.setLength} setHeight={props.setHeight}/>
                <Grid container item xs={6} justifyContent="center">
                                <CarroTextField variant="outlined" error={props.smallDescription.length <= 3 && props.smallDescription!=''}  
                                                helperText={props.smallDescription.length <= 3 && props.smallDescription!='' ? t('SmallDescriptionMustContain') : ''} 
                                                value={props.smallDescription} onChange={(e)=>props.setSmallDescription(e.target.value)} label={t("SmallDescription")} fullWidth />
                </Grid>
                <Grid container item xs={6} justifyContent="center">
                                <CarroTextField variant="outlined" type='number' value={props.price} onChange={(e)=>props.setPrice(e.target.value)}
                                                error={numberValidator(props.price)} helperText={numberValidator(props.price) ? t('ValidNumber') : ''}
                                                label={t("Price")} fullWidth
                                                InputProps={{ startAdornment: (
                                                            <InputAdornment position="start">
                                                                <Select value={props.currency} onChange={(e)=>props.setCurrency(e.target.value)}>
                                                                {currencies.map((option) => (
                                                                    <MenuItem key={option.value} value={option.value}>
                                                                    {option.label}
                                                                    </MenuItem>
                                                                ))}
                                                                </Select>
                                                            </InputAdornment>
                                                            ),
                                                        }}
                                />
                </Grid>
                <Grid container item xs={12} justifyContent="center">
                                            <CarroTextField error={props.description.length < 25 && props.description!=''} 
                                                            helperText={props.description.length < 25 && props.description!='' ? t('MinimumCharsDescription') : ''}
                                                            value={props.description} onChange={(e)=>props.setDescription(e.target.value)}
                                                            variant="outlined" label={t("Description")} multiline rows={4} fullWidth/>
                </Grid>
                <Grid container item xs={12} justifyContent='space-between'>
                                            <FormControlLabel onChange={handleFlammableCheckboxClick} control={<CarroCheckbox />} label={t("Inflammable")} checked={props.flammable}/>
                                            <FormControlLabel onChange={handleFragileCheckboxClick} control={<CarroCheckbox />} label={t("Fragile")} checked={props.fragile}/>
                                            <FormControlLabel onChange={handleFoodGradeCheckboxClick} control={<CarroCheckbox />} label={t("Perishable")} checked={props.foodGrade}/>
                                            <FormControlLabel onChange={handleAnimalCheckboxClick} control={<CarroCheckbox />} label="Animal" checked={props.animal}/>
                                            <FormControlLabel onChange={handleHandleWithCareCheckboxClick} control={<CarroCheckbox />} label="HandleWithCare" checked={props.handleWithCare}/>
                </Grid>
            </Grid>
        </Box>

    );
}

export default FormPackage;


