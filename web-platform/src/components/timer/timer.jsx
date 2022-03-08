import React, { useEffect, useState } from 'react';
import {useTimer} from 'react-timer-hook';
import {Box, ButtonBase} from '@material-ui/core';
import { useTranslation } from "react-i18next";
import axios from 'axios';
import data from '../../utils/constants.js';

const Timer = ({expiryTimestamp, token, ...props}) =>{
    const { t } = useTranslation();
    const[timerColor, setTimerColor] = useState('Secondary-color');

    const{
        seconds,
        minutes,
        isRunning,
        restart,
    } = useTimer({ expiryTimestamp, onExpire: () => setTimerColor('Pink-carro') });

    useEffect(()=>{
        const time = new Date();
        time.setMilliseconds( expiryTimestamp);
        setTimerColor('Secondary-color');
        restart(time);
    }, [expiryTimestamp])
    

    return(
        <Box display='flex' flexDirection='column' alignItems='center' minHeight='70px'>
            <Box paddingBottom='20px' fontSize='20px' fontWeight='400' lineHeight='0.7' className={timerColor} display='flex' flexDirection='row'>
            {t("ValidationTimeCode")} <Box paddingX='10px' fontWeight='500'>{minutes}:{seconds.toString().padStart(2, '0')}</Box>
            </Box>
            {!isRunning ? 
               <ButtonBase onClick={() => {props.newCode()}}>
                   <Box className={'Primary-color'} fontSize='17px'>
                   {t("ResendCode")}
                    </Box>
               </ButtonBase> : null}
        </Box>
    );
}

export default Timer;
