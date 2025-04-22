import { useState } from "react";
import kulipaLogo from "../assets/kulipal.jpeg";
import madeForEaseLogo from "../assets/MFE logo.png";
import { toast } from "react-toastify";
import { validateEmail } from "../utils";

const DiscountForm = () => {
  const initialState = {
    fullname: "",
    email: "",
    phone: "",
    orderNumber: "",
  };

  const [formData, setFormData] = useState(initialState);
  const [loading, setLoading] = useState(false);

  const { fullname, email, phone, orderNumber } = initialState;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!email || !phone || !fullname || orderNumber) {
      toast.error("Please enter all required fields");
      setLoading(false);
      return;
    }

    if (!validateEmail(email)) {
      toast.error("Please enter valid email address");
      setLoading(false);
      return;
    }

    try {
      // Handle form submission here
      console.log("Form submitted:", formData);
      // Add your API call or form processing logic

      // Reset form after submission
      setFormData(initialState);
    } catch (error) {
      const message =
        error?.response?.data?.message || error?.message || error?.toString();

      setLoading(false);
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-4 ">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <img
            src={madeForEaseLogo}
            alt="Made For Ease Logo"
            className="lg:w-14 w-10 lg:h-14 h-10  object-contain"
          />
          <h2 className="text-xl font-semibold text-gray-700 tracking-tight">
            Discount Claim Form
          </h2>
        </div>

        {/* Banner */}
        <div className="text-center mb-10">
          <div className="flex justify-center">
            <img
              src={kulipaLogo}
              alt="Kulipa Logo"
              className="w-40 h-24 object-contain rounded-lg"
            />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 ">
            Enjoy Your <span className="text-blue-600">Special Discount</span>
          </h1>
          <p className="text-gray-500 text-sm mt-2 font-medium">
            Get up to{" "}
            <span className="text-blue-500 font-semibold">25% off</span>{" "}
            instantly on your next order.
          </p>
        </div>

        <form className="space-y-8" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="relative">
              <input
                type="text"
                id="fullname"
                name="fullname"
                value={formData.fullname}
                onChange={handleChange}
                className="peer w-full px-4 pt-6 pb-2 text-sm bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder=" "
                required
              />
              <label
                htmlFor="fullname"
                className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1 font-outfit"
              >
                Full Name
              </label>
            </div>

            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="peer w-full px-4 pt-6 pb-2 text-sm bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder=" "
                required
              />
              <label
                htmlFor="email"
                className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1 font-outfit"
              >
                Email Address
              </label>
            </div>

            <div className="relative">
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="peer w-full px-4 pt-6 pb-2 text-sm bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder=" "
                required
              />
              <label
                htmlFor="phone"
                className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1 font-outfit"
              >
                Phone Number
              </label>
            </div>

            <div className="relative">
              <input
                type="text"
                id="order-number"
                name="orderNumber"
                value={formData.orderNumber}
                onChange={handleChange}
                className="peer w-full px-4 pt-6 pb-2 text-sm bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder=" "
                required
              />
              <label
                htmlFor="order-number"
                className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1 font-outfit"
              >
                Order Number
              </label>
            </div>
          </div>

          <div className="mt-10 text-center">
            <button
              type="submit"
              disabled={loading}
              className={`inline-flex items-center px-8 py-3.5 text-base font-semibold rounded-lg shadow-sm text-white bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 transition-all transform hover:scale-105 font-outfit tracking-wide ${
                loading ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {loading ? (
                <>
                  Processing...
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                </>
              ) : (
                <>
                  Claim Your Discount
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-3"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </>
              )}
            </button>
          </div>
        </form>

        {/* Footer */}
        <div className="mt-12 border-t border-gray-200 pt-6 text-center">
          <p className="text-sm text-gray-500">
            Questions? Reach out to{" "}
            <a
              href="mailto:support@madeforease.shop"
              className="text-blue-600 font-medium hover:underline"
            >
              support@madeforease.shop
            </a>
          </p>
          <p className="mt-1 text-xs text-gray-400">© 2025 madeforease.shop</p>
        </div>
      </div>
    </div>
  );
};

export default DiscountForm;
