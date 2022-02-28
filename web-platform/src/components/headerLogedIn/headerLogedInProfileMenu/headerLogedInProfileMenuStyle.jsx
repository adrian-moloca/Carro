import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

  borderForAdmin: {
    border: '1px solid #00B4D8;',
    margin: ' 0',
    transform: 'rotate(-180deg);',
    width:'100%',
  },
  zoomIn:{
    transition: 'transform 0.1s',
    '&:hover':{
      transform: 'scale(1.05)',
    }
  },
  widthMenu:{
    width: '20%',
    minWidth:'250px',
    marginTop: '65px',
  },

}));

export default useStyles;