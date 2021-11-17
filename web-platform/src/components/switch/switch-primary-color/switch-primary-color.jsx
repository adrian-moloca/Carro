import { Switch } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

const PrimaryColorSwitch=withStyles({

        root:{
            '& .Mui-checked + .MuiSwitch-track':{
                    backgroundColor:'#00b4d8',   
                },

            '& .Mui-checked':{
                color:'#00b4d8',
            },    

        },

})(Switch)

export default PrimaryColorSwitch;