import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  button: {
    borderRadius: "4px",
    border: `solid 1px ${theme.palette.primary.main}`,
    padding: "12px 16px",
    outline: "none",
    backgroundColor: "transparent",

    color: theme.palette.primary.main,
    lineHeight: "1",
    fontFamily: "SFMono",
    fontSize: "13px",
    fontWeight: "300",
  },
}));
