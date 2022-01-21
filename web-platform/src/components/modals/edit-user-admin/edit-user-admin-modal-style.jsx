import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({

    containerBackdrop:{
        backgroundColor: '#fff',
        margin: '1% 0',
        padding: '20px',
        cursor: 'default',
        width: '40%',
        borderRadius: '15px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.31)',
    },

    profileImg:{
        height: '100px',
        width:'100px',
        border: '1px solid #BDBDBD',
        boxShadow: '0px 4px 4px rgba(0, 180, 216, 0.44)',
    },

    identityCardImg:{
        maxHeight: '120px',
        maxWidth:'200px',
        border: '1px solid #BDBDBD',
    },
    starsStyle:{
        color: '#FFD700',
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

    ['@media (max-width:250px)'] : {
        containerBackdrop:{
            width: '100%',
        },
    },

    
    
});

export default useStyles;