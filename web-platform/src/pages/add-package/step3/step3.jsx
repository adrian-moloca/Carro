import React, {Fragment, useState} from "react";
import { Box, Grid} from "@material-ui/core";
import Package from './package';
import PrimaryButton from "../../../components/buttons/primaryButton/primaryButton";
import SecondaryButton from "../../../components/buttons/secondaryButton/secondaryButton";
import { useTranslation } from 'react-i18next';

const StepThree = (props) =>{
    const { t } = useTranslation();
    /* const[packages, setPackages] = useState([1,]); */
    /* const[numberOfPackages, setNumberOfPackages] = useState(1);

    const increaseNumberOfpackages = () =>{
        const prevNumber = numberOfPackages;
        setNumberOfPackages(prevNumber+1);
        const temp = packages; 
        temp.push(prevNumber+1);
        setPackages(temp);
    }

    const deletePackage = (index) =>{
        const temp = packages.map((pack, i)=> {
            if(i>index)
                return pack-1;
            else
                return pack
        });
        temp.splice(index, 1);
        setNumberOfPackages(temp.length);
        setPackages(temp);
    } */


    return(
        <Box display='flex' flexDirection='column' justifyContent='center'>
          {/* {numberOfPackages===packages.length ?(
              packages.map((pack, index)=>
                  <Box key={index} mt='5%' display='flex' flexDirection ='column' alignItems='center' fontSize={18} fontWeight={400}>
                      {pack !==1 ? ( 
                      <Box display='inline-flex' flexDirection='row' justifyContent='space-between' mb={3} width='80%'>
                            {t('AdditionalPackage')}
                          <Box display='flex' width='15%' justifyContent='flex-end'>
                              <SecondaryButton onClick={()=>deletePackage(index)} size='small' variant='outlined' fullWidth>{t('DeleteButton')}</SecondaryButton>
                            </Box>
                      </Box> ) : ''} */}  
                      <Package packageSize={props.packageSize} weight={props.weight} width={props.width} height={props.height} length={props.length} currency={props.currency}
                               smallDescription={props.smallDescription} description={props.description} price={props.price} 
                               flammable={props.isFlammable} foodGrade={props.isFoodGrade} fragile={props.isFragile}handleWithCare={props.isHandleWithCare} animal={props.isAnimal}
                               setPackageSize={props.setPackageSize} setWeight={props.setWeight} setWidth={props.setWidth} setHeight={props.setHeight} setLength={props.setLength}
                               setCurrency={props.setCurrency} setSmallDescription={props.setSmallDescription} setDescription={props.setDescription}setPrice={props.setPrice}
                               setFlammable={props.setIsFlammable} setFoodGrade={props.setIsFoodGrade} setFragile={props.setIsFragile} setHandleWithCare={props.setIsHandleWithCare}
                               setAnimal={props.setIsAnimal} setHasErrors={props.setHasErrors}/>
                  {/* </Box>
                  )) : '' }
          {<Grid container justifyContent='flex-end'>
               <Box mt={3}>
                   <PrimaryButton size='small' variant='outlined' onClick={increaseNumberOfpackages}>{t('AddPackageButton')}</PrimaryButton>
                </Box>
          </Grid>} */}
      </Box>
    );
};

export default StepThree;