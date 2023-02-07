import "./App.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import AddStudent from "./pages/AddStudent";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addStudent" element={<AddStudent/>} />
      </Routes>
    </>
  );
}

export default App;
