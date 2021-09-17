import React from 'react';
import { alpha, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import useStyles from '../headerLogedIn/headerStyle';
import CaroLogo from '../../assets/logo/CaroLogo.png';
import AutentificareIcon from '../../assets/icon/AutentificareIcon.png';
import cautaPachetIcon from '../../assets/icon/cautaPachetIcon.png';
import cautaTransportIcon from '../../assets/icon/cautaTransportIcon.png';
import InregistrareIcongo from '../../assets/icon/InregistrareIcon.png';
import navRoFlag from '../../assets/icon/navRoFlag.png';
import navEnFlag from '../../assets/icon/navEnFlag.png';
import { Link } from "@material-ui/core";

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
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
        <IconButton
            edge="start"
            className={classes.menuButtonMobile}
            color="inherit"
            aria-label="account of current user"
            aria-controls={menuId}
            aria-haspopup="true"
          >
            <img src={cautaPachetIcon} className={classes.iconSpacing10pxMobile}></img>
            <Link href="/login" undeline= 'none' color= 'inherit'>
              Cauta Pachet
            </Link>
        </IconButton>
      </MenuItem>
      <MenuItem>
        <IconButton
            edge="start"
            className={classes.menuButtonMobile}
            color="inherit"
            aria-label="account of current user"
            aria-controls={menuId}
            aria-haspopup="true"
          >
            <img src={cautaTransportIcon}  className={classes.iconSpacing10pxMobile}></img>
              <Link href="/login" undeline= 'none' color= 'inherit'>
                Cauta Transport
              </Link>
        </IconButton>
      </MenuItem>
      <MenuItem>
        <IconButton
            edge="start"
            className={classes.menuButtonMobile}
            color="inherit"
            aria-label="account of current user"
            aria-controls={menuId}
            aria-haspopup="true"
          >
            <img src={AutentificareIcon} className={classes.iconSpacing10pxMobile}></img>
            <Link href="/login" undeline= 'none' color= 'inherit'>
              Autentificare
            </Link>
        </IconButton>
      </MenuItem>
      <MenuItem>
        <IconButton
            edge="start"
            className={classes.menuButtonMobile}
            color="inherit"
            aria-label="account of current user"
            aria-controls={menuId}
            aria-haspopup="true"
          >
            <img src={InregistrareIcongo} className={classes.iconSpacing10pxMobile}></img>
            <Link href="/register" undeline= 'none' color= 'inherit'>
              Inregistrare
            </Link>
        </IconButton>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
      </MenuItem>
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
            <Link href="/login" undeline= 'none' color= 'inherit'>
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
            <Link href="/login" undeline= 'none' color= 'inherit'>
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
            <Link href="/login" undeline= 'none' color= 'inherit'>
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
            <Link href="/register" undeline= 'none' color= 'inherit'>
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
              <Link href="/" undeline= 'none' color= 'inherit'>
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
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
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
      {renderMenu}
    </div>
  );
}