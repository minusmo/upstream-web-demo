import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default function SimpleList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="main mailbox folders">
        <ListItem button>
          <ListItemText primary="게시판1" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="게시판2" />
        </ListItem>
      </List>
      <List component="nav" aria-label="secondary mailbox folders">
        <ListItem button>
          <ListItemText primary="게시판3" />
        </ListItem>
        <ListItemLink href="#simple-list">
          <ListItemText primary="게시판4" />
        </ListItemLink>
      </List>
    </div>
  );
}
