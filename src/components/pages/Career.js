import React from 'react';
import '../../App.css';
import CardItem from '../CardItem'
import '../Cards.css'
import Footer from '../Footer';


function Career() {
  return (
    <div>
     <h1 className='career'>Career</h1>
     <h2 className='txt-container'>My Career Interests</h2>
     <p className='txt-container'>After graduating I plan to go get a Masters in Software Engineering or AI. I find both of these fields extremely interesting. Software engineering appeals to me mainly because of my love of backend coding (this project was a nightmare for me). I hope to learn more about it in the coming years as I just applied to the CS major and will hopefully get in. <br/>
     I was first introduced to some basice Machine Learning in my senior year of high school. In my Computer Science class we looked at some elementary algorithms such as KNN and Decision Trees. They were very interesting as they were able to turn just about anything into solely numbers and spit out an output. I would like to learn more about these algorithms and apply it to important problems in the world. That is why I am a double major with statistics. All of the good AI classes are in the Statistics department.<br/>
     Lastly, I am somewhat interested in learning more about Robotics, however, it is not a priority. I was on an FRC team, the RoboEagles, in high school for all four years. I loved it as the competition was fun, the people were wonderful, and I learned lots. By my junior year I was the lead programmer and I programmed the robot almost entirely on my own in senior year. We almost made the worlds competition, but we were only two games off. FRC sparked my interest in robotics, however, I don't know how much FRC programming of robots is similar to industry level programming of robots.</p>
      <div className='cards__container'>
        <div className='cards__wrapper'>
            <ul className='cards__item'>
                <CardItem 
                src='images/SE2.jpg'
                text='My primary interest is Software Engineering currently.'
                label='Software Engineering'
                path='/career'/>
                <CardItem 
                src='images/AI.png'
                text='AI is also very intriguing especially right now!'
                label='Artifical Intelligence'
                path='/career'/>
                <CardItem 
                src='images/FRC.jpg'
                text='FRC in highschool really got me interested in exploring my options with robotics.'
                label='Robotics'
                path='/career'/>
              </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Career;