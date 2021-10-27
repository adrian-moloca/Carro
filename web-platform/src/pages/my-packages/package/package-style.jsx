import { makeStyles } from '@material-ui/core';

const useStyles=makeStyles({

    AccordionBorderRadius : {
        borderRadius: '10px',
        alignItems: 'center',
        '&.Mui-disabled':{
            backgroundColor: 'rgba(0, 0, 0, 0)',
        },
    },
    AccordionSummaryOpacity:{
        '&.Mui-disabled':{
            opacity: 1,
        },
    },
    AccordionDetailsFlex : {
        display: 'flex',
        flexDirection: 'column',
    },
});

export default useStyles;