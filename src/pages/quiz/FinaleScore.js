import { Link } from "react-router-dom"
import { useState } from "react"

const FinaleScore = ({ score, setSavedScore }) => {

  const [username, setUsername] = useState("")
  const [isUsernameValid, setUsernameValid] = useState(true)

  const handleChange = (event) => {
    setUsername(event.target.value)
    setUsernameValid(true) // Reset validation when user types
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!username.trim()) {
      setUsernameValid(false)
      return
    }

    setSavedScore((prevState) => ({
      ...prevState,
      username: username,
      score: score,
    }))

  }

  return (
    <div className="card bg-transparent text-center" style={{height:'100vh'}}>
      <h1 className="mb-5" style={{ fontSize: "2.5em" }}>
        Congratulations!
      </h1>
      <h3 className="lead mb-4">
        Your final score is: <span className="fw-bold">{score}</span>
      </h3>
      <form
        onSubmit={handleSubmit}
        className="d-flex justify-content-center align-items-baseline my-3  "
      >
        <div className="mb-3 text-start px-1">
          <input
            type="text"
            name="username"
            className={`form-control bg-transparent ${
              !isUsernameValid ? "is-invalid" : ""
            }`}
            id="username"
            placeholder="Your Name"
            value={username}
            onChange={handleChange}
          />
          {!isUsernameValid && (
            <div className="invalid-feedback">Please enter a valid username.</div>
          )}
        </div>
        <button className="btn btn-primary mb-3 text-start">Save</button>
      </form>
      <Link to={"/"} className="btn btn-outline-primary w-75 m-auto my-1">
        Home
      </Link>
      <Link
        to={"/quiz/configuration"}
        className="btn btn-outline-primary w-75 m-auto my-1"
      >
        Play Again
      </Link>
    </div>
  )
}

export default FinaleScore
