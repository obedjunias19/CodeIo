'use strict';

require('dotenv').config({ path: './variables.env' });
const connectToDatabase = require('./db');
const user = require('./models/user.models');
const posts = require('./models/posts.model');
const comments = require('./models/comments.model');



module.exports.signUpUser = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  connectToDatabase().then(() => {
    user.create(JSON.parse(event.body))
  }).then(user => callback(null, {
    statuscode: 200,
    body: JSON.stringify(user)
  })).catch(err => callback(null, {
    statuscode: err.statuscode || 500,
    headers: { 'Content-Type': 'text/plain' },
    body: 'Could not sign up up.'
  }))
}

module.exports.getPosts = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  return connectToDatabase().then(() => {
    posts.findById(event.pathParameters.id)
  }).then(posts => callback(null, {
    statuscode: 200,
    body: JSON.stringify(posts)
  })).catch(err => callback(null, {
    statuscode: err.statuscode || 500,
    headers: {'Content-Type': 'text/plain'},
    body: 'Could not get post with id'+event.pathParameters.id
  }))
}

module.exports.getAllPost = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  return connectToDatabase().then(() => {
    posts.find()
  }).then(posts => callback(null, {
    statuscode: 200,
    body: JSON.stringify(posts)
  })).catch(err => callback(null, {
    statuscode: err.statuscode || 500,
    headers: {'Content-Type': 'text/plain'},
    body: 'Could not get posts'
  }))
}

module.exports.postPost = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false

  return connectToDatabase().then(() => {
    posts.create(JSON.parse(event.body))
  }).then(posts => callback(nill, {
    statuscode: 200,
    body: JSON.stringify(posts)
  })).catch(err => callback(null, {
    statuscode: err.statuscode || 500,
    headers: {'Content-Type': 'text/plain'},
    body: 'Could not post posts'
  }))
}

module.exports.getComment = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false

  return connectToDatabase().then(() => {
    comments.findById(event.pathParameter.id)
  }).then(comments => callback(nill, {
    statuscode: 200,
    body: JSON.stringify(comments)
  })).catch(err => callback(nill, {
    statuscode: err.statuscode || 500,
    headers: {'Content-Type': 'text/plain'},
    body: 'Could not get comment'
  }))
}

module.exports.getAllComment = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false

  return connectToDatabase().then(() => {
    comments.find()
  }).then(comments => callback(nill, {
    statuscode: 200,
    body: JSON.stringify(comments)
  })).catch(err => callback(nill, {
    statuscode: err.statuscode || 500,
    headers: {'Content-Type': 'text/plain'},
    body: 'Could not get comment'
  }))
}

module.exports.postComment = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false

  return connectToDatabase().then(() => {
    comments.create(JSON.parse(event.body))
  }).then(comments => callback(nill, {
    statuscode: 200,
    body: JSON.stringify(comments)
  })).catch(err => callback(nill, {
    statuscode: err.statuscode || 500,
    headers: {'Content-Type': 'text/plain'},
    body: 'Could not post comment'
  }))
}
