import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Client from "../Client";
import ReportsBuilder from '../ReportsBuilder'
import "./Dashboard.css";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import {
  Drawer,
  AppBar,
  Toolbar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
  Divider,
  IconButton,
  TextField,
  InputAdornment,
  Button,
  Avatar,
  Grid,
  Menu,
  MenuItem
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import FolderIcon from "@material-ui/icons/Folder";
import ChartIcon from "@material-ui/icons/ShowChart";
import KeyboardDownIcon from "@material-ui/icons/KeyboardArrowDown";
import SearchIcon from "@material-ui/icons/Search";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import CreateProject from "../../Components/Modals/CreateProject";
import ViewReports from "../ViewReports";
import AuthService from "../../Components/Auth/AuthService";

const drawerWidth = 240;
const styles = theme => ({
  root: {
    flexGrow: 1,
    height: 430,
    zIndex: 1,
    overflow: "hidden",
    position: "relative",
    display: "flex"
  },
  centerText: {
    textAlign: "center"
  },
  floatRight: {
    float: "right"
  },
  searchField: {
    height: "35px",
    fontSize: ".9em"
  },
  searchFieldCont: {
    borderRadius: "2px",
    background: "rgba(255, 255, 255, 0.6)",
    width: "250px",
    margin: "0 20px"
  },
  rightIcon: {
    marginLeft: theme.spacing.unit
  },
  bigAvatar: {
    width: 60,
    height: 60,
    display: "inline-block"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  appBar: {
    backgroundColor: "#516cff",
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36
  },
  hide: {
    display: "none"
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing.unit * 9
    }
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    position: "absolute",
    top: "0",
    left: "73px"
  }
});

let routes = [
  {
    path: `/dashboard`,
    main: () => <Client />
  },
];

class Dashboard extends Component {
  Auth = new AuthService();
  user = this.Auth.getConfirm();

  state = {
    draweropen: false,
    domainCollapseOpen: false,
    reportsCollapseOpen: false,
    anchorEl: null
  };

  componentDidMount() {
    this.getProjects();
  }
  componentDidUpdate(prevProps) {
    console.log("Component Rerendered");
    console.log(prevProps);
  }

  getProjects = () => {
    fetch(`/project/user/${this.user.user}`)
      .then(res => res.json())
      .then(
        result => {
          console.log(result);
          this.setState({
            isLoaded: true,
            projects: result
          });
          result.forEach(project => {
            routes.push({
              path: `/reports/${project._id}`,
              sidebar: () => <a>project.client</a>,
              main: () => <ViewReports thisProject={project} />,
              routes: [
                {
                  path: `/reports/reportsBuilder`,
                  component: <ReportsBuilder thisProject={project} />
                }
              ]
            });
            routes.push({
              path: `/client/${project._id}`,
              sidebar: () => <a>project.client</a>,
              main: () => <Client thisProject={project} />
            });
            routes.push({
              path: `/reports/reportsBuilder/${project._id}`,
              sidebar: () => <a>project.client</a>,
              main: () => <ReportsBuilder thisProject={project} />
            });
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        error => {
          this.setState({
            isLoaded: true,
            error,
            projects: []
          });
        }
      );
  };

  handledDomainClick = () => {
    this.setState(state => ({ domainCollapseOpen: !state.domainCollapseOpen }));
  };

  handleReportsClick = () => {
    this.setState(state => ({ reportsCollapseOpen: !state.reportsCollapseOpen }));
  };

  _handleLogout = () => {
    //include the logout() method from our AuthService helper class here.
    this.Auth.logout();
    window.location = "/landing";
  };

  handleProfileClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleProfileClose = () => {
    this.setState({ anchorEl: null });
  };

  handleDrawerOpen = () => {
    this.setState({ draweropen: true });
  };

  handleDrawerClose = () => {
    this.setState({ draweropen: false });
  };

  render() {
    console.log(this.state.projects);
    
    const { classes, theme } = this.props;
    const { anchorEl } = this.state;
    return (
      <div className={classes.root} style={{ height: "100vh" }}>
        <AppBar
          position="absolute"
          className={classNames(
            classes.appBar,
            this.state.draweropen && classes.appBarShift
          )}
        >
          <Toolbar disableGutters={!this.state.draweropen}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(
                classes.menuButton,
                this.state.draweropen && classes.hide
              )}
            >
              <MenuIcon />
            </IconButton>
            <Grid container>
              <TextField
                id="search"
                placeholder="Search"
                type="search"
                className={classes.TextField}
                margin="dense"
                InputProps={{
                  startAdornment: (
                    <InputAdornment style={{ margin: "7px" }}>
                      <SearchIcon />
                    </InputAdornment>
                  ),
                  disableUnderline: true,
                  classes: {
                    root: classes.searchFieldCont,
                    input: classes.searchField
                  }
                }}
              />
              <CreateProject getProjects={this.getProjects} />
            </Grid>
            <Grid container alignItems="center">
              <Grid item sm={8} className={classes.centerText}>
                <Avatar
                  alt="Adelle Charles"
                  src="https://vignette.wikia.nocookie.net/nekoatsume/images/f/f7/Neko-atsume-rare-cats-guide-mr-meowgi_w670_h377.png/revision/latest?cb=20170227020118"
                  className={classNames(
                    classes.avatar,
                    classes.bigAvatar,
                    classes.floatRight
                  )}
                />
              </Grid>
              <Grid item sm={4} className={classes.centerText}>
                <Button
                  aria-owns={anchorEl ? "simple-menu" : null}
                  aria-haspopup="true"
                  onClick={this.handleProfileClick}
                >
                  Mr. Meow
                  <KeyboardDownIcon className={classes.rightIcon} />
                </Button>
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={this.handleProfileClose}
                >
                  <MenuItem onClick={this.handleProfileClose}>Profile</MenuItem>
                  <MenuItem onClick={this.handleProfileClose}>
                    My account
                  </MenuItem>
                  <MenuItem onClick={this.handleProfileClose}>
                    {this.Auth.loggedIn() ? (
                      <a onClick={this._handleLogout}>Logout</a>
                    ) : null}
                  </MenuItem>
                </Menu>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>

        <Router>
          <div>
            <Drawer
              variant="permanent"
              classes={{
                paper: classNames(
                  classes.drawerPaper,
                  !this.state.draweropen && classes.drawerPaperClose
                )
              }}
              open={this.state.draweropen}
            >
              <div className={classes.toolbar}>
                <IconButton onClick={this.handleDrawerClose}>
                  {theme.direction === "rtl" ? (
                    <ChevronRightIcon />
                  ) : (
                    <ChevronLeftIcon />
                  )}
                </IconButton>
              </div>
              <Divider />
              <List>
                <ListItem button onClick={this.handledDomainClick}>
                  <ListItemIcon onClick={this.handleDrawerOpen}>
                      <ChartIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Button
                          style={{
                            color: "rgba(0, 0, 0, 0.87)",
                            fontSize: "1rem",
                            fontWeight: 400,
                            fontFamily: "Roboto",
                            lineHeight: "1.5em",
                            textTransform: "uppercase",
                            flex: "1 1 auto",
                            padding: "0px",
                            minWidth: "0",
                            float: "left"
                          }}
                        >
                          Dashboards
                      </Button>
                    }
                  />
                  {this.state.domainCollapseOpen ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={this.state.domainCollapseOpen} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {this.state.projects &&
                      this.state.projects.map((project, index) => (
                        <ListItem button key={index} className={classes.nested}>
                          <ListItemText
                            inset
                            primary={
                              <Button>
                                <Link
                                  to={`/client/${project._id}`}
                                  style={{
                                    color: "rgba(0, 0, 0, 0.87)",
                                    fontSize: "1rem",
                                    fontWeight: 400,
                                    fontFamily: "Roboto",
                                    lineHeight: "1.5em",
                                    textTransform: "lowercase",
                                    flex: "1 1 auto",
                                    padding: "0px",
                                    minWidth: "0",
                                    float: "left"
                                  }}
                                >
                                  {project.clientInfo.domain}
                                </Link>
                              </Button>
                            }
                          />
                        </ListItem>
                      ))}
                  </List>
                </Collapse>
                <ListItem button onClick={this.handleReportsClick}>
                  <ListItemIcon onClick={this.handleDrawerOpen}>
                    <FolderIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Button
                        style={{
                          color: "rgba(0, 0, 0, 0.87)",
                          fontSize: "1rem",
                          fontWeight: 400,
                          fontFamily: "Roboto",
                          lineHeight: "1.5em",
                          textTransform: "uppercase",
                          flex: "1 1 auto",
                          padding: "0",
                          minWidth: "0"
                        }}
                      >
                        Projects
                      </Button>
                    }
                  />
                  {this.state.reportsCollapseOpen ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={this.state.reportsCollapseOpen} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {this.state.projects &&
                      this.state.projects.map((project, index) => (
                        <ListItem button key={index} className={classes.nested}>
                          <ListItemText
                            inset
                            primary={
                              <Button>
                                <Link
                                  to={`/reports/${project._id}`}
                                  style={{
                                    color: "rgba(0, 0, 0, 0.87)",
                                    fontSize: "1rem",
                                    fontWeight: 400,
                                    fontFamily: "Roboto",
                                    lineHeight: "1.5em",
                                    textTransform: "lowercase",
                                    flex: "1 1 auto",
                                    padding: "0px",
                                    minWidth: "0",
                                    float: "left"
                                  }}
                                >
                                  {project.name}
                                </Link>
                              </Button>
                            }
                          />
                        </ListItem>
                      ))}
                  </List>
                </Collapse>
              </List>
            </Drawer>

            <main
              className={classes.content}
              style={{ height: "100vh", width: "95vw" }}
            >
              <div className={classes.toolbar} />
              <div style={{ display: "flex" }}>
                {routes.map((route, index) => (
                  <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    component={route.main}
                  />
                ))}
              </div>
            </main>
          </div>
        </Router>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Dashboard);
