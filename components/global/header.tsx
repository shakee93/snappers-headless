import React from 'react';
import Image from 'next/image';
import Logo from '@/public/global/Snappers-yellow.png'
import Link from 'next/link';

import { ModeToggle } from './header/ModeToggle';
import AvatarDropdown from './header/AvatarDropdown';
import { LoginPopup } from './header/LoginPopup';


const Header: React.FC = () => {
    return (
        <header className=" bg-white dark:bg-transparent dark:text-white  dark:border-b border-[#1e293b] text-black ">
            <div className='container flex items-center justify-between py-3'>
                <div className="flex items-center">
                    <Link href={"/"}>
                        <Image src={Logo} alt="Logo" className="h-14 w-auto mr-2" />
                    </Link>
                </div>
                <div>
                    <nav>
                        <ul className="flex space-x-4 font-bold">
                            <li><Link href={'/'}>Home</Link></li>
                            <li><Link href={'/shop'}>Shop</Link></li>  
                            <li><Link href={'/about'}>About</Link></li>
                            <li><Link href={'/contact'}>Contact</Link></li>
                        </ul>
                    </nav>
                </div>
                <div className='flex items-center gap-4'>
                    <AvatarDropdown/>
                    <LoginPopup/>
                    {/* <ModeToggle /> */}
                </div>
            </div>
        </header>
    );
}

export default Header;
