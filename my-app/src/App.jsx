import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import { Navbar } from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import SocialLink from "./components/SocialLink";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About/>
      <Portfolio/>
      <Skills/>
      <Contact/>

      <SocialLink />
    </>
  );
}

export default App;
