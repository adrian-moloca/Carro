import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core';

const SeeProfileBtn = withStyles({
    root:{
       fontWeight: 'normal',
       color: '#00b4d8',
       fontSize: 18,
       lineHeight: "100%",
       backgroundColor: 'transparent',
       '&:hover': {
          backgroundColor: '#00b4d825',
          color: '#00b4d8',
        },
    },

})(Button);

export default SeeProfileBtn;