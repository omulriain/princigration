import "./App.css";
import { Route, Switch, HashRouter } from "react-router-dom";
import Header from "./header";
import Main from "./main";
import Experience from "./experience";
import Projects from "./projects";
import Contact from "./contact";
import People from "./people";
import Footer from "./footer";
import AdminHome from "./adminHome";
import AdminTraffic from "./adminTraffic";
import AdminSEO from "./adminSEO";
import AdminLogin from "./adminLogin";

// returns routes to components
function App() {
  return (
    <HashRouter hashType="noslash">
      <Switch>
        <Route exact path="/adminLogin" component={AdminLogin} />
        <Route exact path="/adminHome" component={AdminHome} />
        <Route exact path="/adminTraffic" component={AdminTraffic} />
        <Route exact path="/adminSEO" component={AdminSEO} />
        <Route
          exact
          path=""
          render={(props) => (
            <>
              <Header />
              <Main />
              <Experience />
              <Projects />
              <Contact />
              <People />
              <Footer />
            </>
          )}
        />
      </Switch>
    </HashRouter>
  );
}

export default App;
