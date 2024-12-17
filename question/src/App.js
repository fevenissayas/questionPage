import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NewQuestion from "./pages/Question/NewQuestion";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

function App () {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/newquestion" element={<NewQuestion />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
