import { Outlet } from "react-router-dom";

const QuizLayout = () => {
  return (
    <div className="quiz pt-5">
      <Outlet />
    </div>
  )
}

export default QuizLayout;