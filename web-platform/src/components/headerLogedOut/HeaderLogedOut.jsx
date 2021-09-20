import React from 'react';
import { Link, AppBar, Toolbar, IconButton, MenuItem, Menu, Grid, Box } from "@mui/material";
import AutentificareIcon from '../../assets/icon/AutentificareIcon.png';
import cautaPachetIcon from '../../assets/icon/cautaPachetIcon.png';
import cautaTransportIcon from '../../assets/icon/cautaTransportIcon.png';
import InregistrareIcongo from '../../assets/icon/InregistrareIcon.png';
import BasicSelect from '../../components/buttons/languageButton/languageButton';
import MoreIcon from '@mui/icons-material/MoreVert';
import CaroLogo from '../../assets/logo/CaroLogo.png';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
// import LoginIcon from '@mui/icons-material/Login';
import PsychologyIcon from '@mui/icons-material/Psychology';
import useStyles from '../headerLogedIn/headerStyle';

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'left' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
      className={classes.bgDark}
    >
      <Grid container display="flex" justifyContent="center" alignItems="center" flexDirection="column" fullWidth>
        <Grid item xs={12}>
          <MenuItem>
            <Link href="/login" underline= 'none' color= 'inherit'>
              <IconButton
                  color="inherit"
                  aria-label="account of current user"
                  aria-controls={menuId}
                  aria-haspopup="true"
                >
                  <Box mr={2}>
                    <SearchIcon/>
                  </Box>
                  <Box>
                    Cauta Pachet
                  </Box>
              </IconButton>
            </Link>
          </MenuItem>
        </Grid>
        <Grid item xs={12}>
        <MenuItem>
          <Link href="/login" underline= 'none' color= 'inherit'>
            <IconButton
                color="inherit"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
              >
                <Box mr={2}>
                  <DirectionsCarIcon/>
                </Box>
                <Box>
                  Cauta Transport
                </Box>
            </IconButton>
          </Link>
        </MenuItem>
        </Grid>
        <Grid item xs={12}>
          <MenuItem>
            <Link href="/login" underline= 'none' color= 'inherit'>
              <IconButton
                  color="inherit"
                  aria-label="account of current user"
                  aria-controls={menuId}
                  aria-haspopup="true"
                >
                  <Box mr={2}>
                    <AccountCircleIcon/>
                  </Box>
                  <Box>
                    Autentificare
                  </Box>
              </IconButton>
            </Link>
          </MenuItem>
        </Grid>
        <Grid item xs={12}>
          <MenuItem>
            <Link href="/register" underline= 'none' color= 'inherit'>
              <IconButton
                  color="inherit"
                  aria-label="account of current user"
                  aria-controls={menuId}
                  aria-haspopup="true"
                >
                  <Box mr={2}>
                    <VpnKeyIcon/>
                    {/* <LoginIcon/> */}
                  </Box>
                  <Box>
                    Inregistrare
                  </Box>
              </IconButton>
            </Link>
          </MenuItem>
        </Grid>
        <Grid container xs={2} flexDirection="flex-start" alignItems="start">
          <Box display="flex" flexDirection="flex-start" alignItems="center">
            <MenuItem>
              <BasicSelect/>
            </MenuItem>
          </Box>
        </Grid>
      </Grid> 
    </Menu>
  );

  const renderMenuSBD = () => {
    return (
      <div>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="account of current user"
            aria-controls={menuId}
            aria-haspopup="true"
          >
            <img src={cautaPachetIcon} className={classes.iconSpacing10px}></img>
            <Link href="/login" underline= 'none' color= 'inherit'>
              Cauta Pachet
            </Link>
          </IconButton>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="account of current user"
            aria-controls={menuId}
            aria-haspopup="true"
          >
            <img src={cautaTransportIcon}  className={classes.iconSpacing10px}></img>
            <Link href="/login" underline= 'none' color= 'inherit'>
              Cauta Transport
            </Link>
          </IconButton>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="account of current user"
            aria-controls={menuId}
            aria-haspopup="true"
          >
            <img src={AutentificareIcon} className={classes.iconSpacing10px}></img>
            <Link href="/login" underline= 'none' color= 'inherit'>
              Autentificare
            </Link>
          </IconButton>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="account of current user"
            aria-controls={menuId}
            aria-haspopup="true"
          >
            <img src={InregistrareIcongo} className={classes.iconSpacing10px}></img>
            <Link href="/register" underline= 'none' color= 'inherit'>
              Inregistrare
            </Link>
          </IconButton>
      </div>
    );
  };

  return (
    <div className={classes.grow}>
      <AppBar position="static" className={classes.fundal}>
        <Toolbar  className={classes.rootPosition}>
          <div className={classes.headerAlign}>
            <div>
              <Link href="/" underline= 'none' color= 'inherit'>
                <IconButton
                  edge="start"
                  className={classes.menuButton}
                  color="inherit"
                  aria-label="open drawer"
                >
                  <img src={CaroLogo}></img>
                </IconButton>
              </Link>
            </div>
            <div className={classes.sectionDesktop}>
              {renderMenuSBD()}
            </div>
            <div className={classes.sectionDesktop}>
              <BasicSelect/>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </div>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </div>
  );
}