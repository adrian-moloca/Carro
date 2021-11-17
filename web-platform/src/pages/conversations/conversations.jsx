import React, {useState, Fragment} from "react";
import { Box, Grid, Container} from "@material-ui/core";
import ChatConversationCard from '../../components/cards/chatConversationCard/chatConversationCard';
import {Pagination} from '@material-ui/lab';
import CarroTextField from '../../components/textField/CarroTextField';
import profileImg from '../../assets/images/photoprofile1.png';
import usePagination from "../../components/pagination/use-pagination/use-pagination";
// import SearchIcon from '@material-ui/icons/Search';
// import useStyles from './conversationsStyle';


const Conversations = () =>{
  
  const chats=[
    {
      profileImg: profileImg,
      name: 'Marius Popescu',
      lastMessage: 'Lorem Ipsium dolor sit amet.',
      date: '15/10/2021 16:35',
    },
    {
      profileImg: profileImg,
      name: 'Grigore Iancu',
      lastMessage: 'Lorem Ipsium dolor sit amet.',
      date: '16/10/2021 18:30',
    },
    {
      profileImg: profileImg,
      name: 'Marius Popescu',
      lastMessage: 'Lorem Ipsium dolor sit amet.',
      date: '15/10/2021 16:35',
    },
    {
      profileImg: profileImg,
      name: 'Grigore Iancu',
      lastMessage: 'Lorem Ipsium dolor sit amet.',
      date: '16/10/2021 18:30',
    },
    {
      profileImg: profileImg,
      name: 'Marius Popescu',
      lastMessage: 'Lorem Ipsium dolor sit amet.',
      date: '15/10/2021 16:35',
    },
    {
      profileImg: profileImg,
      name: 'Grigore Iancu',
      lastMessage: 'Lorem Ipsium dolor sit amet.',
      date: '16/10/2021 18:30',
    },
    {
      profileImg: profileImg,
      name: 'Marius Popescu',
      lastMessage: 'Lorem Ipsium dolor sit amet.',
      date: '15/10/2021 16:35',
    },
    {
      profileImg: profileImg,
      name: 'Grigore Iancu',
      lastMessage: 'Lorem Ipsium dolor sit amet.',
      date: '16/10/2021 18:30',
    },
  ]

  const[chatsState, setChatsState] = useState(chats);
  const conversations = usePagination(chatsState, 3)
  
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {setPage(value); conversations.jump(value)};
  // const classes = useStyles();

  const deleteChat=(index)=>{
    const temp = [...chatsState];
    temp.splice(index, 1);
    setChatsState(temp);
  }

  return(
    <Container className='Primary-container-style'>
      <Grid container justifyContent='center'>
        <Grid container item xs={12} justifyContent='center'>
          <Box mb={2} fontWeight={400} fontSize={21} textAlign={'center'}>Chat</Box>
        </Grid>
        <Grid container item xs={8} >
          <CarroTextField variant="outlined" label="Cauta o conversatie" fullWidth/>
        </Grid>
        {conversations.currentData().map((chat, index)=>
              <Grid container item xs={8} justifyContent='center'>
                  <ChatConversationCard profileImage={chat.profileImg} name={chat.name} message={chat.lastMessage} date={chat.date} deleteConversation={()=>deleteChat(index)}/>
              </Grid>
        )}
        <Grid container item xs={8}>
          <Box width='1' mt='5%' display='flex' justifyContent='center'>
            <Pagination 
              count={conversations.maxPage} 
              variant="outlined" 
              shape="rounded" 
              page={page} 
              onChange={handleChange}
              size='medium'

            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Conversations;