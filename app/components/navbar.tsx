import React from 'react';
import { Button } from "@/components/ui/button"
import Link from 'next/link';

function Navbar() {
    return (
        <div className="flex flex-row p-5 text-gray-800 sticky top-0 z-10 bg-white w-full h-20">
            <div className="flex-1 text-3xl font-bold flex items-center">
                <h1 className='font-bold ml-24'>Imanol Herrero</h1>
            </div>
            <div className="flex-1 justify-end flex items-center mr-24">
                <Link href="#about">
                    <Button variant="link" className='mx-4 text-md'>Who I am</Button>
                </Link>
                <Link href='#projects'>
                    <Button variant="link" className='mx-4 text-md'>See my work</Button>
                </Link>
                <Link href="mailto:imano.arias@gmail.com">
                    <Button className='mx-4 bg-gray-800 text-md hover:shadow-lg transition duration-300'>
                        Let&apos;s work together
                    </Button>
                </Link>

            </div>
        </div>

    );
}

export default Navbar;
