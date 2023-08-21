import './App.css';
import {BrowserRouter ,Routes, Route} from "react-router-dom";
import HomePage from './pages/HomePage';
import DashboardPage from './pages/Dashboard';
import CoinPage from './pages/CoinPage';
import ComparePage from './pages/ComparePage';
import WatchListPage from './pages/WatchListPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/watchlist" element={<WatchListPage />} />
          <Route path="/compare" element={<ComparePage />} /> */}
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/coin/:id" element={<CoinPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
