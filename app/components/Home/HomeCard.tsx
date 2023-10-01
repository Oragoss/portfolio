import React from 'react'
import Card from '../Card/Card'
// import styles from './Home.module.css';
import CoffeWriting from '@/public/images/coffee-writing.jpg'
import CoffeeCake from '@/public/images/coffee-cake.jpg'
import ArtsyCake from '@/public/images/artsy-coffee.jpg'

const HomeCard = () => {
    
  return (
    <>
      {/* <div className="hero min-h-screen" style={{backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)'}}> */}
      <div className="hero min-h-screen">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="flex flex-wrap gap-8">
            <Card src={CoffeWriting} altText="Coffee" title='Projects!' cardBodyText='Fun web and Css projects.' />
            <Card src={CoffeeCake} altText="Coffee Cake" title='Coffee Shop!' cardBodyText='A mock coffee shop.' />
            <Card src={ArtsyCake} altText="Artsy Coffee" title='Something else!' cardBodyText='Bacon ipsum dolor amet picanha alcatra buffalo turducken, t-bone tenderloin pastrami beef ribs ball tip burgdoggen.' />
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeCard