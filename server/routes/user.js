const express = require('express')
const {
  getusers, 
  getuser, 
  createuser, 
  deleteuser, 
  updateuser
} = require('../controllers/user')

const router = express.Router()

// GET all users
router.get('/', getusers)

// GET a single user
router.get('/:id', getuser)

// POST a new user
router.post('/', createuser)

// DELETE a user
router.delete('/:id', deleteuser)

// UPDATE a user
router.patch('/:id', updateuser)

module.exports = router