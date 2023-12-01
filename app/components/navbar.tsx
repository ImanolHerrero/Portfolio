import React from 'react';
import { Button } from "@/components/ui/button"
import Link from 'next/link';

function Navbar() {
    return (
        <div className="flex flex-row p-5 text-gray-800 sticky top-0 z-10 bg-white w-full h-20 mb-20">
            <div className="flex-1 text-3xl font-bold flex items-center">
                <h1 className='font-bold ml-[20%] text-2xl'>Imanol <span className='hidden lg:inline-block xl:inline-block md:inline-block'>Herrero</span></h1>
            </div>
            <div className="flex-1 justify-end flex items-center">
                <div className='hidden lg:flex'>
                    <Link href="#about">
                        <Button variant="link" className='mx-4 text-md'>Who I am</Button>
                    </Link>
                    <Link href='#projects'>
                        <Button variant="link" className='mx-4 text-md'>See my work</Button>
                    </Link>
                </div>
                <Link href="mailto:imano.arias@gmail.com" className='mr-[20%]'>
                    <Button className='mx-4 bg-gray-800 text-md hover:shadow-md hover:shadow-gray-800/50 transition duration-300'>
                        Let&apos;s work together
                    </Button>
                </Link>

            </div>
        </div>

    );
}

export default Navbar;
