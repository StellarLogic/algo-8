import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Welcome from "../Welcome/Welcome";
import NavLinks from "../NavLinks/NavLinks";
import {
  Grid,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Badge,
  MenuItem,
  Menu,
} from "@material-ui/core";
import { AccountCircle, SearchIcon } from "@material-ui/icons";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import MoreIcon from "@material-ui/icons/MoreVert";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { connect } from "react-redux";
import constants from "../../constants";

const Header = ({ signOut }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose && signOut}>Sign Out</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem className={classes.mobileNav}>
        <NavLinks />
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <>
      <div className={classes.grow}>
        <AppBar position="static" className={classes.menubar}>
          <Toolbar>
            <Typography className={classes.title} variant="h6" noWrap>
              LOGO
            </Typography>
            <div className={classes.navLinks}>
              <NavLinks />
            </div>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <IconButton aria-label="show 4 new mails" color="inherit">
                <Badge badgeContent={4} color="secondary">
                  <MailIcon />
                </Badge>
              </IconButton>
              <IconButton
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={17} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
      </div>
      <Welcome />
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
    color: theme.palette.colors.primary,
  },
  menubar: {
    background: theme.palette.common.white,
    color: theme.palette.colors.primary,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    display: "none",
    [theme.breakpoints.down("md")]: {
      display: "block",
    },
  },

  title: {
    // display: "none",
    fontWeight: "bold",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  navLinks: {
    "& ul": {
      display: "flex",
      alignItems: "center",
      listStyle: "none",

      "& li a": {
        textDecoration: "none",
        color: theme.palette.colors.primary,
        padding: "20px",
        fontWeight: "bold",
        position: "relative",

        "&::after": {
          content: '""',
          width: "90%",
          height: "3px",
          position: "absolute",
          bottom: "0",
          left: "50%",
          transform: "translate(-50%,0)",
          background: theme.palette.colors.primary,
          opacity: 0,
        },
        "&.active::after": {
          opacity: 1,
        },
        "&:hover::after": {
          opacity: 1,
        },
      },
    },

    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  mobileNav: {
    "& ul": {
      display: "flex",
      alignItems: "center",
      listStyle: "none",
      flexDirection: "column",
      padding: "0",
      "& li a": {
        textDecoration: "none",
        color: theme.palette.colors.primary,
        padding: "20px",
        fontWeight: "bold",
        position: "relative",
        display: "inline-block",

        "&::after": {
          content: '""',
          width: "90%",
          height: "3px",
          position: "absolute",
          bottom: "0",
          left: "50%",
          transform: "translate(-50%,0)",
          background: theme.palette.colors.primary,
          opacity: 0,
        },
        "&.active::after": {
          opacity: 1,
        },
        "&:hover::after": {
          opacity: 1,
        },
      },
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

const mapDispatchToProps = (dispatch) => ({
  signOut: () =>
    dispatch({
      type: constants.SIGN_OUT,
    }),
});

export default connect(null, mapDispatchToProps)(Header);
