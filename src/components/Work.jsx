import React from "react";

const Work = () => {
  return (
    <div className="bg-white rounded-md px-6 pt-4 pb-6">
      <div className="flex items-center">
        <h1 className="text-[30px] font-[700]">My Works</h1>
        <span className="h-[5px] w-[30%] bg-gradient-to-br from-[#457FCA] to-[#5691C8] ml-3 rounded-lg"></span>
      </div>

      <div className=" mt-[30px]">
        <div className="grid md:grid-cols-2 gap-[20px]">
          <div className=" bg-[#e9edc9] p-2 rounded-md">
            <figure className="flex justify-center items-center overflow-hidden">
              <img
                src="/recipe-app.png"
                alt="recipe-app"
                className="h-full w-full object-contain text-center hover:scale-105 rounded-md "
              />
            </figure>

            <p className="mt-[20px] text-[20px] font-[500]">
              Recipe App (ReactJS)
            </p>

            <div className="flex gap-[20px] mt-[20px] mb-[10px]">
              <a
                href="https://github.com/its-sarath28/food-recipe-app"
                className="bg-[#333] p-2 rounded-md text-white"
              >
                Code
              </a>
            </div>
          </div>

          <div className=" bg-[#EEF5FA] p-2 rounded-md">
            <figure className="flex justify-center items-center overflow-hidden h-[10rem] w-full">
              <img
                src="/movie-booking.png"
                alt="movie-booking-app"
                className="h-full w-full object-contain text-center hover:scale-105 rounded-md "
              />
            </figure>

            <p className="mt-[20px] text-[20px] font-[500]">
              Movie Booking App (ReactJS)
            </p>

            <div className="flex gap-[20px] mt-[20px] mb-[10px]">
              <a
                href="https://movie-booking-site-theta.vercel.app/"
                className="bg-[#333] p-2 rounded-md text-white"
              >
                View demo
              </a>
              <a
                href="https://github.com/its-sarath28/movie-booking-site"
                className="bg-[#333] p-2 rounded-md text-white"
              >
                Code
              </a>
            </div>
          </div>

          <div className=" bg-[#EEF5FA] p-2 rounded-md">
            <figure className="flex justify-center items-center overflow-hidden h-[10rem] w-full">
              <img
                src="/med_store.png"
                alt=""
                className="h-full w-full object-contain text-center hover:scale-105 rounded-md "
              />
            </figure>

            <p className="mt-[20px] text-[20px] font-[500]">
              MedStore (ReactJS)
            </p>

            <div className="flex gap-[20px] mt-[20px] mb-[10px]">
              <a
                href="https://med-store-react.vercel.app/"
                className="bg-[#333] p-2 rounded-md text-white"
              >
                View Demo
              </a>
              <a
                href="https://github.com/its-sarath28/medStore-react"
                className="bg-[#333] p-2 rounded-md text-white"
              >
                Code
              </a>
            </div>
          </div>

          <div className=" bg-[#e9edc9] p-2 rounded-md">
            <figure className="flex justify-center items-center overflow-hidden h-[10rem] w-full">
              <img
                src="/TODO_APP.png"
                alt=""
                className="h-full w-full object-contain text-center hover:scale-105 rounded-md "
              />
            </figure>

            <p className="mt-[20px] text-[20px] font-[500]">
              ToDo App (NodeJS)
            </p>

            <div className="flex gap-[20px] mt-[20px] mb-[10px]">
              <a
                href="https://github.com/its-sarath28/todo-app-node-js"
                className="bg-[#333] p-2 rounded-md text-white"
              >
                Code
              </a>
            </div>
          </div>

          <div className=" bg-[#e9edc9] p-2 rounded-md">
            <figure className="flex justify-center items-center overflow-hidden h-[10rem] w-full">
              <img
                src="https://i.pinimg.com/236x/89/25/a6/8925a64f6b430a0b1bb061dfbfa66bf4.jpg"
                alt=""
                className="h-full w-full object-contain text-center hover:scale-105 rounded-md "
              />
            </figure>

            <p className="mt-[20px] text-[20px] font-[500]">
              Git Finder (ReactJS)
            </p>

            <div className="flex gap-[20px] mt-[20px] mb-[10px]">
              <a
                href="https://github.com/its-sarath28/git-finder"
                className="bg-[#333] p-2 rounded-md text-white"
              >
                Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
