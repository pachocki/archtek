import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const navigate =useNavigate()
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    setError(true);
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", {
        username,
        email,
        password,
      });
      res.data && navigate("/login");
    } catch (err) {
      setError(false);
    }
  };
  return (
    <div className="bg-stone-400 rounded-xl px-5 h-[90vh] text-white mt-20 ">
      <div className="flex flex-col justify-center w-2/4 items-center m-auto pt-20 screen:w-2/3 mobile:w-full ">
        <h1 className="text-6xl ">Register</h1>
        <form
          className="pt-10 flex flex-col  gap-2 w-5/6 tablet:w-full"
          onSubmit={handleSubmit}
        >
          <label className="text-2xl">Username</label>
          <input
            type="text"
            className="py-2 px-2 text-black"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <label className="text-2xl">Email</label>
          <input
            type="email"
            className="py-2 px-2 text-black"
            placeholder="E-mail"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="text-2xl">Password</label>
          <input
            type="password"
            className="py-2 px-2 text-black"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="flex items-center justify-between pt-1">
            <div className="flex flex-col">
              <span>You dont have account ?</span>
              <Link to="/login">
                <button
                  className="underline text-lg text-left hover:opacity-50 "
                  type="submit"
                >
                  Login
                </button>
              </Link>
            </div>
            <div className="flex flex-col">
              <button
                className="py-1 px-2 bg-black text-white text-xl"
                type="submit"
                onClick={handleSubmit}
              >
                Sign Up
              </button>
              {error ? (
             <span className="text-center ">Something went wrong !</span>
              ) : (
                ""
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
