'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'
import { FaBug } from "react-icons/fa";
import classnames from "classnames"


const NavBar = () => {
    const links=[
        {labels:'Dashboard', href:"/"},
        {labels:'Issues', href:"/issues"},
    ]

    const currentPath=usePathname();
    console.log(currentPath);
  return (
    <nav className='flex space-x-6 border-b mb-6 px-5 h-14 items-center'>
        <Link href="/"><FaBug/></Link>
        <ul className='flex space-x-6' >
            {links.map(link=><Link 
            key={link.href}
            className={classnames({
                'text-zinx-900':link.href!=currentPath,
                'text-zinc-500':link.href===currentPath,
                'hover:text-zinc-800 transition-colors':true,
            })}
            href={link.href}>{link.labels}</Link>)}

        </ul>
        
    </nav>
  )
}

export default NavBar;