import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="Home d-flex align-items-center justify-content-center">
      <div className="text-center">
        <h1 style={{fontSize:'4rem'}} className="mb-4">Quiz App</h1>
        <Link to={'/quiz/configuration'} className="btn btn-outline-primary my-3 w-75 shadow">Play</Link>
        <Link to={'/highscores'} className="btn btn-outline-primary w-75 shadow">High Scores</Link>
      </div>
    </div>
  )
}

export default Home;