'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';

const Nav = () => {

    const { data: session } = useSession();

    const [providers, setProviders] = useState(null);
    const [toogle, setToggle] = useState(false)

    useEffect(() => {
        const setUpProviders = async () => {
            const res = await getProviders()

            setProviders(res);
        }

        setUpProviders();
    }, [])

    return (
        <nav className='justify-between p-5 bg-white flex w-full mb-16 pt-3'>
            <Link href='/' className='flex gap-2 justify-center'><Image src='/next.svg' width={50} height={50} className='object-contain' alt='logo' /><p className="text-xl text-orange-500 font-bold">Next</p>
            </Link>

            {/* Desktop navigation */}
            <div className="sm:flex hidden">
                {
                    session?.user ? (<div className='flex gap-3 md:gap-5'>
                        <Link className='bg-orange-500 rounded-md p-1 font-medium' href='/create-post'>Create Post</Link>

                        <button type='button' onClick={signOut} className='bg-teal-500 rounded-md p-1 font-medium'>Sign Out</button>

                        <Link href='/profile'>
                            <Image src={session?.user?.image} width={50} height={50} className='rounded-full' alt='profile' />
                        </Link>
                    </div>) : (<div>
                        {
                            providers && Object.values(providers).map((provider) => <><button type='button' key={provider.name} onClick={() => signIn(provider.id)} className='bg-cyan-500 p-1 font-medium rounded-md'>Sign In</button></>)
                        }
                    </div>)
                }
            </div>

            {/* mobile navigation */}
            <div className="sm:hidden flex relative">
                {
                    session?.user ? (<div className='flex'>
                        <Image src={session?.user?.image} width={50} height={50} className='rounded-full' alt='profile' onClick={() => setToggle((prev) => !prev)} />

                        {
                            toogle && (<div className='dropdown'>
                                <Link href='/profile' className='' onClick={() => setToggle(false)}> My Profile</Link>
                                <Link href='/create-prompt' className='' onClick={() => setToggle(false)}>Create prompt</Link>
                                <button type='button' onClick={() => {
                                    setToggle(false);
                                    signOut()
                                }}>Sign Out</button>
                            </div>)
                        }
                    </div>
                    ) : (<div>
                        {
                            providers && Object.values(providers).map((provider) => <><button type='button' key={provider.name} onClick={() => signIn(provider.id)} className='bg-cyan-500 p-1 font-medium rounded-md'>Sign In</button></>)
                        }
                    </div>)
                }
            </div>
        </nav>
    );
};

export default Nav;