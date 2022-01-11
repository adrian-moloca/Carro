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
  profilePhotoEdit: {
    height: '70px', 
    width: '70px',
    left: '-5px',
    '&:hover':{
        filter: "contrast(50%)",
    }
  },
  profilePhoto: {
    height: '70px', 
    width: '70px',
    left: '-5px',
  }
});

export default useStyles;
