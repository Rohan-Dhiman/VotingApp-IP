import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
import ResultPage from './pages/ResultPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Profile from './pages/Profile'
import VotingPage from './pages/VotingPage'
import PastPolls from './pages/PastPolls'
import AvailablePolls from './pages/AvailablePolls'
import VoterSignup from './pages/VoterSignup'
import CreateElection from './pages/CreateElection'
import CreateCandidate from './pages/CreateCandidate'
import NotFound from './pages/NotFound';


function App() {

  return (
    
    <div className="bg-gray-100 min-h-screen h-full">

      <Navbar></Navbar>
      
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/create/poll" element={<CreateElection/>} />
          <Route path="/create/candidate" element={<CreateCandidate/>} />
          <Route path="/signup" element={<VoterSignup/>}/>
          <Route path="/results" element={<ResultPage />} />
          <Route path='/pastPolls' element={<PastPolls/>} />
          <Route path="/availablePolls" element={<AvailablePolls/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/votingPanel" element={<VotingPage/>} />


          <Route path="*" element={<NotFound/>} />

        </Routes>
      

      <Footer></Footer>
      
    </div>

    )
}

export default App
