import React, {useState} from 'react'
import Home from './components/Home.tsx'
import './App.css';

function App() {
  const [openQuiz, setOpenQuiz] = useState(false)

  return (
    <div className="App">
      <Home setOpenQuiz={setOpenQuiz}/>
    </div>
  );
}

export default App;
