import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core';

const PrimaryButton = withStyles({

    contained:{
      color: '#fff',
      backgroundColor: '#00b4d8',
      '&:hover': {
        color: '#00b4d8',
        backgroundColor: '#fff',
      },
    },

    outlined:{
      color: '#00b4d8',
      backgroundColor: '#fff',
      borderColor: '#00b4d8',
      '&:hover': {
        color: '#fff',
        backgroundColor: '#00b4d8',
      },
    },

})(Button);

export default PrimaryButton;