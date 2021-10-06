import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core';

const PrimaryAdminButton = withStyles({
    contained:{
        width: '178.98px',
        height: '43.58px',
        color: '#fff',
        borderRadius:'10px',
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

export default PrimaryAdminButton;