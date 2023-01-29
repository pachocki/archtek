import React, { useState, useEffect, useContext } from "react";
import { useLocation, Link } from "react-router-dom";
import Image from "../../assets/modern-interior.jpg";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { Context } from "../../context/Context";
import axios from "axios";

const Singlepost = () => {
  const { user } = useContext(Context);
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const PF = "https://archtek.onrender.com/images/";
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [photo, setPhoto] = useState("");
  const [updateMode, setUpdateMode] = useState(false);

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("https://archtek.onrender.com/api/posts/" + path);
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
      setPhoto(res.data);
    };
    getPost();
  }, [path]);

  const handleDelete = async () => {
    try {
      await axios.delete(`https://archtek.onrender.com/api/posts/${post._id}`, {
        data: {
          username: user.username,
        },
      });
      window.location.replace("/");
    } catch (err) {
      console.log(err);
    }
  };
  const handleUpdate = async () => {
    try {
      await axios.put(`https://archtek.onrender.com/api/posts/${post._id}`, {
        username: user.username,
        title,
        desc,
      });
      setUpdateMode(false);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <div>
        <img
          src={PF + post.photo}
          className="w-full h-[65vh] rounded-xl object-cover tablet:h-[60vh] mt-20 tablet:mt-12 "
          alt="interior"
        />
      </div>
      <div className="flex justify-between pt-4 text-lg font-[100] border-b-[1px] w-3/4 m-auto mobile:text-[0.9rem] mobile:w-[90%] small-mobile:text-[0.8rem] ">
        <span>
          <Link to={`/?user=${post.username}`}>
            {" "}
            <b>Author:{post.username}</b>
          </Link>
        </span>
        <span>
          <b></b>
        </span>
        <span>
          <b>{new Date(post.createdAt).toDateString()}</b>
        </span>
      </div>
      <div className="w-3/4 m-auto text-5xl text-center pt-6 relative screen:text-4xl mobile:text-3xl mobile:w-full">
        {updateMode ? (
          <input
            type="text"
            value={title}
            className="border-2 px-2 py-1 text-center  focus:outline-black "
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <h1>{title}</h1>
        )}
        {post.username === user?.username && (
          <div className="absolute right-[-3rem] top-1 flex gap-5 screen:top-1  tablet:gap-1 mobile:right-0">
            <FaEdit
              className="text-green-500 text-2xl cursor-pointer hover:opacity-50"
              onClick={() => {
                setUpdateMode(true);
              }}
            />
            <FaTrashAlt
              className="text-red-500 text-2xl cursor-pointer hover:opacity-50"
              onClick={handleDelete}
            />
          </div>
        )}
      </div>
      <div className="text-2xl w-3/4 m-auto pt-16 screen:text-xl screen:pt-5 mobile:text-lg tablet:w-[90%] ">
        {updateMode ? (
          <textarea
            type="text"
            className="border-2 w-full h-[50vh] focus:outline-black px-2 whitespace-pre-wrap "
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        ) : (
          <p className="break-normal whitespace-pre-wrap">{desc}</p>
        )}
        <div className="flex justify-center items-center pt-2">
          {updateMode && (
            <button
              className="bg-black p-2 text-white hover:bg-white border-[1px] border-black hover:text-black "
              onClick={handleUpdate}
            >
              Update
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Singlepost;

/*
<p className="pt-5">
Here are some of the top modern interior design trends right now:
<br />
</p>
<p>
Biophilic design incorporates elements of nature into the built
environment. This can include things like natural light, plants, and
organic materials. Biophilic design has been shown to have a number of
benefits, including improved mental health, increased productivity,
and reduced stress. Sustainable materials: More and more people are
looking for ways to reduce their environmental impact, and this is
reflected in their interior design choices. Sustainable materials,
such as bamboo, cork, and recycled materials, are becoming
increasingly popular.{" "}
</p>
<div className="py-10 flex gap-5 justify-center m-w-screen px-5 tablet:gap-1">
<img src={Image} className="w-1/3 mobile:w-[100px]" />
<img src={Image} className="w-1/3 mobile:w-[100px]" />
<img src={Image} className="w-1/3 mobile:w-[100px]" />
</div>

<p>
Natural elements, such as wood, stone, and marble, are being used more
frequently in modern interiors to add warmth and texture. These
materials can be used on walls, floors, and as accents in furniture
and decor. Bold color: While minimalism is still popular, there is a
trend towards using bold, saturated colors in modern interiors. This
can be a great way to add personality and interest to a space.
Artistic lighting: Lighting is an important element of modern interior
design, and there is a trend towards using unique and artistic
lighting fixtures. These can be statement pieces in themselves, and
can add a lot of interest to a space.
</p>
<div className="py-10 flex gap-5 justify-center m-w-screen px-5 tablet:gap-1">
<img src={Image} className="w-1/3 mobile:w-[100px]" />
<img src={Image} className="w-1/3 mobile:w-[100px]" />
<img src={Image} className="w-1/3 mobile:w-[100px]" />
</div>
<p>
Multifunctional spaces: With more and more people working from home,
there is a trend towards designing multifunctional spaces that can be
used for a variety of purposes. This can include things like built-in
desks and shelving, or furniture that can be easily repurposed for
different uses. Overall, modern interior design is about creating
spaces that are functional, sustainable, and visually appealing. By
incorporating natural elements, sustainable materials, and unique
lighting and color, you can create a modern, trendy space that
reflects your personal style.
</p>
<div className="py-10 flex gap-5 justify-center m-w-screen px-5 tablet:gap-1">
<img src={Image} className="w-1/3 mobile:w-[100px]" />
<img src={Image} className="w-1/3 mobile:w-[100px]" />
<img src={Image} className="w-1/3 mobile:w-[100px]" />
</div>
*/
