'use client'

import { useRef } from "react";
import { PostsState, setPosts } from "./postsSlice";
import { useAppDispatch } from "..";

function InitOnClient ({ data }: PostsState ) {
    const dispatch = useAppDispatch();
    const initialized = useRef(false);
    if (!initialized.current && data) {
        dispatch(setPosts(data));
        initialized.current = true;
    }
    return null;
}

export default InitOnClient;