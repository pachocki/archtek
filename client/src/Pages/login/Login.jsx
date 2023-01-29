import axios from "axios";
import React, { useState, useRef, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Context } from "../../context/Context";

const Login = () => {
  const navigate = useNavigate();
  const userRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState("");
  const { dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      navigate("/");
      setError("");
    } catch (err) {
      if (err.response.status === 400) {
        setError("Wrong credentials!");
      } else {
        setError("An error occurred, please try again later.");
      }
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

  console.log(isFetching);
  return (
    <div className="bg-teal-400 rounded-xl px-5 h-[90vh] text-white mt-20 mobile:px-0">
      <div className="flex flex-col justify-center w-3/5 items-center m-auto pt-20 screen:w-2/3 tablet:w-full">
        <h1 className="text-6xl tablet:text-5xl">Login</h1>
        <form
          className="pt-10 flex flex-col  gap-2 w-2/3 mobile:w-[90%]"
          onSubmit={handleSubmit}
        >
          <label className="text-2xl">Username</label>
          <input
            type="text"
            className="py-2 px-2 text-black"
            placeholder="Username"
            ref={userRef}
          />

          <label className="text-2xl">Password</label>
          <input
            type="password"
            className="py-2 px-2 text-black"
            placeholder="Password"
            ref={passwordRef}
          />

          <div className="flex items-center justify-between pt-1">
            <div className="flex flex-col">
              <span>You dont have account ?</span>
              <Link to="/register">
                <button className="underline text-lg text-left hover:opacity-50 ">
                  Register
                </button>
              </Link>
            </div>
            <div className="flex flex-col">
              <button
                className="py-1 px-2 bg-black text-white text-xl"
                type="submit"
                disabled={isFetching}
              >
                Login
              </button>
              {error && <p className="pt-2">{error}</p>}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
