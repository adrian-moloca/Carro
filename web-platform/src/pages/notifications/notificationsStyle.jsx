import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) =>({
  
  AccordionBorderRadius : {
    borderRadius: '10px',
    marginTop: '20px',
  },  
  AccordionDetailsFlex : {
    display: 'flex',
    flexDirection: 'column',
  },

}));

export default useStyles;