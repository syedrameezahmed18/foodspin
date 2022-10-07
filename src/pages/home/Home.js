import React, { useState, useEffect } from 'react'
import Card from '../../components/Card'
import Header from '../../components/Header'
import Dish1 from '../../assets/images/dish1.png'
import ToggleImg from "../../assets/images/toggle.png"
import FoodWheelImg from "../../assets/images/foodwheel.png"

const Home = () => {



  const [foodData, setFoodData] = useState([
    {
      price: '$35',
      title: 'Asian Cucumber Salad',
      description: 'Asian Cucumber Salad Recipe made with crunchy cucumber, onion, rice wine vinegar, and a few secret ingredients!'
    },
    {
      price: '$32',
      title: 'Green Goddess Chicken Salad',
      description: 'It is a non vegetarian salad which consists of the green goddess dressing mixed with chicken, peppers, olives and celery. '
    }
  ])

  const [currentCard, setCurrentCard] = useState(0)

  return (
    <div className='home'>
      <Header />
      <Card {...foodData[currentCard]} />
      <p className='text-abs'>Watch the Video</p>
      {/*Absolute Designs */}
      <div className="major-abs">
        <div className="giant-circle">
          <img src={FoodWheelImg} className='food-wheel' />
        </div>
        <div className='center-dish-div'>
          <img src={ToggleImg} />
          <img src={Dish1} className='center-dish' />
          <img src={ToggleImg} />
        </div>
      </div>
    </div>
  )
}

export default Home