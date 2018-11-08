const cors = require('cors');
const express = require('express');

server.use(cors());
server.use(express.json());

const server = require('./api/server.js');
const userRouter = require('./users/userRouter.js');
const postsRouter = require('./posts/postsRouter');

const port = process.env.PORT || 9000;
server.listen(port, () => console.log(`\nAPI running on port ${port}\n`));

//USER METHODS
server.use('/api/users/', userRouter);
server.get('/api/users/:id', userRouter);
server.get('/api/users/posts/:id', userRouter);
server.post('/api/users', userRouter);
server.delete('/api/users/:id', userRouter);
server.put('/api/users/:id', userRouter);

//POSTS METHODS
server.use('/api/posts/', postsRouter);
server.get('/api/posts/:id', postsRouter);
server.post('/api/posts', postsRouter);
server.delete('/api/posts/:id', postsRouter);
server.put('/api/posts/:id', postsRouter);

//A COMMIT TO SEE IF DEPLOY WORKS

//check
