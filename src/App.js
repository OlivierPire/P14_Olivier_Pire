import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateEmployee from "./Pages/CreateEmployee";
import CurrentEmployees from "./Pages/CurrentEmployees"
import NotFound from "./Pages/NotFound";

const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" exact element={<CreateEmployee />} />
        <Route path="/*" exact element={<NotFound />} />
        <Route path="/current-employees" exact element={<CurrentEmployees />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;