import { useEffect, useState } from "react";
import { getUserInitials } from "../utils";
import { toast } from "react-toastify";
import axios from "axios";
import moment from "moment";
import Loader from "../components/Loader";

const AdminDashboard = () => {
  const [referrals, setReferrals] = useState([]);
  const [loader, setLoader] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const referralsPerPage = 20;

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
    <div className="w-[95%] mx-auto py-6">
      {/* Header */}
      <header className="mb-6">
        <div className="flex flex-wrap justify-between items-center gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-800 lg:text-3xl">
              Admin Dashboard
            </h1>
            <p className="text-sm lg:text-base">
              <span className="text-yellow-500 ">{greeter()},</span>{" "}
              {localStorage.getItem("name")}
            </p>
          </div>
          <button className="flex justify-center items-center w-12 h-12 rounded-full bg-yellow-500 text-white text-lg font-semibold shadow-md hover:bg-yellow-600 transition duration-300">
            {getUserInitials("Curtis Jackson")}
          </button>
        </div>
      </header>

      {/* Referrals Section */}
      {referrals?.length > 0 ? (
        <>
          <div className="mb-6">
            <h1 className="text-xl font-bold tracking-wide text-yellow-500 capitalize">
              Referrals
            </h1>
            <p className="text-gray-500 text-sm">
              {currentReferrals.length}/{referrals.length} total referrals
            </p>
          </div>

          <div className="rounded-lg shadow-lg bg-white ">
            <table className="w-full text-sm text-left text-gray-600">
              <thead className="bg-gray-100 text-gray-700 uppercase">
                <tr>
                  <th className="px-6 py-3">S/N</th>
                  <th className="px-6 py-3">Name</th>
                  <th className="px-6 py-3">Email</th>
                  <th className="px-6 text-nowrap py-3">Created At</th>
                </tr>
              </thead>
              <tbody>
                {currentReferrals.map((referral, index) => (
                  <tr
                    key={referral._id}
                    className={`border-b ${
                      index % 2 === 0 ? "bg-gray-50" : "bg-white"
                    } hover:bg-gray-100 transition`}
                  >
                    <td className="px-6 py-4 font-medium">{index + 1}</td>
                    <td className="px-6 py-4">{referral.name}</td>
                    <td className="px-6 py-4">{referral.email}</td>
                    <td className="px-6 text-nowrap py-4">
                      {moment(referral.createdAt).format(
                        "MMMM Do YYYY, h:mm:ss a"
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="mt-4 flex justify-center gap-2">
            {Array.from(
              { length: Math.ceil(referrals.length / referralsPerPage) },
              (_, index) => (
                <button
                  key={index + 1}
                  onClick={() => handlePageChange(index + 1)}
                  className={`px-4 py-2 rounded-md border ${
                    currentPage === index + 1
                      ? "bg-yellow-500 text-white"
                      : "bg-white text-gray-600"
                  } hover:bg-yellow-500 hover:text-white transition duration-200`}
                >
                  {index + 1}
                </button>
              )
            )}
          </div>
        </>
      ) : (
        <p className="text-gray-500">No referrals found</p>
      )}
    </div>
  );
};

export default AdminDashboard;
