import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MoreIcon from '@mui/icons-material/MoreVert';
import useStyles from './headerStyle';
import CaroLogo from '../../assets/logo/CaroLogo.png';
import cautaPachetIcon from '../../assets/icon/cautaPachetIcon.png';
import cautaTransportIcon from '../../assets/icon/cautaTransportIcon.png';
import navRoFlag from '../../assets/icon/navRoFlag.png';
import navEnFlag from '../../assets/icon/navEnFlag.png';
import BadgeVisibility from '../NotificationsComponent/notificomp';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import DirectionsCarOutlinedIcon from '@mui/icons-material/DirectionsCarOutlined';
import { Link } from "@mui/material";

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [accountAnchorEl, setAccountAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isAccountMenuOpen = Boolean(accountAnchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  // for lang
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };
  // for mobile
  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };
  //  for my account
  const handleProfileAccountMenuOpen = (event) => {
    setAccountAnchorEl(event.currentTarget);
  };
  const handleMenuAccountClose = () => {
    setAccountAnchorEl(null);
    handleMobileMenuClose();
  };


  const menuId = 'primary-search-account-menu';
  const menuIdAccount = 'primary-search-account-menu-sbd';
  // menu for my account
  const renderMenuAccount = (
    <Menu
      anchorEl={accountAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuIdAccount}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isAccountMenuOpen}
      onClose={handleMenuAccountClose}
    >
      <MenuItem onClick={handleMenuClose}>
        <LocalMallOutlinedIcon className={classes.accountIconsColorAndSpacing}/>
        <Link href="/my-packages" undeline= 'none' color= 'inherit'>
          Pachetele mele
        </Link>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <LocalShippingOutlinedIcon className={classes.accountIconsColorAndSpacing}/>
        <Link href="/my-rides" undeline= 'none' color= 'inherit'>
          Transporturile mele
        </Link>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <AccountCircleOutlinedIcon className={classes.accountIconsColorAndSpacing}/>
        <Link href="/Profil" undeline= 'none' color= 'inherit'>
          Profil
        </Link>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <CreditCardOutlinedIcon className={classes.accountIconsColorAndSpacing}/>
        <Link href="/payment-method" undeline= 'none' color= 'inherit'>
          Metoda de plata
        </Link>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <CancelOutlinedIcon className={classes.accountIconsColorAndSpacingRed}/>
        <Link href="/" undeline= 'none' color= 'inherit'>
          Iesire din cont
        </Link>
      </MenuItem>
    </Menu>
  );
  // menu for language
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>
        <img src={navRoFlag}></img>
        Ro
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <img src={navEnFlag}></img>
        En
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <Link href="/search-package" undeline= 'none' color= 'inherit'>
          <IconButton
              edge="start"
              color="inherit"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
            >
              <SearchOutlinedIcon/>
                Cauta Pachet
          </IconButton>
        </Link> 
      </MenuItem>
      <MenuItem>
        <Link href="/search-ride" undeline= 'none' color= 'inherit'>
          <IconButton
              edge="start"
              color="inherit"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
            >
              <DirectionsCarOutlinedIcon/>
              Cauta Transport
          </IconButton>
        </Link> 
      </MenuItem>
      <MenuItem onClick={handleProfileAccountMenuOpen}>
        <IconButton
          edge="start"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
          Contul meu
          <ExpandMoreIcon/>
        </IconButton>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          edge="start"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <img src={navRoFlag}></img>
          <ExpandMoreIcon/>
        </IconButton>
      </MenuItem>
    </Menu>
  );

  const renderMenuSBD = () => {
    return (
      <div>
          <Link href="/search-package" undeline= 'none' color= 'inherit'>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              href="/search-package">
              <img src={cautaPachetIcon} className={classes.iconSpacing10px}></img>
                Cauta Pachet
            </IconButton>
          </Link>
          <Link href="/search-ride" undeline= 'none' color= 'inherit'>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
            >
              <img src={cautaTransportIcon}  className={classes.iconSpacing10px}></img>
              Cauta Transport
            </IconButton>
          </Link>
      </div>
    );
  };

  return (
    <div className={classes.grow}>
      <AppBar position="static" className={classes.fundal}>
        <Toolbar  className={classes.rootPosition}>
          <div className={classes.headerAlign}>
            <div>
              <Link href="/" undeline= 'none' color= 'inherit'>
                <IconButton
                  edge="start"
                  className={classes.menuButtonLogo}
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
              <Link href="/notifications" undeline= 'none' color= 'inherit'>
                <BadgeVisibility/>
              </Link>
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuIdAccount}
                aria-haspopup="true"
                onClick={handleProfileAccountMenuOpen}
                color="inherit"
                className={classes.textFontSize}
              >
                <AccountCircle  className={classes.spacing10px}/>
                Contul meu
                <ExpandMoreIcon/>
              </IconButton>
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
                className={classes.textFontSize}
              >{'Ro '}
                <img src={navRoFlag}></img>
                <ExpandMoreIcon/>
              </IconButton>
            </div>
            <div className={classes.sectionMobile}>
              <Link href="/notifications" undeline= 'none' color= 'inherit'>
                <BadgeVisibility/>
              </Link>
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
      {renderMenuAccount}
      {renderMenu}
    </div>
  );
}