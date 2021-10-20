import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({

    ['@media (max-width:1150px)'] : {
        paymentCard:{
            width: '100%',
        },
      },
    
    ['@media (max-width:900px)'] : {
        paymentCard:{
            width: '80%',
        },
    },

    ['@media (max-width:250px)'] : {
        paymentCard:{
            width: '100%',
        },
    },
});

export default useStyles;