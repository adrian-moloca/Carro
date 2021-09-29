import React, { useState } from 'react';
import {useTimer} from 'react-timer-hook';
import {Box, ButtonBase} from '@material-ui/core';

const Timer = ({expiryTimestamp}) =>{

    const[timerColor, setTimerColor] = useState('Secondary-color');

    const{
        seconds,
        minutes,
        isRunning,
        start,
        restart,
    } = useTimer({ expiryTimestamp, onExpire: () => setTimerColor('Pink-carro') });
    

    return(
        <Box display='flex' flexDirection='column' alignItems='center' minHeight='70px'>
            <Box paddingBottom='20px' fontSize='20px' fontWeight='400' lineHeight='0.7' className={timerColor} display='flex' flexDirection='row'>
                Timp validare cod: <Box paddingX='10px' fontWeight='500'>{minutes}:{seconds.toString().padStart(2, '0')}</Box>
            </Box>
            {start}
            {!isRunning ? 
               <ButtonBase onClick={()=>{
                   const time = new Date();
                   time.setMinutes(time.getMinutes() + 5);
                   setTimerColor('Secondary-color');
                   restart(time);
               }}>
                   <Box className={'Primary-color'} fontSize='17px'>
                        Retrimitere cod
                    </Box>
               </ButtonBase> : null}
        </Box>
    );
}

export default Timer;
