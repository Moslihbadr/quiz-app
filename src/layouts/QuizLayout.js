import { Outlet } from "react-router-dom";

const QuizLayout = () => {
  return (
    <div className="quiz container">
      <Outlet />
    </div>
  )
}

export default QuizLayout;