import React from 'react'
import { Box, Grid } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import { PinDropSharp } from '@material-ui/icons';

const PaginationSBD = (props) => {

  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {setPage(value)};

  return(
      <Box width='1' mt='5%' display='flex' justifyContent='center'>
        <Pagination 
          count={10} 
          variant="outlined" 
          shape="rounded" 
          page={page} 
          onChange={handleChange}
          size='medium'
        />
      </Box>
  );
};

export default PaginationSBD;