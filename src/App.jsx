import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Chatbot from './components/Chatbot'
import Home from './pages/Home'
import Programmes from './pages/Programmes'
import Admissions from './pages/Admissions'
import About from './pages/About'
import Contact from './pages/Contact'
import Portal from './pages/Portal'
import Wireframes from './pages/Wireframes'

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/programmes" element={<Programmes />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portal" element={<Portal />} />
        <Route path="/wireframes" element={<Wireframes />} />
      </Routes>
      <Footer />
      <Chatbot />
    </Router>
  )
}