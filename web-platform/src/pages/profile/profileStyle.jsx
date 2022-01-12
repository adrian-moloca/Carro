import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({

  MyProfileStyle:{
    backgroundColor: '#fff',
    margin: '3% 0',
    height: '50vh',
    borderRadius: '15px',
    boxShadow: '2px 6px 8px 4px rgba(0, 0, 0, 0.31)',
    borderWidth: 3,
    borderColor: "#00000070"
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
