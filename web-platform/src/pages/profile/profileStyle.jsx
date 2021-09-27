import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({

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
});

export default useStyles;
