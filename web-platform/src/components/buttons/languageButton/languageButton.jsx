import React from 'react'
import { 
  Box, 
  FormControl,
  MenuItem, 
  Select,
  Grid 
} from '@material-ui/core';
import navRoFlag from '../../../assets/icon/navRoFlag.png';
import navEnFlag from '../../../assets/icon/navEnFlag.png';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import useStyles from './languageButtonStyle';

export default function BasicSelect() {

  const classes = useStyles();

  const [language, setLanguage] = React.useState('ro');

  const handleChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <Box  sx={{ minWidth: 120 }} display="flex" alignItems="center" justifyContent="flex-end" flexDirection="row">
      <FormControl fullWidth>
        <Grid
          container
          alignItems="center" 
          justifyContent="center" 
          flexDirection="row">
            <Grid item xs={8}>
              <Select
                value={language}
                defaultValue={"lagnguage"}
                onChange={handleChange}
                className={classes.langsStyle}
                labelId="demo-simple-select-error-label"
                id="demo-simple-select-error"
                disableUnderline 
                IconComponent={() => (
                  <Box ml={-2} justifyContent="center">
                    <ExpandMoreIcon />
                  </Box>
                )}>
                <MenuItem value={"ro"}>
                  <Box display="flex"  alignItems="center">
                    <img src={navRoFlag}></img>
                    <Box ml={1} >
                      RO
                    </Box>
                  </Box>
                </MenuItem>
                <MenuItem value={"en"}>
                  <Box display="flex"  alignItems="center">
                    <img src={navEnFlag}></img>
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