import React from 'react';
import { Container, Box } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import CarroLogo from '../../../assets/images/logoCarro.png';

const MyContainer = withStyles({
    

    root:{
        display:'flex',
        flexDirection:'column',
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor:'#00b4d8',
        //minHeight:'100vh',
        height: '100%',
        width: '100%',
        paddingLeft: 0,
        paddingRight: 0,
    },

    maxWidthLg :{
        maxWidth: '100%',
    },

})(Container);

const DrawerContainer = (props) =>{
    return(
        <MyContainer>
            <Box maxWidth='100%'  padding={5} display='flex' justifyContent='center'>
                <img src={CarroLogo}/>
            </Box>
            <Box width='100%' display='flex' alignSelf='center'>
                {props.children}
            </Box>
        </MyContainer>
    );
}

export default DrawerContainer;