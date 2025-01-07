import { motion } from "framer-motion";
import { AiOutlineUser, AiOutlineLock } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-yellow-500 via-yellow-400 to-yellow-300">
      {/* Card Container */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-lg shadow-lg p-4 lg:p-8 w-[95%] max-w-md"
      >
        {/* Logo */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Admin Login</h1>
          <p className="text-gray-500">Access your dashboard</p>
        </div>

        {/* Login Form */}
        <form className="space-y-6">
          {/* Username Input */}
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <div className="relative mt-1">
              <AiOutlineUser className="absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                id="username"
                placeholder="Enter your username"
                className="w-full pl-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Password Input */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <div className="relative mt-1">
              <AiOutlineLock className="absolute left-3 top-3 text-gray-400" />
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="w-full pl-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Login Button */}

          <button
            type="submit"
            onClick={() => navigate("/admin/dashboard")}
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 rounded-lg shadow-lg transition-transform transform hover:scale-105"
          >
            Login
          </button>
        </form>

        {/* Footer */}
        <div className="text-center mt-6 text-xs lg:text-sm text-gray-500">
          <p>
            &copy; 2025 <span className=" text-yellow-500">Made for ease</span>.
            All rights reserved.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default AdminLogin;
