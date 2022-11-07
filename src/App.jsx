import { BrowserRouter, Route, Routes } from "react-router-dom";

import './App.scss';
import Main from './views/Main';
import Projekte from './views/Projekte';
import Lebenslauf from "./views/Lebenslauf";
import Kontakt from "./views/Kontakt";
import Skills from "./views/Skills";
import Header from "./components/Header"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
       
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/projekte" element={<Projekte />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/lebenslauf" element={<Lebenslauf />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="*" element={<h1>Error 404</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
