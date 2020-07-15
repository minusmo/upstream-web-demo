import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";
import Zoom from "@material-ui/core/Zoom";

const useStyles = makeStyles((theme) => ({
  wallPaper: {
    marginTop: theme.spacing(8),
    display: "block",
    minHeight: theme.spacing(72),
    backgroundColor: theme.palette.primary.main,
  },

  typo: {
    paddingTop: theme.spacing(24),
    fontSize: theme.spacing("auto"),
    color: "black",
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <Zoom in={true} style={{ transitionDuration: "500ms" }}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Link component={RouterLink} underline="none" to="/SignIn">
          <Paper elevation={3} className={classes.wallPaper}>
            <Typography
              className={classes.typo}
              component="h1"
              variant="h3"
              align="center"
            >
              Hyundai
              <br />
              Highschool
            </Typography>
          </Paper>
        </Link>
      </Container>
    </Zoom>
  );
}
