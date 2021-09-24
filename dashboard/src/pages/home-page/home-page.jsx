import React from 'react';
import {Box} from '@material-ui/core';
import PageContainer from '../../components/container/page-container/page-container.jsx';
import GeneralStatistics from './general-statistics/general-statistics.jsx';

const HomePage = () => { 
  
  return (
    <PageContainer>
      <Box width='90%' display='flex' flexDirection='column' justifyContent='center' paddingTop='2%' paddingBottom='2%'>
        <Box textAlign='left' fontSize='35px'>
          Statistici generale
        </Box>
        <Box paddingTop='4%'>
          <GeneralStatistics/>
        </Box>
      </Box>
      <Box width='90%' display='flex' flexDirection='column' justifyContent='center' paddingTop='2%'>
        <Box textAlign='left' fontSize='35px'>
          Ultimele curse
        </Box>
      </Box>
    </PageContainer>
  )
}

export default HomePage;
