import React from "react";
import "./SearchPackageStyles.jsx";
import {
  Container,
  Box,
  TextField,
  Grid,
  Checkbox,
  Typography,
  Button,
  MenuItem,
  SvgIcon
} from "@material-ui/core";

import PrimaryButton from "../../components/buttons/primaryButton/primaryButton";
import { makeStyles } from "@material-ui/core/styles";
import CarroTextField from "../../components/textField/CarroTextField";
import packageImg from '../../assets/images/box-small.png';
import {ReactComponent as fragileIco} from '../../assets/icon/fragile.svg';
import {ReactComponent as fishIco} from '../../assets/icon/fish.svg';
import {ReactComponent as fireIco} from '../../assets/icon/fire.svg';
import {ReactComponent as handboxIco} from '../../assets/icon/handbox.svg';
import {ReactComponent as animalprintsIco} from '../../assets/icon/animalprints.svg';

const countries = [
  {
    value: "Romania",
    label: "RO",
  },
  {
    value: "Germany",
    label: "GER",
  },
  {
    value: "United States of America",
    label: "USA",
  },
  {
    value: "Japan",
    label: "JPN",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function SearchPackages() {
  const classes = useStyles();
  const [countries, setCountry] = React.useState("RO");

  const handleChange = (event) => {
    setCountry(event.target.value);
  };

  return (
    <Container className={"Pack-container-style"}>
      <Grid item xs={12}>
          <Box mb={2} fontWeight={400} fontSize={21} textAlign={"center"}>
            Cauta pachete
          </Box>
        </Grid>
    <form className={classes.root} noValidate autoComplete="off">
    <Grid xs={12} justifyContent="center" alignItems="center" direction="column" container className={classes.SearchPackagesContent}>
      <Grid item className={classes.SelectBoxes}>
        <CarroTextField
          select
          variant="outlined"
          label="Tara de plecare"
          value={countries}
        >
          {/* {countries.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))} */}
        </CarroTextField>
        </Grid>
        <Grid item>
        <CarroTextField
          select
          variant="outlined"
          label="Oras de plecare"
          value={countries}
        >
          {/* {countries.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))} */}
        </CarroTextField>
        </Grid>
        <Grid item>
        <CarroTextField
          select
          variant="outlined"
          label="Tara destinatie"
          value={countries}
        >
          {/* {countries.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))} */}
        </CarroTextField>
        </Grid>
        <Grid item>
        <CarroTextField
          select
          variant="outlined"
          label="Oras destinatie"
          value={countries}
        >
          {/* {countries.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))} */}
        </CarroTextField>
        </Grid>
        <Grid item>
        <CarroTextField
            id="date"
            variant= "outlined"
            label="Data"
            type="date"
            defaultValue="aaaa-ll-zz"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item>
            <PrimaryButton variant="contained"> CAUTA</PrimaryButton>
          </Grid>
        </Grid>
        <Box display='flex' direction='row' justifyContent='space-evenly' mx={-2} mt={1} borderTop={1} borderColor= 'grey.400' >
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
                        <PrimaryButton size='small' variant = 'contained'>
                          DETALII
                        </PrimaryButton>
                      </Box>
                    </Box>
                  </Box>

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
                        <PrimaryButton size='small' variant = 'contained'>
                          DETALII
                        </PrimaryButton>
                      </Box>
                    </Box>
                  </Box>

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
                        <PrimaryButton size='small' variant = 'contained'>
                          DETALII
                        </PrimaryButton>
                      </Box>
                    </Box>
                  </Box>

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
                        <PrimaryButton size='small' variant = 'contained'>
                          DETALII
                        </PrimaryButton>
                      </Box>
                    </Box>
                  </Box>
          </Box>
                


          <Box display='flex' direction='row' justifyContent='space-evenly' mx={-2} mt={1}  borderColor= 'grey.400' >
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
                        <PrimaryButton size='small' variant = 'contained'>
                          DETALII
                        </PrimaryButton>
                      </Box>
                    </Box>
                  </Box>

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
                        <PrimaryButton size='small' variant = 'contained'>
                          DETALII
                        </PrimaryButton>
                      </Box>
                    </Box>
                  </Box>

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
                        <PrimaryButton size='small' variant = 'contained'>
                          DETALII
                        </PrimaryButton>
                      </Box>
                    </Box>
                  </Box>
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
                        <PrimaryButton size='small' variant = 'contained'>
                          DETALII
                        </PrimaryButton>
                      </Box>
                    </Box>
                  </Box>
          </Box>

    
    </form>
    </Container>
  );
}
