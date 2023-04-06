import React from 'react';
import '../../App.css';
import CardItem from '../CardItem'
import '../Cards.css'
import Footer from '../Footer';


function Trips() {
  return (
    <div>
     <h1 className='trips'>Trips</h1>
     <h2 className='txt-container'>Recent Trips</h2>
     <p className='txt-container'>I love to travel! It's so much fun to go see different places around the world or even just the state as long as you are with friends or family.<bc/>
     My most recent trip was to Bermuda towards the end of this past summer. I took a 5 day cruise with my aunt, uncle, and cousins. The cruise itself was fun while we were at sea as there were plenty of activities. Once we got to Bermuda we took the mopeds around the island to explore. Unfortunately, I was not very good at balancing and fell off giving me a nasty scar running halfway around my leg. Besides that, the island itself was beautiful and the food was scrumptious.<br/>
     The trip before that was to Costa Rica. My parents took me as my senior trip. My sister didn't tag along because she didn't want to deal with all the mosquitos. It was BY FAR the most impactful and worthwile trip I have ever been on. I highly recommend anyone go to Nayara Resorts in Costa Rica. We started off in a "tent" as you can see the view above was gorgeous. The tent was amidst all the greenery to provide privacy and there was a private heated pool to relax in and enjoy nature. The main thing I loved about Costa Rica was our excursions. While I was in Costa Rica I went rapelling down cliffs up to 200 feet high with waterfalls coming off them, ziplining over and through the jungle, white water rafting down a river, and walking through nature reserves to see dozens of different animals native to Costa Rica. After spending a week in the jungle we went to the Pacific side of CR to stay in an all inclusive for 5 days and just relax. The entire trip was a great bonding experience between my parents and I.<br/>
     Before that was the lake trip (I had a packed summer last summer). I went to Smith Mountain Lake with my closest friends from highschool for a week. My favorite part about the lake is jet skiing. Zipping around the lake at up to 55 mph is exhilarating! Besides just jet skiing it was fun to swim off the dock, play spikeball, and just hang out with my friends and watch movies. <br/>
     A last note was my trip to Carowinds at the beginning of senior year. I went with my two best friends Radin and Ansh. I love roller coasters, especially big ones and Carowinds has them. My dad brought us and we got there early in the morning so we could spend the whole day. I think we were there from 9AM to midnight and we probably rode almost every roller coaster in the park and were starting to ride them for the second or third time by the time we left. <br/>
     So yeah if you have any vacation plans hmu! I'd love to come along.</p>
      <div className='cards__container'>
        <div className='cards__wrapper'>
            <ul className='cards__item'>
                <CardItem 
                src='images/laleona.png'
                text='The hike to La Leona was two miles through caves, creeks, and even through waterfalls! It was worth it!'
                label='La Leona Waterfall'
                path='/trips'/>
                <CardItem 
                src='images/pacific.jpg'
                text='The Pacific Ocean from our room at the all inclusive in Costa Rica.'
                label='Pacific Ocean'
                path='/trips'/>
                <CardItem 
                src='images/sloth.jpg'
                text='I got to see tons of animals including sloths, snakes, spiders, monkeys, and dozens of bird breeds while in CR!'
                label='Costa Rica Sloth'
                path='/trips'/>
              </ul>
            <ul className='cards__item'>
                <CardItem 
                src='images/bermuda.jpg'
                text='The ocean in Bermuda was so clear and beautiful! The sand was almost a slight pink taint.'
                label='Bermuda Ocean'
                path='/trips'/>
                <CardItem 
                src='images/caro.jpg'
                text='My best friends Ansh and Radin and I after spending a day at Carowinds!'
                label='Carowinds'
                path='/trips'/>
                <CardItem 
                src='images/lake.png'
                text='Me on the jetski at Smith Mountain Lake. I love to zip around the lake at 55 MPH!'
                label='Smith Mountain Lake'
                path='/trips'/>
              </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Trips;