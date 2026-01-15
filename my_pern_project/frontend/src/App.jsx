import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar.jsx';
import HomePage from './pages/HomePage.jsx';
import ProductPage from './pages/ProductPage.jsx';
import { Toaster } from 'react-hot-toast';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="min-h-screen bg-base-200 transition-colors duration-300">
        <NavBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>

   
       <Toaster/>
      </div>
    </>
  )
}

export default App;
