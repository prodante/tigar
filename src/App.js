import './App.css';
import HomePage from './components/home/HomePage';
import Header from './components/widget/Header';
import AboutPage from './components/about/AboutPage';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/about" element={<AboutPage/>} />
      </Routes>
    </div>
  );
}

export default App;
