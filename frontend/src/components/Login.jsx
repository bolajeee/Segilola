import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import { useUserStore } from "../stores/users";
import { useToast } from "@chakra-ui/react";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const { fetchUsers, users, createUser } = useUserStore();
  const navigate = useNavigate(); // Initialize navigate
  const toast = useToast();

  useEffect(() => {
    fetchUsers();
    console.log("fetched Users", fetchUsers);
    console.log("users", users);
  }, [fetchUsers, users]);

  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  // Handle form submission
  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent page reload
    if (!isLogin) {
      // If user is registering (not logging in)
      const { success, message } = await createUser(newUser);

      if (success) {
        toast({
          title: "Account created successfully.",
          description: "You have successfully registered.",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
        navigate("/home"); // Redirect to Home after successful registration
      } else {
        toast({
          title: "Error.",
          description: message,
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      }
    } else {
      // Add your login logic here and redirect on success
      const isLoginSuccess = true; // Replace with actual login logic

      if (isLoginSuccess) {
        toast({
          title: "Login successful.",
          description: "You are logged in successfully.",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
        navigate("/home"); // Redirect to Home after successful login
      }
    }

    // Reset input fields
    setNewUser({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className="flex min-h-screen items-center justify-center ">
      <div className="w-full max-w-md p-8 space-y-8 bg-gray-400 shadow-md rounded-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          {isLogin ? "Login" : "Register"}
        </h2>
        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          {!isLogin && (
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:bg-[#555252] sm:text-sm"
                placeholder="Your Name"
                value={newUser.name}
                onChange={(e) =>
                  setNewUser({ ...newUser, name: e.target.value })
                }
              />
            </div>
          )}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-gray-500 sm:text-sm"
              placeholder="you@example.com"
              value={newUser.email}
              onChange={(e) =>
                setNewUser({ ...newUser, email: e.target.value })
              }
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Your Password"
              value={newUser.password}
              onChange={(e) =>
                setNewUser({ ...newUser, password: e.target.value })
              }
            />
          </div>

          <div>
            <button
              type="submit"
              className="group relative flex w-full justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-gray-900 bg-[#555252] hover:bg-gray-500  hover:text-white tracking-widest uppercase focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              {isLogin ? "Login" : "Register"}
            </button>
          </div>
        </form>

        <div className="text-center">
          <Link to={"./"}>
            <p className="text-sm text-gray-600">
              {isLogin ? "Don't have an account?" : "Already have an account?"}
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="ml-1 font-medium text-black hover:text-indigo-600"
              >
                {isLogin ? "Register" : "Login"}
              </button>
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
