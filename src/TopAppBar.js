import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircleRoundedIcon from "@material-ui/icons/AccountCircleRounded";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appbar: {
    top: theme.spacing(8),
    width: "calc(36.4%)",
    left: "calc(31.8%)",
  },
  title: {
    flexGrow: 1,
  },
}));

export default function TopAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar} position="fixed">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Hyundai
          </Typography>
          <IconButton color="inherit" edge="end">
            <SearchRoundedIcon />
          </IconButton>
          <IconButton color="inherit" edge="end">
            <AccountCircleRoundedIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
