import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  navbar: {
    padding: "0px 50px",
    height: "100px",
    width: "100%",

    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    "& .logo": {
      "& img": {
        height: "42px",
      },
    },
  },
}));
