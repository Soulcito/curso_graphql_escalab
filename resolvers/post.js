const posts = require('../temp');

// query generic
const totalPosts = () => posts.length;
const allPosts = () => posts;

// mutation
const newPost = (parent, args) => {
  console.log(args);
  const post = {
    id: posts.length + 1,
    ...args.input
  };
  // push post
  posts.push(post);
  return post;
}


module.exports = {
  Query: {
    totalPosts,
    allPosts
  },
  Mutation: {
    newPost
  }
}