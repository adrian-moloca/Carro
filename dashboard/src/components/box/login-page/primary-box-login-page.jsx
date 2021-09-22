import React from "react";
import { Box } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

const LoginBox = withStyles({
    root:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        backgroundColor:'white',
        width:'35%',
        minWidth:'250px',
        padding: '40px',
        borderRadius: '15px',
    }
})(Box)

export default LoginBox;