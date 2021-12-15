import './App.css';
import {Header} from "./Header/Header";
import {Main} from "./Main/Main";
import {Skills} from "./Skills/Skills";
import {MyProjects} from "./MyProjects/MyProjects";
import {RemoteWork} from "./RemoteWorkBlock/RemoteWork";
import {Contacts} from "./Contacts/Contacts";
import {Footer} from "./FooterBlock/Footer";


function App() {
  return (
      <div className="App">
        <Header/>
        <Main/>
        <Skills/>
        <MyProjects/>
        <RemoteWork/>
        <Contacts />
        <Footer/>
      </div>
  );
}

export default App;
