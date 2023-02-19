import { Route, Routes } from "react-router";

//Components
import ToDo from "./components";
import Chart from "./components/chart";
import Divider from "./components/Divider";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Divider />} />
        <Route path="/todo" element={<ToDo />} />
        <Route path="/chart" element={<Chart />} />
      </Routes>
    </div>
  );
}

export default App;
