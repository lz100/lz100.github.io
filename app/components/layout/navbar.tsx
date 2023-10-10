"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar = () => {
    const [isSticky, setIsSticky]: [boolean, React.Dispatch<React.SetStateAction<boolean>>]  = useState(false);
    const router = useRouter();

    useEffect(() => {
        const handleScroll = (): void => {
            setIsSticky(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`navbar ${isSticky ? 'sticky' : ''}`}>
            <div className="navbar-container">
                <Link href="/" passHref>
                    <a className="navbar-logo">Le Zhang</a>
                </Link>
                <ul className="navbar-menu">
                    <li className={`navbar-item ${router.pathname === '/about' ? 'active' : ''}`}>
                        <Link href="/about" passHref>
                            <a className="navbar-link">About</a>
                        </Link>
                    </li>
                    <li className={`navbar-item ${router.pathname === '/contact' ? 'active' : ''}`}>
                        <Link href="/contact" passHref>
                            <a className="navbar-link">Contact</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
