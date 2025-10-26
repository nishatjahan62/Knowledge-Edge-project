import React, { useEffect, useState } from "react";

import { useParams } from "react-router";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";

const MyFollowers = () => {
  const { authorId } = useParams();
  const [followers, setFollowers] = useState([]);
  const axiosSecure = UseAxiosSecure();

  useEffect(() => {
    const fetchFollowers = async () => {
      try {
        const res = await axiosSecure.get(`/authors/${authorId}/followers`);
        setFollowers(res.data.followers);
      } catch (err) {
        console.error(err);
      }
    };
    fetchFollowers();
  }, [authorId]);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Followers</h2>
      <table className="min-w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-4 py-2">#</th>
            <th className="border px-4 py-2">Email</th>
          </tr>
        </thead>
        <tbody>
          {followers.map((f, idx) => (
            <tr key={idx}>
              <td className="border px-4 py-2">{idx + 1}</td>
              <td className="border px-4 py-2">{f}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyFollowers;
