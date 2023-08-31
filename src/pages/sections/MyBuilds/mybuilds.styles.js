import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  main: {
    padding: "100px 0px",
    width: "80%",
    margin: "auto",

    "& .works": {
      width: "100%",
      padding: "50px 0px",
    },
  },

  card: {
    width: "100%",
    height: "450px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    position: "relative",
    margin: "100px 0px",

    "& .left": {
      width: "60%",
      height: "100%",
      cursor: "pointer",
      position: "relative",
      borderRadius: "6px",
      overflow: "hidden",

      "& img": {
        width: "100%",
        height: "100%",
        objectFit: "cover",
      },

      "& .filter": {
        position: "absolute",
        height: "100%",
        width: "100%",
        backgroundColor: "#388c78",
        transition: "all 0.2s",
        opacity: "0.2",
        top: "0px",

        "&:hover": {
          backgroundColor: "transparent",
        },
      },
    },

    "& .right": {
      width: "50%",
      height: "fit-content",
      position: "absolute",
      right: "0px",

      "& h1": {
        textAlign: "right",
        color: theme.palette.text.light,
        fontWeight: "500",
        fontSize: "36px",
        margin: "0px 0px",
        letterSpacing: "0px",
        position: "absolute",
        right: "0px",
        top: "-35px",
      },

      "& h2": {
        textAlign: "right",
        color: theme.palette.primary.main,
        fontWeight: "300",
        fontSize: "22px",
        margin: "10px 0px",
        letterSpacing: "2px",
        position: "absolute",
        right: "0px",
        top: "-75px",
      },

      "& p": {
        textAlign: "right",
        margin: "20px 0px",
        padding: "20px",
        color: theme.palette.text.light,
        fontSize: "22px",
        width: "100%",
        fontWeight: "300",
        backgroundColor: "#102241",
        borderRadius: "6px",
        lineHeight: "1.5",

        "& span": {
          color: theme.palette.primary.main,
          fontWeight: "400",
        },
      },

      "& .techs": {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        position: "absolute",
        right: "0px",
        bottom: "-30px",

        "& span": {
          color: theme.palette.text.light,
          fontSize: "18px",
          fontWeight: "300",
          display: "block",
          margin: "0px 0px 0px 20px",
          userSelect: "none",

          "&:hover": {
            color: theme.palette.primary.main,
          },
        },
      },

      "& .icons": {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        position: "absolute",
        right: "0px",
        bottom: "-80px",

        "& img": {
          display: "block",
          margin: "0px 0px 0px 20px",
        },

        "& .git": {
          height: "26px",
        },

        "& .ext": {
          height: "28px",
        },
      },
    },
  },

  rtl: {
    flexDirection: "row-reverse",

    "& .right": {
      left: "0px",

      "& h1": {
        textAlign: "left",
        left: "0px",
      },

      "& h2": {
        textAlign: "left",
        left: "0px",
      },

      "& p": {
        textAlign: "left",
      },

      "& .techs": {
        justifyContent: "flex-start",
        left: "0px",

        "& span": {
          margin: "0px 20px 0px 0px",
        },
      },

      "& .icons": {
        justifyContent: "flex-start",
        left: "0px",

        "& img": {
          margin: "0px 20px 0px 0px",
        },
      },
    },
  },
}));
