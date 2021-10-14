
import React, { useState} from "react";
import { Container, Box, Grid, InputAdornment } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import PrimaryAdminButton from "../../components/buttons/AdminPanelButton/PrimaryAdmin";
import SecondaryAdminButton from "../../components/buttons/AdminPanelButton/SecondaryAdmin";
import PrimaryButton from "../../components/buttons/primaryButton/primaryButton";
import CarroTextField from "../../components/textField/CarroTextField";
import AdminTable from "../../components/Table/AdminTable"

const AdminPanel = () => {

const [visibleUsers, setVisibleUsers] = useState(false);
const [visibleLanguage, setVisibleLanguage] = useState(false);

  return (
    <Container className="addPackagesContainer">
      <Box mb={2} fontWeight={400} fontSize={25} textAlign={"center"}>
        Admin Panel
      </Box>
      <Box mt={5}>
        <Grid container xs={12} justifyContent="center">
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
