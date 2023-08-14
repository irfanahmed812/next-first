import Feed from '@/components/Feed';
import React from 'react';

const Home = () => {
  return (
    <section className='w-full flex-col text-center'>
      <h1 className='text-center font-bold text-4xl mb-5'>Discover & Share</h1>
      <br className='max-md:hidden ' />
      <span className='text-center text-transparent font-bold text-5xl bg-clip-text bg-gradient-to-tr from-orange-400 to-orange-500'>
        AI Powered Prompts
      </span>
      <div className="text-center my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe sint dolore maiores delectus autem. Optio.</div>

      <Feed></Feed>
    </section>
  );
};

export default Home;