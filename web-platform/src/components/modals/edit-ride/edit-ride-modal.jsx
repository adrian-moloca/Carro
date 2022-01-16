import React, { Fragment, useState, useEffect } from "react";
import { Box, Grid, MenuItem, Container, Modal, Fade} from "@material-ui/core";
import CarroTextField from "../../textField/CarroTextField";
import CarroDatePicker from "../../datePicker/CarroDatePicker";
import SecondaryButton from "../../buttons/secondaryButton/secondaryButton";
import GreenCaroButton from "../../buttons/GreenCaroButton/GreenCaroButton";
import CarroAutocomplete from "../../autocomplete/CarroAutocomplete";
import IconButtonNoVerticalPadding from "../../buttons/icon-button/icon-button-no-vertical-padding/icon-button-no-vertical-padding";
import { Close, Create } from "@material-ui/icons";
import { useTranslation } from "react-i18next";
import useStyles from "./edit-ride-modal-style";
import { getCountries, getCities } from "../../../utils/Functions/countries-city-functions";
import { addressValidator, numberValidator } from "../../../utils/Functions/input-validators";
import { updateRide } from "../../../redux/actions/MyRidesActions";
import { connect } from "react-redux";

const EditRideModal = ({data, updateRide, ...props}) =>{
  const { t } = useTranslation();

  const classes=useStyles();

  const transports = [
    {
        type: 1, 
        label: t("PublicTransport"),
    },
    {   type: 2,
        label: t("Car"),
    },
    {
        type: 3,
        label: t("Truck"),
    }  
  ]

  // state
  const [open, setOpen] = useState(false);
  const [departureDate, setDepartureDate] = useState(new Date(parseInt(String(props.departureDate).substring(0, 4)),parseInt(String(props.departureDate).substring(5,7)) - 1,parseInt(String(props.departureDate).substring(8,10)), 0));
  const [departureCountry, setDepartureCountry] = useState(props.departureCountry);
  const [destinationCountry, setDestinationCountry] = useState(props.destinationCountry);
  const [departureCity, setDepartureCity] = useState(props.departureCity);
  const [destinationCity, setDestinationCity] = useState(props.destinationCity);
  const [departureAddress, setDepartureAddress] = useState(props.departureAddress);
  const [destinationAddress, setDestinationAddress] = useState(props.destinationAddress);
  const [transportType, setTransportType] = useState(Number(props.transportType));
  const [estimatedTime, setEstimatedTime] = useState(Number(String(props.estimatedTime).charAt(0)));
  const [hasErrors, setHasErrors] = useState(false);
  // event lisenters
  const handleChangeDepartureDate=(date)=> setDepartureDate(date);
  const handleChangeDepartureCountry=(event, newValue)=> setDepartureCountry(newValue);
  const handleChangeDestinationCountry=(event, newValue)=> setDestinationCountry(newValue);
  const handleChangeDepartureCity=(event, newValue)=> setDepartureCity(newValue);
  const handleChangeDestinationCity=(event, newValue)=> setDestinationCity(newValue);
  const handleChangeTransportType=(event)=> setTransportType(event.target.value)
  const handleChangeDepartureAddress=(event)=> setDepartureAddress(event.target.value);
  const handleChangeDestinationAddress=(event)=> setDestinationAddress(event.target.value);
  const handleChangeEstimatedTime=(event)=> setEstimatedTime(event.target.value);

  useEffect(()=>{
    setHasErrors(addressValidator(departureAddress))
  }, [departureAddress])

  useEffect(()=>{
    setHasErrors(addressValidator(destinationAddress))
  }, [destinationAddress])

  useEffect(()=>{
    setHasErrors(numberValidator(estimatedTime))
  }, [estimatedTime])

  const isFormComplete = () =>{
    if(
      departureDate && departureCountry && destinationCountry && departureCity && destinationCity && 
      departureAddress && destinationAddress && transportType && estimatedTime && !hasErrors
    )
        return true;
    else
        return false;
  }

  const handleOpen = ()=>{
      setOpen(true);
  }

  const handleClose = ()=>{
      setOpen(false)
  }


  return(
    <Fragment>
            <IconButtonNoVerticalPadding onClick={handleOpen}>
                <Create className={'Primary-color'} fontSize='small'/> 
            </IconButtonNoVerticalPadding>  
            <Modal open={open} onClose={handleClose} className='modal'>
                <Fade in={open} timeout={600}>
                    <Container className={classes.containerBackdrop}>
                        <Grid container >
                            <Grid container item xs={10} justifyContent='flex-start'>
                                <Box fontSize='18px' color='grey.500'>{t("EditRide")}</Box>
                                </Grid>
                            <Grid container item xs={2} justifyContent='flex-end'>
                                <IconButtonNoVerticalPadding onClick={handleClose}>
                                    <Close />
                                </IconButtonNoVerticalPadding>
                            </Grid>
                        </Grid>
                        <Box display='flex' justifyContent='center' mt='5%'>
                            <Grid container spacing={3} >
                                <Grid container item xs={12}  md ={6} xl={6} justifyContent="center">
                                    <CarroAutocomplete value={departureCountry} options={getCountries()}  label={t('SearchRideDepartureCountry')} onChange={handleChangeDepartureCountry}/>
                                </Grid>
                                <Grid container item xs={12} md ={6} xl={6}  justifyContent="center">
                                    <CarroAutocomplete value={departureCity} options={getCities(departureCountry)} label={t("SearchRideDepartureCity")} onChange={handleChangeDepartureCity}/>
                                </Grid>
                                <Grid container item xs={12} md ={6} xl={6}  justifyContent='center'>
                                    <CarroAutocomplete value={destinationCountry} options={getCountries()}  label={t('SearchRideDestinationCountry')} onChange={handleChangeDestinationCountry}/>
                                </Grid>
                                <Grid container item xs={12} md ={6} xl={6}  justifyContent='center'>
                                    <CarroAutocomplete value={destinationCity} options={getCities(destinationCountry)} label={t("SearchRideDestinationCity")} onChange={handleChangeDestinationCity}/>
                                </Grid>
                                <Grid container item xs={12} md ={6} xl={6}  justifyContent='center'>
                                    <CarroTextField error={addressValidator(departureAddress)} helperText={addressValidator(departureAddress) ? t('ValidAddress') : ''}
                                                    variant ='outlined' value={departureAddress} onChange={handleChangeDepartureAddress} label={t("DepartureAddress")} fullWidth/>
                                </Grid>
                                <Grid container item xs={12} md ={6} xl={6}  justifyContent='center'>
                                    <CarroTextField error={addressValidator(destinationAddress)} helperText={addressValidator(destinationAddress) ? t('ValidAddress') : ''}
                                                    variant ='outlined' value={destinationAddress} onChange={handleChangeDestinationAddress} label={t("DestinationAddress")} fullWidth/>
                                </Grid>
                                <Grid container item xs={12} md ={6} xl={6}  justifyContent='center'>
                                    <CarroDatePicker label={t("DriverCardDepartureDate")} value={departureDate} format='dd/MM/yyyy' onChange={(date)=>handleChangeDepartureDate(date)} disablePast/>
                                </Grid>
                                <Grid container item xs={12} md ={6} xl={6}  justifyContent='center'>
                                    <CarroTextField select variant ='outlined' label={t("RideType")} fullWidth value={transportType} onChange={handleChangeTransportType}>
                                        {transports.map((transport, index)=>(<MenuItem key={index*371} value={transport.type}>{transport.label}</MenuItem>))}
                                    </CarroTextField>
                                </Grid>
                                <Grid container item xs={12}  md ={12} xl={12}  justifyContent='center'>
                                    <CarroTextField type='number' error={numberValidator(estimatedTime)} helperText={numberValidator(estimatedTime) ? t('ValidEstimatedTime') : ''}
                                                    variant ='outlined' value={estimatedTime} onChange={handleChangeEstimatedTime} label={t("EstimatedHours")} fullWidth/>
                                </Grid>
                            </Grid>
                        </Box>
                        <Grid container justifyContent='space-around'>
                                <Grid container item xs={3} justifyContent="center">
                                            <SecondaryButton variant='outlined' onClick={handleClose} fullWidth>{t("CloseButton")}</SecondaryButton>     
                                </Grid>
                                <Grid container item xs={3} justifyContent="center">
                                            <GreenCaroButton disabled={!isFormComplete()} onClick={()=>{updateRide(props.ride.id, departureDate, departureCountry, departureCity, destinationCountry, destinationCity, departureAddress, destinationAddress, estimatedTime, transportType, data.token); handleClose() }} variant='contained' fullWidth>{t("SaveButton")}</GreenCaroButton>
                                </Grid>
                        </Grid>
                    </Container>
                </Fade>
            </Modal>
    </Fragment>
  );
};

const mapDispatchToProps = dispatch =>({updateRide: (id, departureDate, fromCountry, fromCity, toCountry, toCity, departureAddress, destinationAddress, estimatedTime, trasportType, token) =>dispatch(updateRide(id, departureDate, fromCountry, fromCity, toCountry, toCity, departureAddress, destinationAddress, estimatedTime, trasportType, token))})
const mapStateToProps = state => ({data: state.userData})
export default connect(mapStateToProps, mapDispatchToProps)(EditRideModal);