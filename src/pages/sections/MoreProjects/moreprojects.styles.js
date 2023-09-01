import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  main: {
    padding: "0px 0px 100px 0px",
    width: "81%",
    margin: "auto",

    "& .big-title": {
      textAlign: "center",
      color: theme.palette.text.light,
      fontWeight: "500",
      fontSize: "40px",
      margin: "0px 0px 10px 0px",
      letterSpacing: "0px",
    },

    "& .big-link": {
      textAlign: "center",
      color: theme.palette.primary.main,
      fontWeight: "300",
      fontSize: "18px",
      margin: "0px 0px",
      cursor: "pointer",
      position: "relative",
      width: "fit-content",
      margin: "auto",
      fontFamily: "SFMono",
      display: "block",
      textDecoration: "none",

      "&::after": {
        content: "''",
        width: "0%",
        height: "1px",
        backgroundColor: theme.palette.primary.main,
        display: "block",
        position: "absolute",
        left: "0px",
        bottom: "-2px",
        transition: "all 0.2s",
      },

      "&:hover": {
        "&::after": {
          width: "100%",
        },
      },
    },

    "& .works": {
      display: "flex",
      alignItems: "justify",
      justifyContent: "center",
      width: "100%",
      flexWrap: "wrap",
      margin: "50px 0px",
    },

    "& .btn-more": {
      width: "fit-content",
      margin: "50px auto",

      "& .button-custom": {
        fontSize: "16px",
        padding: "20px 30px",
      },
    },
  },

  card: {
    width: "31.9%",
    backgroundColor: "#112341",
    margin: "0.7%",
    borderRadius: "6px",
    transition: "all 0.3s",
    boxShadow: "0 10px 30px -15px rgba(2,12,27,0.7)",
    padding: "4% 3%",

    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    flexDirection: "column",

    "& .header-body": {
      width: "100%",

      "& .header": {
        width: "100%",
        margin: "0px 0px 35px 0px",

        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",

        "& .folder-icon": {
          height: "50px",
        },

        "& .links": {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",

          "& .git-icon": {
            height: "24px",
            margin: "0px 10px 0px 0px",
            cursor: "pointer",
          },

          "& .lnk-icon": {
            height: "26px",
            cursor: "pointer",
          },
        },
      },

      "& .body": {
        width: "100%",
        height: "fit-content",
        margin: "0px 0px 35px 0px",

        "& .title": {
          fontSize: "28px",
          margin: "0px",
          lineHeight: "1.1",
          fontWeight: "500",
          color: theme.palette.text.light,
          transition: "all 0.2s",
        },

        "& .desc": {
          color: theme.palette.text.main,
          fontSize: "22px",
          fontWeight: "300",

          "& span": {
            color: theme.palette.primary.main,
            fontWeight: "300",
          },
        },
      },
    },

    "& .footer": {
      width: "100%",

      display: "flex",
      flexWrap: "wrap",
      width: "100%",

      "& span": {
        color: theme.palette.text.dark,
        fontFamily: "SFMono",
        fontSize: "16px",
        fontWeight: "300",
        display: "block",
        margin: "0px 15px 0px 0px",
        userSelect: "none",

        "&:hover": {
          color: theme.palette.primary.main,
        },
      },
    },

    "&:hover": {
      transform: "translateY(-7px)",

      "& .body": {
        "& .title": {
          color: `${theme.palette.primary.main} !important`,
        },
      },
    },
  },
}));
