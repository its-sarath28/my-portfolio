import { IoSchool } from "react-icons/io5";
import { LiaSuitcaseSolid } from "react-icons/lia";

import { HiCodeBracket } from "react-icons/hi2";
import { FaBootstrap, FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { IoLogoFigma } from "react-icons/io5";
import {
  SiExpress,
  SiPostman,
  SiRazorpay,
  SiTailwindcss,
} from "react-icons/si";
import { FaNodeJs, FaReact, FaStripeS } from "react-icons/fa";
import { TbBrandVscode } from "react-icons/tb";

const skills = [
  { icon: <HiCodeBracket />, display: "HTML", color: "#c1121f" },
  { icon: <FaCss3 />, display: "CSS", color: "#0096c7" },
  { icon: <FaBootstrap />, display: "Bootstrap", color: "#7330fa" },
  { icon: <SiTailwindcss />, display: "Tailwind CSS", color: "#38BDF8" },
  { icon: <IoLogoJavascript />, display: "JavaScript", color: "#efd81c" },
  { icon: <FaNodeJs />, display: "NodeJS", color: "#60B248" },
  { icon: <SiExpress />, display: "ExpressJS", color: "#333" },
  { icon: <FaReact />, display: "ReactJS", color: "#149ECA" },
  { icon: <IoLogoFigma />, display: "Figma", color: "#333" },
  { icon: <SiPostman />, display: "Postman", color: "#e95727" },
  { icon: <TbBrandVscode />, display: "VS Code", color: "#2285c5" },
  { icon: <SiRazorpay />, display: "Razorpay", color: "#3362fd" },
  { icon: <FaStripeS />, display: "Stripe", color: "#0a2540" },
];

const Resume = () => {
  return (
    <div className="bg-white rounded-md px-6 pt-4 pb-6">
      <div className="flex items-center">
        <h1 className="text-[30px] font-[700]">Resume</h1>
        <span className="h-[5px] w-[30%] bg-gradient-to-br from-[#457FCA] to-[#5691C8] ml-3 rounded-lg"></span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] mt-[20px]">
        <div className=" order-2">
          <span className="text-[32px] flex items-center gap-[20px] mb-[20px]">
            <IoSchool /> Education
          </span>

          <div className="flex flex-col bg-[#e9edc9] p-3 mb-[20px]">
            <p className="text-[16px]">2020 - 2023</p>
            <h5 className="text-[18px] my-[10px] font-[500]">
              Bachelor's of Computer Application
            </h5>
            <p className="text-[16px]">Bangalore North University</p>
          </div>

          <div className="flex flex-col bg-[#EEF5FA] p-3">
            <p className="text-[16px]">2018 - 2020</p>
            <h5 className="text-[18px] my-[10px] font-[500]">
              Higher Secondary
            </h5>
            <p className="text-[16px]">NSS HSS, Kesavadasapuram</p>
          </div>
        </div>

        <div className="order-1">
          <span className="text-[32px] flex items-center gap-[20px] mb-[20px]">
            <LiaSuitcaseSolid /> Experience
          </span>

          <div className="flex flex-col bg-[#EEF5FA] p-3 mb-[20px]">
            <p className="text-[16px]">2024 - present</p>
            <h5 className="text-[18px] my-[10px] font-[500]">
              MERN Stack Intern
            </h5>
            <p className="text-[16px]">Mashupstack</p>
          </div>
        </div>
      </div>

      <div className="my-[40px]">
        <h2 className="text-[30px] font-[700] text-center mb-[20px]">
          Working Skills
        </h2>

        <div className="flex items-center justify-center">
          <div className="max-w-[500px]  flex flex-wrap justify-center">
            {skills.map((skill, index) => (
              <span
                key={index}
                className=" flex items-center gap-[5px] m-3 text-[18px]"
                style={{ color: skill.color }}
              >
                {skill.icon} {skill.display}
              </span>
            ))}
          </div>
        </div>
      </div>

      <p className="text-center mt-[50px]">
        © 2024 All Rights Reserved by Sarath.
      </p>
    </div>
  );
};

export default Resume;
