import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({

    starsStyle:{
        color: '#FFD700',
    },

    containerBackdrop:{
        backgroundColor: '#fff',
        margin: '1% 0',
        padding: '20px',
        maxHeight: '95%',
        width: '60%',
        borderRadius: '15px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.31)'
    },

    ['@media (max-width:1150px)'] : {
        containerBackdrop:{
            width: '60%',
        },
      },
    
    ['@media (max-width:900px)'] : {
        containerBackdrop:{
            width: '80%',
        },
    },

    ['@media (max-width:630px)'] : {
        containerBackdrop:{
            width: '90%',
        },
        profileImage:{
            width:'45px',
            height:'45px',
        },
    },


    ['@media (max-width:250px)'] : {
        containerBackdrop:{
            width: '100%',
        },
    },

    radioGroupStyle:{
        display:'flex',
        justifyContent:'space-between',
    },
});

export default useStyles;