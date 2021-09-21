import React from 'react';
import { Link, IconButton, Box } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import DriveEtaIcon from '@material-ui/icons/DriveEta';

const RenderMenuSBD = () => {

  const menuBtns = () => {
    return (
      <Box display="flex" flexDirection="row">
        <Link href="/search-package" underline= 'none' color= 'inherit'>
          <IconButton color="inherit">
            <Box mr={1}>
              <SearchIcon/>
            </Box>
            <Box fontSize={18}>
              Cauta Pachet
            </Box>
          </IconButton>
        </Link>
        <Link href="/search-ride" underline= 'none' color= 'inherit'>
          <IconButton color="inherit">
            <Box mr={1}>
              <DriveEtaIcon/>
            </Box>
            <Box fontSize={18}>
              Cauta Transport
            </Box>
          </IconButton>
        </Link>
      </Box>
    );
  };

  return(
    <Box>
      {menuBtns()}
    </Box>
  );
};

export default RenderMenuSBD;