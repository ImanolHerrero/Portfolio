import React from 'react';
import { Presentation, Globe, Github } from 'lucide-react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import Image from 'next/image';

function Projects() {
    return (
        <div id='projects'>
            <div className='text-gray-900 text-center mt-40'>

                <div className='grid grid-cols-1 xl:grid-cols-2 gap-8 md:gap-16 mb-8 md:mb-20'>
                    <Card className='bg-gray-300 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 p-4 md:p-8 shadow-2xl border border-gray-300 h-auto'>
                        <CardHeader>
                            <div className='relative w-full h-48 md:h-56 lg:h-64 mb-4'>
                                <Link
                                    href={"https://eventox-client-peach.vercel.app/"}
                                >

                                    <Image
                                        src={'/EventoX.png'}
                                        layout="fill"
                                        objectFit="cover"
                                        alt='EventoX preview'
                                        className='mx-auto rounded-xl'
                                    />
                                </Link>
                            </div>

                            <CardTitle className='text-lg md:text-xl'>EventoX</CardTitle>
                            <CardDescription className='text-gray-800 text-sm md:text-base'>
                                NextJS - NestJS - PostgreSQL - TypeScript
                            </CardDescription>
                            <div className='flex flex-wrap align-middle justify-center'>
                                <Badge className='bg-gray-800 mr-1 text-xs md:text-sm hover:bg-gray-800 cursor-default'>FullStack</Badge>
                                <Badge className='bg-transparent text-gray-800 hover:bg-transparent text-xs md:text-sm cursor-default'>Team Project</Badge>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p className='text-sm md:text-base text-left mb-16'>
                                The main features of this project are: creating users with a role system, payment checkout with MercadoPago, admin dashboard, database with events, and the possibility of creating new events if the user wants to be an organizer.
                            </p>
                        </CardContent>
                        <CardFooter>
                            <div className='absolute bottom-16'>
                                <Link href={"https://eventox-client-peach.vercel.app/"}>
                                    <Button className='bg-gray-800 mr-2 hover:shadow-md transition duration-300 text-xs hover:bg-gray-800 hover:shadow-gray-800/50 md:text-sm'>
                                        <Globe className="mr-1 h-3 w-3 md:h-4 md:w-4" />
                                        Live
                                    </Button>
                                </Link>

                                <Link href={"https://github.com/EventoX/EVENTOX_CLIENT"}>
                                    <Button variant='link' className='text-xs md:text-sm'>
                                        <Github className="mr-1 h-3 w-3 md:h-4 md:w-4" />
                                        Github
                                    </Button>
                                </Link>

                            </div>


                        </CardFooter>
                    </Card>

                    <Card className='bg-gray-300 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 p-4 md:p-8 shadow-2xl border border-gray-300 h-auto'>
                        <CardHeader>
                            <div className='relative w-full h-48 md:h-56 lg:h-64 mb-4'>
                                <Link href={"https://shortlyapi.netlify.app/"}>
                                    <Image
                                        src={'/Shortly.png'}
                                        layout="fill"
                                        objectFit="cover"
                                        alt='Shortly preview'
                                        className='mx-auto rounded-xl'
                                    />
                                </Link>

                            </div>

                            <CardTitle className='text-lg md:text-xl'>Shortly</CardTitle>
                            <CardDescription className='text-gray-800 text-sm md:text-base'>
                                HTML - JavaScript - SCSS
                            </CardDescription>
                            <div className='flex flex-wrap align-middle justify-center'>
                                <Badge className='bg-gray-800 mr-1 text-xs md:text-sm hover:bg-gray-800 cursor-default'>Front End</Badge>
                                <Badge className='bg-transparent text-gray-800 hover:bg-transparent text-xs md:text-sm cursor-default'>Solo Project</Badge>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p className='text-sm md:text-base text-left mb-16'>
                                Transform long URLs into concise, shareable links effortlessly. Create clean, shortened links that are easy to remember and perfect for sharing on social media, in messages, or anywhere you need to convey a link quickly.
                            </p>
                        </CardContent>
                        <CardFooter>
                            <div className='absolute bottom-16'>
                                <Link href={"https://shortlyapi.netlify.app/"}>
                                    <Button className='bg-gray-800 mr-2 hover:shadow-md transition duration-300 text-xs hover:bg-gray-800 hover:shadow-gray-800/50 md:text-sm'>
                                        <Globe className="mr-1 h-3 w-3 md:h-4 md:w-4" />
                                        Live
                                    </Button>
                                </Link>

                                <Link href={"https://github.com/ImanolHerrero/Shortly-API"}>
                                    <Button variant='link' className='text-xs md:text-sm'>
                                        <Github className="mr-1 h-3 w-3 md:h-4 md:w-4" />
                                        Github
                                    </Button>
                                </Link>
                            </div>



                        </CardFooter>
                    </Card>
                </div>
            </div>
        </div>

    );
}

export default Projects;
