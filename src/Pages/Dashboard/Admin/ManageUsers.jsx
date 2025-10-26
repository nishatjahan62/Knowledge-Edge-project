import React, { useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { FaSearch } from "react-icons/fa";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";
import Button from "../../Button/Button";

const ManageUsers = () => {
  const axiosSecure = UseAxiosSecure();
  const queryClient = useQueryClient();

  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState("");

  // ===== Fetch Users (with search & role filter) =====
  const { data: users = [], isLoading } = useQuery({
    queryKey: ["users", search, roleFilter],
    queryFn: async () => {
      const { data } = await axiosSecure.get("/users", {
        params: {
          search: search || undefined,
          role: roleFilter || undefined,
        },
      });
      return data;
    },
  });

  // ===== Update Role =====
  const handleRoleChange = async (userId, action, newRoleText) => {
    try {
      const { isConfirmed } = await Swal.fire({
        title: `Are you sure?`,
        text: `You want to ${newRoleText}?`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, do it!",
      });

      if (!isConfirmed) return;

      const { data } = await axiosSecure.patch(`/users/${action}/${userId}`);
      if (data.success) {
        Swal.fire("Success", data.message, "success");
        queryClient.invalidateQueries(["users"]);
      } else {
        Swal.fire("Error", "Failed to update role", "error");
      }
    } catch (err) {
      console.error(err);
      Swal.fire("Error", "Something went wrong", "error");
    }
  };

  if (isLoading) {
    return <div className="text-center mt-10 text-lg">Loading users...</div>;
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-6">Manage Users</h2>

      {/* Search + Filter */}
      <div className="flex flex-wrap items-center gap-3 mb-6">
        <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2">
          <FaSearch className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Search by name or email..."
            className="outline-none bg-transparent"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <select
          className="border border-gray-300 rounded-lg px-3 py-2"
          value={roleFilter}
          onChange={(e) => setRoleFilter(e.target.value)}
        >
          <option value="">All Roles</option>
          <option value="admin">Admin</option>
          <option value="author">Author</option>
          <option value="user">User</option>
        </select>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-4 py-2 text-left">Name</th>
              <th className="border px-4 py-2 text-left">Email</th>
              <th className="border px-4 py-2 text-left">Role</th>
              <th className="border px-4 py-2 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.length === 0 ? (
              <tr>
                <td colSpan="4" className="text-center py-4">
                  No users found
                </td>
              </tr>
            ) : (
              users.map((user) => (
                <tr key={user._id} className="border-t">
                  <td className="px-4 py-2">{user.name}</td>
                  <td className="px-4 py-2">{user.email}</td>
                  <td className="px-4 py-2 capitalize">{user.role}</td>
                  <td className="px-4 py-2 text-center space-x-2">
                    {/* Admin buttons */}
                    {user.role === "admin" ? (
                      <Button
                        onClick={() =>
                          handleRoleChange(user._id, "remove-admin", "remove admin role")
                        }
                        className="bg-red-500 hover:bg-red-600 text-white"
                      >
                        Remove Admin
                      </Button>
                    ) : (
                      <Button
                        onClick={() =>
                          handleRoleChange(user._id, "make-admin", "make admin")
                        }
                        className="bg-blue-500 hover:bg-blue-600 text-white"
                      >
                        Make Admin
                      </Button>
                    )}

                    {/* Author buttons */}
                    {user.role === "author" ? (
                      <Button
                        onClick={() =>
                          handleRoleChange(user._id, "remove-author", "remove author role")
                        }
                        className="bg-red-500 hover:bg-red-600 text-white"
                      >
                        Remove Author
                      </Button>
                    ) : (
                      <Button
                        onClick={() =>
                          handleRoleChange(user._id, "make-author", "make author")
                        }
                        className="bg-green-500 hover:bg-green-600 text-white"
                      >
                        Make Author
                      </Button>
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
