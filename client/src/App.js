import { Navbar } from "./components";
import { Inicio, PDisponibles, FAQ, HorasRSU } from "./routers";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import "./App.css"

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <main className="content_app">
        <Routes>
          <Route path="/" exact Component={Inicio} />
          <Route path="/FAQ" exact Component={FAQ} />
          <Route path="/proyectos-rsu" exact Component={PDisponibles} />
          <Route path="/proyectos-rsu" exact Component={HorasRSU} />
        </Routes>
      </main>
      </Router>
    </div>
  );
}

export default App;
