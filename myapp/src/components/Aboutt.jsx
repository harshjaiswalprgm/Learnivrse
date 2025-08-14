import { FaArrowRight } from "react-icons/fa";
import { motion  } from "framer-motion";

export default function WellnessSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

      {/* Left Image */}
      <div className="relative">
        <motion.img
          src="https://img.freepik.com/free-vector/audience-segmentation-abstract-concept-illustration_335657-1854.jpg?ga=GA1.1.1683456939.1755170406&semt=ais_hybrid&w=740&q=80"
          alt="Happy family"
          className="rounded-3xl object-cover w-full h-[500px]"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        />

        {/* Floating card */}
        <motion.div
          className="absolute bottom-6 left-6 bg-white shadow-lg rounded-2xl px-4 py-3 flex items-center gap-3"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {/* Avatars */}
          <div className="flex -space-x-2">
            <img src="https://randomuser.me/api/portraits/women/1.jpg" className="w-8 h-8 rounded-full border-2 border-white" alt="" />
            <img src="https://randomuser.me/api/portraits/men/2.jpg" className="w-8 h-8 rounded-full border-2 border-white" alt="" />
            <img src="https://randomuser.me/api/portraits/women/3.jpg" className="w-8 h-8 rounded-full border-2 border-white" alt="" />
          </div>
          <div>
            <span className="font-semibold text-sm">350+</span>
            <p className="text-xs text-gray-500">Join our active healthy community</p>
          </div>
        </motion.div>
      </div>

      {/* Right Content */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Where Smiles Blossom <br /> Into Stories
        </h2>
        <p className="text-gray-500 mt-4">
          Solace isn’t just a space to track your moods and progress, it’s a place where your well-being takes center stage.
          Here you can express yourself freely, track your journey, and witness those smiles blossom into stories that empower and inspire you.
        </p>

        {/* Button */}
        <button className="mt-6 flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition">
          Read More <FaArrowRight />
        </button>

        {/* Features */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-white rounded-2xl shadow p-4">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-3">
              🔒
            </div>
            <h4 className="font-semibold">Confidentiality</h4>
            <p className="text-sm text-gray-500">
              Your privacy is our priority. Discreet and secure space for your wellness journey.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow p-4">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-purple-100 text-purple-600 mb-3">
              ♿
            </div>
            <h4 className="font-semibold">Accessibility</h4>
            <p className="text-sm text-gray-500">
              Designed for everyone, with features that make self-care easy and inclusive.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
