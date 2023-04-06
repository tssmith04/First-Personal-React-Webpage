import React from 'react';
import '../../App.css';
import CardItem from '../CardItem'
import '../Cards.css'
import Footer from '../Footer';


function About() {
  return (
    <div>
     <h1 className='about'>About</h1>
     <h2 className='txt-container'>About Me</h2>
     <p className='txt-container'>My full name is Thomas Sebastian Smith, hence the TSS. I am currently a student at the University of North Carolina at Chapel Hill and I graduated from Enloe High School in Raleigh. I am a Statistics BS and Computer Science BS double major and I am currently unsure what I will minor in. My potential options for a minor currently include Neuroscience, Math, Data Science, or Chemistry. <br/>
     My nuclear family consists of my mom, Kristen, my dad, Jeff, my sister, Madalyn, my two dogs, Polly and Nutmeg ( we just got Nutmeg over winter break), and lastly my cat, Meow-Meow. Outside of my nuclear family my Mima (Mom's mom) and Grammie and Baba (Dad's parents) currently live in North Carolina with us. They have had a big influence on my childhood as they helped drive me around everywhere for extracurriculars and supported me. <br/>
     I met my girlfriend Julie at orientation. It's actually quite a funny story how we got together, contact me if you would like more info. We've been together for almost 8 months now. Yay! I am still very close with many of my friends from high school as most of them either went to UNC or stayed in North Carolina in general. Additionally, I've made plenty of new friends at UNC and grown really close to my suitemates.<br/>
     Lastly, just a fun fact about me I won homecoming king in the fall of my senior year and prom king in the spring. It was a lot of fun to campaign in senior year especially since I had very little work. Overall, senior year ended up being my favorite in highschool (as for most people I assume).</p>
     <div className='cards__container'>
        <div className='cards__wrapper'>
            <ul className='cards__item'>
                <CardItem 
                src='images/fam.png'
                text='My family with me right before graduation. My mom and dad are on the left and my sister is holding our dog Polly.'
                label='Family'
                path='/about'/>
                <CardItem 
                src='images/julie.jpg'
                text='Me and my girlfriend, Julie, at the Chinese Lantern Festival over Winter Break!'
                label='Girlfriend'
                path='/about'/>
                <CardItem 
                src='images/friends.jpg'
                text='A bunch of my friends including most of my suite at my house on New Years!'
                label='Friends'
                path='/about'/>
              </ul>
            <ul className='cards__item'>
                <CardItem 
                src='images/nutmeg.jpg'
                text='Our newest addition to the family, Nutmeg. She is a havanese just like polly!'
                label='Nutmeg'
                path='/about'/>
                <CardItem 
                src='images/hoco.jpg'
                text='Winning homecoming! It was lots of fun!'
                label='Homecoming'
                path='/about'/>
              </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;