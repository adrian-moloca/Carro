import { TextField } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

const CarroTextField = withStyles({
    root: {
      
      '& .MuiInputBase-root':{
        marginBottom: "15px"
      },

      '& label.Mui-focused': {
        color: '#00b4d8',
      },
      '& .MuiInput-underline:after':{
        borderBottomColor: '#00b4d8',
      },
      '& .MuiOutlinedInput-root': {
        '&:hover fieldset': {
          borderColor: '#00b4d8',
        },
        '&.Mui-focused fieldset': {
          borderColor: '#00b4d8',
        },
      },
    }
  })(TextField);

  export default CarroTextField;