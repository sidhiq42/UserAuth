import React from "react";
import image1 from "../assets/1.jpg";
import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <div>
        <nav className="bg-gray-800 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/login" className="text-white ml-16 me-11">
                Login
              </Link>
              <Link to="/register" className="text-white">
                Register
              </Link>
            </div>
           
          </div>
        </nav>
        <div>
              <img src={image1} alt="Home" className="h-90 w-100" />
            </div>
      </div>
    </>
  );
}

export default Home;
