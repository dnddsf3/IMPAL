import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './Pages/Landing';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Profile from './Pages/Profile';
/*
import Tentang from './Pages/Tentang';
import Kamar from './Pages/Asrama';
import Fasilitas from './Pages/Berita';
import Galeri from './Pages/Galeri';
*/
import Berita from './Pages/Berita';
import InformasiAsrama from './Pages/InformasiAsrama';
import Hubungi from './Pages/Hubungi';
import WelDay from './Pages/WelDay';
import FAQ from './Pages/FAQ';
import TokenPay from './Pages/TokenPay';
import NotificationDetail from './Pages/DetailNotifikasi';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Landing />} />
        <Route path="/profile" element={<Profile />} />
        
        {/*
        <Route path="/tentang" element={<Tentang />} />
        <Route path="/kontak" element={<Kontak />} />
        <Route path="/asrama" element={<Asrama />} />
        <Route path="/asrama/berita" element={<Berita />} />
        <Route path="/asrama/galeri" element={<Galeri />} />
        */}
        <Route path="/asrama/berita" element={<Berita />} />
        <Route path="/asrama/informasi-asrama" element={<InformasiAsrama />} />
        <Route path="/kontak/hubungi" element={<Hubungi />}/>
        <Route path="/asrama/berita/welcoming-day" element={<WelDay />} />
        <Route path="/kontak/faq" element={<FAQ />} />
        <Route path="/asrama/tokenpay" element={<TokenPay />} />
        <Route path="/notifications/:id" element={<NotificationDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
