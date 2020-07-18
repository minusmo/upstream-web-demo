import React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import HomeIcon from "@material-ui/icons/Home";
import ViewListIcon from "@material-ui/icons/ViewList";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Grid from "@material-ui/core/Grid"

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={1}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
  views: {
    marginTop: theme.spacing(20),
  },

  bottomBar: {
    width: "calc(36.4%)",
    left: "calc(31.8%)",
    bottom: theme.spacing(40),
    top: "auto",
  },

  tab: {
    width: theme.spacing(4),
    minWidth: theme.spacing(4),
  },
}));

export default function FullWidthTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <SwipeableViews
        className={classes.views}
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          Item One
          <br />
          dfsfsdf
          <br />
          sdfsdfsdf
          <br />
          sdfsdfsfsdf
          <br />
          <Grid container alignContent="space-between" alignItems="center" direction="column" justify="space-evenly" xs={3}>
            <Grid item>

            </Grid>
            <Grid item>

            </Grid>
            <Grid item>

            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          Item Three
        </TabPanel>
      </SwipeableViews>
      <AppBar className={classes.bottomBar} position="fixed" color="default">
        <Tabs
          className={classes.tabs}
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab
            classes={{ root: classes.tab }}
            icon={<HomeIcon />}
            {...a11yProps(0)}
          />
          <Tab
            classes={{ root: classes.tab }}
            icon={<ViewListIcon />}
            {...a11yProps(1)}
          />
          <Tab
            classes={{ root: classes.tab }}
            icon={<NotificationsIcon />}
            {...a11yProps(2)}
          />
        </Tabs>
      </AppBar>
    </div>
  );
}
