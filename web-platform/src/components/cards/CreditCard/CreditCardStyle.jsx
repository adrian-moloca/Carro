import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    cardProviderIco:{
        height:'110%',
        width:'auto',
    },
    paymentCard:{
        backgroundColor: '#fff',
        margin: '1% 0',
        padding: '20px',
        cursor: 'default',
        width: '100%',
        borderRadius: '15px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.31)'
    },


    ['@media (max-width:1150px)'] : {
        paymentCard:{
            width: '50%',
        },
      },
    
    ['@media (max-width:900px)'] : {
        paymentCard:{
            width: '100%',
        },
    },

    ['@media (max-width:250px)'] : {
        paymentCard:{
            width: '100%',
        },
    },
});

export default useStyles;