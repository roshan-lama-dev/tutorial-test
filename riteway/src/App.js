import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Header } from "./customComponents/Header";
import { Banner } from "./customComponents/Banner";
import { Skills } from "./customComponents/Skills";
import { Project } from "./customComponents/Project";
import { Contact } from "./customComponents/Contact";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <Skills />
      <Project />
      <Contact />
    </>
  );
}

export default App;
