import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  //   const { user, logOut, setLoading, admin } = useAuth();
  useEffect(() => {
    const button = document.querySelector("#menu-button");
    const menu = document.querySelector("#menu");

    button.addEventListener("click", () => {
      menu.classList.toggle("hidden");
    });
  }, []);
  return (
    <div className="  w-full">
      <nav
        className="
        shadow-md
          index  
          flex flex-wrap
          items-center
          justify-between
          w-full
          py-4
          md:py-0
          px-4
          text-lg text-gray-700
          bg-white
        "
      >
        <div>
          <Link to="/">
            {/* <img
              src="https://cdn.shopify.com/s/files/1/0047/5335/8922/files/interlogo1_0170765c-e92d-4bff-bf85-d5742d350a2b_large.png?v=1634128380"
              alt=""
            /> */}
            <h1 className=" text-2xl text-gray-900">Hostel</h1>
          </Link>
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="menu-button"
          className="h-6 w-6 cursor-pointer md:hidden block"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>

        <div
          className="hidden w-full md:flex md:items-center md:w-auto"
          id="menu"
        >
          <ul
            className="
              pt-4
              text-base text-gray-700
              md:flex
              md:justify-between 
              md:pt-0"
          >
            <li>
              <Link
                className="md:p-4 py-2 block hover:text-purple-400"
                to="/home"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="md:p-4 py-2 block hover:text-purple-400"
                to="/admin"
              >
                Admin
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
