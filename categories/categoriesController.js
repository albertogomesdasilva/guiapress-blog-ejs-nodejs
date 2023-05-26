const express = require('express')
const router = express.Router()

router.get('/categories', (req, res) => {
    res.render('categories')
})

router.get('/admin/categories/new', (req, res) => {
    res.send('Admin/categories/New')
})

module.exports = router