'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation';

const navLinks = ({links}) => {

    const pathname = usePathname();


  return (
    <nav>
        <ul>                                              
            {
                links.map((link, index) => (
                    <li key={index}>
                        <Link href={link.href} className={pathname === link.href ? 'active' : ''}>{link.name}</Link>
                    </li>      
                ))
            }
        </ul>
    </nav>
  )
}

export default navLinks