import kulipaLogo from "../assets/kulipal.jpeg";
import madeForEaseLogo from "../assets/MFE logo.png";

const DiscountForm = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-white py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-8 sm:p-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <img
            src={madeForEaseLogo}
            alt="Made For Ease Logo"
            className="w-14 h-14 sm:w-16 sm:h-16 object-contain"
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
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mt-4">
            Enjoy Your <span className="text-blue-600">Special Discount</span>
          </h1>
          <p className="text-gray-500 text-sm mt-2 font-medium">
            Get up to{" "}
            <span className="text-blue-500 font-semibold">25% off</span>{" "}
            instantly on your next order.
          </p>
        </div>

        {/* Form */}
        <form className="space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="relative">
              <input
                type="text"
                id="fullname"
                className="peer w-full px-4 pt-6 pb-2 text-sm bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder=" "
                required
              />
              <label
                htmlFor="fullname"
                className="absolute left-4 top-5 text-sm text-gray-500 transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-600"
              >
                Full Name
              </label>
            </div>

            <div className="relative">
              <input
                type="email"
                id="email"
                className="peer w-full px-4 pt-6 pb-2 text-sm bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder=" "
                required
              />
              <label
                htmlFor="email"
                className="absolute left-4 top-5 text-sm text-gray-500 transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-600"
              >
                Email Address
              </label>
            </div>

            <div className="relative">
              <input
                type="tel"
                id="phone"
                className="peer w-full px-4 pt-6 pb-2 text-sm bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder=" "
                required
              />
              <label
                htmlFor="phone"
                className="absolute left-4 top-5 text-sm text-gray-500 transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-600"
              >
                Phone Number
              </label>
            </div>

            <div className="relative">
              <input
                type="text"
                id="order-number"
                className="peer w-full px-4 pt-6 pb-2 text-sm bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder=" "
                required
              />
              <label
                htmlFor="order-number"
                className="absolute left-4 top-5 text-sm text-gray-500 transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-600"
              >
                Order Number
              </label>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <button
              type="submit"
              className="inline-flex items-center px-8 py-3.5 text-base font-semibold rounded-lg shadow-md text-white bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 transition-all transform hover:scale-105"
            >
              Claim Discount
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
