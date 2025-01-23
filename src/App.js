import "./App.css";
import { Route, Switch, HashRouter } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import People from "./components/People";
import Footer from "./components/Footer";
import AdminHome from "./components/AdminHome";
import AdminTraffic from "./components/AdminTraffic";
import AdminSEO from "./components/AdminSEO";
import AdminLogin from "./components/AdminLogin";

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
