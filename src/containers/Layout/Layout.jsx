import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import routes from "../../routes";
import AppContainer from "../../components/AppContainer/AppContainer";
import constants from "../../constants";
import { connect } from "react-redux";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const Layout = ({ chart, setDefault }) => {
  useEffect(() => {
    setDefault(chart[0]);
  }, []);

  return (
    <div>
      <Header />
      <AppContainer>
        <Switch>
          {routes.map((route, idx) => {
            return (
              route.component && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  render={(props) => <route.component {...props} />}
                />
              )
            );
          })}
          <Redirect to="/dashboard" />
        </Switch>
      </AppContainer>
      <Footer />
    </div>
  );
};
const mapStateToProps = (state) => ({
  chart: state.chart.data,
});

const mapDispatchToProps = (dispatch) => ({
  setDefault: (payload) =>
    dispatch({
      type: constants.SET_DEFAULT,
      payload,
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
