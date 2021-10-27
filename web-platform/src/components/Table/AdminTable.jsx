import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from "@material-ui/core";
import DeleteModal from '../modals/deleteModal/DeleteModal';
import SwitchSBD from "../switch/SwitchSBD";

const columns = [
  { id: "numePrenume", label: "Nume si Prenume", minWidth: 170 },
  { id: "email", label: "Email", minWidth: 100 },
  { id: "contPremium", label: "Cont Premium", minWidth: 100 },
  { id: "validareCont", label: "Validare Cont", minWidth: 100 },
  { id: "actions", label: "Actiuni", minWidth: 100 },
];

const users = [
  {
    numePrenume: 'Marius Popescu',
    email: 'MariusPopescu@gmail.com',
    contPremium: false,
    validareCont: false,
    actions: 'delete',
  },
  {
    numePrenume: 'Marius Popescu',
    email: 'MariusPopescu@gmail.com',
    contPremium: true,
    validareCont: true,
    actions: 'delete',
  },
  {
    numePrenume: 'Marius Popescu',
    email: 'MariusPopescu@gmail.com',
    contPremium: false,
    validareCont: false,
    actions: 'delete',
  },
  {
    numePrenume: 'Marius Popescu',
    email: 'MariusPopescu@gmail.com',
    contPremium: true,
    validareCont: true,
    actions: 'delete',
  },

]

const rows = [

  createData(
    <Box display='flex' justifyContent='center'>
      'Nume si prenume'
    </Box>,
    <Box display='flex' justifyContent='center'>
      'Email'
    </Box>,
    <SwitchSBD 
      contentOff="DORESTI SA DEZACTIVEZI STATUTUL DE PREMIUM PENTRU ACEST CONT?" btn1OffText="anuleaza" btn2OffText="dezactiveaza"
      contentOn="DORESTI SA ACTIVEZI STATUTUL DE PREMIUM PENTRU ACEST CONT?" btn1OnText="anuleaza" btn2OnText="activeaza"
    />,
    <SwitchSBD 
      contentOff="DORESTI SA INVALIDEZI ACEST CONT?" btn1OffText="anuleaza" btn2OffText="invalideaza"
      contentOn="DORESTI SA VALIDEZI ACEST CONT?" btn1OnText="anuleaza" btn2OnText="valideaza" 
    />,
    <DeleteModal
      content="Doresti sa stergi utilizatorul?"
      btn1Text="Anuleaza"
      btn2Text="Sterge"
    />
  ),
];

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 650,
  },
});

export default function StickyHeadTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

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
              .map((row, index) => {
                return (
                  <TableRow key={index} hover role="checkbox" tabIndex={1} key={row.email}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align='center'>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
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
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
