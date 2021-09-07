import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BgImage from "../../assets/images/bgimg.png";


const useStyles = makeStyles({
  BgImg: {
    width: "100%",
    height: "700px",
    backgroundImage: `url(${BgImage})`,
    backgroundSize: "cover",
  },
  FirstSection: {
    margin: "0",
    padding: "0",
    width: "100%",
  },
  FirstSection: {
    maxWidth: "100%",
    margin: "0",
    padding: "0",
  },
  BigHomeTextBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  BigHomeText: {
    zIndex: 1,
    color: "#FFFFFF",
    fontWeight: "900",
    fontSize: "62px",
    paddingTop: "186px",
  },
  HomescreenButtons: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "50%",
    margin: "auto",
    paddingTop: "90px",
  },
  HomescreenPrimaryBox: {
    width: "280px",
    height: "100px",
    background: "#FFFFFF",
    boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.59)",
    borderRadius: "10px",
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
});
export default useStyles;
