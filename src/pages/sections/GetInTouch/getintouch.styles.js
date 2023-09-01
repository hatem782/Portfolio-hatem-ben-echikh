import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  main: {
    padding: "0px 0px 0px 0px",
    height: "100vh",
    width: "100%",
    margin: "auto",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",

    "& .number": {
      textAlign: "center",
      color: theme.palette.primary.main,
      fontWeight: "300",
      fontSize: "20px",
      margin: "0px 0px",
      width: "fit-content",
      fontFamily: "SFMono",
      display: "block",
    },

    "& .big-title": {
      textAlign: "center",
      color: theme.palette.text.light,
      fontWeight: "500",
      fontSize: "80px",
      margin: "20px 0px 0px 0px",
      letterSpacing: "0px",
    },

    "& .desc": {
      textAlign: "center",
      color: theme.palette.text.dark,
      fontWeight: "300",
      fontSize: "28px",
      margin: "20px 0px 0px 0px",
      width: "50%",
    },

    "& .btn-more": {
      width: "fit-content",
      margin: "40px 0px 0px 0px",

      "& .button-custom": {
        fontSize: "20px",
        padding: "26px 52px",
      },
    },
  },
}));
