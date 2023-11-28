import React from 'react'
import { Presentation, Globe, Github } from 'lucide-react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

function projects() {
    return (
        <div className=' text-gray-900' id='projects'>
            <div className='flex flex-row items-center mb-16 mt-40'>
                <Presentation className='w-8 h-8' />
                <h1 className='mx-4 text-4xl font-bold'>See my work</h1>
            </div>
            <div className='grid grid-cols-2 gap-16 mb-20'>
                <Card className=' bg-gray-300 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 p-8 shadow-lg border-none h-auto'>
                    <CardHeader>
                        <CardTitle className=''>EventoX</CardTitle>
                        <CardDescription className='text-gray-800'>
                            NextJS - NestJS - PostgreSQL - TypeScript
                        </CardDescription>
                        <div>
                            <Badge className='bg-gray-800 mr-1'>FullStack</Badge>
                            <Badge className='bg-transparent text-gray-800 hover:bg-transparent'>Team Project</Badge>
                        </div>

                    </CardHeader>
                    <CardContent className='max-w-md'>
                        <p>The main features of this projects are: creating users with a role system, payment checkout with MercadoPago, admin dashboard, databse with events and the possibility of creating new events if the user want to be an organizer.</p>
                    </CardContent>
                    <CardFooter>
                        <Button className='bg-gray-800 mr-4 hover:shadow-lg transition duration-300'>
                            <Globe className="mr-2 h-4 w-4" />
                            Live
                        </Button>
                        <Button variant='link'>
                            <Github className="mr-2 h-4 w-4" />
                            Github
                        </Button>
                    </CardFooter>
                </Card>

                <Card className=' bg-gray-300 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 p-8 shadow-lg border-none h-auto'>
                    <CardHeader>
                        <CardTitle className=''>EventoX</CardTitle>
                        <CardDescription className='text-gray-800'>
                            NextJS - NestJS - PostgreSQL - TypeScript
                        </CardDescription>
                        <div>
                            <Badge className='bg-gray-800 mr-1'>FullStack</Badge>
                            <Badge className='bg-transparent text-gray-800 hover:bg-transparent'>Team Project</Badge>
                        </div>

                    </CardHeader>
                    <CardContent className=''>
                        <p>The main features of this projects are: creating users with a role system, payment checkout with MercadoPago, admin dashboard, databse with events and the possibility of creating new events if the user want to be an organizer.</p>
                    </CardContent>
                    <CardFooter>
                        <Button className='bg-gray-800 mr-4 hover:shadow-lg transition duration-300'>
                            <Globe className="mr-2 h-4 w-4 " />
                            Live
                        </Button>
                        <Button variant='link'>
                            <Github className="mr-2 h-4 w-4" />
                            Github
                        </Button>
                    </CardFooter>
                </Card>

                <Card className=' bg-gray-300 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 p-8 shadow-lg border-none h-auto'>
                    <CardHeader>
                        <CardTitle className=''>EventoX</CardTitle>
                        <CardDescription className='text-gray-800'>
                            NextJS - NestJS - PostgreSQL - TypeScript
                        </CardDescription>
                        <div>
                            <Badge className='bg-gray-800 mr-1'>FullStack</Badge>
                            <Badge className='bg-transparent text-gray-800 hover:bg-transparent'>Team Project</Badge>
                        </div>

                    </CardHeader>
                    <CardContent className=''>
                        <p>The main features of this projects are: creating users with a role system, payment checkout with MercadoPago, admin dashboard, databse with events and the possibility of creating new events if the user want to be an organizer.</p>
                    </CardContent>
                    <CardFooter>
                        <Button className='bg-gray-800 mr-4 hover:shadow-lg transition duration-300'>
                            <Globe className="mr-2 h-4 w-4 " />
                            Live
                        </Button>
                        <Button variant='link'>
                            <Github className="mr-2 h-4 w-4" />
                            Github
                        </Button>
                    </CardFooter>
                </Card>


            </div>

        </div>
    )
}

export default projects