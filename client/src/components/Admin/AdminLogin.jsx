import { useEffect, useState } from "react";
import { useAppContext } from "../../context/AppContext";
import toast from "react-hot-toast";

const AdminLogin = () => {
  const { isAdmin, setIsAdmin, navigate, axios } = useAppContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleOnSubmit = async (e) => {
    try {
      e.preventDefault();
      const { data } = await axios.post("/api/v1/admin/login", {
        email,
        password,
      });

      if (data.success) {
        setIsAdmin(true);
        navigate("/admin");
      } else {
        setEmail("");
        setPassword("");
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (isAdmin) {
      navigate("/admin");
    }
  }, [isAdmin]);

  return (
    !isAdmin && (
      <form
        onSubmit={handleOnSubmit}
        className="min-h-screen flex items-center text-sm text-gray-500"
      >
        <div className="flex flex-col gap-5 m-auto items-start p-8 py-12 min-w-80 sm:min-w-w88 rounded-lg shadow-2xl border border-gray-500/20">
          <p className="text-2xl font-medium m-auto">
            <span className=" text-primary">Admin </span>Login
          </p>
          <div className="w-full">
            <p className="">Email</p>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
              placeholder="Enter email"
              className="border border-gray-200 rounded w-full p-2 mt-1 outline-primary"
            />
          </div>
          <div className="w-full">
            <p className="">Password</p>
            <input
              type="password"
              required
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              placeholder="Enter password"
              className="border border-gray-200 rounded w-full p-2 mt-1 outline-primary"
            />
          </div>
          <button className="bg-primary text-white w-full py-2 rounded-md cursor-pointer">
            Login
          </button>
        </div>
      </form>
    )
  );
};

export default AdminLogin;
