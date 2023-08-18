import './App.css';
import {BrowserRouter ,Routes, Route} from "react-router-dom";
import HomePage from './pages/HomePage';
import DashboardPage from './pages/Dashboard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/watchlist" element={<WatchList />} />
          <Route path="/compare" element={<Compare />} /> */}
          <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
