'use client'

import { useRef } from "react";
import { useAppDispatch } from "..";
import { PostsState, setPosts } from "./postsSlice";

function ClientHydration ({ data }: PostsState ) {
    const dispatch = useAppDispatch();
    const initialized = useRef(false);
    if (!initialized.current && data) {
        dispatch(setPosts(data));
        initialized.current = true;
    }
    return null;
}

export default ClientHydration;