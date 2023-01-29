import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-zinc-800  mt-20 rounded-xl mb-2 text-white px-5 pb-10 h-full">
      <div className="flex justify-between  pt-10 border-b-[1px] border-white/40 pb-10 mobile:justify-around small-mobile:gap-10">
        <div className="flex flex-col tablet:w-1/4 mobile:w-1/2">
          <span className="pb-4 text-2xl tablet:text-lg">INFORMATION</span>
          <div className="flex flex-col gap-2  tablet:text-sm">
            <p className="hover:opacity-50 cursor-pointer">ABOUT</p>
            <p className="hover:opacity-50 cursor-pointer">ADVERTISE</p>
            <p className="hover:opacity-50 cursor-pointer">CONTACT</p>
            <p className="hover:opacity-50 cursor-pointer">CAREERS</p>
          </div>
        </div>
        <div className="flex flex-col tablet:w-1/4 mobile:w-1/2">
          <span className="pb-4 text-2xl tablet:text-lg">POLICIES</span>
          <div className="flex flex-col gap-2 tablet:text-sm">
            <p className="hover:opacity-50 cursor-pointer">PRIVACY</p>
            <p className="hover:opacity-50 cursor-pointer">COOKIES</p>
            <p className="hover:opacity-50 cursor-pointer">TERMS</p>
            <p className="hover:opacity-50 cursor-pointer">
              AFFILIATE DISCLOSURE
            </p>
          </div>
        </div>
        <div className="flex flex-col tablet:w-2/4 mobile:hidden">
          <span className="pb-8 text-2xl tablet:text-xl">
            SIGN UP FOR OUR NEWSLETTER
          </span>
          <form className="w-full flex border-[1px] border-white/40 py-1 px-1 ">
            <input
              type="email"
              className="bg-zinc-800 w-full focus:outline-none"
            />
            <button className="bg-neutral-700 px-2 py-2">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="flex justify-between pt-10 relative screen:pt-5 mobile:justify-around small-mobile:flex-col small-mobile:items-center small-mobile:pt-1 small-mobile:gap-3">
        <h3 className="text-6xl screen:text-5xl mobile:text-xl ">_ArchTeK</h3>

        <div className="flex justify-around items-center gap-5 mobile:gap-2">
          <div className="p-3 border-2  border-white/40 rounded-full flex items-center justify-center text-2xl hover:opacity-50 cursor-pointer mobile:text-sm">
            <FaTwitter />
          </div>
          <div className="p-3 border-2  border-white/40 rounded-full flex items-center justify-center text-2xl hover:opacity-50 cursor-pointer mobile:text-sm">
            <FaInstagram />
          </div>
          <div className="p-3 border-2  border-white/40 rounded-full flex items-center justify-center text-2xl hover:opacity-50 cursor-pointer mobile:text-sm">
            <FaFacebook />
          </div>
          <div className="p-3 border-2  border-white/40 rounded-full flex items-center justify-center text-2xl hover:opacity-50 cursor-pointer mobile:text-sm">
            <FaYoutube />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
