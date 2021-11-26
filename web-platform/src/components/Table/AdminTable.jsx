import React, { useEffect, useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from "@material-ui/core";
import DeleteModal from '../modals/deleteModal/DeleteModal';
import SwitchSBD from "../switch/SwitchSBD";

const columns = [
  { id: "numePrenume", label: "Nume si Prenume", minWidth: 170},
  { id: "email", label: "Email", minWidth: 100},
  { id: "contPremium", label: "Cont Premium", minWidth: 100 },
  { id: "validareCont", label: "Validare Cont", minWidth: 100 },
  { id: "actions", label: "Actiuni", minWidth: 100 },
];

const users = [
  {
    numePrenume: 'Marius Popescu',
    email: 'MariusPopescu1@gmail.com',
    contPremium: false,
    validareCont: false,
    actions: 'delete',
  },
  {
    numePrenume: 'Marius Popescu',
    email: 'MariusPopescu2@gmail.com',
    contPremium: true,
    validareCont: true,
    actions: 'delete',
  },
  {
    numePrenume: 'Marius Popescu',
    email: 'MariusPopescu3@gmail.com',
    contPremium: false,
    validareCont: false,
    actions: 'delete',
  },
  {
    numePrenume: 'Adrian Popescu',
    email: 'AdrianPopescu@gmail.com',
    contPremium: true,
    validareCont: true,
    actions: 'delete',
  },
]

function filterUsers(value, filter){

  if(value.numePrenume.toString().toLowerCase().includes(filter.toString().toLowerCase()) || 
    value.email.toString().toLowerCase().includes(filter.toString().toLowerCase()) || filter<=0)
  {
    return value;

  }
}

function getRow(numePrenume, email, contPremium, validareCont, actions){
  return(
    [
      <Box display='flex' justifyContent='center'>
          {numePrenume}
      </Box>,
      <Box display='flex' justifyContent='center'>
          {email}
      </Box>,
      <SwitchSBD contentOff="DORESTI SA DEZACTIVEZI STATUTUL DE PREMIUM PENTRU ACEST CONT?" btn1OffText="anuleaza" btn2OffText="dezactiveaza"
                contentOn="DORESTI SA ACTIVEZI STATUTUL DE PREMIUM PENTRU ACEST CONT?" btn1OnText="anuleaza" btn2OnText="activeaza" checked={contPremium}
      />,
      <SwitchSBD contentOff="DORESTI SA INVALIDEZI ACEST CONT?" btn1OffText="anuleaza" btn2OffText="invalideaza"
                contentOn="DORESTI SA VALIDEZI ACEST CONT?" btn1OnText="anuleaza" btn2OnText="valideaza" checked={validareCont}
      />,
      getActions(actions)
    ]
  );
}

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

export default function StickyHeadTable(props) {
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [rows, setRows] = useState(users)

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
                    fontSize: "18px",
                    fontWeight: "600",
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
                    {getRow(user.numePrenume, user.email, user.contPremium, user.validareCont, user.actions).map((el, index)=>{
                          return(
                            <TableCell key={index} align='center'>
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
