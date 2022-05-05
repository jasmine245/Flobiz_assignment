import './App.css';
import {
  BrowserRouter,
  Routes, //replaces "Switch" used till v5
  Route,
} from "react-router-dom";

import HomePage from './Components/HomePage';
import ItemPage from './Components/ItemPage';

// import {UserAuthContextProvider} from "./context/UserAuthContext";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="container">
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/itempage" element={<ItemPage />} />
        </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
