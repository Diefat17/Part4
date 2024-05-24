const blogsRouter = require('express').Router()
const Blog = require('../models/blog')

blogsRouter.get('/', (request, response) => {
  Blog
  .find({})
  .then(blogs => {
    response.json(blogs)
  })
})

blogsRouter.post('/', (req, response) => {
    const blog = new Blog(req.body)

    
    blog
      .save()
      .then(result => {
        response.status(201).json(result)
      })
  })

  module.exports = blogsRouter