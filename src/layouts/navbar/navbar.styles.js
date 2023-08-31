import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  navbar: {
    padding: "0px 50px",
    height: "100px",
    width: "100%",
    backgroundColor: "#0b182f",

    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    position: "fixed",
    top: "0px",
    zIndex: "100",
    transition: "all 0.2s",

    [theme.breakpoints.down("xl")]: {
      height: "70px",
    },

    "& .logo": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      "& img": {
        height: "55px",

        [theme.breakpoints.down("xl")]: {
          height: "42px",
        },
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
          fontSize: "16px",
          fontWeight: "400",
          lineHeight: "17px",

          [theme.breakpoints.down("xl")]: {
            fontSize: "13px",
            lineHeight: "17px",
          },
        },
        "& a": {
          textDecoration: "none",
          color: theme.palette.text.light,
          margin: "0px 20px",
          cursor: "pointer",

          "&:hover": {
            color: theme.palette.primary.main,
          },

          [theme.breakpoints.down("xl")]: {
            margin: "0px 15px",
          },
        },
        "& span": {
          color: theme.palette.primary.main,
        },
      },
    },

    "& .button-custom": {
      padding: "13px 18px",
      fontSize: "15px",

      [theme.breakpoints.down("xl")]: {
        padding: "12px 16px",
        fontSize: "13px",
        fontWeight: "300",
      },
    },
  },
  shrink: {
    height: "100px",
    backgroundColor: "rgba(10, 25, 47, 0.85)",
    boxShadow: `0 10px 30px -10px rgba(2,12,27,0.7)`,
    backdropFilter: "blur(10px)",

    [theme.breakpoints.down("xl")]: {
      height: "70px",
    },
  },
}));
