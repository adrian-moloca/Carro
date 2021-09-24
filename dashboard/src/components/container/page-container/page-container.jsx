import React from "react";
import { Container } from "@material-ui/core";
import { withStyles } from "@material-ui/core";

const PageContainer = withStyles({

    root:{
        display:'flex',
        flexDirection:'column',
        position:'static',
        right:0,
        bottom: 0,
        margin: 0,
        marginTop: '10px',
        paddingLeft:'310px',
        padding: 0,
        alignItems:'center',
        backgroundColor: 'white',
        maxWidth:'none',
    },

})(Container)

export default PageContainer