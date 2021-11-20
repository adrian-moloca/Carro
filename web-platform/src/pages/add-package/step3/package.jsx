import React, { useState } from "react";
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

  const [packageSize, setPackageSize] = useState(new Number());
  const [currency, setCurrency] = useState('');
  const [weight, setWeight] = useState(new Number());
  const [smallDescription, setSmallDescription] = useState('');
  const [price, setPrice] = useState(new Number());
  const [packagesNumber, setPackagesNumber] = useState(1);
  const [description, setDescription] = useState('');


  const [Inflamabil, setInflamabil] = useState(false);
  const [Fragil, setFragil] = useState(false);
  const [Perisabil, setPerisabil] = useState(false);
  const [Animal, setAnimal] = useState(false);

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
                            <CarroTextField variant="outlined" label={t("Width")} fullWidth
                                          InputProps={{
                                            startAdornment: (
                                              <InputAdornment position="start">m</InputAdornment>
                                            ),
                                          }}
                            />
                        </Grid>
                        <Grid container item xs={4} justifyContent="center">
                            <CarroTextField variant="outlined" label={t("Height")} fullWidth
                                          InputProps={{
                                            startAdornment: (
                                              <InputAdornment position="start">m</InputAdornment>
                                            ),
                                          }}
                            />
                        </Grid>
                        <Grid container item xs={4} justifyContent="center">
                            <CarroTextField variant="outlined" label={t("Length")} fullWidth
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

  const handleSizeSelect = (event) => {
    setPackageSize(event.target.value);
  };

  const handleCurrencySelect = (event) => {
    setCurrency(event.target.value);
  };

  const handleInflamabilCheckboxClick = (event) => {
    event.target.checked ? setInflamabil(true) : setInflamabil(false);
  };

  const handleFragilCheckboxClick = (event) => {
    event.target.checked ? setFragil(true) : setFragil(false);
  };

  const handlePerisabilCheckboxClick = (event) => {
    event.target.checked ? setPerisabil(true) : setPerisabil(false);
  };

  const handleAnimalCheckboxClick = (event) => {
    event.target.checked ? setAnimal(true) : setAnimal(false);
  };

  return (
    <Grid container spacing={3}>
      <Grid container item xs={12} md ={6} xl={6} justifyContent="center">
        <CarroTextField variant ='outlined' label={t("Sizing")} fullWidth select value={packageSize} onChange={handleSizeSelect}>
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
          error={numberValidator(weight)}
          helperText={numberValidator(weight ? t('OnlyNumbers') : '')}
          value={weight}
          onChange={(e)=>setWeight(e.target.value)}
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
      {getPackagesSizesContent(packageSize)}
      <Grid container item xs={12} justifyContent="center">
        <CarroTextField variant="outlined" error={smallDescription.length <= 3 && smallDescription!=''}  
                        helperText={smallDescription.length <= 3 && smallDescription!='' ? t('SmallDescriptionMustContain') : ''} 
                        value={smallDescription} onChange={(e)=>  setSmallDescription(e.target.value)} label={t("SmallDescription")} fullWidth />
      </Grid>
      <Grid container item xs={12} md ={6} xl={6} justifyContent="center">
        <CarroTextField
          variant="outlined"
          type='number'
          value={price}
          onChange={(e)=>setPrice(e.target.value)}
          error={numberValidator(price)}
          helperText={numberValidator(price) ? t('ValidNumber') : ''}
          label={t("Price")}
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Select value={currency} onChange={handleCurrencySelect}>
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
      <Grid container item xs={12} md ={6} xl={6} justifyContent="center">
        <CarroTextField type='number' error={packagesNumber < 1 || numberValidator(packagesNumber)}
                        helperText={packagesNumber < 1 || numberValidator(packagesNumber) ? t('ValidNumberOfPackages') : ''}
                        value={packagesNumber} onChange={(e)=>setPackagesNumber(e.target.value)} 
                        variant="outlined" label={t("PackageNumbers")} fullWidth />
      </Grid>
      <Grid container item xs={12} justifyContent="center">
        <CarroTextField error={description.length < 25 && description!=''} 
                        helperText={description.length < 25 && description!='' ? t('MinimumCharsDescription') : ''}
                      value={description} onChange={(e)=>setDescription(e.target.value)}
                      variant="outlined" label={t("Description")} multiline rows={4} fullWidth/>
      </Grid>
      <Grid container item xs={12} justifyContent="space-between">
        <FormControlLabel
          onChange={handleInflamabilCheckboxClick}
          control={<CarroCheckbox />}
          label={t("Inflammable")}
        />
        <FormControlLabel
          onChange={handleFragilCheckboxClick}
          control={<CarroCheckbox />}
          label={t("Fragile")}
        />
        <FormControlLabel
          onChange={handlePerisabilCheckboxClick}
          control={<CarroCheckbox />}
          label={t("Perishable")}
        />
        <FormControlLabel
          onChange={handleAnimalCheckboxClick}
          control={<CarroCheckbox />}
          label="Animal"
        />
      </Grid>
    </Grid>
  );
};

export default Package;
