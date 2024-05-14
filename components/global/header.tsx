import React from 'react';
import Image from 'next/image';
import Logo from '@/public/global/Snappers-yellow.png'
import Link from 'next/link';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ModeToggle } from './header/ModeToggle';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


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
                    <DropdownMenu>
                        <DropdownMenuTrigger className='flex gap-4 items-center'>
                            <Avatar>
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <div className='font-bold'>User name</div>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Profile</DropdownMenuItem>
                            <DropdownMenuItem>Billing</DropdownMenuItem>
                            <DropdownMenuItem>Team</DropdownMenuItem>
                            <DropdownMenuItem>Subscription</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <ModeToggle />
                </div>
            </div>
        </header>
    );
}

export default Header;
