import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../src/dinda.css";

const WelDay = () => {
  const [isAsramaDropdownOpen, setIsAsramaDropdownOpen] = useState(false);
  const [isKontakDropdownOpen, setIsKontakDropdownOpen] = useState(false);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const navigate = useNavigate();

  const toggleAsramaDropdown = () => {
    setIsAsramaDropdownOpen(!isAsramaDropdownOpen);
    setIsKontakDropdownOpen(false);
  };

  const toggleKontakDropdown = () => {
    setIsKontakDropdownOpen(!isKontakDropdownOpen);
    setIsAsramaDropdownOpen(false);
  };

  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleCommentSubmit = () => {
    if (newComment.trim() !== "") {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  return (
    <div className="welcoming-day bg-gray-100 min-h-screen flex flex-col items-center pt-24">
      <header className="header fixed top-0 left-0 right-0 flex items-center justify-between px-8 py-4 bg-white shadow-md z-50 w-full">
        <img
          src="https://mf-chan.com/tel-u-logo/lib/Tel-U/primer-utama.png"
          alt="Telkom University"
          className="logo h-12"
        />
        <nav className="navbar flex justify-center space-x-10 flex-grow">
          <button
            onClick={() => navigate("/")}
            className="text-[#1e1e1e] hover:text-[#B41515]"
          >
            Beranda
          </button>
          <button
            onClick={() => navigate("/tentang")}
            className="text-[#1E1E1E] hover:text-[#B41515]"
          >
            Tentang
          </button>

          {/* dropdown Asrama */}
          <div className="relative">
            <button
              onClick={toggleAsramaDropdown}
              className="text-[#B41515] hover:text-[#B41515] border-b-2 border-[#B41515] pb-1"
            >
              Asrama
              <span className="ml-2">▼</span>
            </button>

            {/* dropdown */}
            {isAsramaDropdownOpen && (
              <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg mt-2 right-0 w-48 z-10">
                <button
                  onClick={() => navigate("/asrama/informasi-asrama")}
                  className="block px-4 py-2 text-[#1E1E1E] hover:bg-gray-200"
                >
                  Informasi Asrama
                </button>
                <button
                  onClick={() => navigate("/asrama/berita")}
                  className="block px-4 py-2 text-[#1E1E1E] hover:bg-gray-200"
                >
                  Berita
                </button>
                <button
                  onClick={() => navigate("/asrama/galeri")}
                  className="block px-4 py-2 text-[#1E1E1E] hover:bg-gray-200"
                >
                  Galeri
                </button>
                <button
                  onClick={() => navigate("/asrama/tokenpay")}
                  className="block px-4 py-2 text-[#1E1E1E] hover:bg-gray-200"
                >
                  TokenPay
                </button>
              </div>
            )}
          </div>

          {/* dropdown Kontak */}
          <div className="relative">
            <button
              onClick={toggleKontakDropdown}
              className="text-[#1E1E1E] hover:text-[#B41515] flex items-center"
            >
              Kontak
              <span className="ml-2">▼</span>
            </button>

            {/* dropdown */}
            {isKontakDropdownOpen && (
              <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg mt-2 right-0 w-48 z-10">
                <button
                  onClick={() => navigate("/kontak/hubungi")}
                  className="block px-4 py-2 text-[#1E1E1E] hover:bg-gray-200"
                >
                  Hubungi
                </button>
                <button
                  onClick={() => navigate("/kontak/masalah")}
                  className="block px-4 py-2 text-[#1E1E1E] hover:bg-gray-200"
                >
                  Laporan Masalah
                </button>
                <button
                  onClick={() => navigate("/kontak/faq")}
                  className="block px-4 py-2 text-[#1E1E1E] hover:bg-gray-200"
                >
                  FAQ
                </button>
              </div>
            )}
          </div>
        </nav>

        <div className="header-icons flex space-x-4">
          <img
            src="public/user2.png"
            alt="User Profile"
            className="profile-icon w-8 h-8 cursor-pointer"
            onClick={() => navigate("/profile")}
          />
        </div>
      </header>

      <div className="content bg-white shadow-md rounded-lg mt-8 w-11/12 max-w-4xl">
        <img
          src="https://smb.telkomuniversity.ac.id/wp-content/uploads/2023/05/Asrama-1.jpg"
          alt="Welcoming Day"
          className="rounded-t-lg w-[900px] h-[450px] object-cover"
        />
        <div className="p-6 text-justify">
          <h1 className="text-3xl font-bold mb-2 text-[#B41515]">Welcoming Day</h1>
          <p className="text-gray-500 mb-6">5 Oktober 2024</p>
          <p className="text-gray-700 leading-relaxed mb-3">
            Pada 5 Oktober 2024, asrama dengan penuh antusiasme mengadakan Welcoming Day untuk menyambut para penghuni baru. Acara ini dirancang khusus untuk membantu mereka merasa lebih nyaman dan cepat beradaptasi di lingkungan baru. Dimulai dengan tur keliling asrama, para penghuni diajak mengenal lebih dalam setiap fasilitas yang akan menunjang keseharian mereka, seperti ruang belajar, dapur bersama, ruang rekreasi, dan area olahraga. Tak lupa, aturan-aturan penting serta tata tertib asrama juga dijelaskan secara detail, agar para penghuni baru dapat segera menyesuaikan diri.
          </p>
          <p className="text-gray-700 leading-relaxed mb-3">
            Setelah tur, acara dilanjutkan dengan sesi perkenalan yang interaktif. Para penghuni baru diberi kesempatan untuk memperkenalkan diri secara unik, berbagi cerita, latar belakang, dan harapan mereka selama tinggal di asrama. Sesi ini menghadirkan suasana hangat yang mendorong para penghuni untuk saling mengenal, bertukar pengalaman, dan merasa diterima di lingkungan baru.
          </p>
          <p className="text-gray-700 leading-relaxed mb-3">
            Kemeriahan Welcoming Day pun semakin terasa saat memasuki sesi permainan kelompok. Dengan beragam aktivitas yang mengandalkan kerjasama, strategi, dan semangat kebersamaan, para penghuni terlibat dalam kompetisi yang menyenangkan. Setiap tim bekerja sama untuk menyelesaikan tantangan, yang tidak hanya menghibur tetapi juga mempererat ikatan di antara mereka. Melalui aktivitas ini, persahabatan baru pun terjalin dan suasana kekeluargaan mulai terasa.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Di akhir acara, para penghuni baru merasa lebih percaya diri dan siap menjalani kehidupan asrama dengan lingkungan yang mendukung. Semoga Welcoming Day ini membawa energi positif dan menjadi langkah awal yang baik bagi setiap penghuni untuk meraih pengalaman berharga selama tinggal di asrama.          </p>
          <div className="flex justify-between items-center mb-2 mt-6">
            <p className="text-gray-500">Publisher | 6 Oktober 2024 | {comments.length} Comment</p>
          </div>
        </div>
      </div>

      {/* Comments */}
        <div className="comments-section bg-white shadow-md rounded-lg mt-8 mb-10 w-11/12 max-w-4xl p-6">
        <h2 className="text-[#1e1e1e] text-2xl font-bold mb-4">Comments</h2>
        {comments.length > 0 ? (
            <ul className="space-y-4">
            {comments.map((comment, index) => (
                <li
                key={index}
                className="bg-[#e8e8e8] p-4 rounded-lg border border-gray-300 text-[#585858]"
                >
                {comment}
                </li>
            ))}
            </ul>
        ) : (
            <p className="text-gray-500 mt-1">Belum ada komentar. Jadilah yang pertama!</p>
        )}

        <div className="mt-4">
            <textarea
            placeholder="Beri komentar disini..."
            className="w-full h-24 border rounded-lg p-4 mb-2"
            value={newComment}
            onChange={handleCommentChange}
            ></textarea>
            <div className="text-right">
                <button
                    onClick={handleCommentSubmit}
                    className="bg-[#B41515] text-white py-2 px-7 rounded-full hover:bg-red-500 shadow-lg transition duration-300 ease-in-out"
                >
                    Kirim
                </button>
            </div>

        </div>
        </div>

        {/* Footer */}
        <footer className="bg-red-700 text-white w-full">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <img 
              src="https://mf-chan.com/tel-u-logo/lib/Tel-U/primer-utama.png" 
              alt="Telkom University" 
              className="h-12 mb-4 brightness-0 invert"
              />
              <div className="flex space-x-4">
                <a href="https://instagram.com/telkomuniversity" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200">
                  <img src="/instagram-icon.svg" alt="Instagram" className="w-6 h-6" />
                </a>
                <a href="https://wa.me/yourwhatsappnumber" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200">
                  <img src="/whatsapp-icon.svg" alt="WhatsApp" className="w-6 h-6" />
                </a>
                <a href="https://youtube.com/@TelkomUniversity" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200">
                  <img src="/youtube-icon.svg" alt="YouTube" className="w-6 h-6" />
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">LINK CEPAT</h3>
              <ul className="space-y-2">
                <li><a href="/" className="hover:text-gray-200">Beranda</a></li>
                <li><a href="/tentang" className="hover:text-gray-200">Tentang</a></li>
                <li><a href="/asrama/informasi-asrama" className="hover:text-gray-200">Informasi Asrama</a></li>
                <li><a href="/asrama/berita" className="hover:text-gray-200">Berita</a></li>
                <li><a href="/asrama/tokenpay" className="hover:text-gray-200">TokenPay</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">LINK PENTING</h3>
              <ul className="space-y-2">
                <li><a href="https://telkomuniversity.ac.id" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200">Telkom University</a></li>
                <li><a href="https://igracias.telkomuniversity.ac.id" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200">iGracias</a></li>
                <li><a href="https://lms.telkomuniversity.ac.id" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200">CeLOE</a></li>
                <li><a href="/kontak/faq" className="hover:text-gray-200">FAQ</a></li>
                <li><a href="/kontak/masalah" className="hover:text-gray-200">Laporan Masalah</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">KONTAK</h3>
              <div className="space-y-2">
                <p>Senin - Jumat: 08.00 - 16.00 WIB</p>
                <p>asrama@telkomuniversity.ac.id</p>
                <p>WhatsApp: +62 812-3456-7890</p>
                <div className="mt-4">
                  <h4 className="font-semibold mb-2">Alamat:</h4>
                  <p>Gedung Asrama Putra/Putri</p>
                  <p>Telkom University</p>
                  <p>Jl. Telekomunikasi No. 1</p>
                  <p>Bandung, Jawa Barat 40257</p>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center">
            <p>&copy; {new Date().getFullYear()} Telkom University. All rights reserved.</p>
          </div>
        </div>
      </footer>
      
    </div>
  );
};

export default WelDay;
