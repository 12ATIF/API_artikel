const express = require('express');
const cors = require('cors');
const articlesRoutes = require('./routes/articles');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/articles', articlesRoutes);

// Home route
app.get('/', (req, res) => {
  res.json({
    message: "Selamat datang di API Artikel Cabai",
    endpoints: {
      getAllArticles: "/api/articles/chili",
      getArticleByIndex: "/api/articles/chili/:index",
      searchArticles: "/api/articles/chili/search/:keyword"
    }
  });
});

// Error handling
app.use((req, res) => {
  res.status(404).json({ error: "Endpoint tidak ditemukan" });
});

// Menjalankan server
app.listen(port, () => {
  console.log(`Server API Artikel Cabai berjalan di http://localhost:${port}`);
});