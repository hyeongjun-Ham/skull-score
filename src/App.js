import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Score from './pages/Score/Score';

function App() {
  return (
    <div className="App">
      <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/score" element={<Score />} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
