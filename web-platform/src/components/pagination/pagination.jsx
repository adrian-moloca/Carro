import React from 'react'
import { Box, Grid } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';

const PaginationSBD = () => {

  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => { setPage(value) };

  return(
    <Grid container direction="row" justifyContent="center" alignItems="flex-end">
      <Box>
        <Pagination 
          count={10} 
          variant="outlined" 
          shape="rounded" 
          page={page} 
          onChange={handleChange}
          pageSize={4}
        />
      </Box>
    </Grid>
  );
};

export default PaginationSBD;