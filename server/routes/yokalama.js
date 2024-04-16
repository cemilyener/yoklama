const express = require('express')
const {
  getyoklamalar, 
  getyoklama, 
  createyoklama, 
  deleteyoklama, 
  updateyoklama
} = require('../controllers/yoklama')

const router = express.Router()

// GET all yoklamalar
router.get('/', getyoklamalar)

// GET a single yoklama
router.get('/:id', getyoklama)

// POST a new yoklama
router.post('/', createyoklama)

// DELETE a yoklama
router.delete('/:id', deleteyoklama)

// UPDATE a yoklama
router.patch('/:id', updateyoklama)

module.exports = router