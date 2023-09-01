import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  main: {
    padding: "100px 0px",
    width: "80%",
    margin: "auto",

    [theme.breakpoints.down("xl")]: {
      padding: "75px 0px",
      width: "90%",
    },

    "& .container": {
      width: "100%",
      display: "flex",
      margin: "80px 0px 0px 0px",

      [theme.breakpoints.down("xl")]: {
        margin: "60px 0px 0px 0px",
      },
    },

    "& .left": {
      width: "20%",
      height: "fit-content",
      borderLeft: "2px solid #233554",

      "& span": {
        display: "block",
        color: theme.palette.text.main,
        fontWeight: "300",
        padding: "20px",
        fontSize: "20px",
        position: "relative",
        cursor: "pointer",
        transition: "all 0.2s",
        width: "80%",

        [theme.breakpoints.down("xl")]: {
          padding: "18px",
          fontSize: "18px",
        },

        "&:hover": {
          backgroundColor: theme.palette.background.light,
          color: theme.palette.primary.main,
        },
      },
      "& .active": {
        color: theme.palette.primary.main,
        fontWeight: "300",
        display: "flex",
        alignItems: "center",
        backgroundColor: theme.palette.background.light,

        // borderLeft: `2px solid ${theme.palette.primary.main}`,

        "& figure": {
          height: "100%",
          width: "5px",
          backgroundColor: theme.palette.primary.main,
          position: "absolute",
          left: "-43px",
        },
      },
    },

    "& .right": {
      width: "80%",
      opacity: "0",
      animation: "FadeOut 0.2s linear 0s forwards",

      "& h1": {
        fontWeight: "400",
        fontSize: "30px",
        color: theme.palette.text.light,
        margin: "10px 0px",

        [theme.breakpoints.down("xl")]: {
          fontSize: "24px",
          margin: "0px 0px",
        },

        "& span": {
          color: theme.palette.primary.main,
        },
      },

      "& p": {
        fontWeight: "300",
        fontSize: "18px",
        color: theme.palette.text.main,
        margin: "0px 0px 20px 0px",
        fontFamily: "SFMono",

        [theme.breakpoints.down("xl")]: {
          fontSize: "16px",
        },
      },

      "& .descrip": {
        fontWeight: "300",
        fontSize: "24px",
        lineHieght: "2",
        listStyleType: "none",
        padding: "0px",

        [theme.breakpoints.down("xl")]: {
          fontSize: "20px",
        },

        "& li": {
          margin: "20px 0px",
          color: theme.palette.text.dark,
          "& .point": {
            color: theme.palette.primary.main,
            fontSize: "20px",

            [theme.breakpoints.down("xl")]: {
              fontSize: "14px",
            },
          },
        },
      },
    },
  },
}));
