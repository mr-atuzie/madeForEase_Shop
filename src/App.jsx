import AdminDasboard from "./pages/AdminDasboard";
import AdminLogin from "./pages/AdminLogin";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDasboard />} />
      </Routes>
    </Router>
  );
}

export default App;
