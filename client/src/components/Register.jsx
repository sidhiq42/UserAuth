import React, { useState } from "react";
import axios from 'axios'
function Register() {
  const [formData,setFormData]=useState({
    name:'',email:'',password:''
  })
  const handleChange = (e) => {
    console.log('Form Data:', formData); // Check form data
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form Data on Submit:', formData); // Check form data before sending
    
    try {
      const response = await axios.post('/auth/register', formData);
      console.log('Response Data:', response.data); // Check response data
      // Handle success
    } catch (error) {
      console.error('Error:', error.response.data); // Log the error response
      // Handle error
    }
  };
  
  
  

  return (
    <>
      <div
        className="bg-cover h-screen flex items-center"
        style={{ backgroundImage: 'url("../1.jpg")' }}
      >
        <div
          className="max-w-md mx-auto bg-white shadow-md rounded px-28 pt-6 pb-8 mt-20 mb-4"
          style={{ backgroundColor: "yellow" }}
        > 
         <form action="" onSubmit={handleSubmit}>
          <h3 className="text-center text-2xl font-bold mb-4">Registration</h3>

          <div className="mb-4">
          
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              name="name"
              type="text"
              onChange={handleChange}
              placeholder="Enter Your Name"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              name="email"
              type="email"
              onChange={handleChange}
              placeholder="Enter Your Email"
            />
          </div>

          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
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
  type="submit" // Change type to "submit"
>
  Register
</button>

           
          </div>
        </form>
        </div>
        
      </div>
    </>
  );
}

export default Register;
