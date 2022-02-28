import './App.module.scss';
import {Header} from "./Header/Header";
import {Main} from "./Main/Main";
import {Skills} from "./Skills/Skills";
import {MyProjects} from "./MyProjects/MyProjects";
import {MyCV} from "./MyCV/MyCV";
import {Contacts} from "./Contacts/Contacts";
import {Footer} from "./FooterBlock/Footer";


function App() {
  return (
      <div className="App">
        <Header/>
        <Main/>
        <Skills/>
        <MyProjects/>
        <MyCV/>
        <Contacts />
        <Footer/>
      </div>
  );
}

export default App;
