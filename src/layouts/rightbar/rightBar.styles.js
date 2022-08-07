import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  main: {
    position: "fixed",
    bottom: "0px",

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",

    "& .vertical-line": {
      display: "block",
      width: "1px",
      height: "90px",
      backgroundColor: theme.palette.text.dark,
      margin: "10px 0px 0px 0px",
    },
    "& p": {
      color: theme.palette.text.dark,
      padding: "10px",
      margin: "20px auto",

      fontFamily: "SFMono",
      fontSize: "14px",
      fontWeight: "400",
      lineHeight: "18px",
      letterSpacing: "1px",

      writingMode: "vertical-rl",
      transition: "all 0.2s",
      cursor: "pointer",

      "&:hover": {
        color: theme.palette.primary.main,
        transform: "translateY(-4px)",
      },
    },
  },
}));
