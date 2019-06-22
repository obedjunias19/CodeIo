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
    return db.collection('users').insert(JSON.parse(event.body), () => {
      console.log("User successfully created!!!")
    })
  }).catch(err => {
    console.log(err)
    return{ 
      body: JSON.stringify(err), 
      statuscode: 500 
    }
  })
}


module.exports.getPosts = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  connectToDatabase().then((client) => {
    var db = client.db('testDb')
    return db.collection('posts').findById(JSON.parse(event.body), () => {
      console.log("Post found")
    })
  }).catch(err => {
    console.log(err)
    return{
      body: JSON.stringify(err),
      statuscode: 500
    }
  })
}

module.exports.getAllPost = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  connectToDatabase().then((client) => {
    var db = client.db('testDb')
    return db.collection('posts').find(() => {
      console.log("Found all posts")
    })
  }).catch(err => {
    console.log(err)
    return{
      body: JSON.stringify(err),
      statuscode: 500
    }
  })
}

module.exports.postPost = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false

  connectToDatabase().then((client) => {
    var db = client.db('testDb')
    return db.collection('posts').insert(JSON.parse(event.body), () => {
      console.log("Post successfully created!!!")
    })
  }).catch(err => {
    console.log(err)
    return{ 
      body: JSON.stringify(err), 
      statuscode: 500 
    }
  })
}

module.exports.getComment = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false

  connectToDatabase().then((client) => {
    var db = client.db('testDb')
    return db.collection('comments').findById(JSON.parse(event.body), () => {
      console.log("Comment found")
    })
  }).catch(err => {
    console.log(err)
    return{
      body: JSON.stringify(err),
      statuscode: 500
    }
  })
}

module.exports.getAllComment = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false

  connectToDatabase().then((client) => {
    var db = client.db('testDb')
    return db.collection('comments').find(() => {
      console.log("Found all comments")
    })
  }).catch(err => {
    console.log(err)
    return{
      body: JSON.stringify(err),
      statuscode: 500
    }
  })
}

module.exports.postComment = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false

  connectToDatabase().then((client) => {
    var db = client.db('testDb')
    return db.collection('comments').insert(JSON.parse(event.body), () => {
      console.log("Comment successfully created!!!")
    })
  }).catch(err => {
    console.log(err)
    return{ 
      body: JSON.stringify(err), 
      statuscode: 500 
    }
  })
}