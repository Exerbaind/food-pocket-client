import { Post } from "@/interfaces/post.interface";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export interface PostsState {
    data: Post[] | null,
}

const initialState: PostsState = {
    data: null,
}

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setPosts: (state, action: PayloadAction<Post[]>) => {
            state.data = action.payload
        }
    }
})

export const { setPosts } = postsSlice.actions;
export default postsSlice.reducer;