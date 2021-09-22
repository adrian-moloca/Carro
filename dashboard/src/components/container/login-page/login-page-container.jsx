import React from 'react';
import { Container, Box } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import CarroLogo from '../../../assets/images/logoCarro.png';
const MyContainer = withStyles({

    root:{
        display:'flex',
        flexDirection:'column',
        backgroundColor:'#00b4d8',
        minHeight:'100vh',
        alignItems:'center',
        px:'10px',
    },

    maxWidthLg :{
        maxWidth: '100%',
    },

})(Container);

const LoginContainer = (props) =>{
    return(
        <MyContainer>
            <Box padding={5} display='flex' justifyContent='center'>
                <img src={CarroLogo}/>
            </Box>
            {props.children}
        </MyContainer>
    );
}

export default LoginContainer;