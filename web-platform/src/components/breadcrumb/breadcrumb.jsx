import React from "react";
import { Box } from "@material-ui/core";
import { CheckCircle } from '@material-ui/icons';
import baseStepTwo from '../../assets/images/baseStepTwo.png';
import baseStepThree from '../../assets/images/baseStepThree.png';
import baseStepFour from '../../assets/images/baseStepFour.png';
import useStyles from "./breadcrumbStyle";

const Breadcrumb = () =>{
    
    const classes=useStyles();
    
    return(
        <Box mx='20%' mt={3} borderBottom={2} display='flex' justifyContent='space-between' className={'Secondary-color'}>
            <Box px={1} mb={-1.5} display='flex' direction ='row' flexWrap='wrap' className={classes.stepBox}>
                <CheckCircle  className={'Primary-color'}/>
                <Box ml={1} className={'Primary-color'}>Step 1</Box>
            </Box>
            <Box px={1} mb={-1.5} display='flex' direction ='row' flexWrap='wrap' className={classes.stepBox}>
                <img src={baseStepTwo} className={classes.stepImg}/>
                <Box ml={1} className={'Secondary-color'}>Step 2</Box>
            </Box>
            <Box px={1} mb={-1.5} display='flex' direction ='row' flexWrap='wrap' className={classes.stepBox}>
                <img src={baseStepThree} className={classes.stepImg}/>
                <Box ml={1} className={'Secondary-color'}>Step 3</Box>
            </Box>
            <Box px={1} mb={-1.5} display='flex' direction ='row' flexWrap='wrap' className={classes.stepBox}>
                <img src={baseStepFour} className={classes.stepImg}/>
                <Box ml={1} className={'Secondary-color'}>Step 4</Box>
            </Box>
        </Box>        
    );
};

export default Breadcrumb;