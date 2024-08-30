import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Nav from './Nav.jsx'
import Home from './Home.jsx'
import Footer from './Footer.jsx'
import Aboutme from './Aboutme.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contact from './Contact.jsx'
import ContactSidebar from './ContactSidebar.jsx'
import BlogPage from './Blogpage.jsx'
// import './main.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
    <Nav />
    {/* <App /> */}
    {/* <Home /> */}
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutme />} />
        {/* <Route path='/contact' element={<Contact />} /> */}
        <Route path='/blog' element={<BlogPage />} />
      </Routes>
      <Footer />
      <ContactSidebar />

    </Router>


  </StrictMode>,
)
