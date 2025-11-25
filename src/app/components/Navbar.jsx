'use client';

import zetaEdgeLogo from '../assets/zeta-edge.png';
import userPhoto from '../assets/user-photo.webp';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const navItems = [
        { id: 1, name: 'Phone', path: '/phone', protected: false },
        { id: 2, name: 'Laptop', path: '/laptop', protected: false },
        { id: 3, name: 'Smart Watch', path: '/smart-watch', protected: false },
        { id: 4, name: 'Gadget', path: '/gadget', protected: false },
        { id: 5, name: 'Accessories', path: '/accessories', protected: false },
    ]

    const [loading, setLoading] = useState(false);

    const pathname = usePathname();

    if (loading) {
        return <progress className="progress w-56"></progress>
    }

    const handleLogOut = () => {
    };

    const getLinkClass = (path) =>
        pathname === path
            ? 'active underline underline-offset-4 decoration-[#CAEB66] decoration-2'
            : '';

    return (
        <div className="navbar bg-base-100 shadow-sm rounded-xl fixed w-10/12 z-10 mx-auto left-0 right-0">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {
                            navItems.map(item =>
                                <li key={item.id} className='text-secondary-content'>
                                    <Link
                                        href={item.path}
                                        className={getLinkClass(item.path)}
                                    >
                                        {item.name}
                                    </Link>
                                </li>)
                        }
                    </ul>
                </div>
                <Link href='/' className="btn btn-ghost text-xl">
                    <Image className='h-10 w-auto' src={zetaEdgeLogo} alt="Zeta Edge Logo" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        navItems.map(item =>
                            <li key={item.id}>
                                <Link
                                    href={item.path}
                                    className={getLinkClass(item.path)}
                                >
                                    {item.name}
                                </Link>
                            </li>)
                    }
                </ul>
            </div>
            <div className="navbar-end">
                <div className="space-x-1">
                    <Link href='/login' className="btn">Sign In</Link>
                    <Link href='/register' className="btn">Register</Link>
                </div>
                <div className="dropdown dropdown-end ml-1">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <Image
                                alt="Tailwind CSS Navbar component"
                                src={userPhoto} />
                        </div>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li>
                            <a className="justify-between">
                                Profile
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div >
    );
};

export default Navbar;