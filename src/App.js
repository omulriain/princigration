import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Header from "./header";
import Main from "./main";
import Experience from "./experience";
import MyProjects from "./myProjects";
import ContactMe from "./contactMe";
import WhoWeAre from "./whoWeAre";
import Message from "./message";
import AdminLogin from "./adminLogin";
import AdminHome from "./adminHome";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" render={props =>
          <div>
            <Header />
            <Main />
            <Experience />
            <MyProjects />
            <ContactMe />
            <WhoWeAre />
            <Message />
          </div>
        } />
        <Route exact path="/adminLogin" component={AdminLogin} />
        <Route exact path="/adminHome" component={AdminHome} />
      </Switch>
    </>
  );
}
export default App;
