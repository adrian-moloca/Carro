import React from 'react'
import { Box, FormControl, MenuItem, Select, Grid } from '@material-ui/core';
import navRoFlag from '../../../assets/icon/navRoFlag.png';
import navEnFlag from '../../../assets/icon/navEnFlag.png';
import useStyles from './languageButtonStyle';
import i18n  from '../../../i18n/config';

const BasicSelect = ({handler}) => {

  const classes = useStyles();

  const [language, setLanguage] = React.useState(i18n.language);

  const handleChange = (event) => {
    setLanguage(event.target.value);
    i18n.changeLanguage(event.target.value);
    if(handler !== undefined){
      setTimeout(() => {handler(false)}, 100);
    }
  };

  return (
    <Box  sx={{ minWidth: 120 }} display="flex" alignItems="center" justifyContent="flex-end">
      <FormControl>
        <Grid
          container
          item
          alignItems="center" 
          justifyContent="center">
            <Grid item xs={8}>
              <Select
                value={language}
                defaultValue={"lagnguage"}
                onChange={(event) => {handleChange(event)}}
                className={classes.langsStyle}
                labelId="demo-simple-select-error-label"
                id="demo-simple-select-error"
                disableUnderline>
                <MenuItem value={"ro"}>
                  <Box display="flex"  alignItems="center">
                    <img src={navRoFlag} alt={""}></img>
                    <Box ml={1} >
                      RO
                    </Box>
                  </Box>
                </MenuItem>
                <MenuItem value={"en"}>
                  <Box display="flex"  alignItems="center">
                    <img src={navEnFlag} alt={""}></img>
                    <Box ml={1} >
                      EN
                    </Box>
                  </Box>
                </MenuItem>
              </Select>
            </Grid>
        </Grid>
      </FormControl>
    </Box>
  );
}

export default BasicSelect;