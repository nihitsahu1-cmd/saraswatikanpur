import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import PageContainer from './components/layout/PageContainer'
import WhatsAppButton from './components/common/WhatsAppButton'
import Home from './pages/Home'
import About from './pages/About'
import Academics from './pages/Academics'
import Facilities from './pages/Facilities'
import Hostel from './pages/Hostel'
import Admissions from './pages/Admissions'
import Fees from './pages/Fees'
import Transport from './pages/Transport'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<PageContainer><Home /></PageContainer>} />
            <Route path="/about" element={<PageContainer><About /></PageContainer>} />
            <Route path="/academics" element={<PageContainer><Academics /></PageContainer>} />
            <Route path="/facilities" element={<PageContainer><Facilities /></PageContainer>} />
            <Route path="/hostel" element={<PageContainer><Hostel /></PageContainer>} />
            <Route path="/admissions" element={<PageContainer><Admissions /></PageContainer>} />
            <Route path="/fees" element={<PageContainer><Fees /></PageContainer>} />
            <Route path="/transport" element={<PageContainer><Transport /></PageContainer>} />
            <Route path="/gallery" element={<PageContainer><Gallery /></PageContainer>} />
            <Route path="/contact" element={<PageContainer><Contact /></PageContainer>} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  )
}

export default App