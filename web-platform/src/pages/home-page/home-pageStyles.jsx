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
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  HomePageText: {
    fontStyle: "italic",
    fontWeight: "normal",
    fontSize: "32px",
    lineHeight: "37px",
    color: "#393E46",
    paddingTop: "10px",
    width: "75%",
    margin: "auto",
  },
  TopTransport: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "75%",
    margin: "auto",
    paddingTop: "20px",
    paddingBottom: "25px",
  },
  TopTransportRoute: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    margin: "auto",
    width: "300px",
    height: "73px",
    background: "linear-gradient(180deg, #00B4D8 0%, #00C8ED 100%)",
    boxShadow: "0px 4px 4px 1px rgba(104, 104, 104, 0.27)",
    borderRadius: "8px",
    flexDirection: 'column'
  },
  TopTransportRouteText: {
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "20px",
    lineHeight: "23px",
    color: "#FFFFFF",
  },
});
export default useStyles;
