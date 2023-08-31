import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  about: {
    padding: "50px 0px",
    width: "100%",
    "& .container": {
      width: "100%",
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",

      "& .description": {
        width: "65%",
        "& p": {
          color: theme.palette.text.dark,
          fontSize: "22px",
          lineHeight: "1.4",
          fontWeight: "300",

          [theme.breakpoints.down("xl")]: {
            fontSize: "20px",
          },
        },
        "& .skills": {
          width: "600px",
          fontWeight: "300",
          fontSize: "20px",
          lineHieght: "2",
          listStyleType: "none",
          padding: "0px",
          margin: "0px",

          display: "flex",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          flexWrap: "wrap",

          [theme.breakpoints.down("xl")]: {
            fontSize: "18px",
          },

          "& li": {
            width: "33%",
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
      "& .img-part": {
        width: "35%",
        padding: "0px 0px 0px 20px",
        "& .img-container": {
          width: "100%",
          aspectRatio: "1 / 1",
          position: "relative",

          "& .img": {
            boxShadow: "0 10px 30px -15px rgba(2,12,27,0.7)",
            width: "100%",
            height: "100%",
            backgroundSize: "cover",
            backgroundPosition: "50% 50%",
            backgroundRepeat: "no-repeat",
            borderRadius: "5px",
            position: "absolute",
            zIndex: "2",
          },
          "& .box-border": {
            height: "100%",
            width: "100%",
            border: `solid 2px ${theme.palette.primary.main}`,
            position: "absolute",
            top: "0",
            zIndex: "1",
            borderRadius: "5px",
            transform: "translate(20px, 20px)",
            transition: "all 0.2s",
          },

          "&:hover": {
            "& .box-border": {
              transform: "translate(15px, 15px)",
            },
          },
        },
      },
    },
  },
}));
