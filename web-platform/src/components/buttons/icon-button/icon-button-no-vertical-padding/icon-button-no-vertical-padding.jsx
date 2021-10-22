import { IconButton } from '@material-ui/core';
import { withStyles } from '@material-ui/core';

const IconButtonNoVerticalPadding = withStyles({

    root:{
        paddingTop: 0,
        paddingBottom: 0,
        paddingLeft: '5px',
        paddingRight: '5px',
    },

})(IconButton);


export default IconButtonNoVerticalPadding;