import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const HighScores = ({ savedScore }) => {

  const [highscores, setHighScores] = useState(() => {
  const savedScores = localStorage.getItem("SavedScores")
    if (savedScores === null) return []

    return JSON.parse(savedScores)
  })

  useEffect(() => {
    setHighScores((prevScores) => [...prevScores, savedScore]
    .filter((object) => JSON.stringify(object) !== "{}")
    .filter(
      (object, index, self) =>
        index ===
        self.findIndex(
          (obj) =>
            obj.username === object.username &&
            obj.score === object.score &&
            JSON.stringify(obj) !== "{}"
        )
    )
    .sort((a, b) => b.score - a.score))
  }, [savedScore])

  useEffect(() => {
    localStorage.setItem("SavedScores", JSON.stringify(highscores))
  }, [highscores])

  const filteredHighscores = highscores
    .filter((object) => JSON.stringify(object) !== "{}")
    .filter(
      (object, index, self) =>
        index ===
        self.findIndex(
          (obj) => obj.username === object.username && obj.score === object.score
        )
    )
    .sort((a, b) => b.score - a.score)

  return (
    <div className="container high-scores mt-5" style={{ height: "100vh" }}>
      <div className="mt-4">
        {filteredHighscores.length > 0 ? (
          <>
            <h1 className="text-center my-5">High Scores</h1>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Rank</th>
                  <th scope="col">Username</th>
                  <th scope="col">Score</th>
                </tr>
              </thead>
              <tbody>
                {filteredHighscores.map((score, index) => (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{score.username}</td>
                    <td>{score.score}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Link to={"/"} className="btn btn-outline-primary me-2 mt-3">
              Home
            </Link>
            <Link
              to={"/quiz/configuration"}
              className="btn btn-outline-primary me-2 mt-3"
            >
              Play Again
            </Link>
          </>
        ) : (
          <h2 className="text-center mt-4">No scores saved</h2>
        )}
      </div>
    </div>
  )
}

export default HighScores