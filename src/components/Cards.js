import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Things About me!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
            <ul className='cards__item'>
                <CardItem 
                src='images/SEimg.jpg'
                text='Discover more about my career interests!'
                label='Career'
                path='/career'/>
                <CardItem 
                src='images/costa-villa.jpg'
                text='Explore some of my previous trips in life!'
                label='Trips'
                path='/trips'/>
              </ul>
            <ul className='cards__item'>
                <CardItem 
                src='images/me.jpg'
                text='Learn more about me in general!'
                label='About Me'
                path='/about'/>
                <CardItem 
                src='images/contact.jpg'
                text='Get in contact with me for project collaboration!'
                label='Contact Me'
                path='/contact'/>
              </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards
