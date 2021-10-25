import React from "react";
import {Grid, Box, Container, InputAdornment } from "@material-ui/core";
import DriverProfileCard from '../../components/cards/driverProfileCard/driverProfileCard';
import CommentCard from '../../components/cards/commentCard/commentCard';
import profileImageCommentary1 from '../../assets/images/photoprofile3.png';
import profileImageCommentary2 from '../../assets/images/photoprofile1.png';
import profilePhotoMiddle from '../../assets/images/photoprofile2.png';
import PaginationSBD from '../../components/pagination/pagination';
import CarroTextField from '../../components/textField/CarroTextField'
import SendSharpIcon from '@material-ui/icons/SendSharp';
import SeeProfileBtn from '../../components/buttons/textOnlyButtons/seeProfileBtn/seeProfileBtn';
import { useTranslation } from "react-i18next";

const CourierProfile = () =>{

  const comments = [
    {
      profileImage: profileImageCommentary1,
      name: 'Ioan Popescu',
      date: '22/10/2021',
      comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent scelerisque metus turpis, venenatis elementum ex luctus non. Donec massa augue, porta eget arcu lacinia, ornare elementum nunc.',
    },
    {
      profileImage: profileImageCommentary2,
      name: 'Ioan Popescu',
      date: '22/10/2021',
      comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent scelerisque metus turpis, venenatis elementum ex luctus non. Donec massa augue, porta eget arcu lacinia, ornare elementum nunc.',
    },
  ];

  const { t } = useTranslation();
  
  return(
    <Container className='Primary-container-style'>
      <Box mb={2} fontWeight={400} fontSize={21} textAlign={'center'}>{t("CourierProfile")}</Box>
      <Box m='2%' display='flex' flexDirection='column' justifyContent="center"  width='0.939' p={1} borderRadius='10px' boxShadow={3}>
        <DriverProfileCard
          image={profilePhotoMiddle}
          rate='4.0' 
          masina='Dacia'
          an='1900'
          culoare='negru'
          totalCurse='10'/>
      </Box>
      <Box mb={2} lassName={'Secondary-color'} fontWeight={"normal"} fontSize={20} textAlign='center'>{t("Comments")}</Box>
      <Grid container xs={12}>
        {comments.map((comment)=>{
            return <CommentCard name={comment.name} comment={comment.comment} date={comment.date} profileImage={comment.profileImage}/>
        })}
      </Grid>
        <PaginationSBD/>
        <Box mt={3} display='flex' justifyContent='center'  width='1' >
          <CarroTextField  
            label={t("LeaveAMessage")}
            InputProps={{
              endAdornment: 
                <InputAdornment position="end">
                  <SeeProfileBtn endIcon={<SendSharpIcon/>}/>
                </InputAdornment>}}
          />
        </Box>
    </Container>
  );
};

export default CourierProfile;