import React from 'react';
import { Button } from "@/components/ui/button"
import Link from 'next/link';

function Navbar() {
    return (
        <div className="flex flex-row p-5 mx-16 text-gray-800 sticky top-0 z-10">
            <div className="flex-1 text-3xl font-bold flex items-center">

                <h1 className='font-bold'>Imanol Herrero</h1>
            </div>
            <div className="flex-1 justify-end flex items-center">
                <Link href="#about">
                    <Button variant="link" className='mx-4'>About me</Button>
                </Link>

                <Button variant="link" className='mx-4'>My Projects</Button>
                <Link href="mailto:imano.arias@gmail.com">
                    <Button className='mx-4 bg-gray-800 font-semibold'>
                        Let&apos;s work together!
                    </Button>
                </Link>

            </div>
        </div>

    );
}

export default Navbar;
