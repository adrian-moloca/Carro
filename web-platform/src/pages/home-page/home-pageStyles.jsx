import { makeStyles } from "@material-ui/core/styles";
import BgImage from "../../assets/images/bgimg.png";

const useStyles = makeStyles({

  BgColorBtn:{ 
    backgroundColor:'#fff',
    border: '1px solid #BDBDBD',
    boxShadow: '0px 4px 4px rgba(0, 180, 216, 0.44)',

    '&:hover':{
        fontWeight: '500',
      }
  },

  BgColorBtnBlue:{ background: "linear-gradient(180deg, #00B4D8 0%, #00C8ED 100%)" },

  BgImg: {
    backgroundImage: `url(${BgImage})`,
    height:'550px',
    weigth:'100%',
    backgroundSize: "cover",
  },

  FirstSection: {
    display:'flex',
    flexDirection: 'column',
    justifyContent:'center',
    maxWidth: "100%",
    margin: "0",
    padding: "0",
  },
});
export default useStyles;
