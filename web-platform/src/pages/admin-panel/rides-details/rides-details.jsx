import React, { useEffect, useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, IconButton, TableRow } from "@material-ui/core";
import { Description, Search } from '@material-ui/icons';
import CarroTextField from '../../../components/textField/CarroTextField';
import PrimaryButton from '../../../components/buttons/primaryButton/primaryButton';
import DeleteModal from '../../../components/modals/deleteModal/DeleteModal';
import { useTranslation } from 'react-i18next';
import IconButtonNoVerticalPadding from '../../../components/buttons/icon-button/icon-button-no-vertical-padding/icon-button-no-vertical-padding';

const users = [
    {
        id: '111',
        name: 'Marius Popescu',
        email: 'MariusPopescu1@gmail.com',
        ridesDetails: {},
        packagesDetails: {}
    },
    {
        id: '222',
        name: 'Marius Popescu',
        email: 'MariusPopescu1@gmail.com',
        ridesDetails: {},
        packagesDetails: {}
    },
    {
        id: '333',
        name: 'Marius Popescu',
        email: 'MariusPopescu1@gmail.com',
        ridesDetails: {},
        packagesDetails: {}
    },
    {
        id: '444',
        name: 'Marius Popescu',
        email: 'MariusPopescu1@gmail.com',
        ridesDetails: {},
        packagesDetails: {}
    },
]

const useStyles = makeStyles({
    root: {
        width: "100%",
    },
    container: {
        maxHeight: 650,
    },
});

export default function RidesDetails(props) {
    const classes = useStyles();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [rows, setRows] = useState(users)
    const [search, setSearch] = useState('');
    const {t} = useTranslation()
    
    const columns = [
      { id: "name21", label: t('Name'), minWidth: 100},
      { id: "email21", label: "Email", minWidth: 200},
      { id: "RidesDetails21", label: t('RidesDetails'), minWidth: 100 },
      { id: "PackagesDetails21", label: t('PackagesDetails'), minWidth: 100 },
      { id: "actiuni21", label: t('Actions'), minWidth: 100 },
    ];
    
    function filterUsers(value, filter){
        
        if(value.name.toString().toLowerCase().includes(filter.toString().toLowerCase()) || 
        value.email.toString().toLowerCase().includes(filter.toString().toLowerCase()) || filter<=0)
        {
            return value;
            
        }
    }
    
    function getRow(name, email){
        return(
            [
                <Box display='flex' justifyContent='center'>
            {name}
        </Box>,
        <Box display='flex' justifyContent='center'>
            {email}
        </Box>,
        <IconButtonNoVerticalPadding>
            <Description style={{color:"#00B4D8"}} size="small"/>
        </IconButtonNoVerticalPadding>,
        <IconButtonNoVerticalPadding>
            <Description style={{color:"#00B4D8"}} size="small"/>
        </IconButtonNoVerticalPadding>,
        <Box>
          <DeleteModal content={t('DeleteUser')} btn1Text={t('Back')} btn2Text={t('DeleteButton')} clickedBtn2={props.deleteUserClicked} size='small' />
        </Box>
      ]
      );
    }
    
    useEffect(()=>{
        setRows(users.filter((value)=>filterUsers(value, search)))
    }, [search])
    
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

  return (
    <Container className="Primary-container-style">
      <Box mb={2} fontWeight={400} fontSize={25} textAlign={"center"}>
        {t('RidesDetails')}
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
              InputProps={{endAdornment: <IconButton onClick={()=>setSearch(search.trim())}> <Search /></IconButton>}}
            />
          </Grid>
        </Grid>
        <Box mt={5}></Box>
          <Paper className={classes.root}>
            <TableContainer className={classes.container}>
                <Table aria-label="sticky table">
                  <TableHead key={11}>
                    <TableRow>
                      {columns.map((column) => (
                          <TableCell
                          key={column.id}
                          align='center'
                          style={{
                              minWidth: column.minWidth,
                              fontSize: "15px",
                              fontWeight: "500",
                            }}
                            >
                          {column.label}
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody key={12}>
                    {rows
                      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                      .map((user, index) => {
                          return (
                              <TableRow hover role="checkbox" tabIndex={1} key={user.email+index*2211}>
                            {getRow(user.name, user.email).map((el, index)=>{
                                  return(
                                    <TableCell key={user.id*index*2211} align='center'>
                                        {el}
                                    </TableCell> 
                                  );
                            })}
                          </TableRow>
                        );
                      })}
                  </TableBody>
                </Table>
              </TableContainer>
              <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={users.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </Paper>
        </Box>
    </Container>
  );
}
