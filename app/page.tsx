import React, { Suspense } from 'react'
import HomeCard from './components/Home/HomeCard'
import Image from "next/image";
import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/authOptions'
import egg from "@/public/images/Cute Egg.png"

//Start here: https://members.codewithmosh.com/courses/mastering-next-js-13-with-typescript/lectures/49120547
//TODO: Add this: https://www.youtube.com/watch?v=DCRcFf39SYo
export default async function App() {
  const session = await getServerSession(authOptions);

  return (
    <main className="relative h-screen">
        <HomeCard />
        <div className="hero">
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
              <p className="mb-5">I should add something here about me and constrain this thing so it's smaller.</p>
              {/* <button className="btn btn-primary">Get Started</button> */}
              <h1>Hello{ session ? <span>&nbsp;{session.user?.name}!</span> : "!" }</h1>
              <Image src={egg} alt="Smiling Egg"/>
              <Image src={egg} alt="Smiling Egg"/>
              <Image src={egg} alt="Smiling Egg"/>
              <Image src={egg} alt="Smiling Egg"/>
              <Image src={egg} alt="Smiling Egg"/>
            </div>
          </div>
        </div>
        
        {/* This is another option but className is preferred: style={{objectFit: 'cover'}} */}
        {/* <Image 
          src="https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg" 
          alt="Stock image" 
          fill
          className="object-cover"
          sizes="(max-width: 480px) 100vw, (max-width: 768px), 50vw, 33vw"
          quality={100}
          priority
        />  */}
    </main>
  )
}
