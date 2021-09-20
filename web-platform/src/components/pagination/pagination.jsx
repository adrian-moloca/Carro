import React from 'react'
import { Box, Grid } from '@mui/material';
import Pagination from '@mui/lab/Pagination';


const PaginationSBD = () => {
  return(
    <Grid 
      container
      direction="row"
      justifyContent="center"
      alignItems="flex-end"
      >
      <Box>
        <Pagination count={10} variant="outlined" shape="rounded" />
      </Box>
    </Grid>
  );
};

export default PaginationSBD;