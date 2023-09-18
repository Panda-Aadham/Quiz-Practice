import React from 'react'
import './Home.css'
import quizData from '../quizData/quizInfo.json'

const Home = (setOpenQuiz) => {
  const handleSubmit = () => {
    setOpenQuiz(true)
  }

  return(
    <div>
      <p className='header'>Quiz Homepage</p>
      <div className='data-container'>
        {Object.keys(quizData).length !== 0 && quizData['quizIdFile'].map((item) => {
          return (
          <div className='button-container'>
            <p className='button-item title'>{item.title}</p>
            <p className='button-item text'>{item.description}</p>
            <button className='button-item button' type='submit' onSubmit={handleSubmit}>Open Quiz</button>
          </div>)
        })}
      </div>
    </div>
  )
}

export default Home