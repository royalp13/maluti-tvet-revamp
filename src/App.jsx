import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  
import About  from './pages/About.jsx'
import Admissions from './pages/Admissions.jsx'
import Contact from './pages/Contact.jsx'
import Home  from './pages/Home.jsx'
import Programmes from './pages/Programmes.jsx'
import Footer from './components/Footer.jsx'
import Navbar from './components/Navbar.jsx'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/programmes" element={<Programmes />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App;