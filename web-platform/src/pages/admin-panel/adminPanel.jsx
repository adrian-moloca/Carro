
import React, { useState } from "react";
import { Container, Box, Grid, InputAdornment, IconButton } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import CarroTextField from "../../components/textField/CarroTextField";
import StickyHeadTable from "../../components/Table/AdminTable"

const AdminPanel = () => {

  const[search, setSearch] = useState('');


  return (
    <Container className="addPackagesContainer">
      <Box mb={2} fontWeight={400} fontSize={25} textAlign={"center"}>
        Admin Panel
      </Box>
      <Box mt={5}>
        <Grid container justifyContent="center">
          <Grid container item xs={12} md={4} xl={4} justifyContent="flex-start">
            <CarroTextField
              required
              value={search}
              onChange={(e)=>setSearch(e.target.value)}
              label="Nume sau email"
              variant="outlined"
              fullWidth
              InputProps={{endAdornment: <IconButton onClick={()=>setSearch(e.target.value)}> <SearchIcon /></IconButton>}}
            />
          </Grid>
        </Grid>
        <Box mt={5}>
          <StickyHeadTable searched={search}/>
        </Box>
      </Box>
    </Container>
  );
};

export default AdminPanel;
