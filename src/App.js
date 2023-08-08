// Pages
import Home from "./pages/Home";
import Configuration from "./pages/quiz/Configuration";
import HighScores from "./pages/HighScores";
import Play from "./pages/Play";

// layouts
import QuizLayout from "./layouts/QuizLayout";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const  App = () => {
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<QuizLayout />}>
          <Route path="Configuration" element={<Configuration />} />
          <Route path="play" element={<Play />} />
        </Route>
        <Route path="/highscores" element={<HighScores />} />
      </Route>
    )
  )
  
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
