"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

    return (
        <header>
            <nav className="flex justify-between items-center px-4 py-2 bg-neutral-800 text-yellow-300">
                <Link href="/"><Image src="/logo.png" alt="Logo" width={40} height={40} /></Link>
                <button className="sm:hidden cursor-pointer px-2 text-4xl" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>≡</button>
                <div className="hidden sm:flex gap-4">
                    <Link href="/">PhantomZ</Link>
                    <Link href="/about">About</Link>
                    <Link href="/contact">Contact</Link>
                    <a href="https://buymeacoffee.com/ebishiru">
                        <Image src="/coffee-icon.png" alt="Coffee icon" width={32} height={32} className="[image-rendering:pixelated]" />
                    </a>
                </div>
            </nav>
            {/* Mobile Dropdown */}
            <nav className={`${mobileMenuOpen ? 'block' : 'hidden'} flex flex-col justify-content items-center gap-3 sm:hidden p-4 bg-neutral-800 font-bold text-yellow-300`}>
                <Link className="underline" href="/" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>PhantomZ</Link>
                <Link className="underline" href="/about" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>About</Link>
                <Link className="underline" href="/contact" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>Contact</Link>
                <a href="https://buymeacoffee.com/ebishiru">
                    <Image src="/coffee-icon.png" alt="Coffee icon" width={32} height={32} className="[image-rendering:pixelated]" />
                </a>
            </nav>
        </header>
    )
}