'use client'

import React, { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import Form from '@/components/Form';

const CreatePost = () => {

    const [submitting, setSubmitting] = useState(false);
    const [post, setPost] = useState({
        prompt: '',
        tag: '',
    });

    const createPrompt = async (e) => {
        e.preventDefault();

        useEffect(() => {
            fetch('/api/prompt', {
                method: 'POST',
                body: JSON.stringify({
                    prompt: post.prompt,
                    userId: session?.user.id,
                    tag: post.tag
                })
            })
        }, [])
    }

    return (
        <div>
            <Form type='Create' post={post} setPost={setPost} submitting={submitting} handelSubmit={createPrompt}></Form>
        </div>
    );
};

export default CreatePost;