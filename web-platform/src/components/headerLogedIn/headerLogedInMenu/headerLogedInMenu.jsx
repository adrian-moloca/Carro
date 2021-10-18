import React from 'react';
import { Link, IconButton, Box } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import { useTranslation } from 'react-i18next';
const RenderMenuSBD = () => {

  const menuBtns = () => {
    const { t } = useTranslation();
    return (
      <Box display="flex" flexDirection="row">
        <Link href="/search-package" underline= 'none' color= 'inherit'>
          <IconButton color="inherit">
            <Box mr={1}>
              <SearchIcon/>
            </Box>
            <Box fontSize={18}>
              {t("SearchPackage")}
            </Box>
          </IconButton>
        </Link>
        <Link href="/search-ride" underline= 'none' color= 'inherit'>
          <IconButton color="inherit">
            <Box mr={1}>
              <DriveEtaIcon/>
            </Box>
            <Box fontSize={18}>
              {t("SearchRideTitle")}
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