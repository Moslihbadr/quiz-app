import { useEffect, useState } from "react";
import FinaleScore from "./FinaleScore";

const Play = ({ API, setSavedScore }) => {

  const [ allQuestions, setAllQuestions ] = useState([])
  const [ currentQuestionIndex, setCurrentQuestionIndex ] = useState(0)
  const [ score, setScore ] = useState(0)
  const [ correctAnswer, setCorrectAnswer ] = useState('')

  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then(data => setAllQuestions(data.results));
  }, [API]);

  useEffect(() => {
    if (allQuestions.length > 0) {
      setCorrectAnswer(allQuestions[currentQuestionIndex]?.correct_answer)
    }
  }, [allQuestions, currentQuestionIndex]);

  const handleNext = (event) => {
    setCurrentQuestionIndex(prevState => prevState + 1)

    const selectedAnswer = event.target.textContent

    if (selectedAnswer === correctAnswer) {
      setScore(prevScore => prevScore + 5)
    }
  }

  // Shuffle array function
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  // Check if all questions are answered
  const allQuestionsAnswered = currentQuestionIndex === allQuestions.length;

  return (
    <div className="play d-flex flex-column justify-content-center align-items-center" style={{height:'100vh'}}>
      {allQuestions.map((question, index) => {

        // Merging the incorrect answers and the correct answer
        const answers = [ ...question.incorrect_answers, question.correct_answer ]
        
        shuffleArray(answers)

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
                  answers.map((q, index) => <button key={index} onClick={handleNext} className="btn btn-outline-primary w-75 m-auto my-1 my-1 w-100" dangerouslySetInnerHTML={{ __html: q }}></button>)
                }
              </div>
            </div>
          )
        )
      })}
      {allQuestionsAnswered && (
        <FinaleScore score={score} setSavedScore={setSavedScore} />
      )}
    </div>
  );
}

export default Play;
