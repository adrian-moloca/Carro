import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: '#000',
    margin: '0',
    color: '#fff',
    fontSize: '17px',
    textAlign:'center',
  },
  mediaButtonsContainer: {
    display: 'flex',
    justifyContent: 'center'
  },

  footerSeparationLine: {
    border: '1px solid #00B4D8;',
    margin: ' 0',
    transform: 'rotate(-180deg);',
  },

  verticalpadding: {
    paddingY: '1%',
  },
  
  noMargin: {
    margin: '0'
  }
}));

export default useStyles;
