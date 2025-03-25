const express = require('express');
const router = express.Router();
const chiliArticles = require('../data/chiliArticles');

// Mendapatkan semua artikel cabai
router.get('/chili', (req, res) => {
  res.json(chiliArticles);
});

// Mendapatkan artikel berdasarkan index
router.get('/chili/:index', (req, res) => {
  const index = parseInt(req.params.index);
  
  if (isNaN(index) || index < 0 || index >= chiliArticles["-ChiliInfo2025"].length) {
    return res.status(404).json({ error: "Artikel tidak ditemukan" });
  }
  
  res.json(chiliArticles["-ChiliInfo2025"][index]);
});

// Mendapatkan artikel berdasarkan keyword pencarian
router.get('/chili/search/:keyword', (req, res) => {
  const keyword = req.params.keyword.toLowerCase();
  const filteredArticles = chiliArticles["-ChiliInfo2025"].filter(article => 
    article.title.toLowerCase().includes(keyword) || 
    article.desc.toLowerCase().includes(keyword)
  );
  
  if (filteredArticles.length === 0) {
    return res.status(404).json({ error: "Tidak ada artikel yang sesuai dengan kata kunci" });
  }
  
  res.json({ "-ChiliInfo2025": filteredArticles });
});

module.exports = router;