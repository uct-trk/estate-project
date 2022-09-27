import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Explore from './pages/Explore';
import ForgotPassword from './pages/ForgotPassword';
import Offers from './pages/Offers';
import Profile from './pages/Profile';
import Signin from './pages/Signin';
import SignUp from './pages/SignUp';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Explore />} />
          <Route path='/offers' element={<Offers />} />
          <Route path='/profile' element={<Signin />} />
          <Route path='/sign-in' element={<SignUp />} />
          <Route path='/sign-up' element={<ForgotPassword />} />
          <Route path='/forgot-password' element={<Explore />} />
        </Routes>
        <Navbar />
      </Router>
    </>
  );
}

export default App;
