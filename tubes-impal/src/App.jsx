import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './Pages/Landing';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Profile from './Pages/Profile';
/*import Tentang from './Pages/Tentang';
import Kontak from './Pages/Kontak';
import Kamar from './Pages/Asrama';
import Fasilitas from './Pages/Berita';
import Galeri from './Pages/Galeri';
import TokenPay from './Pages/TokenPay';*/

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Landing />} />
        <Route path="/profile" element={<Profile />} />
        {/*<Route path="/tentang" element={<Tentang />} />
        <Route path="/kontak" element={<Kontak />} />
        <Route path="/asrama" element={<Asrama />} />
        <Route path="/berita" element={<Berita />} />
        <Route path="/galeri" element={<Galeri />} />
        <Route path="/tokenpay" element={<TokenPay />} />*/}
      </Routes>
    </Router>
  );
}

export default App;
