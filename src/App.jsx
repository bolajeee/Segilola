import "./App.css";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { Home, LoginPage } from "./pages";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/LoginPage" element={<LoginPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
