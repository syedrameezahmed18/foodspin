import React, { useState, useEffect, useContext, useRef } from 'react'
import Card from '../../components/Card'
import Header from '../../components/Header'
import Dish1 from '../../assets/images/dish3.png'
import Dish2 from '../../assets/images/dish2.png'
import ToggleImg from "../../assets/images/toggle.png"
import ToggleGreen from "../../assets/images/togglegreen.png"
import FoodWheelImg from "../../assets/images/foodwheel.png"
import { ThemeContext } from '../../context/ThemeContext'
import { ScreenContext } from '../../context/ScreenContext'

const Home = () => {


  const { themeColor, setThemeColor } = useContext(ThemeContext)

  const [foodData, setFoodData] = useState([
    {
      id: 0,
      price: '$35',
      title: 'Asian Cucumber Salad',
      description: 'Asian Cucumber Salad Recipe made with crunchy cucumber, onion, rice wine vinegar, and a few secret ingredients!'
    },
    {
      id: 1,
      price: '$32',
      title: 'Green Goddess Chicken Salad',
      description: 'It is a non vegetarian salad which consists of the green goddess dressing mixed with chicken, peppers, olives and celery. '
    }
  ])

  const {size, setSize} = useContext(ScreenContext)

  const [currentCard, setCurrentCard] = useState(0)
  const DishRef = useRef(null)
  const DishRef2 = useRef(null)


  useEffect(() => {
    const Interval = setInterval(() => {
      let currIndex = currentCard
      if (currIndex === 0) {
        currIndex = 1
      }
      else {
        currIndex = 0
      }
      setCurrentCard(currIndex)
    }, 5000)

    return () => {
      clearInterval(Interval)
    }
  }, [currentCard])

  console.log('theme is', themeColor, 'curr os', currentCard)

  const toggler = () => {
    if (currentCard === 0) {
      setCurrentCard(1)
      DishRef.current.classList.remove("dish-anim")
      DishRef2.current.classList.add("dish-anim")
    }
    else {
      setCurrentCard(0)
      DishRef.current.classList.add("dish-anim")
      DishRef2.current.classList.remove("dish-anim")
    }
  }

  return (
    <div className={`${currentCard === 0 ? 'home':'home-green'}`}>
      <Header />
      <Card {...foodData[currentCard]} />
      {
        size > 800 && <p className='text-abs'>Watch the Video</p>
      }

      {/*Absolute Designs */}
      {
        size > 800 ? (
          <div className="major-abs">
            <div className={`${currentCard === 0 ? 'giant-circle' : 'giant-circle-green'}`}>
              <img src={FoodWheelImg} className={`food-wheel ${currentCard === 0 ? 'wheel-left' : 'wheel-right'}`} />
            </div>
            <div className={`${currentCard === 0 ? 'center-dish-div' : 'center-dish-div-alt'}`}>
              <img onClick={toggler} src={currentCard === 0 ? ToggleImg : ToggleGreen} />
              {
                currentCard === 0 ? (
                  <img ref={DishRef} src={Dish1} className={`center-dish`} />
                ) : (
                  <img ref={DishRef2} src={Dish2} className={`center-dish`} />
                )
              }

              <img onClick={toggler} src={currentCard === 0 ? ToggleImg : ToggleGreen} />
            </div>
          </div>
        ) : (
          null
        )
      }

    </div>
  )
}

export default Home