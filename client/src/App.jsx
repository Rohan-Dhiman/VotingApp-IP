import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Card from './components/Card'
import Dashboard from './pages/Dashboard'
import ResultPage from './pages/ResultPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './pages/Profile'
import VotingPage from './pages/VotingPage'
import PastPolls from './pages/PastPolls'


function App() {

  return (
    
    <div className="bg-gray-100 min-h-screen h-full">

      <Navbar></Navbar>
      
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/polls" element={<ResultPage />} />
          <Route path='/pastpolls' element={<PastPolls/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/votingPanel" element={<VotingPage/>} />
        </Routes>
      

      <Footer></Footer>
      
    </div>

    )
}

export default App
