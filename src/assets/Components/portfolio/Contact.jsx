import React, { useState } from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

function Contact() {
  const defaultText = "Hi Siddhik, I'd love to connect! Here's my message...";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalMessage = message.trim() === "" ? defaultText : message;
    
    const encodedMessage = encodeURIComponent(
      `Hello, my name is ${name}.\nEmail: ${email}\nMessage: ${finalMessage}`
    );
    const whatsappUrl = `https://wa.me/+918248794519?text=${encodedMessage}`; 
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="p-10 bg-gray-900 text-white min-h-screen flex flex-col items-center">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-semibold">
          Contact <span className="text-blue-400">Me</span>
        </h2>
        <p className="text-gray-400 mt-2">
          Feel free to reach out for collaborations or just a chat!
        </p>
      </div>

      <div className="w-full max-w-4xl flex flex-col md:flex-row bg-gray-800 p-8 rounded-lg shadow-lg">
        <div className="md:w-2/3 pr-0 md:pr-8">
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="block text-lg font-medium">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 rounded-md bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>

            <div>
              <label className="block text-lg font-medium">Email</label>
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 rounded-md bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>

            <div>
              <label className="block text-lg font-medium">Message</label>
              <textarea
                rows="4"
                placeholder="Type your message here..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full p-3 rounded-md bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-400"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-md transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="md:w-1/3 flex flex-col justify-center items-center mt-6 md:mt-0 space-y-5">
          <h3 className="text-xl font-medium">Connect with Me</h3>
          <div className="flex space-x-6 text-4xl">
            <a
              href="https://www.linkedin.com/in/abubakkarsiddhik"
              className="hover:text-blue-400 transition duration-300"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/AbubakkarSiddhik?tab=repositories"
              className="hover:text-gray-300 transition duration-300"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.instagram.com/abubakkarsiddhik_webdev?igsh=MWNrYXd4bDM0N2p5"
              className="hover:text-pink-500 transition duration-300"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
