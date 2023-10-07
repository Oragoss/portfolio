import React from 'react'
import HomeCard from './components/Home/HomeCard'
import Image from "next/image";
import egg from "@/public/images/Cute Egg.png"
import CoffeWriting from '@/public/images/coffee-writing.jpg'

//Start here: https://members.codewithmosh.com/courses/mastering-next-js-13-with-typescript/lectures/49120547
//TODO: Add this: https://www.youtube.com/watch?v=DCRcFf39SYo
export default async function App() {

  return (
    <main className="relative h-screen">
        <HomeCard />
    </main>
  )
}
