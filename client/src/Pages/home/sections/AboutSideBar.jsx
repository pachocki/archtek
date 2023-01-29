import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const AboutSideBar = () => {
  const [cat, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("http://localhost:5000/api/categories");
      setCats(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="flex flex-col tablet:hidden pt-36">
      <div className="flex flex-col text-center justify-center pb-5">
        <img
          src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
          alt="men"
          className="w-full rounded-xl"
        />
        <h3 className="font-bold text-xl">About Me:</h3>
        <p className="text-sm">
          My name is <b>Joe Doe</b> and my passion is architecture and interior design.
           My keen eye for detail allows me to create visually
          pleasing and functional environments. I am currently studying or
          pursuing a career in architecture or interior design, and I enjoy
          visiting architectural landmarks and studying the work of famous
          architects and designers.
        </p>
      </div>
      <div className="py-5  text-center border-t-2 hidden">
        <h2 className="font-bold text-xl">Category</h2>
        {cat.map((c) => (
          <ul
            className="flex gap-2 justify-between pt-5 border-b-2 pb-40"
            key={c._id}
          >
            <Link to={`/?cat=${c.name}`}>
              {" "}
              <li className="underline hover:opacity-50 cursor-pointer">
                {c.name}
              </li>
            </Link>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default AboutSideBar;
