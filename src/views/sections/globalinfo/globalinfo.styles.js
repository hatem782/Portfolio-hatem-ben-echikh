import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  main: {
    "& .mynameis": {
      color: theme.palette.primary.main,
      fontFamily: "SFMono",
      fontWeight: "400",
      lineHeight: "1.1",
      fontSize: "16px",
      marginBottom: "30px",
    },
    "& h1": {
      fontSize: "80px",
      fontWeight: "500",
      lineHeight: "1.1",
      margin: "0px",
    },
    "& .name": {
      color: theme.palette.text.light,
    },
    "& .role": {
      color: theme.palette.text.dark,
    },
    "& .description": {
      maxWidth: "540px",
      fontWeight: "300",
      fontSize: "20px",
      lineHeight: "1.4",
      color: theme.palette.text.dark,
      textShadow: "0px 0px 1px #8892b0",
      "& .important": {
        color: theme.palette.primary.main,
      },
    },
    "& .button-custom": {
      padding: "20px 28px",
      fontSize: "14px",
      marginTop: "30px",
    },
  },
}));
