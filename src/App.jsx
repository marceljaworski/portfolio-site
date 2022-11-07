import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import './App.scss';
import Main from './assets/views/Main';
import Projekte from './assets/views/Projekte';
import Lebenslauf from "./assets/views/Lebenslauf";
import Kontakt from "./assets/views/Kontakt";
import Skills from "./assets/views/Skills";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <Link to ="/">Main</Link>
          <Link to ="/projekte">Projekte</Link>
          <Link to ="/kontakt">Kontakt</Link>
          <Link to ="/lebenslauf">Lebenslauf</Link>
          <Link to ="/skills">Skills</Link>
        </header>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/projekte" element={<Projekte />} />
          <Route path="/kontak" element={<Kontakt />} />
          <Route path="/lebenslauf" element={<Lebenslauf />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
