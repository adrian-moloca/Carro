import React, { useEffect, useState } from "react";
import {
  Grid,
  InputAdornment,
  Select,
  MenuItem,
  FormControlLabel,
  Box,
} from "@material-ui/core";
import { Fragment } from "react";
import CarroTextField from "../../../components/textField/CarroTextField";
import CarroCheckbox from "../../../components/checkbox/CarroCheckbox";
import { useTranslation } from "react-i18next";
import { numberValidator } from "../../../utils/Functions/input-validators";

const Package = (props) => {
  const { t } = useTranslation();

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
    props.setHasErrors(numberValidator(props.lenght))
  }, [props.lenght])

  useEffect(()=>{
    props.setHasErrors(numberValidator(props.price))
  }, [props.price])

  useEffect(()=>{
    props.setHasErrors(props.smallDescription.length <= 3 && props.smallDescription!='')
  }, [props.smallDescription])

  useEffect(()=>{
    props.setHasErrors(props.description.length < 25 && props.description!='')
  }, [props.description])

  const packageSizes = [
    {
      value: 1,
      label: t("Small"),
    },
    {
      value: 2,
      label:  t("Medium"),
    },
    {
      value: 3,
      label:  t("Big"),
    },
  ];

  const currencies = [
    {
      value: "ron",
      label: "RON",
    },
    {
      value: "eur",
      label: "€",
    },
    {
      value: "usd",
      label: "$",
    },
    {
      value: "gbp",
      label: "£",
    },
  ];

  function getPackagesSizesContent(size){

    switch(size){
      case 1: return(
                      <Grid container item justifyContent="center">
                        <Box fontSize={12} color={"#9C9C9C"}>
                          {
                            "Pachet mic - Latimea<=30cm, Lungimea<=30cm, Inaltimea<=30cm (ex. plicuri,cutii pantofi,cutii bijuterii, etc.)"
                          }
                        </Box>
                      </Grid>
                    );
      case 2: return(
                      <Fragment>
                        <Grid container justifyContent="center">
                          <Box fontSize={12} color={"#9C9C9C"}>
                            {
                              "Pachet mediu - 30cm<Latimea<=100cm, 30cm<Lungimea<=100cm, 30cm<Inaltimea<=100cm (ex. bagaje de cala, cutii cu scaune, etc.)"
                            }
                          </Box>
                        </Grid>
                      </Fragment>
                    );
      case 3: return(
                      <Fragment>
                        <Grid container item xs={4} justifyContent="center">
                            <CarroTextField error={numberValidator(props.width)} helperText={numberValidator(props.width) ? t('OnlyNumbers') : ''}
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
                            <CarroTextField error={numberValidator(props.height)} helperText={numberValidator(props.height) ? t('OnlyNumbers') : ''}
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
                            <CarroTextField error={numberValidator(props.lenght)} helperText={numberValidator(props.lenght) ? t('OnlyNumbers') : ''}
                                            variant="outlined" value={props.lenght} onChange={(e)=>props.setLenght(e.target.value)}
                                            label={t("Length")} fullWidth
                                            InputProps={{
                                              startAdornment: (
                                                <InputAdornment position="start">m</InputAdornment>
                                              ),
                                            }}
                            />
                        </Grid>
                        <Grid container justifyContent="center">
                          <Box fontSize={14} color={"#9C9C9C"}>
                            {
                              "Pachet Mare - Depaseste un metru cub"
                            }
                          </Box>
                        </Grid>
                      </Fragment>
                    );
  }}

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

  return (
    <Grid container spacing={3}>
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
        <CarroTextField
          type='number'
          error={numberValidator(props.weight)}
          helperText={numberValidator(props.weight) ? t('OnlyNumbers') : ''}
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
      {getPackagesSizesContent(props.packageSize)}
      <Grid container item xs={6} justifyContent="center">
        <CarroTextField variant="outlined" error={props.smallDescription.length <= 3 && props.smallDescription!=''}  
                        helperText={props.smallDescription.length <= 3 && props.smallDescription!='' ? t('SmallDescriptionMustContain') : ''} 
                        value={props.smallDescription} onChange={(e)=>props.setSmallDescription(e.target.value)} label={t("SmallDescription")} fullWidth />
      </Grid>
      <Grid container item xs={6} justifyContent="center">
        <CarroTextField
          variant="outlined"
          type='number'
          value={props.price}
          onChange={(e)=>props.setPrice(e.target.value)}
          error={numberValidator(props.price)}
          helperText={numberValidator(props.price) ? t('ValidNumber') : ''}
          label={t("Price")}
          fullWidth
          InputProps={{
            startAdornment: (
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
      {/* <Grid container item xs={12} md ={6} xl={6} justifyContent="center">
        <CarroTextField type='number' error={props.packagesNumber < 1 || numberValidator(props.packagesNumber)}
                        helperText={props.packagesNumber < 1 || numberValidator(props.packagesNumber) ? t('ValidNumberOfPackages') : ''}
                        value={props.packagesNumber} onChange={(e)=>props.setPackagesNumber(e.target.value)} 
                        variant="outlined" label={t("PackageNumbers")} fullWidth />
      </Grid> */}
      <Grid container item xs={12} justifyContent="center">
        <CarroTextField error={props.description.length < 25 && props.description!=''} 
                        helperText={props.description.length < 25 && props.description!='' ? t('MinimumCharsDescription') : ''}
                      value={props.description} onChange={(e)=>props.setDescription(e.target.value)}
                      variant="outlined" label={t("Description")} multiline rows={4} fullWidth/>
      </Grid>
      <Grid container item xs={12} justifyContent='space-between'>
        <FormControlLabel
          onChange={handleFlammableCheckboxClick}
          control={<CarroCheckbox />}
          label={t("Inflammable")}
          checked={props.flammable}
        />
        <FormControlLabel
          onChange={handleFragileCheckboxClick}
          control={<CarroCheckbox />}
          label={t("Fragile")}
          checked={props.fragile}
        />
        <FormControlLabel
          onChange={handleFoodGradeCheckboxClick}
          control={<CarroCheckbox />}
          label={t("Perishable")}
          checked={props.foodGrade}
        />
        <FormControlLabel
          onChange={handleAnimalCheckboxClick}
          control={<CarroCheckbox />}
          label="Animal"
          checked={props.animal}
        />
        <FormControlLabel
          onChange={handleHandleWithCareCheckboxClick}
          control={<CarroCheckbox />}
          label="Animal"
          checked={props.handleWithCare}
        />
      </Grid>
    </Grid>
  );
};

export default Package;
