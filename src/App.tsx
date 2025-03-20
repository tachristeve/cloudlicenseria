
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Index from "@/pages/Index";
import NotFound from "@/pages/NotFound";
import FAQ from "@/pages/FAQ";
import About from "@/pages/About";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
