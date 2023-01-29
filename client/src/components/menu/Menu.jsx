import React, { useContext, useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import Image from "../../assets/profil-photo.webp";
import { BsSearch } from "react-icons/bs";
import { BiMenu } from "react-icons/bi";
import { Context } from "../../context/Context";

const Menu = () => {
  const navigate = useNavigate();
  const [showNavbar, setShowNavbar] = useState(false);
  const { user, dispatch } = useContext(Context);
  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const PF = "http://localhost:5000/images/";

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
  };
  return (
    <nav className="flex justify-between items-center px-5 w-full m-auto fixed  top-0 right-0 py-2  text-3xl backdrop-2xl  bg-white/80  z-20  rounded-b-xl tablet:px-1">
      <div className="tablet:text-2xl mobile:text-xl small-mobile:hidden">
        <Link to="/">
          <h2 className="cursor-pointer">_ArchTeK</h2>
        </Link>
      </div>
      <div className="big-screen:hidden small-mobile:block small-mobile:text-xl">
        <Link to="/">
          <h2>_AT</h2>
        </Link>
      </div>
      <BiMenu onClick={handleShowNavbar} className="hidden tablet:block" />
      <div
        className={`big-screen:relative flex gap-5 tablet:absolute tablet:right-[-110%]  overflow-hidden z-20 tablet:w-screen tablet:h-screen transition-all delay-150 ${
          showNavbar && "inset-0"
        }`}
      >
        <ul className="flex gap-10 items-center laptop:text-2xl  tablet:gap-3  tablet:bg-white tablet:flex-col tablet:justify-center tablet:h-screen tablet:text-4xl tablet:w-full mobile:text-6xl mobile:gap-10">
          <li
            className="hover:opacity-50  delay-150 transition-all "
            onClick={handleShowNavbar}
          >
            <NavLink to="/blog">Blog</NavLink>
          </li>

          {user ? (
            <>
              <li
                className="hover:opacity-50  delay-150 transition-all "
                onClick={handleShowNavbar}
              >
                <NavLink to="/write">Write</NavLink>
              </li>

              <li onClick={handleShowNavbar}>
                <NavLink to="/setings">
                  {" "}
                  <img
                    src={PF + user.profilePicture}
                    alt="profil"
                    className="w-[40px] h-[40px] rounded-full mobile:w-[80px] mobile:h-[80px] cursor-pointer"
                  />
                </NavLink>
              </li>

              <li
                className=" hover:bg-white hover:text-black text-white bg-black delay-150 transition-all  border-[1px] border-black p-1 text-2xl mobile:text-4xl "
                onClick={handleShowNavbar}
              >
                <NavLink to="/" onClick={logout}>
                  Logout
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li
                className="hover:bg-black hover:text-white  delay-150 transition-all  border-[1px] border-black p-2 text-2xl"
                onClick={handleShowNavbar}
              >
                <NavLink to="/login">Login</NavLink>
              </li>
              <li
                className="hover:bg-white hover:text-black delay-150 transition-all bg-black text-white p-2 border-[1px] border-black text-2xl"
                onClick={handleShowNavbar}
              >
                <NavLink to="/register">Register</NavLink>
              </li>
            </>
          )}
        </ul>
        <div
          className="hidden tablet:block tablet:absolute tablet:right-0 tablet:top-3 tablet:w-[7%] z-40 "
          onClick={handleShowNavbar}
        >
          <svg
            viewport="0 0 12 12"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="1"
              y1="18"
              x2="18"
              y2="1"
              stroke="black"
              strokeWidth="2"
            />
            <line
              x1="1"
              y1="1"
              x2="18"
              y2="18"
              stroke="black"
              strokeWidth="2"
            />
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
