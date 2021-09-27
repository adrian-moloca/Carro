import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({

    AccordionBorderRadius: {borderRadius: "10px"},

    label: {fontSize: '16px',},

    AccordionDetailsFlex: {
      display: "flex",
      flexDirection: "column",
    },

    SocialMediaAlign: {
      display: "flex",
      justifyCcontent: "space-evenly",
      width: "100%",
      alignItems: "center",
      marginTop: "35px",
    },

    ButtonWidth: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center'
    },

    PrimaryButton:{
      display: 'flex',
      justifyContent: 'center',
      width: '100%',
      height: '42px',
      backgroundColor: '#00B4D8',
      margin: 'auto',
      marginTop: '20px',
      marginBottom: '20px',
      '&:hover': {
        backgroundColor: '#FFFFFF',
        color: '#00B4D8',
      },
      TextFieldOutline: {
        '&.Mui-focused fieldset': {borderColor: '#00B4D8'},
                                  CheckBoxStyle:{fontSize: '16px'},
      },
    },
});

export default useStyles;
