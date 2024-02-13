const Blog = require('./blog')
const fs = require('fs')
const path = require('path')
const createBlog = async (req, res) => {
    if(req.file && req.body.blog_name.length > 2 &&
        req.body.category.length > 0 &&
        req.body.description.length > 0) 
    {
        await new Blog({
            blog_name: req.body.blog_name,
            category: req.body.category,
            image: `/images/blog/${req.file.filename}`,
            description: req.body.description, 
            author: req.user._id
        }).save()
        res.redirect(`/my-blogs`)

    }else{
        res.redirect('/new?error=1')
    }
}

const editBlog = async(req, res) => {
    if(req.file && req.body.blog_name.length > 2 &&
        req.body.category.length > 0 &&
        req.body.description.length > 0
    ){
        const blog = await Blog.findById(req.body.id)
        fs.unlinkSync(path.join(__dirname + '../../../public' + blog.image))
        blog.blog_name = req.body.blog_name;
        blog.category = req.body.category;
        blog.description = req.body.description;
        blog.image = `/images/blog/${req.file.filename}`;
        blog.author = req.user._id;
        blog.save()

        // await Blog.findByIdAndUpdate(req.body.id, {
        //     blog_name: req.body.blog_name,
        //     category: req.body.category,
        //     image: `/images/blog/${req.file.filename}`,
        //     description: req.body.description,
        //     author: req.user._id
        // }).save()
        res.redirect('/my-blogs')
    }else{
        res.redirect(`/edit/${req.body._id}?error=1`)
    }
}

const deleteBlog = async(req, res) => {
    const blog = await Blog.findById(req.params.id)
    if(blog){
        fs.unlinkSync(path.join(__dirname + '../../../public' + blog.image))
        await Blog.deleteOne({_id: req.params.id})
        res.status(200).send('Ok')
    }else{
        res.status(404).send('Not found')
    }
}

module.exports = {
    createBlog,
    editBlog,
    deleteBlog
}