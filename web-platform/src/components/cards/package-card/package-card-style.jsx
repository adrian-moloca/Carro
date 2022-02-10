import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({

    greyLinesStyle:{ width:'100%', height: "1px" },
    boxesImageStyle:{ paddingTop:'2%', height: 80, width:80 },
    advStyle:{height:'33px', width:'29px',},
    advNoneStyle:{height:'33px', width:'29px', opacity: '35%'},
    detailsBox: {
        backgroundColor: '#d4d4d4',
        boxShadow: 'inset 0px 0px 5px 5px rgba(0,0,0,0.2)'
    },
});

export default useStyles;