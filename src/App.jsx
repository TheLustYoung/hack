import { Routes, Route } from "react-router-dom";

import SingFooter from "./SingFooter";
import Task from "./Task"

function App() {
  return (
    <>
      <Routes>
        <Route
          exact
          path="/"
          element={<SingFooter/>}
        />
        <Route exact path="/task" element={<Task />} />
      </Routes>
    </>
  );
}

export default App;
