import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Layout from "./containers/Layout/Layout";
import Login from "./containers/auth/Login";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import { ToastContainer } from "react-toastify";
import { connect } from "react-redux";

const App = ({ isAuthenticated }) => {
  // if (!isAuthenticated) return <Redirect to="/login" />;

  return (
    <div className="App">
      <Switch>
        <Route path="/login" component={(props) => <Login {...props} />} />
        <PrivateRoute
          path="/"
          name="Layout"
          component={(props) => <Layout {...props} />}
        />
      </Switch>
      <ToastContainer />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(App);
