import './App.css'
import HomePage from './Components/HomePage/homepage'
import Login from './Components/LoginPage/Login'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProfilePage from './Components/ProfilePage/ProfilePage';
import PublicProfile from './Components/PublicProfile/PublicProfile';
import SwapRequest from './Components/SwapRequest/SwapRequest';

function App() {


  return (
    <>
      <div className="min-h-screen inset-0 -z-10 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
          <Router>
            <Routes>
              {/* <Route path="/" element={<HomePage />} /> */}
              <Route path="/login" element={<Login />} />
              {/* <Route path="/profile" element={<ProfilePage />} /> */}
              {/* <Route path="/" element={<ProfilePage />} /> */}
              {/* <Route path="/" element={<PublicProfile />} /> */}
              <Route path="/" element={<SwapRequest />} />

            </Routes>
          </Router>
      </div>
    </>
  )
}

export default App
