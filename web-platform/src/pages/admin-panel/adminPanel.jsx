
import React, { useEffect, useState } from "react";
import { Container, Box, Grid, IconButton } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import CarroTextField from "../../components/textField/CarroTextField";
import StickyHeadTable from "../../components/Table/AdminTable"
import { useTranslation } from "react-i18next";
import PrimaryButton from "../../components/buttons/primaryButton/primaryButton";
import PackagesRidesTable from "../../components/Table/admin-table-packages-rides";
import { connect } from "react-redux";
import axios from "axios";
import data from "../../utils/constants";
import { adminGetUser, adminGetUsers } from "../../redux/actions/AdminActions";

const AdminPanel = ({userData, adminData, adminGetUsers, adminGetUser}) => {

  const {t} = useTranslation()

  const tables = [t('Users'), t('PackagesRides')]

  const [users, setUsers] = useState(adminData.users)
  const[search, setSearch] = useState('');
  const [selected, setSelected] =useState(0)

  async function deleteUser (id){
    axios.delete(data.adminUrl+'/users/'+id, {
        headers:{
          'Authorization': `Bearer ${userData.token}`,
        }
    }).then(()=> adminGetUsers(userData.token)).catch((error)=>alert('Delete user failed'));
  }

  useEffect(()=>{ 
    adminData.users && adminData.users.length > 0 ? setUsers(adminData.users) : setUsers([])  
  }, [adminData.users])

  return (
    <Container className="Primary-container-style">
      <Box mb={2} fontWeight={400} fontSize={25} textAlign={"center"}>
        Admin Panel
      </Box>
      <Box justifyContent={"center"} marginTop={"30px"}>
        <Grid container justifyContent="center">
          <Grid sm={3} container item justifyContent="flex-start">
                    <PrimaryButton variant={selected === 0 ? 'contained' : 'outlined'} onClick={()=>setSelected(0)} style={{width: "250px"}}>
                        {tables[0]}
                    </PrimaryButton>
          </Grid>
          <Grid sm={3} container item justifyContent="flex-end">
                    <PrimaryButton variant={selected === 1 ? 'contained' : 'outlined'} onClick={()=>setSelected(1)} style={{width: "250px"}} disabled>
                        {tables[1]}
                    </PrimaryButton>
          </Grid>
        </Grid>
      </Box>
      <Box mt={5}>
        <Grid container justifyContent="center">
          <Grid container item xs={12} md={4} xl={4} justifyContent="flex-start">
            <CarroTextField
              required
              value={search}
              onChange={(e)=>setSearch(e.target.value)}
              label={t('NameOrEmail')}
              variant="outlined"
              fullWidth
              InputProps={{endAdornment: <IconButton onClick={()=>setSearch(search.trim())}> <SearchIcon /></IconButton>}}
            />
          </Grid>
        </Grid>
        <Box mt={5}>
          {selected === 0 ? <StickyHeadTable users={users} searched={search} deleteUserClicked={(id)=>deleteUser(id)} userCardClicked={(id)=>adminGetUser(id, userData.token)}/> : null}
          {/* {selected === 1 ? <PackagesRidesTable searched={search}/> : null} */}
        </Box>
      </Box>
    </Container>
  );
};

const mapStateToProps = (state) => ({userData: state.userData, adminData: state.adminData})
const mapDispatchToProps = (dispatch) => ({adminGetUsers: (token) => dispatch(adminGetUsers(token)), adminGetUser: (id, token) => dispatch(adminGetUser(id, token))})

export default connect(mapStateToProps, mapDispatchToProps)(AdminPanel);
