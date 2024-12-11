import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../src/index.css";
import { getChatGPTResponse } from '../API/chatgpt';

const FAQ = () => {
  const navigate = useNavigate();
  const [isAsramaDropdownOpen, setAsramaDropdownOpen] = useState(false);
  const [isKontakDropdownOpen, setKontakDropdownOpen] = useState(false);
  
  const [chatMessages, setChatMessages] = useState([
    { text: "Halo, DormFriend disini! Ada yang bisa saya bantu mengenai asrama? :)", isBot: true },
  ]);
  const [userMessage, setUserMessage] = useState("");
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const faqData = [
    {
      question: "Apa yang harus dilakukan jika ada kerusakan di kamar atau fasilitas bersama?",
      answer:
        "Penghuni harus segera melaporkan kerusakan kepada pengelola asrama dengan mengajukan form laporan masalah yang tersedia di web my.dorm.",
    },
    {
      question: "Bagaimana sistem pembagian kamar dan penentuan teman sekamar?",
      answer:
        "Proses pembagian teman sekamar biasanya dilakukan secara acak oleh pengelola asrama, atau dapat berdasarkan preferensi yang diisi mahasiswa dalam formulir pendaftaran.",
    },
    {
      question: "Apa kebijakan mengenai tamu di asrama?",
      answer:
        "Kebijakan tamu di asrama mengatur jam kunjungan, batasan jumlah tamu, dan prosedur keamanan.",
    },
    {
      question: "Apakah ada kegiatan rutin di asrama?",
      answer:
        "Banyak asrama mengadakan berbagai kegiatan sosial seperti acara olahraga, diskusi, atau program kebudayaan.",
    },
    {
      question: "Bagaimana sistem keamanan di asrama?",
      answer:
        "Keamanan di asrama dijaga ketat dengan kunci utama, CCTV 24 jam, dan pengawasan petugas keamanan.",
    },
    {
      question: "Apakah ada pembatasan waktu untuk kembali ke asrama?",
      answer:
        "Sebagian besar asrama menetapkan jam malam pada pukul 22.00 untuk menjaga keamanan penghuni.",
    },
  ];

  const toggleAsramaDropdown = () => setAsramaDropdownOpen(!isAsramaDropdownOpen);
  const toggleKontakDropdown = () => setKontakDropdownOpen(!isKontakDropdownOpen);

  const handleSendMessage = async () => {
    if (!userMessage.trim()) return;

    // Menambahkan pesan pengguna ke chat
    setChatMessages([...chatMessages, { text: userMessage, isBot: false }]);
    setUserMessage(""); // Reset input pengguna

    // Menggunakan API untuk mendapatkan respons ChatGPT
    try {
      const response = await getChatGPTResponse(userMessage);
      setChatMessages((prev) => [
        ...prev,
        { text: response, isBot: true },  // Menambahkan respons bot ke chat
      ]);
    } catch (error) {
      console.error("Error fetching response from ChatGPT:", error);
      setChatMessages((prev) => [
        ...prev,
        { text: "Maaf, saya tidak bisa menjawab pertanyaan Anda saat ini.", isBot: true },
      ]);
    }
  };

  return (
    <div className="FAQ-page">
      {/* Header */}
      <header className="header fixed top-0 left-0 right-0 flex items-center justify-between px-8 py-4 bg-white shadow-md z-50">
        <img
          src="https://mf-chan.com/tel-u-logo/lib/Tel-U/primer-utama.png"
          alt="Telkom University"
          className="logo h-12"
        />
        <nav className="navbar flex justify-center space-x-10 flex-grow">
          <button
            onClick={() => navigate("/")}
            className="text-[#1E1E1E] hover:text-[#B41515]"
          >
            Beranda
          </button>
          <button
            onClick={() => navigate("/tentang")}
            className="text-[#1E1E1E] hover:text-[#B41515]"
          >
            Tentang
          </button>

          {/* Dropdown Asrama */}
          <div className="relative">
            <button
              onClick={toggleAsramaDropdown}
              className="text-[#1E1E1E] hover:text-[#B41515] flex items-center"
            >
              Asrama
              <span className="ml-2">▼</span>
            </button>
            {isAsramaDropdownOpen && (
              <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg mt-2 w-48 z-10">
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

          {/* Dropdown Kontak */}
          <div className="relative">
            <button
              onClick={toggleKontakDropdown}
              className="text-[#B41515] hover:text-[#B41515] border-b-2 border-[#B41515] pb-1"
            >
              Kontak
              <span className="ml-2">▼</span>
            </button>
            {isKontakDropdownOpen && (
              <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg mt-2 w-48 z-10">
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
            src="/user.png"
            alt="User Profile"
            className="profile-icon w-8 h-8 cursor-pointer"
            onClick={() => navigate("/profile")}
          />
        </div>
      </header>

      <main>
        {/* FAQ Section */}
        <section className="faq-section">
          <h1 className="faq-judul text-[#b41515] font-bold text-center text-2x1 mb-4">Frequently Asked Questions</h1>
          <p className="faq-description text-center">
            Kami menyediakan jawaban atas pertanyaan umum untuk membantu Anda memahami kebijakan, fasilitas, dan layanan asrama.
          </p>
          <div className="faq-container">
            {faqData.map((faq, index) => (
              <div className="faq-item" key={index}>
                <div
                  className="faq-question"
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                >
                  <span className="question-icon">❓</span>
                  <h3>{faq.question}</h3>
                </div>
                {openFaqIndex === index && <p className="faq-answer">{faq.answer}</p>}
              </div>
            ))}
          </div>
        </section>

        {/* Chat Section */}
        <section className="dormbot-section mb-24">
          <h2>Tanya DormBot</h2>
          <div className="chat-container">
            <div className="chat-messages">
              {chatMessages.map((msg, index) => (
                <div key={index} className={msg.isBot ? "bot" : "user"}>
                  {msg.text}
                </div>
              ))}
            </div>
            <div className="chat-input">
              <input
                type="text"
                value={userMessage}
                onChange={(e) => setUserMessage(e.target.value)}
                placeholder="Ketik pesan"
              />
              <button onClick={handleSendMessage}>➤</button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-red-700 text-white mt-auto">
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

export default FAQ;
