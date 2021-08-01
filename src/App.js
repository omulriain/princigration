import './App.css';
import { Route, Switch } from 'react-router-dom';
import Header from "./header";
import Main from "./main";
import Experience from "./experience";
import OurProjects from "./ourProjects";
import ContactUs from "./contactUs";
import WhoWeAre from "./whoWeAre";
import Message from "./message";
import AdminHome from "./adminHome";
import AdminTraffic from "./adminTraffic";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" render={props =>
          <div>
            <Header />
            <Main />
            <Experience />
            <OurProjects />
            <ContactUs />
            <WhoWeAre />
            <Message />
          </div>
        } />
        <Route exact path="/adminHome" component={AdminHome} />
        <Route exact path="/adminTraffic" component={AdminTraffic} />
      </Switch>
    </>
  );
}

export default App;
