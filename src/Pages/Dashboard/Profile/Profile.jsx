import { useEffect, useState } from "react";
import AuthHook from "../../../Hooks/AuthHook";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";
import UseUserRole from "../../../Hooks/UseUserRole";
import Loading from "../../Loading/Loading";
import UserIcon from "../../../../public/userIcon.png";


const Profile = () => {
  const { user } = AuthHook();
  const axiosSecure = UseAxiosSecure();
  const { role, roleLoading } = UseUserRole();
  const [profile, setProfile] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({});

  // Fetch profile from backend
  useEffect(() => {
    if (user?.email) {
      axiosSecure
        .get(`/users/${user.email}`)
        .then((res) => {
          const p = res.data;
          setProfile(p);
          setFormData({
            name: p.name || "",
            photoURL: p.photoURL || "",
            contact: p.contact || "",
            bio: p.bio || "",
            lastLogin: p.lastLogin || "",
            createdAt: p.createdAt || "",
          });
        })
        .catch((err) => console.error(err));
    }
  }, [user, axiosSecure]);

  if (roleLoading || !profile) return <Loading />;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    try {
      const res = await axiosSecure.put(`/users/${user.email}`, formData);
      setProfile(res.data);
      setIsEditing(false);
    } catch (err) {
      console.error(err);
    }
  };

  // Common card wrapper
  const Card = ({ title, children }) => (
    <div className="flex justify-center items-center p-6 mt-10 lg:mt-20">
      <div className="w-full max-w-md bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6 border dark:border-gray-700">
        <h2 className="text-2xl font-bold text-center mb-4 text-primary">{title}</h2>
        {children}
      </div>
    </div>
  );

  const formatDate = (date) => (date ? new Date(date).toLocaleDateString() : "N/A");

  const ProfileImage = ({ src, alt }) => (
    <div className="flex justify-center mb-4">
      <img
        src={src || UserIcon}
        alt={alt}
        className="w-28 h-28 rounded-full border-4 border-secondary"
      />
    </div>
  );

  const EditForm = () => (
    <div className="space-y-3">
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        className="w-full border rounded px-3 py-2"
      />
      <input
        type="text"
        name="photoURL"
        placeholder="Photo URL"
        value={formData.photoURL}
        onChange={handleChange}
        className="w-full border rounded px-3 py-2"
      />
      <input
        type="text"
        name="contact"
        placeholder="Contact"
        value={formData.contact}
        onChange={handleChange}
        className="w-full border rounded px-3 py-2"
      />
      <textarea
        name="bio"
        placeholder="Bio"
        value={formData.bio}
        onChange={handleChange}
        className="w-full border rounded px-3 py-2"
      />
      <div className="flex justify-end gap-2 mt-2">
        <button
          onClick={() => setIsEditing(false)}
          className="px-4 py-2 rounded bg-gray-300 dark:bg-gray-700"
        >
          Cancel
        </button>
        <button
          onClick={handleSave}
          className="px-4 py-2 rounded bg-primary text-white"
        >
          Save
        </button>
      </div>
    </div>
  );

  const ProfileView = () => (
    <div className="space-y-2 text-center">
      <p className="text-lg font-semibold dark:text-white ">{profile.name}</p>
      <p className="text-gray-600 dark:text-gray-300">{profile.email}</p>
      {role !== "user" && (
        <p className="text-gray-700 dark:text-gray-400">
          <strong className="text-primary">Role:</strong>{" "}
          {role.charAt(0).toUpperCase() + role.slice(1)}
        </p>
      )}
      {profile.contact && (
        <p className="text-gray-700 dark:text-gray-400">
          <strong className="text-primary">Contact:</strong> {profile.contact}
        </p>
      )}
      {profile.bio && (
        <p className="text-gray-700 dark:text-gray-400 italic">{profile.bio}</p>
      )}
      {role === "admin" && profile.lastLogin && (
        <p className="text-gray-700 dark:text-gray-400">
          <strong className="text-primary">Last Login:</strong>{" "}
          {new Date(profile.lastLogin).toLocaleString()}
        </p>
      )}
      {role === "user" && profile.createdAt && (
        <p className="text-gray-700 dark:text-gray-400">
          <strong className="text-primary">Joined:</strong> {formatDate(profile.createdAt)}
        </p>
      )}
      <button
        onClick={() => setIsEditing(true)}
        className="mt-4 px-4 py-2 bg-primary text-white rounded"
      >
        Edit
      </button>
    </div>
  );

  return (
    <Card title={`${role.charAt(0).toUpperCase() + role.slice(1)} Profile`}>
      <ProfileImage
        src={formData.photoURL || profile.photoURL}
        alt={profile.name || "Profile Image"}
      />
      {isEditing ? <EditForm /> : <ProfileView />}
    </Card>
  );
};

export default Profile;
