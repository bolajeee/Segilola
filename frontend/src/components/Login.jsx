import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useUserStore } from "../stores/users";
import { useToast } from "@chakra-ui/react";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  const { fetchUsers, users } = useUserStore();
   useEffect(() => {
     fetchUsers();
     console.log("fetched Users", fetchUsers)
     console.log("users", users)
   }, [fetchUsers, users]);
  
  // const userDetail = users.find((user) => user._id === userId);

  const createUser = useUserStore()
  const toast = useToast(); 

  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleLogin = async (e) => {
    setIsLogin(!isLogin);
    e.preventDefault();

    const { success, message } = await createUser(newUser);
    if (success) {
      toast({
        title: "Account loggd in Successfully.",
        description: "We've loggd into your account for you.",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    } else console.log(`${success}:`, message);

    setNewUser({
      name: "",
      image: "",
      password:"",
    });
  };

  

    return (
      <div className="flex min-h-screen items-center justify-center ">
        <div className="w-full max-w-md p-8 space-y-8 bg-gray-400 shadow-md rounded-lg">
          <h2 className="text-2xl font-bold text-center text-gray-800">
            {isLogin ? "Login" : "Register"}
          </h2>
          <form className="mt-8 space-y-6">
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
                onClick={handleLogin}
              >
                {isLogin ? "Login" : "Register"}
              </button>
            </div>
          </form>

          <div className="text-center">
            <Link to={"./"}>
              <p className="text-sm text-gray-600">
                {isLogin
                  ? "Don't have an account?"
                  : "Already have an account?"}
                <button
                  onClick={handleLogin}
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
