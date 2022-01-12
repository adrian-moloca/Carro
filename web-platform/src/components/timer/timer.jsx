import React, { useState } from 'react';
import {useTimer} from 'react-timer-hook';
import {Box, ButtonBase} from '@material-ui/core';
import { useTranslation } from "react-i18next";
import axios from 'axios';
import data from '../../utils/constants.js';

const Timer = ({expiryTimestamp, token}) =>{
    const { t } = useTranslation();
    const[timerColor, setTimerColor] = useState('Secondary-color');

    const{
        seconds,
        minutes,
        isRunning,
        restart,
    } = useTimer({ expiryTimestamp, onExpire: () => setTimerColor('Pink-carro') });

    const resendCode = () => {

        const time = new Date();
        time.setSeconds(time.getSeconds() + 30);
        setTimerColor('Secondary-color');
        restart(time);

        axios.post(data.baseUrl+"/phone-validation", {
            message: "Codul pentru verificarea numarului de telefon"
        },{
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        })
        .then(res => {
            console.log('validation: ', res);
        })
        .catch(err => {
            alert("Codul a fost trimis")
            console.log('error from validation: ', err);
        })
    }
    

    return(
        <Box display='flex' flexDirection='column' alignItems='center' minHeight='70px'>
            <Box paddingBottom='20px' fontSize='20px' fontWeight='400' lineHeight='0.7' className={timerColor} display='flex' flexDirection='row'>
            {t("ValidationTimeCode")} <Box paddingX='10px' fontWeight='500'>{minutes}:{seconds.toString().padStart(2, '0')}</Box>
            </Box>
            {!isRunning ? 
               <ButtonBase onClick={() => resendCode()}>
                   <Box className={'Primary-color'} fontSize='17px'>
                   {t("ResendCode")}
                    </Box>
               </ButtonBase> : null}
        </Box>
    );
}

export default Timer;
