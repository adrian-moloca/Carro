
import React from "react";
import { Container, Box, Grid, InputAdornment } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import CarroTextField from "../../components/textField/CarroTextField";
import AdminTable from "../../components/Table/AdminTable"

const AdminPanel = () => {

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
              label="Nume sau email"
              variant="outlined"
              fullWidth
              InputProps={{endAdornment: <InputAdornment position="end"> <SearchIcon /></InputAdornment>}}
            />
          </Grid>
        </Grid>
        <Box mt={5}>
        <AdminTable/>
        </Box>
      </Box>
    </Container>
  );
};

export default AdminPanel;
