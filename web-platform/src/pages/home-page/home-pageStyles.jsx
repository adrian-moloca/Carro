import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BgImage from "../../assets/images/bgimg.png";

const useStyles = makeStyles(
 {
    BgImg: {
        width: '100%',
        height: '700px',
        backgroundImage: `url(${BgImage})`,
        backgroundSize: 'cover'
    },
    FirstSection: {
        margin: '0',
        padding: '0',
        width: '100%',
    },
    FirstSection: {
        maxWidth: '100%',
        margin: '0',
        padding: '0'
    }

 });
 export default useStyles;