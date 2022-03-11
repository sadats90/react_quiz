import AnswerCard from "./AnswerCard"


const QuizCard = ({Qdata,nextQuestion,quizDone,chooseAnswer})=> {
   
   
   
   const answers = [Qdata.correct_answer,...Qdata.incorrect_answers]

  
   
   const e = 3
   function next()
    {
      nextQuestion(e)


    }

    

   return (
   <div>
    
    <h1>{Qdata.question}</h1>

    {/* {answers.map((el,index)=><h1 key={el}>{index+1}:{el}</h1> )} */}
    {answers.map((el,index)=> <AnswerCard answers={answers} el={el} index={index} chooseAnswer={chooseAnswer}/> )}
      
   



    <button onClick={next}>Next Question</button>
    {
       quizDone && <h1>Quiz ended</h1>
    }
      
   </div>
   )


}

export default QuizCard