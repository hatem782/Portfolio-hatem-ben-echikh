import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  navbar: {
    padding: "0px 50px",
    height: "100px",
    width: "100%",

    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    position: "fixed",
    top: "0px",
    zIndex: "100",
    transition: "all 0.2s",

    "& .logo": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      "& img": {
        height: "42px",
      },
    },
    "& .routes": {
      display: "flex",
      alignItems: "center",

      "& .sections": {
        margin: "0px 20px 0px 0px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        "& span , a": {
          fontFamily: "SFMono",
          fontSize: "13px",
          fontWeight: "400",
          lineHeight: "17px",
        },
        "& a": {
          textDecoration: "none",
          color: theme.palette.text.light,
          margin: "0px 15px",
          cursor: "pointer",
          "&:hover": {
            color: theme.palette.primary.main,
          },
        },
        "& span": {
          color: theme.palette.primary.main,
        },
      },
    },
  },
  shrink: {
    height: "70px",
    backgroundColor: "rgba(10, 25, 47, 0.85)",
    boxShadow: `0 10px 30px -10px rgba(2,12,27,0.7)`,
    backdropFilter: "blur(10px)",
  },
}));
