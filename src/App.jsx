import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import './App.scss';
import Main from './views/Main';
import Proyects from './views/Proyects';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <Link to ="/">Main</Link>
          <Link to ="/proyects">Proyects</Link>
        </header>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/proyects" element={<Proyects />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
