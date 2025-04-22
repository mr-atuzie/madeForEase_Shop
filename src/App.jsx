import axios from "axios";
import AdminDasboard from "./pages/AdminDasboard";
import AdminLogin from "./pages/AdminLogin";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ShoppingGuide from "./pages/ShoppingGuide";
import DiscountForm from "./pages/DiscountForm";

axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;

function App() {
  return (
    <Router>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/discount-form" element={<DiscountForm />} />
        <Route path="/shopping-guide" element={<ShoppingGuide />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDasboard />} />
      </Routes>
    </Router>
  );
}

export default App;
