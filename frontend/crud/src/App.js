import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import List from './components/List';
import Add from './components/Add';
import Delete from './components/Delete';
import Edit from './components/Edit';
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div >
      <Navbar />
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="add" element={<Add />} />
        <Route path="edit" element={<Edit />} />
        <Route path="Delete" element={<Delete />} />

      </Routes>
    </div>
  );
}

export default App;
