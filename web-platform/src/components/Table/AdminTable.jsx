import React, { useEffect, useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from "@material-ui/core";
import { DoneAll, PriorityHigh, AssignmentInd } from '@material-ui/icons';
import DeleteModal from '../modals/deleteModal/DeleteModal';
import { useTranslation } from 'react-i18next';
import IconButtonNoVerticalPadding from '../buttons/icon-button/icon-button-no-vertical-padding/icon-button-no-vertical-padding';


const users = [
  {
    id: '5526161351351',
    name: 'Marius Popescu',
    dataCreated: '',
    email: 'MariusPopescu1@gmail.com',
    isUserValidated: true,
    isAccountClosed: true,
    isCompany: true,
    isSubscriptionPaid: false,
  },
  {
    id: '5526161346452',
    name: 'Marius Popescu',
    dataCreated: '',
    email: 'MariusPopescu1@gmail.com',
    isUserValidated: false,
    isAccountClosed: false,
    isCompany: false,
    isSubscriptionPaid: true,
  },
  {
    id: '5546456551351',
    name: 'Marius Popescu',
    dataCreated: '',
    email: 'MariusPopescu1@gmail.com',
    isUserValidated: false,
    isAccountClosed: false,
    isCompany: false,
    isSubscriptionPaid: true,
  },
  {
    id: '5511211222114',
    name: 'Marius Popescu',
    dataCreated: '',
    email: 'MariusPopescu1@gmail.com',
    isUserValidated: false,
    isAccountClosed: false,
    isCompany: false,
    isSubscriptionPaid: true,
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

export default function StickyHeadTable(props) {
  
  const {t} = useTranslation()

  const columns = [
    { id: "name", label: t("Name"), minWidth: 100},
    { id: "dataCreated", label: t('DataCreated'), minWidth: 100},
    { id: "email", label: "Email", minWidth: 150},
    { id: "isUserValidated", label: t('ValidationStatus'), minWidth: 100 },
    { id: "isAccountClosed", label: t('AccountStatus'), minWidth: 100 },
    { id: "isCompany", label: t('isCompany'), minWidth: 130 },
    { id: "isSubscriptionPaid", label: t('SubscriptionStatus'), minWidth: 130 },
    { id: "actiuni", label: t('Actions'), minWidth: 70 },
  ];
  
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [rows, setRows] = useState(users)
  
  function filterUsers(value, filter){
    
    if(value.name.toString().toLowerCase().includes(filter.toString().toLowerCase()) || 
    value.email.toString().toLowerCase().includes(filter.toString().toLowerCase()) || filter<=0)
    {
      return value;
  
    }
  }
  
  function getRow(name, dataCreated, email, isUserValidated, isAccountClosed, isCompany, isSubscriptionPaid){
    return(
      [
        <Box display='flex' justifyContent='center'>
            {name}
        </Box>,
        <Box display='flex' justifyContent='center'>
            {dataCreated}
        </Box>,
        <Box display='flex' justifyContent='center'>
            {email}
        </Box>,
        isUserValidated ? (
            <Box display='flex' justifyContent='center'>
                {t('Validated')}
                <DoneAll style={{color:"green", marginLeft: "10px"}} size="small"/>
            </Box>
        ) : (
          <Box display='flex' justifyContent='center'>
              {t('NotValidated')}
              <PriorityHigh color='error' size="small"/>
          </Box>
        ),
        !isAccountClosed ? (
            <Box display='flex' justifyContent='center'>
                {t('Active')}
                <DoneAll style={{color:"green", marginLeft: "10px"}} size="small"/>
            </Box>
        ) : (
          <Box display='flex' justifyContent='center'>
              {t('Closed')}
              <PriorityHigh color='error' size="small"/>
          </Box>
        ),
        isCompany ? (
          <Box display='flex' justifyContent='center'>
              {t('Company')}
          </Box>
        ) : (
          <Box display='flex' justifyContent='center'>
              {t('NaturalPerson')}
          </Box>
        ),
        isSubscriptionPaid ? (
          <Box display='flex' justifyContent='center'>
              {t('Paid')}
              <DoneAll style={{color:"green", marginLeft: "10px"}} size="small"/>
          </Box>
        ) : (
          <Box display='flex' justifyContent='center'>
              {t('Unpaid')}
              <PriorityHigh color='error' size="small"/>
          </Box>
        ),
        <Box>
          <IconButtonNoVerticalPadding name='edit'>
              <AssignmentInd style={{color:"#00B4D8"}} size="small"/>
          </IconButtonNoVerticalPadding>
          <DeleteModal content={t('DeleteUser')} btn1Text={t('Back')} btn2Text={t('DeleteButton')} clickedBtn2={props.deleteUserClicked} size='small'/>
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
                    {getRow(user.name, user.dataCreated, user.email, user.isUserValidated, user.isAccountClosed, user.isCompany, user.isSubscriptionPaid).map((el, index)=>{
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
