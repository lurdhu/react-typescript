import Quiz from "./Quiz";


function QuizData() {
    let Questions = [
        {
            id:1,
            question:'What is the capital of France?',
            answer:['Berlin','Madrid','Paris','Rome'],
            correct:'Paris'
        },
        {
            id:2,
            question:'Which planet is known as the Red Planet?',
            answer:['Venus','Mars','Jupitar','Saturn'],
            correct:'Mars'
        },
        {
            id:3,
            question:'Who wrote Remeo and Juliet?',
            answer:['Charles Dickens','Jane Austen','William Shakespeare','Leo Talstoy'],
            correct:'William Shakespeare'
        },
    ]

  return (
   <>
        <div>Quiz Details</div>
        <div>
            <Quiz Questions={Questions}/>
        </div>
   </>
  )
}

export default QuizData;