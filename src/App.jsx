import "./App.css";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { Home, LoginPage } from "./pages";
import Details from "./components/Details";
import { CartTab } from "./components";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:slug" element={<Details />} />
          <Route path="/CartTab" element={<CartTab />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
