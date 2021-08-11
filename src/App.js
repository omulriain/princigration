import './App.css';
import { Route, Switch } from 'react-router-dom';
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

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" render={props =>
          <div>
            <Header />
            <Main />
            <Experience />
            <Projects />
            <Contact />
            <People />
            <Footer />
          </div>
        } />
        <Route exact path="/adminHome" component={AdminHome} />
        <Route exact path="/adminTraffic" component={AdminTraffic} />
        <Route exact path="/adminSEO" component={AdminSEO} />
      </Switch>
    </>
  );
}

export default App;
