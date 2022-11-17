import React, { useState } from "react";

const AddPostForm = () => {
  const [input, setInput] = useState({ title: "", content: "" });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput({ ...input, [name]: value });
  };

  return (
    <section>
      <h2>Add a New Post</h2>
      <form action=''>
        <label htmlFor='postTitle'>Post Title: </label>
        <input
          type='text'
          id='postTitle'
          name='postTitle'
          value={input.title}
          onChange={handleChange}
        />
        <label htmlFor='postContent'>Content: </label>
        <textarea
          name='postContent'
          id='postContent'
          cols='30'
          rows='10'
          value={input.content}
          onChange={handleChange}
        ></textarea>
        <button type='submit'>Save Post</button>
      </form>
    </section>
  );
};

export default AddPostForm;
