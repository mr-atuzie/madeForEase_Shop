import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import moment from "moment";
import Loader from "../components/Loader";
import madeForEaseLogo from "../assets/MFE logo.png"; // Import your logo

const AdminDashboard = () => {
  const [referrals, setReferrals] = useState([]);
  const [loader, setLoader] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const referralsPerPage = 15;

  const greeter = () => {
    const now = new Date();
    const hour = now.getHours();

    if (hour < 12) return "Good Morning";
    else if (hour < 18) return "Good Afternoon";
    else return "Good Evening";
  };

  const getReferrals = async () => {
    try {
      const { data } = await axios.get(`/api/v1/referrals`);
      setReferrals(data);
      setLoader(false);
    } catch (error) {
      const message =
        error?.response?.data?.message || error?.message || error?.toString();
      toast.error(message);
      setLoader(false);
    }
  };

  useEffect(() => {
    getReferrals();
  }, []);

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  const indexOfLastReferral = currentPage * referralsPerPage;
  const indexOfFirstReferral = indexOfLastReferral - referralsPerPage;
  const currentReferrals = referrals?.slice(
    indexOfFirstReferral,
    indexOfLastReferral
  );

  if (loader) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      {/* Main Container */}
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="flex items-center gap-4">
              <img
                src={madeForEaseLogo}
                alt="MadeForEase Logo"
                className="w-12 h-12 object-contain"
              />
              <div>
                <h1 className="text-2xl font-bold text-gray-800 lg:text-3xl">
                  Admin Dashboard
                </h1>
                <p className="text-gray-600">
                  <span className="text-yellow-600 font-medium">
                    {greeter()},
                  </span>{" "}
                  {localStorage.getItem("name") || "Admin"}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="hidden md:block bg-yellow-100 text-yellow-800 px-4 py-2 rounded-lg">
                <p className="text-sm font-medium">
                  Total Referrals:{" "}
                  <span className="font-bold">{referrals.length}</span>
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          {/* Referrals Section */}
          {referrals?.length > 0 ? (
            <>
              <div className="px-6 py-4 border-b border-gray-200">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div>
                    <h2 className="text-xl font-bold text-gray-800">
                      Referral Records
                    </h2>
                    <p className="text-gray-500 text-sm mt-1">
                      Showing {currentReferrals.length} of {referrals.length}{" "}
                      referrals
                    </p>
                  </div>
                  {/* <div className="flex items-center gap-2">
                    <input
                      type="text"
                      placeholder="Search referrals..."
                      className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    />
                    <button className="px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors">
                      Search
                    </button>
                  </div> */}
                </div>
              </div>

              <div className="overflow-x-scroll">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        S/N
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Name
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Email
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Order Number
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Date Created
                      </th>
                      {/* <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th> */}
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {currentReferrals.map((referral, index) => (
                      <tr
                        key={referral._id}
                        className="hover:bg-gray-50 transition-colors"
                      >
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {indexOfFirstReferral + index + 1}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {referral.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {referral.email}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          123456
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {moment(referral.createdAt).format(
                            "MMM D, YYYY [at] h:mm A"
                          )}
                        </td>
                        {/* <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <button className="text-yellow-600 hover:text-yellow-800 mr-3">
                            View
                          </button>
                          <button className="text-red-600 hover:text-red-800">
                            Delete
                          </button>
                        </td> */}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
                <div className="text-sm text-gray-500">
                  Page {currentPage} of{" "}
                  {Math.ceil(referrals.length / referralsPerPage)}
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="px-4 py-2 border rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                  >
                    Previous
                  </button>
                  {Array.from(
                    { length: Math.ceil(referrals.length / referralsPerPage) },
                    (_, index) => (
                      <button
                        key={index + 1}
                        onClick={() => handlePageChange(index + 1)}
                        className={`px-4 py-2 border rounded-md ${
                          currentPage === index + 1
                            ? "bg-yellow-600 text-white border-yellow-600"
                            : "hover:bg-gray-50"
                        }`}
                      >
                        {index + 1}
                      </button>
                    )
                  )}
                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={
                      currentPage ===
                      Math.ceil(referrals.length / referralsPerPage)
                    }
                    className="px-4 py-2 border rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                  >
                    Next
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="p-8 text-center">
              <div className="text-gray-400 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 mx-auto"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-1">
                No referrals found
              </h3>
              <p className="text-gray-500">
                There are currently no referral records in the system.
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>
            &copy; {new Date().getFullYear()}{" "}
            <span className="text-yellow-600 font-medium">MadeForEase</span>.
            All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
