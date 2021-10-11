import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    overflow:'scroll',
    height:'100%',
    display:'block',
    margin: "30",
    // padding: 30
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #fff',
    borderRadius: 10,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  AccordionBorderRadius: {
    border: 'none',
    borderRadius: "10px",
    boxShadow: "none",
    '&::before': {
      top: -1,
      left: 0,
      right: 0,
      height: 0,
      opacity: 1,
      position: "absolute",
      content: "",
    },
  },
  AccordionDetailsFlex: {
    display: "flex",
    flexDirection: "column",
  },
}));

export default useStyles;
