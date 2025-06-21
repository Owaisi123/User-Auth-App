import { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [editUserId, setEditUserId] = useState(null);
  const [editName, setEditName] = useState("");

  const fetchUsers = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/users");
      setUsers(res.data);
    } catch (error) {
      console.error(" Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/users/${id}`);
      fetchUsers();
    } catch (error) {
      console.error(" Error deleting user:", error);
    }
  };

  const handleUpdate = async (id) => {
    try {
      await axios.put(`http://localhost:5000/api/users/${id}`, {
        name: editName,
      });
      setEditUserId(null);
      setEditName("");
      fetchUsers();
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Dashboard - Users</h2>
      <div className="grid gap-4">
        {users.map((user) => (
          <div
            key={user._id}
            className="p-4 bg-white shadow rounded flex justify-between items-center"
          >
            {editUserId === user._id ? (
              <input
                className="border px-2 py-1 mr-2"
                value={editName}
                onChange={(e) => setEditName(e.target.value)}
              />
            ) : (
              <p className="text-lg font-medium">{user.name}</p>
            )}
            <div className="space-x-2">
              {editUserId === user._id ? (
                <button
                  onClick={() => handleUpdate(user._id)}
                  className="bg-green-500 text-white px-3 py-1 rounded"
                >
                  Save
                </button>
              ) : (
                <button
                  onClick={() => {
                    setEditUserId(user._id);
                    setEditName(user.name);
                  }}
                  className="bg-yellow-500 text-white px-3 py-1 rounded"
                >
                  Edit
                </button>
              )}
              <button
                onClick={() => handleDelete(user._id)}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
