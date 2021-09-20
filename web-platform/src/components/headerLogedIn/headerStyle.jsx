import {  makeStyles } from '@mui/styles';
import { alpha, createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/styles';

const theme = createTheme({
  spacing: 4,
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

const useStyles = makeStyles((theme) => ({

  grow: {
    flexGrow: 0,
  },
  fundal: {
    backgroundColor: "#000",
    display: "flex",
    justifyContent: "space-between",
  },
  menuButton: {
    fontSize: 15
  },
  title: {
    display: 'none',
    [theme.sm]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    // padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    // padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    // paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    // transition: theme.transitions.create('width'),
    width: '100%',
    // [theme.breakpoints.up('md')]: {
    //   width: '20ch',
    // },
  },
  sectionDesktop: {
    display: 'none',
    // [theme.breakpoints.up('md')]: {
    //   display: 'flex',
    // },
  },
  sectionMobile: {
    display: 'flex',
    // [theme.breakpoints.up('md')]: {
    //   display: 'none',
    // },
  },
  iconSpacing10px: {
    paddingRight: 10
  },
  headerAlign: {
    display: "flex",
    justifyContent:"space-between",
    alignItems: "center",
  },
  rootPosition: {
    display: "block",
  },
  menuButtonMobile: {
    color: "#000"
  },
  iconSpacing10pxMobile:{
    color: "#000"
  },
  spacing10px: {
    marginRight: 5,
  },
  textFontSize: {
    fontFamily: "Arial",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 18
  },
  accountIconsColorAndSpacing: {
    marginRight: 10,
    color: '#00B4D8',
  },
  accountIconsColorAndSpacingRed: {
    marginRight: 10,
    color: '#F50057',
  },
  menuButtonLogo: {
    marginLeft: 50
  }
}));

export default useStyles;