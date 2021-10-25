import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  fundal: {
    backgroundColor: "#000",
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: { display: 'flex'},
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
    justifyContent:'left',
  },

}));

export default useStyles;