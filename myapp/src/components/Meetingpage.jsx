import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

export default function MeetingPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <div className="bg-gradient-to-br from-purple-100 via-pink-100 to-white min-h-screen font-sans">
      {/* Hero Section */}
     <section className="text-center pt-32 pb-12 px-6">
  <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
    Meeting with <span className="text-[#8bca1e]">AI-Powered Recording</span>
  </h1>
  <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
    Effortlessly capture, transcribe, and analyze every meeting for improved
    productivity and clarity.
  </p>
  <button className="mt-6 px-6 py-3 bg-purple-600 text-white font-semibold rounded-full shadow-lg hover:bg-purple-700 transition">
    Start 30-day Free Trial
  </button>
</section>

      {/* Video Section */}
      <section className="video-section flex justify-center items-center px-6 pt-8 pb-16">
        <div className="bg-white shadow-2xl rounded-2xl p-4 max-w-4xl w-full">
          <iframe
            className="rounded-xl w-full h-96"
            src="video.mp4"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* Signup Form Section */}
      <section className="signup-form flex justify-center items-center py-16 px-6">
        <div className="w-full max-w-5xl bg-white shadow-lg rounded-2xl flex">
          {/* Left side with illustration */}
          <div className="hidden md:flex flex-col justify-center items-center bg-teal-50 w-1/2 p-10">
            <h2 className="text-2xl font-semibold text-gray-700 text-center mb-6">
              Find 3D Objects, Mockups <br /> and Illustrations here.
            </h2>
            <div className="w-64 h-64 bg-gradient-to-tr from-teal-200 to-pink-200 rounded-3xl flex items-center justify-center">
              <img
                src="https://img.freepik.com/free-vector/flat-creativity-concept-illustration_52683-64279.jpg"
                alt="Card Image"
                className="w-32 h-32 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>

          {/* Right side - form */}
          <div className="flex-1 flex flex-col justify-center p-10">
            <h2 className="text-2xl font-bold mb-6">Create Account</h2>

            {/* Social buttons */}
            <div className="flex gap-4 mb-6">
              <button className="flex items-center justify-center gap-2 border border-gray-300 rounded-lg px-4 py-2 w-full hover:bg-gray-100 transition">
                <FcGoogle size={22} />
                <span>Sign up with Google</span>
              </button>
              <button className="flex items-center justify-center gap-2 border border-gray-300 rounded-lg px-4 py-2 w-full hover:bg-gray-100 transition">
                <FaFacebook size={22} className="text-blue-600" />
                <span>Sign up with Facebook</span>
              </button>
            </div>

            <div className="text-center text-gray-500 mb-4">- OR -</div>

            {/* Form fields */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-teal-400 outline-none"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-teal-400 outline-none"
                required
              />

              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-teal-400 outline-none"
                required
              />

              <button
                type="submit"
                className="w-full bg-teal-400 text-white font-semibold py-2 rounded-lg hover:bg-teal-500 transition"
              >
                Create Account
              </button>
            </form>

            <p className="mt-4 text-gray-600 text-center">
              Already have an account?{" "}
              <a href="/login" className="text-teal-500 font-medium hover:underline">
                Log in
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
