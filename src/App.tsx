import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Admin from './pages/Admin'
import Catalogue from './pages/Catalogue'
import RefundPolicy from './components/shared/RefundPolicy'
import TermsAndConditions from './components/shared/TermsAndConditions'
import { ToastContainer } from 'react-toastify'


function App() {
  return (
    <>
    <ToastContainer />
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/andime" element={<Admin />} />
      <Route path="/catalogue" element={<Catalogue />} />
      <Route path="/refund" element={<RefundPolicy />} />
      <Route path="/terms" element={<TermsAndConditions />} /> 
    </Routes>
    </>
  )
}

export default App