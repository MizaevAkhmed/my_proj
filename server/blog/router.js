const express = require('express')
const router = express.Router()
const {upload} = require('./multer')
const {createBlog, editBlog, deleteBlog} = require('./controller')
// const {isAuth} = require('../auth/middlewares')

router.post('/api/blog/new', upload.single('image'), createBlog)
router.post('/api/blog/edit', upload.single('image'), editBlog)
router.delete('/api/blog/:id', deleteBlog)

module.exports = router;