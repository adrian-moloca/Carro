import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  fundal: {
    backgroundColor: "#000",
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: { display: 'flex'},
  },
  zoomIn:{
    display: 'none',
    transition: 'transform 0.1s',
    [theme.breakpoints.up('md')]: { display: 'flex'},
    '&:hover':{
      transform: 'scale(1.05)',
    }
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {display: 'none'},
  },
  linkBtn: {
    display: 'flex',
    textDecoration: 'none',
    maxWidth:'250px',
    color:'inherit',
    transition: 'transform 0.1s',
    '&:hover':{
      transform: 'scale(1.05)',
    }
  },
}));

export default useStyles;