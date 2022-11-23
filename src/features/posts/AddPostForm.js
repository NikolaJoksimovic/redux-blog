import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { addPost } from "./postsSlice";

const AddPostForm = () => {
  const [input, setInput] = useState({ postTitle: "", postContent: "" });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput({ ...input, [name]: value });
  };

  // console.log(input.postTitle, input.postContent);
  const handleSubmit = () => {
    const title = input.postTitle;
    const content = input.postContent;
    if (title && content) {
      dispatch(
        addPost({
          id: nanoid(),
          title,
          content,
        })
      );
      setInput({ postTitle: "", postContent: "" });
    }
  };
  // console.log(input);
  return (
    <section>
      <h2>Add a New Post</h2>
      <form action=''>
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
        <button type='button' onClick={handleSubmit}>
          Save Post
        </button>
      </form>
    </section>
  );
};

export default AddPostForm;
