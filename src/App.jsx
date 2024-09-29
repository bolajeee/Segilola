import "./App.css";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { Home, LoginPage } from "./pages";
import Details from "./components/Details";
import { CartTab, Navbar } from "./components";
import { useDisclosure } from "@chakra-ui/react";



function App() {

  const { isOpen, onOpen, onClose } = useDisclosure();
  
  return (
    <>
      <Navbar onOpen={onOpen}/>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Home isOpen={isOpen} onClose={onClose} />}
          />
          <Route path="/:slug" element={<Details />} />
          <Route path="/CartTab" component={CartTab} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
