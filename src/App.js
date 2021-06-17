
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import './App.css';
import Header from "./header";
import Main from "./main";
import Experience from "./experience";
import MyProjects from "./myProjects";
import ContactMe from "./contactMe";
import Message from "./message";
function App() {
  return (
      <>
    <Header />
    <Main />
    <Experience />
    <MyProjects/>
    <ContactMe />
    <Message />
      </>

  );
}

export default App;
