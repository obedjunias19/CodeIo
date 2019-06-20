'use strict';

require('dotenv').config({ path: './sample.variables' });
const connectToDatabase = require('./db');
const Users = require('./models/user.models.js');
const posts = require('./models/posts.model.js');
const comments = require('./models/comments.model.js');


module.exports.signUp = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  connectToDatabase().then((client) => {
    var db = client.db('testDb')
    return db.collection('users').insert(event.body, () => {
      console.log('user created')
    }).catch((err) => {
      return {
        body: JSON.stringify(err),
        statuscode: 500
      }
    })
  }).catch(err => {
    console.log(err)
    return { body: JSON.stringify(err), statuscode: 500 }
  })
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
  }).then(posts => callback(null, {
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
  }).then(comments => callback(null, {
    statuscode: 200,
    body: JSON.stringify(comments)
  })).catch(err => callback(null, {
    statuscode: err.statuscode || 500,
    headers: {'Content-Type': 'text/plain'},
    body: 'Could not get comment'
  }))
}

module.exports.getAllComment = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false

  return connectToDatabase().then(() => {
    comments.find()
  }).then(comments => callback(null, {
    statuscode: 200,
    body: JSON.stringify(comments)
  })).catch(err => callback(null, {
    statuscode: err.statuscode || 500,
    headers: {'Content-Type': 'text/plain'},
    body: 'Error getting all comments'
  }))
}

module.exports.postComment = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false

  return connectToDatabase().then(() => {
    comments.create(JSON.parse(event.body))
  }).then(comments => callback(null, {
    statuscode: 200,
    body: JSON.stringify(comments)
  })).catch(err => callback(null, {
    statuscode: err.statuscode || 500,
    headers: {'Content-Type': 'text/plain'},
    body: 'Could not post comment'
  }))
}