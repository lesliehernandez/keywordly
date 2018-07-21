import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";
import { compose } from 'recompose'
import Client from '../Client'
import Projects from '../Projects'
import './Dashboard.css'
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { Drawer, AppBar, Toolbar, List, ListItem, ListItemIcon, ListItemText, Divider, IconButton, TextField, InputAdornment, Button, Avatar, Grid, Menu, MenuItem } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import FolderIcon from '@material-ui/icons/Folder';
import ChartIcon from '@material-ui/icons/ShowChart';
import KeyboardDownIcon from '@material-ui/icons/KeyboardArrowDown';
import SearchIcon from '@material-ui/icons/Search';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import CreateProject from '../../Components/Modals/CreateProject'
import AuthService from '../../Components/Auth/AuthService'
import Tables from '../../Components/Tables/Table'


const drawerWidth = 240;
const styles = theme => ({
  root: {
    flexGrow: 1,
    height: 430,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
  centerText: {
    textAlign: 'center'
  },
  floatRight: {
    float: 'right'
  },
  searchField: {
    height: '35px',
    fontSize: '.9em'
  },
  searchFieldCont: {
    borderRadius: '2px',
    background: 'rgba(255, 255, 255, 0.6)',
    width: '250px',
    margin: '0 20px'
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  bigAvatar: {
    width: 60,
    height: 60,
    display: 'inline-block'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  appBar: {
    backgroundColor: '#516cff',
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    position: 'absolute',
    top: '0',
    left: '73px'
  },
});

class Dashboard extends Component {

  Auth = new AuthService();

  state = {
    draweropen: false,
    anchorEl: null,
  };

  _handleLogout = () => {
    //include the logout() method from our AuthService helper class here.
    this.Auth.logout();
    window.location = '/landing';
}

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
    const { classes, theme } = this.props;
    const { anchorEl } = this.state;
    const routes = [
      {
        path: "/dashboard",
        sidebar: () => <a>Dash</a>,
        main: () => <Client />
      },
      {
        path: "/reports",
        sidebar: () => <a>Projects</a>,
        main: () => <Projects />
      }
    ];

    return (

      <div className={classes.root}>
        
        <AppBar
          position="absolute"
          className={classNames(classes.appBar, this.state.draweropen && classes.appBarShift)}
        >
          <Toolbar disableGutters={!this.state.open}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(classes.menuButton, this.state.draweropen && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Grid container>
              <TextField id="search" placeholder="Search" type="search" className ={classes.TextField} margin='dense' 
              InputProps= {{
                startAdornment: (<InputAdornment style={{margin: '7px'}} ><SearchIcon /></InputAdornment>),
                disableUnderline: true,
                classes: {
                  root: classes.searchFieldCont,
                  input: classes.searchField
                }
                }} />
              <CreateProject />
            </Grid>
            <Grid container alignItems="center">
              <Grid item sm={8} className={classes.centerText} >
                <Avatar
                  alt="Adelle Charles"
                  src="https://vignette.wikia.nocookie.net/nekoatsume/images/f/f7/Neko-atsume-rare-cats-guide-mr-meowgi_w670_h377.png/revision/latest?cb=20170227020118"
                  className={classNames(classes.avatar, classes.bigAvatar, classes.floatRight)}
                />
              </Grid>
              <Grid item sm={4} className={classes.centerText}>
                <Button aria-owns={anchorEl ? 'simple-menu' : null} aria-haspopup="true" onClick={this.handleProfileClick} >
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
                  <MenuItem onClick={this.handleProfileClose}>My account</MenuItem>
                  <MenuItem onClick={this.handleProfileClose}>{this.Auth.loggedIn() ? <a onClick={this._handleLogout}>Logout</a> : null}</MenuItem>
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
                  paper: classNames(classes.drawerPaper, !this.state.draweropen && classes.drawerPaperClose),
                }}
                open={this.state.draweropen}
              >
                <div className={classes.toolbar}>
                  <IconButton onClick={this.handleDrawerClose}>
                    {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                  </IconButton>
                </div>
                <Divider />
                <List>
                  <ListItem button>
                    <ListItemIcon>
                      <Link to='/dashboard'>
                        <ChartIcon />
                      </Link>
                    </ListItemIcon>
                    <ListItemText primary={<Button><Link to='/dashboard'>Dashboard</Link></Button>}/>
                  </ListItem>
                  <ListItem button>
                    <ListItemIcon>
                    <Link to='/reports'>
                      <FolderIcon />
                    </Link>
                    </ListItemIcon>
                    <ListItemText primary={<Button><Link to='/reports'>Reports</Link></Button>} />
                  </ListItem>
                </List>
              </Drawer>

              <main className={classes.content}>
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
  theme: PropTypes.object.isRequired,
};

export default compose(withRouter, withStyles(styles, { withTheme: true }))(Dashboard);


