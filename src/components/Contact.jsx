import React from "react";

const Contact = () => {
  return (
    <div className="bg-white rounded-md px-6 pt-4 pb-6">
      <div className="flex items-center">
        <h1 className="text-[30px] font-[700]">Contact</h1>
        <span className="h-[5px] w-[30%] bg-gradient-to-br from-[#457FCA] to-[#5691C8] ml-3 rounded-lg"></span>
      </div>

      <h3 className="text-[20px] my-[20px]">
        I'm Always Open To Discussing Oppertunities
      </h3>

      <div className="w-[80%] mx-auto mt-[30px]">
        <input
          type="text"
          placeholder="Name *"
          className="w-full border-b-2 mb-[50px] p-3 focus:outline-none"
        />

        <input
          type="email"
          placeholder="Email *"
          className="w-full border-b-2 mb-[50px] p-3 focus:outline-none"
        />

        <textarea
          placeholder="Message *"
          className=" resize-y p-3 w-full focus:outline-none border-b-2"
        ></textarea>

        <div className="flex justify-center mt-[30px]">
          <button className=" bg-gradient-to-br from-[#457FCA] to-[#5691C8] text-white p-2 font-[500] rounded-md">
            Send Message
          </button>
        </div>
      </div>

      <p className="text-center mt-[50px]">
        © 2024 All Rights Reserved by Sarath.
      </p>
    </div>
  );
};

export default Contact;
