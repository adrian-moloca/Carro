import React from "react";
import { Box } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

const LoginBox = withStyles({
    root:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        backgroundColor:'white',
        width:'100%',
        padding: '40px',
        borderRadius: '15px',
        boxShadow: ' 0 15px 20px rgba(0, 0, 0, 0.31)',
    }
})(Box)

export default LoginBox;