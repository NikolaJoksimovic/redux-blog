import React from "react";
import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";
import PostAuthor from "./PostAuthor";

const PostsList = () => {
  const posts = useSelector(selectAllPosts);
  // console.log(posts);
  const renderedPosts = posts.map((post) => {
    console.log(post.id);
    return (
      <article key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.content.substring(0, 100)}</p>
        <PostAuthor userId={post.userId}></PostAuthor>
      </article>
    );
  });
  return (
    <section>
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  );
};

export default PostsList;
