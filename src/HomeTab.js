import React from "react";
import Grid from "@material-ui/core/Grid";
import CssBaseLine from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import TopAppbar from "./TopAppBar";
import BottomTabs from "./BottomTabs";
import { makeStyles } from "@material-ui/core/styles";
import { sizing } from "@material-ui/system";

const useStyle = makeStyles((theme) => ({
  root: {},
}));

export default function HomeTab() {
  const classes = useStyle();

  return (
    <React.Fragment>
      <CssBaseLine />
      <Container className={classes.root} component="main" maxWidth="xs">
        <TopAppbar />
        <BottomTabs />
      </Container>
    </React.Fragment>
  );
}
