import { makeStyles } from "@material-ui/core/styles";
import BgImage from "../../assets/images/bgimg.png";
import BgImageMobile from "../../assets/images/bgimgmobile.png";

const useStyles = makeStyles({

  BgColorBtn:{ 
    backgroundColor:'#fff',
    border: '1px solid #BDBDBD',
    boxShadow: '0px 4px 4px rgba(0, 180, 216, 0.44)',
    fontSize: '22px',
    height:'120px',
    minWidth:'220px',
    borderRadius: '15px',
    '&:hover':{
        fontWeight: '500',
      },
    '@media(max-width: 500px)' : {
      height:'80px',
      fontSize: '18px',
    },
  },

  BgColorBtnBlue:{ background: "linear-gradient(180deg, #00B4D8 0%, #00C8ED 100%)" },

  HomeBtnsMobile:{
    '@media(max-width: 600px)' : {
          height:'450px'
      },
    '@media(max-width: 550px)' : {
        height:'400px'
    },
    '@media(max-width: 500px)' : {
      height:'350px'
    },
    '@media(max-width: 450px)' : {
      height:'300px'
    },
    '@media(max-width: 400px)' : {
      height:'250px'
    },
    '@media(max-width: 350px)' : {
      height:'300px'
    },
  },

  BgImg: {
    backgroundImage: `url(${BgImage})`,
    height:'560px',
    backgroundSize: "cover",
    backgroundPosition:'right',
    backgroundRepeat: 'no-repeat',
    '@media(min-width: 1680px)' : {
      backgroundSize: "contain",
      backgroundPosition:'center',
    },
    '@media(max-width: 600px)' : {
      backgroundImage: `url(${BgImageMobile})`,
      height:'600px',
    },
    '@media(max-width: 550px)' : {
      height:'550px',
    },
    '@media(max-width: 500px)' : {
      height:'500px',
    },
    '@media(max-width: 450px)' : {
      height:'450px',
    },
    '@media(max-width: 400px)' : {
      height:'400px',
    },
    '@media(max-width: 350px)' : {
      height:'350px',
    },
    '@media(max-width: 300px)' : {
      height:'300px',
    },
    width:'auto',
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
