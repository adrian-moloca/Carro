import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  fundal: {
    backgroundColor: "#000",
  },
  sectionDesktop: {
    paddingLeft:'10px',
    paddingRight:'10px',
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
    color:'inherit'
  },

}));

export default useStyles;