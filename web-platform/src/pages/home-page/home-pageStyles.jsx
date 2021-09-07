import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BgImage from "../../assets/images/bgimg.png";

const useStyles = makeStyles(
 {
    BgImg: {
        width: '100%',
        height: '300px',
        backgroundImage: `url(${BgImage})`
    },
    FirstSection: {
        margin: '0px',
        padding: '0'
    }

 });
 export default useStyles;