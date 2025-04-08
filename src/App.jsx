import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Navigation from "./components/Navigation"
import Footer from "./components/Footer"
import ChildProtection from "./pages/ChildProtection"
import PrivacyPolicy from "./pages/PrivacyPolicy"

function App() {

  return (
    <>
      <Router>
        <div className="sticky top-0 z-1000">
          <Navigation/>
        </div>
        <Routes>
          <Route  path="/" element={<Home />} />
          <Route  path="/ChildProtection" element={<ChildProtection />} />
          <Route  path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App
