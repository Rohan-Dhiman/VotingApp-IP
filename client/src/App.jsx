import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Card from './components/Card'
import Dashboard from './pages/Dashboard'
import ResultPage from './pages/ResultPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './pages/Profile'
import VotingPage from './pages/VotingPage'
import PastPolls from './pages/PastPolls'
import AvailablePolls from './pages/AvailablePolls'


function App() {

  return (
    
    <div className="bg-gray-100 min-h-screen h-full">

      <Navbar></Navbar>
      
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/results" element={<ResultPage />} />
          <Route path='/pastPolls' element={<PastPolls/>} />
          <Route path="/availablePolls" element={<AvailablePolls/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/votingPanel" element={<VotingPage/>} />
        </Routes>
      

      <Footer></Footer>
      
    </div>

    )
}

export default App
