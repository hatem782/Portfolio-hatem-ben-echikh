import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  home: {
    height: "300vh",
    width: "100%",
    backgroundColor: theme.palette.background.main,

    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",

    "& .main-part": {
      flexGrow: "1",
    },

    "& .left-part , .right-part": {
      minWidth: "176px",
      bottom: "0px",

      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      alignItems: "center",
    },
    "& .left-part": {
      padding: "0px 40px 0px 0px",
    },

    "& .right-part": {
      padding: "0px 0px 0px 40px",
    },
  },
}));
