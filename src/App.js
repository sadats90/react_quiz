
import './App.css';
import QuizCard from './QuizCard';
import React, { useState } from 'react';

function App() {

  const[quizzes,setQuizzes] = useState(null)
  const [Qdata,setQdata] = useState(null)
  const [loaded,setLoaded] = useState(false)
  const [nextQIndex,setNextQIndex]  = useState(0)
  const [quizDone,setQuizDone] = useState(false)
  const [selectAnswer,setSelectAnswer] = useState(null)
  const [correctAnswer,setCorrectAnswer] = useState(null)
  const [answerIndex,setAnswerIndex] = useState(0)
  const [gameScore,setGameScore] =useState(0)


  
  

 
   
   
   const getData = async()=>
  {
    const response = await fetch('https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple')
    const {results} = await response.json()
    setQuizzes(results)
    setQdata(results[0])
    setLoaded(true) 
    
    

   
   
    
    
    
    
    

  }
// console.log(Qdata)


 

  console.log(selectAnswer,correctAnswer,gameScore)
  
  const nextQuestion = ()=>
  {
    setNextQIndex((prev)=>prev+1)
    setQdata(quizzes[nextQIndex])
    if(nextQIndex == 9)
    {
      setQuizDone(true)
    }
  
    
  }


  const chooseAnswer = (el)=>
  {
  
  setAnswerIndex((prev)=>prev+1)

  setCorrectAnswer(quizzes[answerIndex].correct_answer)
  
  setSelectAnswer(el)


  if(selectAnswer === correctAnswer)
  {
    setGameScore((prev)=>prev+1)
  }
   
  }

    

  return (
    
    <div>
      <button onClick={getData}>Start Quiz</button>
      
      
        {
          

          loaded && <QuizCard key={Qdata} Qdata={Qdata}  nextQuestion={nextQuestion} quizDone={quizDone} chooseAnswer={chooseAnswer}/>

           
        }
        
      
      
      

     
    </div>
  );
}

export default App;
