import "./App.css";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { Home, LoginPage } from "./pages";
import Details from "./components/Details"; // Corrected import

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:slug" element={<Details />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
