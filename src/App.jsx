import { Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import './App.css';
import RegisterPage from './pages/register/RegisterPage';
import Login from './pages/login/LoginPage';
import HomePage from './pages/home/HomePage';
import ProfilePage from './pages/profile/ProfilePage';
import Mail from './pages/mail/Mail';

function App() {
  return (
    <div className='font-opensans'>
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path='mail' element={<Mail />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
