import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaRegCircleCheck } from "react-icons/fa6";
import SyncLoader from "react-spinners/SyncLoader";

const serviceID = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID;
const templateID = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY;

const Contact = () => {
  const form = useRef();
  const [emailSuccess, setEmailSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      emailjs.sendForm(serviceID, templateID, form.current, {
        publicKey,
      });

      console.log("SUCCESS!");
      setEmailSuccess(true);
    } catch (err) {
      console.log("FAILED...", error.text);
      setEmailSuccess(false);
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-md px-6 pt-4 pb-6">
      <div className="flex items-center">
        <h1 className="text-[30px] font-[700]">Contact</h1>
        <span className="h-[5px] w-[30%] bg-gradient-to-br from-[#457FCA] to-[#5691C8] ml-3 rounded-lg"></span>
      </div>

      {emailSuccess && (
        <div className="flex flex-col items-center justify-center h-[50vh]">
          <span className="text-[22px] mb-[10px] text-green-500">
            <FaRegCircleCheck />
          </span>
          <p className="font-[600] text-[22px]">Email send successfully</p>
        </div>
      )}

      {!emailSuccess && (
        <>
          <h3 className="text-[20px] my-[20px]">
            I'm Always Open To Discussing Oppertunities
          </h3>

          {error && (
            <p className="text-red-500 text-center">Error in sending message</p>
          )}

          <form
            ref={form}
            onSubmit={sendEmail}
            className="w-[80%] mx-auto mt-[30px]"
          >
            <input
              type="text"
              placeholder="Name *"
              name="name"
              className="w-full border-b-2 mb-[50px] p-3 focus:outline-none"
              required
            />

            <input
              type="email"
              placeholder="Email *"
              name="email"
              className="w-full border-b-2 mb-[50px] p-3 focus:outline-none"
              required
            />

            <textarea
              placeholder="Message *"
              name="message"
              className=" resize-y p-3 w-full focus:outline-none border-b-2"
              required
            ></textarea>

            <div className="flex justify-center mt-[30px]">
              <button className=" bg-gradient-to-br from-[#457FCA] to-[#5691C8] text-white p-2 font-[500] rounded-md">
                {isLoading ? (
                  <SyncLoader size={20} color="#eee" />
                ) : (
                  `Send Message`
                )}
              </button>
            </div>
          </form>
        </>
      )}

      <p className="text-center mt-[50px]">
        © 2024 All Rights Reserved by Sarath.
      </p>
    </div>
  );
};

export default Contact;
