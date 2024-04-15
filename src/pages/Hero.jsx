import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import {
  IoLocationSharp,
  IoNewspaperOutline,
  IoPhonePortraitOutline,
} from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import { LiaSuitcaseSolid } from "react-icons/lia";
import { LuContact } from "react-icons/lu";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";

import About from "../components/About";
import { useState } from "react";
import Work from "../components/Work";
import Resume from "../components/Resume";
import Contact from "../components/Contact";

const Hero = () => {
  const [tab, setTab] = useState("about");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleDownloadCV = () => {
    const downloadUrl = "../assets/Sarath_resume.pdf";
    window.open(downloadUrl, "_blank");
  };

  return (
    <section className="max-w-[1200px] mx-auto px-[20px]">
      <div className="flex justify-end pt-[20px] lg:hidden ">
        <GiHamburgerMenu
          className={`${
            isDrawerOpen ? " invisible" : "block"
          } text-white text-[30px]`}
          onClick={toggleDrawer}
        />
      </div>

      {/* Drawer Menu */}
      {isDrawerOpen && (
        <div className="lg:hidden fixed inset-0 bg-gray-900 bg-opacity-90 z-50">
          <div className="flex flex-col items-center justify-center h-full">
            <button
              className="text-white absolute top-0 right-0 p-4"
              onClick={toggleDrawer}
            >
              <RxCross1 className="text-[30px]" />
            </button>
            <div className="flex flex-col gap-4">
              <button
                onClick={() => {
                  setTab("about");
                  toggleDrawer();
                }}
                className={`${
                  tab === "about"
                    ? "bg-gradient-to-br from-[#457FCA] to-[#5691C8]  rounded-md"
                    : "bg-transparent "
                } text-white p-2 text-[20px]`}
              >
                About
              </button>
              <button
                onClick={() => {
                  setTab("resume");
                  toggleDrawer();
                }}
                className={`${
                  tab === "resume"
                    ? "bg-gradient-to-br from-[#457FCA] to-[#5691C8]  rounded-md"
                    : "bg-transparent "
                } text-white p-2 text-[20px]`}
              >
                Resume
              </button>
              <button
                onClick={() => {
                  setTab("work");
                  toggleDrawer();
                }}
                className={`${
                  tab === "work"
                    ? "bg-gradient-to-br from-[#457FCA] to-[#5691C8]  rounded-md"
                    : "bg-transparent "
                } text-white p-2 text-[20px]`}
              >
                Work
              </button>
              <button
                onClick={() => {
                  setTab("contact");
                  toggleDrawer();
                }}
                className={`${
                  tab === "contact"
                    ? "bg-gradient-to-br from-[#457FCA] to-[#5691C8]  rounded-md"
                    : "bg-transparent "
                } text-white p-2 text-[20px]`}
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="grid lg:grid-cols-3 gap-5">
        <div className=" bg-white h-fit mt-[30px] rounded-md px-3 pt-4 pb-5 flex flex-col justify-center items-center lg:sticky lg:top-5">
          <figure className="h-[200px] w-[200px]">
            <img
              src="/portfolio-image.jpg"
              alt="portfolio"
              className="h-full w-full rounded-full object-contain"
            />
          </figure>

          <h3 className="font-[700] text-[20px]">Sarath R S</h3>

          <p className="font-[500] bg-slate-200 py-2 px-3 mt-4 rounded-md">
            Web Developer
          </p>

          <div className="flex items-center gap-[30px] my-[20px]">
            <a
              href="https://instagram.com/its_sarath"
              className="text-[22px] text-[#ad2b77] bg-slate-200 p-2 rounded-md"
            >
              <FaInstagram />
            </a>
            <a
              href="https://github.com/its-sarath28"
              className="text-[22px] text-[#333] bg-slate-200 p-2 rounded-md"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/its-sarath"
              className="text-[22px] text-[#144f84] bg-slate-200 p-2 rounded-md"
            >
              <FaLinkedinIn />
            </a>
          </div>

          <div className="w-[90%] md:w-[85%] bg-slate-200 p-5 rounded-md">
            <ul className="">
              <li className="flex justify-start items-center gap-5 mb-6 border-b">
                <div className="text-[22px] lg:text-[30px] bg-white p-2 rounded-md shadow-lg text-[#090608]">
                  <IoPhonePortraitOutline />
                </div>
                <div className="flex flex-col">
                  <span className="text-[12px] md:text-[16px]">Phone</span>
                  <span className="text-[14px] lg:text-[16px] font-[500]">
                    +91 9778438763
                  </span>
                </div>
              </li>

              <li className="flex justify-start items-center gap-5 border-b mb-6">
                <div className="text-[22px] lg:text-[30px] bg-white p-2 rounded-md shadow-lg text-[#2ca062]">
                  <MdOutlineEmail />
                </div>
                <div className="flex flex-col">
                  <span className="text-[12px] md:text-[16px]">Email</span>
                  <span className="text-[14px] lg:text-[16px] font-[500]">
                    iamsarathrs@gmail.com
                  </span>
                </div>
              </li>

              <li className="flex justify-start items-center gap-5 border-b">
                <div className="text-[22px]  bg-white p-2 rounded-md shadow-lg text-[#a46c2c]">
                  <IoLocationSharp />
                </div>
                <div className="flex flex-col">
                  <span className="text-[12px] md:text-[16px]">Location</span>
                  <span className="text-[14px] lg:text-[16px] font-[500]">
                    Thiruvananthapuram, Kerala, India
                  </span>
                </div>
              </li>
            </ul>
          </div>

          <a
            href="https://drive.google.com/file/d/1KLMkTMXV5MBvRfhyjzf27GqAcMddtGD4/view?usp=drive_link"
            download="https://drive.google.com/file/d/1KLMkTMXV5MBvRfhyjzf27GqAcMddtGD4/view?usp=drive_link"
            className="mt-[30px] bg-gradient-to-br from-[#457FCA] to-[#5691C8] w-fit lg:w-full text-center cursor-pointer rounded-md p-4 text-white text-[18px] md:text-[20px]"
          >
            Download CV
          </a>
        </div>

        <div className="lg:col-span-2 flex flex-col gap-4">
          <div className="bg-white hidden lg:flex justify-around p-3 rounded-md mt-[30px]">
            <button
              onClick={() => setTab("about")}
              className={`${
                tab === "about"
                  ? "bg-gradient-to-br from-[#457FCA] to-[#5691C8] text-white"
                  : "bg-slate-200 text-dark"
              } flex flex-col justify-center items-center p-4 rounded-md  w-[100px]`}
            >
              <span className="text-[26px] mb-2">
                <AiOutlineUser />
              </span>
              <span>About</span>
            </button>

            <button
              onClick={() => setTab("resume")}
              className={`${
                tab === "resume"
                  ? "bg-gradient-to-br from-[#457FCA] to-[#5691C8] text-white"
                  : "bg-slate-200 text-dark"
              } flex flex-col justify-center items-center p-4 rounded-md  w-[100px]`}
            >
              <span className="text-[26px] mb-2">
                <IoNewspaperOutline />
              </span>
              <span>Resume</span>
            </button>
            <button
              onClick={() => setTab("work")}
              className={`${
                tab === "work"
                  ? "bg-gradient-to-br from-[#457FCA] to-[#5691C8] text-white"
                  : "bg-slate-200 text-dark"
              } flex flex-col justify-center items-center p-4 rounded-md  w-[100px]`}
            >
              <span className="text-[26px] mb-2">
                <LiaSuitcaseSolid />
              </span>
              <span>Work</span>
            </button>

            <button
              onClick={() => setTab("contact")}
              className={`${
                tab === "contact"
                  ? "bg-gradient-to-br from-[#457FCA] to-[#5691C8] text-white"
                  : "bg-slate-200 text-dark"
              } flex flex-col justify-center items-center p-4 rounded-md  w-[100px]`}
            >
              <span className="text-[26px] mb-2">
                <LuContact />
              </span>
              <span>Contact</span>
            </button>
          </div>

          {tab === "about" && <About />}
          {tab === "resume" && <Resume />}
          {tab === "work" && <Work />}
          {tab === "contact" && <Contact />}
        </div>
      </div>
    </section>
  );
};

export default Hero;
