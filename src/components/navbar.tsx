'use client'
import { useState } from 'react'

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const menuItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
    { href: '/blogs', label: 'Blogs' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className='fixed w-full bg-white/80 dark:bg-dark/80 backdrop-blur-sm z-50'> navbar page
      <div className='container max-w-7xl mx-auto px-4'></div>
      /*desktop menu */
      <div className='flex items-center justify-between h-16'>
          <link href="/" className='text-xl font-bold text-primary '>Nayon&trade</link>
      </div>
      

       /*mobile menu */
    </nav>
  )
}

export default Navbar

