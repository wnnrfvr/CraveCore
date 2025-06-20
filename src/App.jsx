// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home.jsx" // Added .jsx extension
import Navigation from "./components/Navigation.jsx" // Added .jsx extension
import Footer from "./components/Footer.jsx" // Added .jsx extension
import ChildProtection from "./pages/ChildProtection.jsx" // Added .jsx extension
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx" // Added .jsx extension

// Import the new pages
import DataDeletionRequest from "./pages/DataDeletionRequest.jsx" // Added .jsx extension
import BugReport from "./pages/BugReport.jsx" // Added .jsx extension
import BecomeWriter from "./pages/BecomeWriter.jsx" // Added .jsx extension


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
          {/* New Routes Added Below */}
          <Route  path="/DataDeletionRequest" element={<DataDeletionRequest />} />
          <Route  path="/BugReport" element={<BugReport />} />
          <Route  path="/BecomeWriter" element={<BecomeWriter />} />
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App
