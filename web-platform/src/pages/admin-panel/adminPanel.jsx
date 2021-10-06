
import React, { useState} from "react";
import useStyles from "./adminPanelStyles";
import {
  Container,
  Box,
  AccordionSummary,
  AccordionDetails,
  Accordion,
  Grid,
  Button,
} from "@material-ui/core";
import PrimaryAdminButton from "../../components/buttons/AdminPanelButton/PrimaryAdmin";
import SecondaryAdminButton from "../../components/buttons/AdminPanelButton/SecondaryAdmin";
import PrimaryButton from "../../components/buttons/primaryButton/primaryButton";
import CarroTextField from "../../components/textField/CarroTextField";
import SearchIcon from '@material-ui/icons/Search';
import AdminTable from "../../components/Table/AdminTable"
import { InputAdornment } from "@material-ui/core";


const AdminPanel = () => {

const [visibleUsers, setVisibleUsers] = useState(false);
const [visibleLanguage, setVisibleLanguage] = useState(false);

  return (
    <Container className="Primary-container-style">
      <Box mb={2} fontWeight={400} fontSize={25} textAlign={"center"}>
        Admin Panel
      </Box>
      <Box mt={7}>
        <Grid container xs={12} justifyContent="space-between">
          <Grid container item xs={5} justifyContent="flex-end">
          {visibleUsers ? (<PrimaryAdminButton variant="contained" onClick={() => setVisibleUsers(true)}> Users</PrimaryAdminButton>) : (<SecondaryAdminButton variant="contained" onClick={() => setVisibleUsers(!visibleUsers)}>
              Users
            </SecondaryAdminButton>)}
          </Grid>
          <Grid container item xs={5} justifyContent="flex-start">
            {visibleUsers ? (<SecondaryAdminButton variant="contained" onClick={() => setVisibleUsers(!visibleUsers)}>
              Language
            </SecondaryAdminButton>) : (<PrimaryAdminButton variant="contained" onClick={() => setVisibleUsers(false)}> Language</PrimaryAdminButton>)}
          </Grid>
        </Grid>
      </Box>
      <Box mt={5}>
        <Grid container xs={12} justifyContent="center">
          <Grid container item xs={5} justifyContent="center">
            <PrimaryButton variant="contained">
              {" "}
              ADAUGA UTILIZATORI
            </PrimaryButton>
          </Grid>
        </Grid>
      </Box>
      {visibleUsers ? 
      (<Box mt={5}>
        <Grid container xs={12} justifyContent="flex-start">
          <Grid container item xs={4} justifyContent="flex-start">
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
      </Box>) : 'Limba'}
    </Container>
  );
};

export default AdminPanel;
