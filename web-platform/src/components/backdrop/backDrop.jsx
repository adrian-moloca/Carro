import Reeact from 'react';
import { Backdrop, Box, Container } from '@material-ui/core';

import MyCardTD from '../cards/MyCardTD';
import { withStyles } from '@material-ui/styles';
import { PinDropSharp } from '@material-ui/icons';

const BackdropSelectDriver=(props)=>{

    const MyBackdrop = withStyles({
        '& element.style':{
            visibility: 'visible',
        },

        /* '.MuiBackdrop-root' */
        root:{
            zIndex:'1',
            backgroundColor: 'black 0.7',
            
        },

    })(Backdrop);

    return(
        <MyBackdrop open={props.open} onClick={props.clicked}>
            <Container className={'Primary-container-style'}>
                <Box  mb={2} borderBottom={1} fontWeight={400} fontSize={21} textAlign={'left'}>
                    Selecteaza Curierul
                </Box>
                <Box>
                    <MyCardTD
                    image={props.image}
                    name={props.name}
                    plecare={props.plecare}
                    destinatie={props.destinatie}
                    telefon={props.telefon}/>
                </Box>
                <Box >

                </Box>
            </Container>
        </MyBackdrop>

    );
};

export default BackdropSelectDriver;