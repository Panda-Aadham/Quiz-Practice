import React from 'react'
import './Home.css'
import quizData from '../quizData/quizInfo.json'

const Home = (setOpenQuiz) => {
  const handleClick = (data) => {
    setOpenQuiz([true, data])
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
            <button key={item.id} className='button-item button' onClick={() => handleClick(item)}>Open Quiz</button>
          </div>)
        })}
      </div>
    </div>
  )
}

export default Home