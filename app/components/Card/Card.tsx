'use client';
import Image, { StaticImageData } from 'next/image';
import styles from './Card.module.css';
import React from 'react'

interface Props {
  altText: string,
  src: StaticImageData,
  title: string,
  cardBodyText: string
}

const Card = ({ altText: itemName, src, title, cardBodyText }: Props) => {
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure><Image className={styles.img} src={src} alt={itemName}/></figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{cardBodyText}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary" onClick={() => console.log('Click')}>Buy Now</button>
        </div>
      </div>
    </div>
  );
}

export default Card