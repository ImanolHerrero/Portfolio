import React from 'react';
import { User2 } from 'lucide-react';


function About() {

    return (
        <div id='about'>
            <div className='text-gray-900 h-screen mt-40 mb-32'>
                <div className='bg-gray-300 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 p-8 shadow-2xl border boder-gray-300 md:p-16 lg:p-20 xl:p-16 '>


                    <div className='flex flex-row items-center mb-16'>
                        <User2 className='w-8 h-8' />
                        <h1 className='mx-4 text-4xl font-bold '>About me</h1>
                    </div>
                    <p className='text-xl my-6'>My goal in this industry is to truly make an impact and leave my mark on the web. I want to build <span className='font-semibold'>efficient</span> and <span className='font-semibold'>beautiful</span> websites.</p>
                    <p className='text-xl my-6 '>One of my strong points is that programming and the tech world have always been a <span className='font-semibold'>hobbie</span>, even since little. I love <span className='font-semibold'>learning</span> new things everyday.</p>
                    <p className='text-xl my-6 '>If you are looking for someone serious and <span className='font-semibold'>commited</span> to this industry, I highly recommend that you <span className='font-semibold'>contact me</span>. I would love to talk to you.</p>
                </div >

            </div>
        </div>
    );
}

export default About;
