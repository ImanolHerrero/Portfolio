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

function Projects() {
    return (
        <div className='text-gray-900' id='projects'>

            <div className='grid grid-cols-1 xl:grid-cols-2 gap-8 md:gap-16 mb-8 md:mb-20'>
                <Card className='bg-gray-300 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 p-4 md:p-8 shadow-2xl border border-gray-300 h-auto'>
                    <CardHeader>
                        <CardTitle className='text-lg md:text-xl'>EventoX</CardTitle>
                        <CardDescription className='text-gray-800 text-sm md:text-base'>
                            NextJS - NestJS - PostgreSQL - TypeScript
                        </CardDescription>
                        <div className='flex flex-wrap'>
                            <Badge className='bg-gray-800 mr-1 text-xs md:text-sm hover:bg-gray-800 cursor-default'>FullStack</Badge>
                            <Badge className='bg-transparent text-gray-800 hover:bg-transparent text-xs md:text-sm cursor-default'>Team Project</Badge>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <p className='text-sm md:text-base'>
                            The main features of this project are: creating users with a role system, payment checkout with MercadoPago, admin dashboard, database with events, and the possibility of creating new events if the user wants to be an organizer.
                        </p>
                    </CardContent>
                    <CardFooter>
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
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
}

export default Projects;
