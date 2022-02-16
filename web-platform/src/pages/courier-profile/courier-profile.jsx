import React, { Fragment, useState, useEffect } from "react";
import {Grid, Box, Container, InputAdornment } from "@material-ui/core";
import DriverProfileCard from '../../components/cards/driverProfileCard/driverProfileCard';
import CommentCard from '../../components/cards/commentCard/commentCard';
import { Pagination } from "@material-ui/lab";
import { Rating } from "@material-ui/lab";
import CarroTextField from '../../components/textField/CarroTextField'
import SendSharpIcon from '@material-ui/icons/SendSharp';
import SeeProfileBtn from '../../components/buttons/textOnlyButtons/seeProfileBtn/seeProfileBtn';
import usePagination from "../../components/pagination/use-pagination/use-pagination";
import { useTranslation } from "react-i18next";
import { connect } from "react-redux";
import axios from "axios";
import data from '../../utils/constants';
import { resetCourierDataChanged } from "../../redux/types/CourierTypes";

const CourierProfile = ({courierData, userData, resetCourierDataChanged}) =>{

  const { t } = useTranslation();

  const [name, setName] = useState('')
  const [rate, setRate] = useState(0)
  const [rides, setRides] = useState(0)
  const [profileImage, setProfileImage]= useState('')
  const [carNumber, setCarNumber] = useState('')
  const [carBrand, setCarBrand] =useState('')
  const [carModel, setCarModel] = useState('')
  const [carColor, setCarColor] = useState('')
  const [courierId, setCourierId] = useState('')
  const [comments, setComments] =useState([]);
  const commentsPagination = usePagination(comments, 10)
  const [myComment, setMyComment] = useState('')
  const [myRate, setMyRate] =useState(0)

  const [hasErrorsGettingReviews, setHasErrorsGettingReviews] = useState(false)
  const [page, setPage] = useState(1); 
  const handleChange = (event, value) => {setPage(value); commentsPagination.jump(value)};

  useEffect(() => {
    courierData.courier.name && courierData.courier.name.length > 0 ? setName(courierData.courier.name) : setName('')
    courierData.courier.rate && courierData.courier.rate > 0 ? setRate(courierData.courier.rate) : setRate(0)
    courierData.courier.rides && courierData.courier.rides > 0 ? setRides(courierData.courier.rides) : setRides(0)
    courierData.courier.profileImage && courierData.courier.profileImage.length > 0 ? setProfileImage("data:image/png;base64," + courierData.courier.profileImage) : setProfileImage('')
    courierData.courier.userId && courierData.courier.userId.length > 0 ? setCourierId(courierData.courier.userId) : setCourierId('')
    courierData.courier.car && courierData.courier.car.registrationNumber && courierData.courier.car.registrationNumber.length > 0 ? setCarNumber(courierData.courier.car.registrationNumber) : setCarNumber('')
    courierData.courier.car && courierData.courier.car.brand && courierData.courier.car.brand.length > 0 ? setCarBrand(courierData.courier.car.brand) : setCarBrand('')
    courierData.courier.car && courierData.courier.car.color && courierData.courier.car.color.length > 0 ? setCarColor(courierData.courier.car.color) : setCarColor('')
    courierData.courier.car && courierData.courier.car.model && courierData.courier.car.model.length > 0 ? setCarModel(courierData.courier.car.model) : setCarModel('')
  }, [courierData])

  async function getComments (){
    axios.get(data.baseUrl + '/reviews/' + courierId + "/comments", {
            headers:{
                Authorization: 'Bearer ' + userData.token,
            }
    }).then((response)=>console.log(response.data.data)).catch((error)=>{setHasErrorsGettingReviews(true); setComments([])})
  }

  useEffect(()=>{
    resetCourierDataChanged()
  }, [])

  async function sendComment (){
      axios.post(data.baseUrl + '/reviews/' + courierId + '/comments', {
            comment: myComment,
            rate: parseInt(myRate)
      }, {
        headers:{
            Authorization: 'Bearer ' + userData.token,
        }
      }).then((response)=>{getComments(response.data.data); setMyRate(0); setMyComment('')}).catch(error=>setHasErrorsGettingReviews(true))
  }

  useEffect(()=>{
    courierId && courierId.length>0 ? getComments() : setComments([])
  },[courierId])

  useEffect(()=>{
    setHasErrorsGettingReviews(false)
  },[comments])
  
  return(
    <Container className='Primary-container-style'>
      <Box mb={2} fontWeight={400} fontSize={21} textAlign={'center'}>{t("CourierProfile")}</Box>
      <Box m='2%' display='flex' flexDirection='column' justifyContent="center"  width='0.939' p={1} borderRadius='10px' boxShadow={3}>
        <DriverProfileCard
          image={profileImage}
          name={name.replace(",", "")}
          rate={rate} 
          masina={carBrand}
          model={carModel}
          color={carColor}
          carNumber ={carNumber}
          totalCurse={rides}
          courierId={courierId}/>
      </Box>
      <Box mb={2} className={'Secondary-color'} fontWeight={"normal"} fontSize={20} textAlign='center'>{t("Comments")}</Box>
      { hasErrorsGettingReviews ? (
                <Box mb={2} className={'Secondary-color'} fontWeight={"normal"} fontSize={20} textAlign='center'>
                  {t('ErrorLoadingComments')}
                </Box>
      ) : (commentsPagination.currentData().length > 0 ? (
                <Grid container >
                  {commentsPagination.currentData().map((comment, index)=>{
                      return <CommentCard key={index} name={comment.name} comment={comment.comment} date={comment.date} profileImage={"data:image/png;base64,"+comment.profileImage}/>
                  })}
                </Grid>
      ):(
                <Box mb={2} className={'Secondary-color'} fontWeight={"normal"} fontSize={20} textAlign='center'>
                  {t('NoComments')}
                </Box>
      ))}
        <Box width='1' mt='5%' display='flex' justifyContent='center'>
              <Pagination 
                count={comments.maxPage} 
                variant="outlined" 
                shape="rounded" 
                page={page} 
                onChange={handleChange}
                size='medium'

              />
            </Box>
        <Box mt={3} display='flex' justifyContent='center' paddingX={35}>
          <CarroTextField  
            disabled={courierId===userData.id ? true : false}
            value={myComment}
            onChange={(e)=>setMyComment(e.target.value)}
            label={t("LeaveAMessage")}
            InputProps={{
              endAdornment: 
                <InputAdornment position="end">
                  <Fragment>
                    <Rating disabled={courierId===userData.id ? true : false} name={"ratingInComment"} precision={1} value={myRate} onChange={(e)=> setMyRate(parseInt(e.target.value))}/>
                    <SeeProfileBtn disabled={courierId===userData.id ? true : false} onClick={()=>{sendComment()}}>
                      <SendSharpIcon/>
                    </SeeProfileBtn>
                  </Fragment>
                </InputAdornment>}}
            fullWidth
          />
        </Box>
    </Container>
  );
};

const mapStateToProps = (state) =>({courierData: state.courierData, userData: state.userData})
const mapDispatchToProps = (dispatch) => ({resetCourierDataChanged: ()=> dispatch(resetCourierDataChanged())})
export default connect(mapStateToProps, mapDispatchToProps)(CourierProfile);