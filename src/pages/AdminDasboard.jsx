const AdminDasboard = () => {
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
    <div className="overflow-x-auto shadow-md sm:rounded-lg">
      <table className="min-w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="bg-gray-100 dark:bg-gray-700">
          <tr>
            <th className="px-4 py-2">S/N</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Created At</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr
              key={item.id}
              className={`border-b ${
                index % 2 === 0 ? "bg-gray-50" : "bg-white"
              } dark:bg-gray-800`}
            >
              <td className="px-4 py-2 font-medium">{index + 1}</td>
              <td className="px-4 py-2">{item.name}</td>
              <td className="px-4 py-2">{item.email}</td>
              <td className="px-4 py-2">{item.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDasboard;
