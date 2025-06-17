import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import ChatApp from "./ChatApp";
import "./App.css";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/chat" element={<ChatApp />} />
    </Routes>
  );
}
