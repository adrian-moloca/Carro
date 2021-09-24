import React from 'react';
import {Box} from '@material-ui/core';
import PageContainer from '../../components/container/page-container/page-container.jsx';
import GeneralStatistics from './general-statistics/general-statistics.jsx';
import LastRides from './last-rides/last-rides';

const HomePage = () => { 

  return (
    <PageContainer>
        <Box width='90%' display='flex' flexDirection='column' justifyContent='center' paddingTop='5%' paddingBottom='2%'>
          <Box textAlign='left' fontWeight='500'  fontSize='35px'>
            Statistici generale
          </Box>
          <Box paddingTop='4%'>
            <GeneralStatistics/>
          </Box>
        </Box>
        <Box width='90%' display='flex' flexDirection='column' justifyContent='center' paddingTop='2%'>
          <Box textAlign='left' fontWeight='500' fontSize='35px'>
            Ultimele curse
          </Box>
          <Box paddingTop='4%' paddingBottom='5%' alignSelf='center'>
            <LastRides/>
          </Box>
        </Box>
    </PageContainer>
  )
}

export default HomePage;
