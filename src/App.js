import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AddMedicine from './pages/AddMedicine';
import EditMedicine from './pages/EditMedicine';
import MedicineDetails from './pages/MedicineDetails';

function App() {
  return (
    <Router>
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tambah-obat" element={<AddMedicine />} />
          <Route path="/edit/:id" element={<EditMedicine />} />
          <Route path="/details/:id" element={<MedicineDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
