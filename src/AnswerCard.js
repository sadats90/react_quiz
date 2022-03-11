const AnswerCard = ({el,index,chooseAnswer})=>{

   
    
    return (
        <div>
        
        {/* {<h1 onClick={()=>selectedAnswer(el)}>{index+1}:{el}</h1>} */}

        {<h1 onClick={()=>chooseAnswer(el)}>{index+1}:{el}</h1>}
       
    
        </div>
    )
}


export default AnswerCard