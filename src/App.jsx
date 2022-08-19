import { useState } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import TaskL from "./components/TaskList.jsx";
import TaskForm from "./components/TaskForm.jsx";
function App() {
  return (
    <div className="bg-zinc-900 h-screen text-white">
      <div className="flex items-center justify-center h-full">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<TaskL />} />
            <Route path="/create-Task" element={<TaskForm />} />
            <Route path="/edit-Task/:id" element={<TaskForm />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
