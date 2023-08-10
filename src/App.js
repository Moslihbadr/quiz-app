// Pages
import Home from "./pages/Home";
import Configuration from "./pages/quiz/Configuration";
import Play from "./pages/quiz/Play";
import HighScores from "./pages/HighScores";

// layouts
import QuizLayout from "./layouts/QuizLayout";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { useState } from "react";

const  App = () => {

  const [ API, setAPI ] = useState('');
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<QuizLayout />}>
          <Route path="Configuration" element={<Configuration setAPI={setAPI} />} />
          <Route path="play" element={<Play API={API} />} />
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
