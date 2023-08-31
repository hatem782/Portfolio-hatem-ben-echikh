import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  main: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",

    "& .number": {
      color: theme.palette.primary.main,
      fontFamily: "SFMono",
      fontSize: "22px",

      [theme.breakpoints.down("xl")]: {
        fontSize: "20px",
      },
    },
    "& .title": {
      color: theme.palette.text.light,
      fontSize: "32px",
      fontWeight: "500",
      margin: "0px 10px",

      [theme.breakpoints.down("xl")]: {
        fontSize: "30px",
      },
    },
    "& .line": {
      height: "1px",
      width: "300px",
      backgroundColor: "#233554",
      transform: "translateY(-3px)",
    },
  },
}));
