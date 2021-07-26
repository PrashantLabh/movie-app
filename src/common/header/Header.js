import React, { useState } from "react";
import { Redirect, Link, useParams} from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Tabs,
  Tab,
  Box,
  Typography,
} from "@material-ui/core";
import Modal from "react-modal";

import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";
import "./Header.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "300px",
  },
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={1}>
          <Typography component={"span"}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const Header = ({ isReleased, refreshHeader,  setRefreshHeader}) => {
  const loggedInToken = sessionStorage.getItem("access-token");
  const { id } = useParams();
  const [modalIsOpen, setIsOpen] = useState(false);
  const [value, setValue] = React.useState(0);

  function logOut() {
    sessionStorage.removeItem("access-token");
	setRefreshHeader(!refreshHeader);
  }

  function redirectToBook(){
	  return <Redirect to="/movieshhh" />
  }

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="header-container">
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <Logo className="logo rotate linear infinite" />
          </IconButton>
          <section className="right-toolbar">
            {isReleased ? (
              <Button
                className="header-btn"
                variant="contained"
                color="primary"
				onClick={!loggedInToken ? setIsOpen.bind(null, true) : null}
              >
                {!loggedInToken ? "Book Show" : <Link className="" to={`/movie-book/${id}`} style={{textDecoration: "none", color: "#fff"}}> Book Show</Link>}
              </Button>
            ) : null}
            <Button
              className="header-btn"
              variant="contained"
              color="default"
              onClick={!loggedInToken ? setIsOpen.bind(null, true) : logOut}
            >
              {loggedInToken ? "Logout" : "Login"}
            </Button>
          </section>
        </Toolbar>
      </AppBar>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={setIsOpen.bind(null, false)}
        contentLabel="Login"
        style={customStyles}
        ariaHideApp={false}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="Login Register Tab"
        >
          <Tab label="Login" {...a11yProps(0)} />
          <Tab label="Register" {...a11yProps(1)} />
        </Tabs>
        <TabPanel value={value} index={0}>
          <div className="center-aligned">
            <LoginForm handleClose={setIsOpen.bind(null, false)} />
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <div className="center-aligned">
            <RegisterForm handleClose={setIsOpen.bind(null, false)} />
          </div>
        </TabPanel>
      </Modal>
    </div>
  );
};

export default Header;
