import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Header } from "./customComponents/Header";
import { Banner } from "./customComponents/Banner";
import { Skills } from "./customComponents/Skills";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <Skills />
    </>
  );
}

export default App;
