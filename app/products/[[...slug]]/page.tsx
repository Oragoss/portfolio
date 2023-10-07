import React from 'react'
import Card from '../../components/Card/Card'
import CoffeWriting from '@/public/images/coffee-writing.jpg'
import CoffeeCake from '@/public/images/coffee-cake.jpg'
import ArtsyCake from '@/public/images/artsy-coffee.jpg'

interface Props {
    params: { slug: string[] };
    searchParams: { sortOrder: string };
}

const ProductPage = ({ params: { slug }, searchParams: { sortOrder } }: Props) => {
  return (
    <div className="hero min-h-screen">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content bg-base-200 mb-8">
          <div className="flex flex-wrap gap-8">
            <div style={{color: "#000"}}>ProductPage {slug} {sortOrder}</div>
            <div className="flex flex-wrap gap-8">
              <Card src={CoffeWriting} altText="Coffee" title='Projects!' cardBodyText='Fun web and Css projects.' />
              <Card src={CoffeeCake} altText="Coffee Cake" title='Coffee Shop!' cardBodyText='A mock coffee shop.' />
              <Card src={ArtsyCake} altText="Artsy Coffee" title='Something else!' cardBodyText='Bacon ipsum dolor amet picanha alcatra buffalo turducken, t-bone tenderloin pastrami beef ribs ball tip burgdoggen.' />
            </div>
          </div>
        </div>
      </div>
    
  )
}

export default ProductPage