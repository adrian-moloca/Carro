import React, { useEffect, useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from "@material-ui/core";
import { Description } from '@material-ui/icons';
import DeleteModal from '../../../components/modals/deleteModal/DeleteModal';
import { useTranslation } from 'react-i18next';
import IconButtonNoVerticalPadding from '../../../components/buttons/icon-button/icon-button-no-vertical-padding/icon-button-no-vertical-padding';

const users = [
    {
        id: '5526161351351',
        name: 'Marius Popescu',
        email: 'MariusPopescu1@gmail.com',
        ridesDetails: {},
        packagesDetails: {}
    },
    {
        id: '5526161346452',
        name: 'Marius Popescu',
        email: 'MariusPopescu1@gmail.com',
        ridesDetails: {},
        packagesDetails: {}
    },
    {
        id: '5546456551351',
        name: 'Marius Popescu',
        email: 'MariusPopescu1@gmail.com',
        ridesDetails: {},
        packagesDetails: {}
    },
    {
        id: '5511211222114',
        name: 'Marius Popescu',
        email: 'MariusPopescu1@gmail.com',
        ridesDetails: {},
        packagesDetails: {}
    },
]


function getActions(actions){
    
    switch(actions){
        case 'delete':
            return(
                <DeleteModal
                content="Doresti sa stergi utilizatorul?"
                btn1Text="Anuleaza"
                btn2Text="Sterge"
                />
                );
                default:
                    return 'err';
    }
    
}

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
    const {t} = useTranslation()
    
    const columns = [
      { id: "name", label: t('Name'), minWidth: 100},
      { id: "email", label: "Email", minWidth: 200},
      { id: "RidesDetails", label: t('RidesDetails'), minWidth: 100 },
      { id: "PackagesDetails", label: t('PackagesDetails'), minWidth: 100 },
      { id: "actiuni", label: t('Actions'), minWidth: 100 },
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
        setRows(users.filter((value)=>filterUsers(value, props.searched)))
    }, [props.searched])
    
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    
    return (
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
                      <TableRow hover role="checkbox" tabIndex={1} key={user.email}>
                    {getRow(user.name, user.email).map((el, index)=>{
                          return(
                            <TableCell key={user.id} align='center'>
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
  );
}
