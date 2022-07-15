import './App.css';
import { Routes, Route } from "react-router-dom";
import Header from './components/Header.js'
import CardContainer from './components/CardContainer.js'
import CapturedCardContainer from './components/CapturedCardContainer.js'
import DetailPage from './components/DetailPage'

function App() {

  return (
    <div id="App">
      <Header />
      <Routes>
        <Route path="/" element={<CardContainer />} />
        <Route path="captured" element={<CapturedCardContainer />} />
        <Route path="pokemon/:id" element={<DetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
