import React, { useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { FaSearch } from "react-icons/fa";
import Button from "../../Button/Button";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";

const ManageUsers = () => {
  const axiosSecure = UseAxiosSecure();
  const queryClient = useQueryClient();

  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState("");

  const { data: users = [], isLoading } = useQuery({
    queryKey: ["users", search, roleFilter],
    queryFn: async () => {
      const { data } = await axiosSecure.get("/users", {
        params: { search: search || undefined, role: roleFilter || undefined },
      });
      return data;
    },
  });

  const handleRoleChange = async (id, action, confirmText) => {
    const confirmResult = await Swal.fire({
      title: "Are you sure?",
      text: `You are about to ${confirmText}.`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, proceed",
    });

    if (!confirmResult.isConfirmed) return;

    try {
      const res = await axiosSecure.patch(`/users/${id}/${action}`);
      if (res.data.success) {
        Swal.fire({
          title: "Success",
          text: res.data.message,
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
          timerProgressBar: true,
        });
        queryClient.invalidateQueries(["users"]);
      }
    } catch (err) {
      Swal.fire(
        "Error",
        err.response?.data?.error || `Failed to ${confirmText}`,
        "error"
      );
    }
  };

  const makeAdmin = (id) => handleRoleChange(id, "make-admin", "make this user an Admin");
  const removeAdmin = (id) => handleRoleChange(id, "remove-admin", "remove admin role");
  const makeAuthor = (id) => handleRoleChange(id, "make-author", "make this user an Author");
  const removeAuthor = (id) => handleRoleChange(id, "remove-author", "remove author role");

  const deleteUser = async (id) => {
    const confirmResult = await Swal.fire({
      title: "Are you sure?",
      text: "You are about to delete this user. This action cannot be undone.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete",
    });

    if (!confirmResult.isConfirmed) return;

    try {
      const res = await axiosSecure.delete(`/users/${id}`);
      if (res.data.success) {
        await Swal.fire({
          title: "Deleted!",
          text: res.data.message,
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
          timerProgressBar: true,
        });
        queryClient.invalidateQueries(["users"]);
      }
    } catch (err) {
      Swal.fire(
        "Error",
        err.response?.data?.message || "Failed to delete user",
        "error"
      );
    }
  };

  const roleTextColor = (role) => {
    switch (role) {
      case "admin":
        return "text-green-500 font-semibold";
      case "author":
        return "text-blue-500 font-semibold";
      default:
        return "text-gray-700 dark:text-gray-300 font-medium";
    }
  };

  if (isLoading)
    return <p className="text-center py-4 text-lg text-gray-600 dark:text-gray-300">Loading users...</p>;

  return (
    <div className="p-6 bg-gray-100 dark:bg-[#1F1F1F] rounded-xl shadow-lg mx-5 sm:mx-8 lg:mx-10 mt-8">
      <h2 className="text-4xl font-bold mb-6 text-center text-primary dark:text-white">
        Manage Users
      </h2>

      {/* Search + Filter */}
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        <div className="relative w-full sm:w-1/2">
          <input
            type="text"
            placeholder="Search users..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border-2 border-secondary dark:border-gray-600 p-2 pl-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:text-white"
          />
          <FaSearch className="absolute left-3 top-3.5 text-gray-400 dark:text-gray-300" />
        </div>
        <select
          value={roleFilter}
          onChange={(e) => setRoleFilter(e.target.value)}
          className="border-2 border-secondary dark:border-gray-600 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:text-white"
        >
          <option value="">All Roles</option>
          <option value="admin">Admin</option>
          <option value="author">Author</option>
          <option value="user">User</option>
        </select>
      </div>

      {/* Users Table */}
      <div className="overflow-x-auto rounded shadow">
        <table className="w-full border border-secondary dark:border-gray-700 dark:text-gray-200 text-sm">
          <thead className="bg-primary dark:bg-gray-700 text-white">
            <tr>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-center">Role</th>
              <th className="p-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.length === 0 ? (
              <tr>
                <td colSpan="4" className="text-center py-4 text-gray-500 dark:text-gray-300">
                  No users found.
                </td>
              </tr>
            ) : (
              users.map((user) => (
                <tr key={user._id} className="border-t dark:border-gray-700">
                  <td className="p-3">{user.name}</td>
                  <td className="p-3">{user.email}</td>
                  <td className={`p-3 text-center font-semibold ${roleTextColor(user.role)}`}>
                    {user.role}
                  </td>
                  <td className="p-3 text-center flex justify-center gap-2">
                    {user.role === "admin" ? (
                      <Button
                        label="Remove Admin"
                        onClick={() => removeAdmin(user._id)}
                        className="cursor-pointer bg-red-500 hover:bg-red-600 text-white dark:text-white sm:px-2 rounded text-sm font-normal"
                      />
                    ) : (
                      <Button
                        label="Make Admin"
                        onClick={() => makeAdmin(user._id)}
                        className="cursor-pointer bg-purple-500 hover:bg-purple-600 text-white dark:text-white sm:px-2 sm:py-1 rounded text-sm font-normal"
                      />
                    )}

                    {user.role === "author" ? (
                      <Button
                        label="Remove Author"
                        onClick={() => removeAuthor(user._id)}
                        className="bg-red-500 hover:bg-red-600 text-white dark:text-white px-2 py-1 font-normal rounded text-sm"
                      />
                    ) : (
                      <Button
                        label="Make Author"
                        onClick={() => makeAuthor(user._id)}
                        className="bg-blue-500 hover:bg-blue-600 text-white dark:text-white px-2 py-1 font-normal rounded text-sm"
                      />
                    )}

                    <Button
                      label="Delete"
                      onClick={() => deleteUser(user._id)}
                      className="bg-gray-500 hover:bg-gray-600 text-white dark:text-white px-2 rounded text-sm"
                    />
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
