import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Hero from './components/Hero';
import NewestDeals from './components/NewestDeals';
import AboutUs from './components/AboutUs';
import BestDeals from './components/BestDeals';
import Footer from './components/Footer';
import Login from './components/Login';
import PropertyRegistry from './components/PropertyRegistry';
import ProtectedRoute from './components/ProtectedRoute';

export default function App() {
  return (
    <Router>
      <div className="App w-11/12 md:w-4/5 m-auto">
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <NewestDeals />
              <AboutUs />
              <BestDeals />
            </>
          } />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/registro-propiedad" element={
            <ProtectedRoute>
              <PropertyRegistry />
            </ProtectedRoute>
          } />        
          </Routes>
      </div>
      <Footer />
    </Router>
  );
}
