import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return <Router>
    <Navbar />
      <Routes>
           <Route path="/" />
           <Route path="/about" />
           <Route path="/rules" />
           <Route path="/contact" />
      </Routes>
  </Router>
}
export default App;
