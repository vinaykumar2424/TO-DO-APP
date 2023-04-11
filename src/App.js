import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddList from './components/AddList';
import AllTasks from './components/AllTasks';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />} />
          <Route path="/addtask"  element={<AddList />} />
          <Route path="/alltasks"  element={<AllTasks />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
