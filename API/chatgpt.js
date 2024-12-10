import axios from 'axios';

// Fungsi untuk mengirim permintaan ke API ChatGPT
export const getChatGPTResponse = async (message) => {
  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions', // URL API OpenAI
      {
        model: 'gpt-3.5-turbo',  // Anda bisa mengganti dengan model yang lebih terbaru jika diperlukan
        messages: [
          { role: 'system', content: 'You are a helpful assistant.' },
          { role: 'user', content: message },
        ],
      },
      {
        headers: {
          'Authorization': `Bearer YOUR_OPENAI_API_KEY`, // Ganti dengan API Key Anda
          'Content-Type': 'application/json',
        },
      }
    );

    return response.data.choices[0].message.content; // Mengambil pesan dari respons API
  } catch (error) {
    console.error('Error fetching data from ChatGPT API:', error);
    return "Maaf, saya tidak bisa menjawab pertanyaan Anda saat ini.";
  }
};
