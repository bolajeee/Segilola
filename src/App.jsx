import "./App.css";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { Home, LoginPage } from "./pages";
import Details from "./components/Details";
import { CartTab } from "./components";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />

      <ChakraProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:slug" element={<Details />} />
            <Route path="/CartTab" element={<CartTab />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </Router>
      </ChakraProvider>
    </>
  );
}

export default App;
