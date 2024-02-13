const express = require('express')
const router = express.Router();
const Category = require('../category/category')
const User = require('../auth/User')
const Blog = require('../blog/blog')

router.get('/', async (req, res) => {
    const allCategory = await Category.find()
    const blogs = await Blog.find().populate('author', 'full_name')
    res.render("home-page" , {category: allCategory, user: req.user ? req.user: {}, blogs})
})

router.get('/my-blogs', async (req, res) => {
    const allCategory = await Category.find()
    const blogs = await Blog.find().populate('author', 'full_name')
    res.render("my-blogs" , {category: allCategory, user: req.user ? req.user: {}, blogs})
})

router.get('/blogPageWithAuthorizedUser', async(req, res) => {
    const allCategory = await Category.find()
    const blogs = await Blog.find().populate('author', 'full_name')
    res.render("blogPageWithAuthorizedUser", {category: allCategory, user: req.user ? req.user: {}, blogs})
})

router.get('/blogPageWithUnauthorizedUser', async(req, res) =>{
    const allCategory = await Category.find()
    const blogs = await Blog.find().populate('author', 'full_name')
    res.render("blogPageWithUnauthorizedUser", {category: allCategory, user: req.user ? req.user: {}, blogs})
})

router.get('/new-blog', async(req, res) => {
    const allCategory = await Category.find()
    res.render("new-blog", {category: allCategory})
})

router.get('/edit/:id', async(req, res) => {
    const allCategory = await Category.find()
    const blogs = await Blog.findById(req.params.id)
    res.render("editBlog", {category: allCategory, user: req.user ? req.user: {}, blogs})
})

router.get('/profile', async(req, res) => {
    const user = await User.findById(req.params.id)
    res.render("profile", {user: req.user ? req.user: {}})
})

router.get('/login-to-account', (req, res) => {
    res.render("login-to-account")
})

router.get('/account-registration', (req, res) => {
    res.render("account-registration")
})

module.exports = router