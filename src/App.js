import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

import Home from './Pages/Home';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import About from './Pages/About';
import PrivateRoute from './Pages/PrivateRoute';
import UserDashboard from './Pages/UserDashboard';
import UserProfile from './UserRoutes/UserProfile';
import UserProvider from './Context/userProvider';
import NewsFeed from './Pages/NewsFeed';

function App() {
  return (


    <UserProvider>
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/about" element={<About />} />

          <Route path="/news" element={<NewsFeed />} />
          {/* Protect /private route with PrivateRoute */}
          <Route path='/user' element={<PrivateRoute />}>
            <Route path="dashboard" element={<UserDashboard />} />
            <Route path='profile' element={<UserProfile />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </UserProvider>
  );
}

export default App;
