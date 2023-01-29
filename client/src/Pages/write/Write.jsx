import React, { useContext, useState } from "react";
import Image from "../../assets/flowers.jpg";
import axios from "axios";
import { Context } from "../../context/Context";

const Write = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      desc,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post("http://localhost:5000/api/upload", data);
      } catch (err) {
        console.log(err)
      }
    }
    try {
      const res = await axios.post("http://localhost:5000/api/posts", newPost);
      window.location.replace("/post/" + res.data._id);
    } catch (err) {
      console.log(err)
    }
  };
  return (
    <div className="pb-20 bg-sky-50 rounded-xl ">
      <div className="w-full mt-20 mobile:mt-14">
        {file && (
          <img
            src={URL.createObjectURL(file)}
            alt="interior"
            className="rounded-[20px] m-auto w-full object-cover pb-5  h-[80vh]"
          />
        )}
      </div>
      <form
        className={file ? "flex flex-col" : " flex flex-col pt-20"}
        onSubmit={handleSubmit}
      >
        <div className="flex justify-center items-center">
          <input
            type="file"
            className=" text-sm text-sky-50
      file:mr-4 file:py-2 file:px-4
      file:border-0
      file:text-sm file:font-semibold
      file:bg-black file:text-white
      hover:file:bg-black "
            onChange={(e) => {
              setFile(e.target.files[0]);
            }}
          />
          <input
            type="text"
            placeholder="Title"
            autoFocus={true}
            className="w-1/3 py-2 bg-gray-100  border-black border-2 focus:border-black/40 focus:ring-black/40 px-2 mobile:w-full"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className="flex justify-center pt-10 tablet:w-full">
          <textarea
            placeholder="Write your Post"
            className="border-black border-2 w-2/3 screen:w-[90%] h-80 bg-gray-100 px-2 mobile:w-full"
            onChange={(e) => {
              setDesc(e.target.value);
            }}
          ></textarea>
        </div>
        <div className="flex justify-center pt-5">
          <button className="py-2 px-5 bg-black text-white">Publish</button>
        </div>
      </form>
    </div>
  );
};

export default Write;
