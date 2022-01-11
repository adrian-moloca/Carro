import { makeStyles } from "@material-ui/core/styles";
import Edit from "../../assets/images/edit.png";

const useStyles = makeStyles({

    AccordionBorderRadius: {borderRadius: "10px"},

    label: {fontSize: '16px',},

    profilePhotoEdit: {
        height: '70px', 
        width: '70px',
        left: '-5px',
        '&:hover':{
            filter: "contrast(50%)",
        }
    }

    
});

export default useStyles;
