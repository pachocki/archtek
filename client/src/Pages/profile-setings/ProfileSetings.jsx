import React, { useContext, useState } from "react";
import { Context } from "../../context/Context";
import axios from "axios";

const ProfileSetings = () => {
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);

  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/";

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "UPDATE_START" });
    const updatedUser = {
      userId: user._id,
      username,
      email,
      password,
    };

    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updatedUser.profilePicture = filename;
      try {
        await axios.post("http://localhost:5000/api/upload/", data);
      } catch (err) {}
    }
    try {
      const res = await axios.put(
        "http://localhost:5000/api/users/" + user._id,
        updatedUser
      );
      setSuccess(true);
      dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "UPDATE_FAILURE" });
    }
  };
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/users/${user._id}`, {
        data: {
          userId: user._id,
          username: user.username,
        },
      });
      window.location.replace("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="bg-red-100 rounded-xl px-5 h-[92vh] mt-20 mobile:px-2">
      <div className="flex justify-between items-center pt-10">
        <h1 className="text-5xl laptop:text-4xl mobile:text-xl small-mobile:text-lg">
          Update Your Account
        </h1>
        <span
          className="text-2xl hover:text-red-500 screen:text-xl mobile:text-lg small-mobile:text-sm small-mobile:border-[1px] small-mobile:p-1 small-mobile:border-black"
          onClick={handleDelete}
        >
          Delete Account
        </span>
      </div>
      <div className="pt-10 w-1/3 m-auto screen:w-1/2 mobile:w-full">
        <h2 className="text-2xl mobile:text-xl">Profile Picture</h2>
        <div className="flex gap-5 py-5 items-center">
          <img
            src={file ? URL.createObjectURL(file) : PF + user.profilePicture}
            alt="profil"
            className="w-[50px] h-[50px] rounded-full"
          />

          <input
            type="file"
            className="text-sm text-red-100
      file:mr-4 file:py-2 file:px-4
      file:border-0
      file:text-sm file:font-semibold
      file:bg-black file:text-white
      hover:file:bg-black"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>
      </div>
      <form
        className="flex flex-col justify-center w-1/3 m-auto gap-2 screen:w-1/2 mobile:w-full"
        onSubmit={handleSubmit}
      >
        <label className="text-3xl laptop:text-2xl tablet:text-xl">
          Username
        </label>
        <input
          type="text"
          className="py-2 px-1"
          placeholder={user.username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label className="text-3xl laptop:text-2xl tablet:text-xl">Email</label>
        <input
          type="text"
          className="py-2 px-1"
          placeholder={user.email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className="text-3xl laptop:text-2xl tablet:text-xl">
          Password
        </label>
        <input
          type="password"
          className="py-2 px-1"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="py-1 px-2 bg-black text-white text-xl mt-8"
          type="submit"
        >
          Update
        </button>
        {success && (
          <span
            style={{ color: "green", textAlign: "center", marginTop: "20px" }}
          >
            Profile has been updated...
          </span>
        )}
      </form>
    </div>
  );
};

export default ProfileSetings;
