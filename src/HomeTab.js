import React from "react";
import Grid from "@material-ui/core/Grid";
import CssBaseLine from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import TopAppbar from "./TopAppBar";
import BottomTabs from "./BottomTabs";
import { makeStyles } from "@material-ui/core/styles";
import { sizing } from "@material-ui/system";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";

const useStyle = makeStyles((theme) => ({
  root: {
    width: "calc(36.4%)",
  },
}));

export default function HomeTab() {
  const classes = useStyle();

  return (
    // <React.Fragment>
    <Container className={classes.root}>
      <CssBaseLine />
      <TopAppbar />
      <BottomTabs />
    </Container>
    // </React.Fragment>
  );
}
