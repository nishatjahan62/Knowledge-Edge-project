import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "./UseAxiosSecure";
import AuthHook from "./AuthHook";

const UseUserRole = () => {
  const { user, loading } = AuthHook();
  const axiosSecure = UseAxiosSecure();

  const { data: role = "user", isLoading } = useQuery({
    queryKey: ["userRole", user?.email],
    enabled: !!user?.email && !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/role/${user.email}`);
      return res.data.role;
    },
  });

  return { role, roleLoading: isLoading };
};

export default UseUserRole;
