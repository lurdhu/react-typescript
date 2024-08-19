import { useEffect, useState } from "react"

type QuizdataProps = {
    Questions:{
        id:number
        question:string
        answer:string[]
        correct:string
    }[]
}

function Quiz({ Questions } : QuizdataProps) {

    const [CurrentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [timer, setTimer]  = useState(20);

    const handleAnswerClick = (selectedOption:any) =>{
        if(selectedOption === Questions[CurrentQuestion].correct){
            setScore((prev)=>prev+1)
        }
        if(CurrentQuestion < Questions.length-1){
            setCurrentQuestion((prevval)=>prevval+1)
            setTimer(20)
        }
        else{
            setShowScore(true)
        }
    }

    useEffect(()=>{
        let interval:any
        if(timer > 0 && !showScore){
          interval=setInterval(() => {
              setTimer((prevtimer)=>prevtimer-1)
          }, 1000);
        }else{
          clearInterval(interval);
          setShowScore(true);
        }
        return()=>clearInterval(interval);
  
      },[timer,showScore])
   

    function restart(){
        setScore(0)
        setCurrentQuestion(0)
        setShowScore(false)
        setTimer(20)
    }
    return (
        <>
            <div>Quiz App</div>
            {
                showScore ? (
                    <div>
                        <p>Your Score:{score}/{Questions.length}</p>
                        <button onClick={restart}>Restart</button>
                    </div>
                ) : (
                    <div>
                        {
                            <div>
                                <p>Question {CurrentQuestion + 1}</p>
                                <p>{Questions[CurrentQuestion].question}</p>
                                <p>{
                            Questions[CurrentQuestion].answer.map((option,index)=>{
                              return(
                                <button key={index} onClick={()=>handleAnswerClick(option)}>{option}</button>
                              )
                            })
                           }</p>
                               <div>
                                    <p>Time Left: <span>{timer}s</span></p>
                                </div>
                            </div>

                        }
                    </div>
                )
            }


        </>
    )
}

export default Quiz