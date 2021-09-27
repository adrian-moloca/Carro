import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core';

const GreenCaroButton = withStyles({
    root:{
       fontWeight: 'bold',
       color: '#fff',
       backgroundColor: '#34D02D',
       '&:hover': {
        backgroundColor: '#FFFFFF',
        color: '#34D02D',
      },
    },

})(Button);

export default GreenCaroButton;