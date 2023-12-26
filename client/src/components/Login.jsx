import { useState } from "react";
import axios from "axios";
function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/auth/login', formData);
      console.log(response.data);

      // Handle success, maybe store user data in state or local storage
    } catch (error) {
      console.error(error);
      // Handle error, show error message to the user
    }
  };

  return (
    <>
      <div className="bg-cover h-screen flex items-center" style={{ backgroundImage: 'url("../1.jpg")' }}>
      <form action="" onSubmit={handleSubmit}>
        <div className="max-w-md mx-auto bg-white shadow-md rounded px-28 pt-6 pb-8 mt-20 mb-4" style={{backgroundColor:"yellow"}}>
          <h3 className="text-center text-2xl font-bold mb-4">Login</h3>
         
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              name="email"
              onChange={handleChange}
              placeholder="Enter Your Email"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              name="password"
              onChange={handleChange}
              placeholder="Enter Your Password"
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Login
            </button>
           
          </div>
        </div>
        </form>
      </div>
    </>
  );
}

export default Login;
