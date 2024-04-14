import { HiCodeBracket } from "react-icons/hi2";
import { MdOutlineDesignServices } from "react-icons/md";
import { SiMaterialdesignicons } from "react-icons/si";

const About = () => {
  return (
    <div className="bg-white rounded-md px-6 pt-4 pb-6">
      <div className="flex items-center">
        <h1 className="text-[30px] font-[700]">About</h1>
        <span className="h-[5px] w-[30%] bg-gradient-to-br from-[#457FCA] to-[#5691C8] ml-3 rounded-lg"></span>
      </div>

      <p className="text-[20px] leading-8.5 my-[30px] text-balance">
        Hi there! 👋 I'm Sarath, a MERN Stack developer based in Kerala. I'm
        currently diving deep into the world of technologies while constantly
        striving for growth and improvement. My passion for technology fuels my
        journey as I keep pace with the latest trends and innovations. I pride
        myself on being a self-motivated learner, always eager to explore new
        horizons in the ever-evolving tech landscape. Let's connect and embark
        on this exciting journey together! 🚀
      </p>

      <div className="">
        <h1 className="text-[30px] font-[700] mb-[20px]">What I Do!</h1>

        <div className="grid md:grid-cols-2 gap-[20px]">
          <div className="flex items-start gap-[10px] bg-[#EEF5FA] p-3 rounded-md">
            <span className="text-[30px] text-[#d95555]">
              <MdOutlineDesignServices />
            </span>
            <div>
              <h4 className="font-[600] text-[22px] mb-[15px]">Web Design</h4>
              <p>
                I specialize in creating visually appealing and user-friendly
                website designs. My designs prioritize user experience and
                accessibility while maintaining a modern and professional look.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-[10px] bg-[#e9edc9] p-3 rounded-md">
            <span className="text-[30px] text-[#305066]">
              <HiCodeBracket />
            </span>
            <div>
              <h4 className="font-[600] text-[22px] mb-[15px]">
                Web Development
              </h4>
              <p>
                I am proficient in building responsive and scalable web
                applications using the latest technologies such as HTML, CSS,
                JavaScript, and frameworks like React.js and Node.js. I focus on
                writing clean and maintainable code to ensure the long-term
                success of the project.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-[10px] bg-[#e9edc9] p-3 rounded-md">
            <span className="text-[30px] text-[#a29d9d]">
              <SiMaterialdesignicons />
            </span>
            <div>
              <h4 className="font-[600] text-[22px] mb-[15px]">
                API Development
              </h4>
              <p>
                I have experience in designing and developing RESTful APIs to
                enable communication between different software systems. I use
                technologies like Express.js and MongoDB to create efficient and
                secure APIs that can handle complex business logic and data
                operations.
              </p>
            </div>
          </div>
        </div>
      </div>

      <p className="text-center mt-[50px]">
        © 2024 All Rights Reserved by Sarath.
      </p>
    </div>
  );
};

export default About;
