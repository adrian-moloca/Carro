import React from 'react';
import { Link, IconButton, Box } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useTranslation } from "react-i18next";
const RenderMenuSBD = () => {
  const { t } = useTranslation();
  const menuBtns = () => {
    return (
      <Box display="flex" flexDirection="row">
        <Link href="/login" underline= 'none' color= 'inherit'>
          <IconButton color="inherit">
            <Box mr={1}>
              <SearchIcon/>
            </Box>
            <Box fontSize={18}>
             {t("SearchPackage")}
            </Box>
          </IconButton>
        </Link>
        <Link href="/login" underline= 'none' color= 'inherit'>
          <IconButton color="inherit">
            <Box mr={1}>
              <DriveEtaIcon/>
            </Box>
            <Box fontSize={18}>
            {t("SearchRide")}
            </Box>
          </IconButton>
        </Link>
        <Link href="/login" underline= 'none' color= 'inherit'>
          <IconButton color="inherit">
            <Box mr={1}>
              <AccountCircleIcon/>
            </Box>
            <Box fontSize={18}>
             {t("Login")}
            </Box>
          </IconButton>
        </Link>
        <Link href="/register" underline= 'none' color= 'inherit'>
          <IconButton color="inherit">
            <Box mr={1}>
              <ExitToAppIcon/>
            </Box>
            <Box fontSize={18}>
              {t("Register")}
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