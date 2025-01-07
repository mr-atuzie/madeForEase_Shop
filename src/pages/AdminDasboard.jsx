import { getUserInitials } from "../utils";

const AdminDashboard = () => {
  const data = [
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      createdAt: "2024-12-20",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      createdAt: "2024-12-18",
    },
    {
      id: 3,
      name: "Bob Johnson",
      email: "bob.johnson@example.com",
      createdAt: "2024-12-15",
    },
  ];

  return (
    <div className="w-[95%] mx-auto py-6">
      {/* Header */}
      <header className="mb-6">
        <div className="flex flex-wrap justify-between items-center gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-800 lg:text-3xl">
              Dashboard Overview
            </h1>
            <p className="text-sm text-gray-500 lg:text-base mt-1">
              Welcome,{" "}
              <span className="text-blue-600 font-semibold">
                Curtis Jackson
              </span>
            </p>
          </div>
          <button className="flex justify-center items-center w-12 h-12 rounded-full bg-blue-500 text-white text-lg font-semibold shadow-md hover:bg-blue-600 transition duration-300">
            {getUserInitials("Curtis Jackson")}
          </button>
        </div>
      </header>

      {/* Table */}
      <div className="overflow-hidden rounded-lg shadow-lg bg-white">
        <table className="w-full text-sm text-left text-gray-600">
          <thead className="bg-gray-100 text-gray-700 uppercase">
            <tr>
              <th className="px-6 py-3">S/N</th>
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Email</th>
              <th className="px-6 py-3">Created At</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr
                key={item.id}
                className={`border-b ${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                } hover:bg-gray-100 transition`}
              >
                <td className="px-6 py-4 font-medium">{index + 1}</td>
                <td className="px-6 py-4">{item.name}</td>
                <td className="px-6 py-4">{item.email}</td>
                <td className="px-6 py-4">{item.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
