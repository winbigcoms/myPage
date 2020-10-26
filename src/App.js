import About from "./components/about/About";
import Header from "./components/header/Header"
import Main from "./components/main/Main"
import Skills from "./components/skills/Skills";
function App() {
  return (
    <div className="App">
        <Header/>
        <Main/>
        <About/>
        <Skills/>
    </div>
  );
}

export default App;
