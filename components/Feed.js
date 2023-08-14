'use client'
import React, { useEffect, useState } from 'react';

const Feed = () => {

    const [posts, setPosts] = useState([])

    // server data get

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await fetch('/api/prompt');
            const data = await res.json();
            setPosts(data)
        }

        fetchPosts()
    }, [])

    return (
        <div>
            Feed
        </div>
    );
};

export default Feed;