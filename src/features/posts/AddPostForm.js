import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "./postsSlice";

const AddPostForm = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    postTitle: "",
    postContent: "",
    userId: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput({ ...input, [name]: value });
  };

  const handleClick = () => {
    const title = input.postTitle;
    const content = input.postContent;
    if (title && content) {
      dispatch(addPost(title, content));
      setInput({ postTitle: "", postContent: "" });
    }
  };
  return (
    <section id='form-section'>
      <h2>Add a New Post</h2>
      <form action=''>
        <label htmlFor='author'>Author: </label>
        <input
          type='text'
          id='author'
          name='author'
          value={input.userId}
          onChange={handleChange}
        />
        <label htmlFor='postTitle'>Post Title: </label>
        <input
          type='text'
          id='postTitle'
          name='postTitle'
          value={input.postTitle}
          onChange={handleChange}
        />
        <label htmlFor='postContent'>Content: </label>
        <textarea
          name='postContent'
          id='postContent'
          cols='30'
          rows='10'
          value={input.postContent}
          onChange={handleChange}
        ></textarea>
        <button type='button' onClick={handleClick}>
          Save Post
        </button>
      </form>
    </section>
  );
};

export default AddPostForm;
