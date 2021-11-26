import React, {Fragment, useEffect} from 'react';
import { Grid, Box, InputAdornment } from '@material-ui/core';
import { numberValidator } from './input-validators';
import CarroTextField from '../../components/textField/CarroTextField';
import { useTranslation } from 'react-i18next';

const GetPackagesSizesContent = (props) => {

    const {t}=useTranslation();

    useEffect(()=>{
        props.setHasErrors(numberValidator(props.width))
      }, [props.width])
    
      useEffect(()=>{
        props.setHasErrors(numberValidator(props.height))
      }, [props.height])
    
      useEffect(()=>{
        props.setHasErrors(numberValidator(props.length))
      }, [props.length])

    switch(props.size){
      case 1: return(
                      <Grid container item justifyContent="center">
                        <Box fontSize={12} color={"#9C9C9C"}>
                          {t('SmallPackageSizeContent')}
                        </Box>
                      </Grid>
                    );
      case 2: return(
                      <Fragment>
                        <Grid container item justifyContent="center">
                          <Box fontSize={12} color={"#9C9C9C"}>
                            {t('MediumPackageSizeContent')}
                          </Box>
                        </Grid>
                      </Fragment>
                    );
      case 3: return(
                      <Fragment>
                        <Grid container item xs={4} justifyContent="center">
                            <CarroTextField type='number' error={numberValidator(props.width)} helperText={numberValidator(props.width) ? t('OnlyNumbers') : ''}
                                            variant="outlined" value={props.width} onChange={(e)=>props.setWidth(e.target.value)}
                                            label={t("Width")} fullWidth
                                            InputProps={{
                                              startAdornment: (
                                                <InputAdornment position="start">m</InputAdornment>
                                              ),
                                            }}
                            />
                        </Grid>
                        <Grid container item xs={4} justifyContent="center">
                            <CarroTextField type='number' error={numberValidator(props.height)} helperText={numberValidator(props.height) ? t('OnlyNumbers') : ''}
                                            variant="outlined" value={props.height} onChange={(e)=>props.setHeight(e.target.value)}
                                            label={t("Height")} fullWidth
                                            InputProps={{
                                              startAdornment: (
                                                <InputAdornment position="start">m</InputAdornment>
                                              ),
                                            }}
                            />
                        </Grid>
                        <Grid container item xs={4} justifyContent="center">
                            <CarroTextField type='number' error={numberValidator(props.length)} helperText={numberValidator(props.length) ? t('OnlyNumbers') : ''}
                                            variant="outlined" value={props.length} onChange={(e)=>props.setLength(e.target.value)}
                                            label={t("Length")} fullWidth
                                            InputProps={{
                                              startAdornment: (
                                                <InputAdornment position="start">m</InputAdornment>
                                              ),
                                            }}
                            />
                        </Grid>
                        <Grid container item justifyContent="center">
                          <Box fontSize={14} color={"#9C9C9C"}>
                            {t('BigPackageSizeContent')}
                          </Box>
                        </Grid>
                      </Fragment>
                    );
        default:
            return '';
}}

export default GetPackagesSizesContent;