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
    "& img": {
      display: "block",
      width: "20px",
      margin: "0px 0px 25px 0px",
      transition: "all 0.2s",
      cursor: "pointer",
      filter:
        "invert(74%) sepia(11%) saturate(585%) hue-rotate(188deg) brightness(95%) contrast(89%)",

      "&:hover": {
        transform: "translateY(-4px)",
        filter:
          "invert(95%) sepia(99%) saturate(590%) hue-rotate(83deg) brightness(102%) contrast(101%)",
      },
    },
  },
}));
