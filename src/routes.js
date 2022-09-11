import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import ExerciseOne from "./components/ExerciseOne";
import ExerciseTwo from "./components/ExerciseTwo";
import ExerciseThree from "./components/ExerciseThree";

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/exerciseOne" exact element={<ExerciseOne />} />
        <Route path="/exerciseTwo" exact element={<ExerciseTwo />} />
        <Route path="/exerciseThree" exact element={<ExerciseThree />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp;
