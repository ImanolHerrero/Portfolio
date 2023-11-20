import React from 'react';
import { User2 } from 'lucide-react';
import { Separator } from "@/components/ui/separator"


function About() {



    return (
        <div className='mx-16 p-5 text-gray-900 h-screen' id='about'>
            <div className='flex flex-row items-center mb-16'>
                <User2 className='w-8 h-8' />
                <h1 className='mx-4 text-4xl font-bold underline underline-offset-8 decoration-sky-500/30'>About me</h1>
            </div>
            <p className='text-xl my-8 max-w-4xl'>My goal in this industry is to truly make an impact and leave my mark on the web. I want to build <span className='font-semibold'>efficient</span> and <span className='font-semibold'>beautiful</span> websites and learn as much as I can along the way.</p>
            <p className='text-xl my-8 max-w-4xl'>One of my strong points is that programming and the tech world have always been a <span className='font-semibold'>hobbie</span>, even since little. I love <span className='font-semibold'>learning</span> new things everyday and reinforcing my knowledge just for the pleasure of doing it. </p>
            <p className='text-xl my-8 max-w-4xl'>If you are looking for someone serious and <span className='font-semibold'>commited</span> to this industry, I highly recommend that you <span className='font-semibold'>contact me</span>. I would love to talk to you.</p>
        </div >


    );
}

export default About;
