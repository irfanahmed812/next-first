import React from 'react';
import Link from 'next/link';

const Form = ({ type, post, setPost, submitting, handelSubmit }) => {
    return (
        <section className='w-full max-w-full flex justify-start flex-col'>
            <h1 className='text-xl text-start'>{type} Post</h1>
            <p>{type} and share with the world</p>


            <form onSubmit={handelSubmit} className='mt-10 w-full max-w-2xl flex flex-col gap-7'>
                <label>
                    <span className="font-semibold text-gray-700">Your Ai Prompt</span>
                    <textarea value={post.prompt} onChange={(e) => setPost({ ...post, prompt: e.target.value })} placeholder='Write your prompt here...'></textarea>
                </label>
                <label>
                    <span className="font-semibold text-gray-700">Tag</span>
                    <textarea value={post.prompt} onChange={(e) => setPost({ ...post, prompt: e.target.value })} placeholder='Write your prompt here...'></textarea>
                </label>
                <button type='submit'>Create</button>
            </form>
        </section>
    );
};

export default Form;