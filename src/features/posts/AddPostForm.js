import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAllUsers } from "../users/usersSlice";
import { addPost } from "./postsSlice";

const AddPostForm = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    postTitle: "",
    postContent: "",
    userId: "",
  });
  const users = useSelector(selectAllUsers);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput({ ...input, [name]: value });
  };

  const handleClick = () => {
    const title = input.postTitle;
    const content = input.postContent;
    const userId = input.userId;
    if (title && content) {
      dispatch(addPost(title, content, userId));
      setInput({ postTitle: "", postContent: "", userId: "" });
    }
  };
  const usersOptions = users?.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  const canSave =
    Boolean(input.postTitle) &&
    Boolean(input.postContent) &&
    Boolean(input.userId);

  return (
    <section id='form-section'>
      <h2>Add a New Post</h2>
      <form action=''>
        <label htmlFor='userId'>Author: </label>
        <select
          type='text'
          id='userId'
          name='userId'
          value={input.userId}
          onChange={handleChange}
        >
          <option value=''></option>
          {usersOptions}
        </select>
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
        <button type='button' disabled={!canSave} onClick={handleClick}>
          Save Post
        </button>
      </form>
    </section>
  );
};

export default AddPostForm;
