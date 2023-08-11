import { useEffect, useState } from "react";

const Play = ({ API }) => {

  const [ allQuestions, setAllQuestions ] = useState([])
  const [ currentQuestionIndex, setCurrentQuestionIndex ] = useState(0)
  const [ score, setScore ] = useState(0)

  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then(data => setAllQuestions(data.results))
  }, [API])

  const handleNext = () => {
    setCurrentQuestionIndex(prevState => prevState + 1)
  }
  

  return (
    <div className="play d-flex flex-column justify-content-center align-items-center">
      {allQuestions.map((question, index) => {

        // Merging the incorrect answers and the correct answer
        const answers = [ ...question.incorrect_answers, question.correct_answer ]

        return (
          index === currentQuestionIndex &&
          (
            <div key={index} className="card bg-transparent" style={{ 'width': '100%' }}>
              <div className="card-header d-flex justify-content-between">
                <span className="">Question : {currentQuestionIndex + 1}/10</span>
                <span className="">Score : {score}</span>
              </div>
              <div className="card-body px-2 pt-4">
                <h1 className="text-center mt-3 mb-4" dangerouslySetInnerHTML={{ __html: question.question }} />
                {
                  answers.map((q, index) => <button key={index} onClick={handleNext} className="btn btn-outline-primary my-1 w-100">{q}</button>)
                }
              </div>
            </div>
          )
        )
      }
      )}
      {/* <button onClick={handleNext}>next</button> */}
    </div>
  );
  
}

export default Play;