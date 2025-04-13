// ShoppingGuide.jsx
import { Link } from "react-router-dom";
import shoppingGuideImage from "../assets/shoppingGuide.png"; // Make sure to add the image to your assets

const ShoppingGuide = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Kulipal</h1>
          <p className="text-xl text-blue-600 font-semibold">
            HOW TO GET UP TO 25% DISCOUNT WHEN YOU SHOP WITH US
          </p>
        </div>

        <div className="mb-8">
          <img
            src={shoppingGuideImage}
            alt="Shopping Guide"
            className="w-full h-auto rounded-lg border border-gray-200"
          />
        </div>

        <div className="space-y-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Step 1</h2>
            <p className="text-gray-700">
              Log on to the website:{" "}
              <span className="font-bold">madeforease.shop</span>
            </p>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Step 2</h2>
            <p className="text-gray-700">Click on Get Started</p>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Step 3</h2>
            <p className="text-gray-700">
              Fill the simple form with your Name and Email
            </p>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Step 4</h2>
            <p className="text-gray-700">Shop what you want on the webstore.</p>
            <p className="text-gray-600 mt-2">
              You will receive a confirmation mail so that on your next visit,
              you can get up to 25% off on your purchase.
            </p>
          </div>
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/final-page" // Update this to your final page route
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            Proceed to Checkout
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>

        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>madeforease.shop</p>
        </div>
      </div>
    </div>
  );
};

export default ShoppingGuide;
