import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core';

const SecondaryAdminButton = withStyles({
    contained:{
        width: '178.98px',
        height: '43.58px',
        color: '#00B4D8',
        border: '3px solid #00B4D8',
        borderRadius:'10px',
        backgroundColor: '#FFF',
        '&:hover': {
            color: '#00B4D8',
            backgroundColor: '#fff',
        },
    },

    outlined:{
        color: '#00B4D8',
        backgroundColor: '#FFF',
        borderColor:'#00B4D8',
        '&:hover': {
            color: '#00B4D8',
            backgroundColor: '#F50057',
        },
    },

})(Button);

export default SecondaryAdminButton;