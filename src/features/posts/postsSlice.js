import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "Learning Redux toolkit",
    content: "I've heard good things.",
  },
  {
    id: "2",
    title: "Slices",
    content: "The more I say slice, the more I want pizza.",
  },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost(state, action) {
      state.push(action.payload);
    },
  }, // ovde push cuva prvobitni redosled jer koristi immet :)
});

export const selectAllPosts = (state) => state.posts; //Da li ovo treba da bude ovde...?
export const { addPost } = postsSlice.actions;
export default postsSlice.reducer;
