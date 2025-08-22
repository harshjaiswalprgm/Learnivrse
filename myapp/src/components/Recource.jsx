// import React from "react";

// const articles = [
//   {
//     category: "Design",
//     title: "Wanderlust Unleashed: Top Hidden Gems You Must Visit This Year",
//     description: "Discover unique, off-the-radar destinations around the world that offer...",
//     author: "Harsh Jaiswal",
//     date: "July 20, 2024",
//     image: "https://static.toiimg.com/thumb/imgsize-123456,msid-123288668,width-300,resizemode-4/123288668.jpg"
//   },
//   {
//     category: "Sustainability",
//     title: "Travel Bucket List: 25 Destinations for Every Adventurer",
//     description: "Explore a curated list of must-visit places for every kind of traveler...",
//     author: "Harsh Jaiswal",
//     date: "July 5, 2024",
//     image: "https://static.toiimg.com/thumb/imgsize-123456,msid-123288668,width-300,resizemode-4/123288668.jpg"
//   },
//   {
//     category: "Cultural Insights",
//     title: "How to Travel Like a Local: Insider Tips for Authentic Experiences",
//     description: "Learn how to immerse yourself in the culture of each place you visit...",
//     author: "Harsh Jaiswal",
//     date: "June 30, 2024",
//     image: "https://static.toiimg.com/thumb/imgsize-123456,msid-123288668,width-300,resizemode-4/123288668.jpg"
//   },
//   {
//     category: "Environmental Awareness",
//     title: "Escape the Ordinary: Unique Stays Around the World",
//     description: "This guide highlights one-of-a-kind accommodations that go beyond...",
//     author: "Harsh Jaiswal",
//     date: "June 25, 2024",
//     image: "https://static.toiimg.com/thumb/imgsize-123456,msid-123288668,width-300,resizemode-4/123288668.jpg"
//   },
//   {
//     category: "Market Tips",
//     title: "Budget to Luxury: Your Guide to Planning the Perfect Vacation",
//     description: "Whether you're traveling on a tight budget or ready to splurge...",
//     author: "Harsh Jaiswal",
//     date: "June 15, 2024",
//     image: "https://static.toiimg.com/thumb/imgsize-123456,msid-123288668,width-300,resizemode-4/123288668.jpg"
//   },
//   {
//     category: "Global Cuisine",
//     title: "Beaten-Path Places to Explore Before They Go Mainstream",
//     description: "Explore areas that are still under the radar but rapidly gaining popularity...",
//     author: "Harsh Jaiswal",
//     date: "June 10, 2024",
//     image: "https://static.toiimg.com/thumb/imgsize-123456,msid-123288668,width-300,resizemode-4/123288668.jpg"
//   }
// ];

// export default function NewsSection() {
//   return (
//     <section className="max-w-7xl mx-auto px-4 py-12">
//       {/* Header */}
//       <div className="text-center mb-10">
//         <span className="bg-gray-200 text-gray-700 px-4 py-1 rounded-full text-sm font-medium">
//           Latest Articles
//         </span>
//         <h2 className="text-3xl md:text-4xl font-bold mt-4">Discover our latest news</h2>
//         <p className="text-gray-600 max-w-2xl mx-auto mt-2">
//           Discover the achievements that set us apart. From groundbreaking projects to
//           industry accolades, we take pride in our accomplishments.
//         </p>
//         {/* Search Bar */}
//         <div className="flex justify-center mt-6">
//           <input
//             type="text"
//             placeholder="Search articles..."
//             className="px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none w-64"
//           />
//           <button className="bg-blue-600 text-white px-5 py-2 rounded-r-lg hover:bg-blue-700 transition">
//             Find Now
//           </button>
//         </div>
//       </div>

//       {/* Cards */}
//       <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
//         {articles.map((article, index) => (
//           <div
//             key={index}
//             className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 transition duration-300"
//           >
//             <img
//               src={article.image}
//               alt={article.title}
//               className="w-full h-48 object-cover"
//             />
//             <div className="p-5">
//               <span className="text-xs uppercase text-gray-500">{article.category}</span>
//               <h3 className="text-lg font-semibold mt-2 mb-2">{article.title}</h3>
//               <p className="text-sm text-gray-600">{article.description}</p>
//               <div className="flex justify-between items-center mt-4 text-gray-500 text-sm">
//                 <span>👤 {article.author}</span>
//                 <span>📅 {article.date}</span>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }


import React, { useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const articles = [
  {
    title: "Membangun Kebiasaan Menabung: Tips dan Trik yang Efektif",
    description:
      "Cara sederhana namun ampuh untuk mulai menabung dan mencapai tujuan finansial Anda.",
    author: "Konselor",
    date: "Jan 05, 2023",
    image: "https://images.unsplash.com/photo-1607083207814-e9b1f8bb21c6?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Membuat Rencana Keuangan: Langkah Mudah Mewujudkan Impian",
    description:
      "Panduan praktis menyusun rencana keuangan yang realistis agar hidup lebih terarah.",
    author: "Dewi",
    date: "Jan 12, 2023",
    image: "https://images.unsplash.com/photo-1612815154858-60aa05cba427?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Menyiapkan Dana Darurat: Pentingnya dan Cara Membuatnya",
    description:
      "Strategi menyiapkan dana darurat untuk menghadapi kondisi tak terduga dengan aman.",
    author: "Dominikus",
    date: "Jan 20, 2023",
    image: "https://images.unsplash.com/photo-1556745753-b2904692b3cd?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Mengatasi Utang: Cara Keluar dari Jerat Hutang",
    description:
      "Langkah bijak untuk mengatur hutang agar tidak menjadi beban berkepanjangan.",
    author: "Dian",
    date: "Feb 01, 2023",
    image: "https://images.unsplash.com/photo-1556742400-b5b7c5121f9a?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Meningkatkan Edukasi dan Literasi Finansial",
    description:
      "Mengapa literasi finansial penting untuk kehidupan modern dan bagaimana memulainya.",
    author: "Dewi",
    date: "Feb 10, 2023",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Tips untuk Menyiapkan Pensiun Nyaman",
    description:
      "Strategi investasi dan tabungan agar pensiun Anda lebih tenang dan sejahtera.",
    author: "Dian",
    date: "Feb 15, 2023",
    image: "https://images.unsplash.com/photo-1518544889281-b0fef06cc581?auto=format&fit=crop&w=600&q=80"
  }
];

export default function FinancialNews() {
  useEffect(() => {
    gsap.utils.toArray(".article-card").forEach((card, i) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: i * 0.2,
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
            Latest Articles
          </h2>
          <p className="text-gray-600 text-lg max-w-lg">
           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa reprehenderit molestiae maxime delectus recusandae voluptatem cumque fuga impedit rerum eveniet?
          </p>
        </div>
      </div>

      {/* Articles Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {articles.map((article, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="article-card bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden cursor-pointer group"
          >
            <div className="relative w-full h-48 overflow-hidden">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
              />
              <span className="absolute bottom-2 left-2 bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
                {article.author}
              </span>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white line-clamp-2">
                {article.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3">
                {article.description}
              </p>
              <div className="mt-4 flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                <span>📅 {article.date}</span>
                <span className="text-blue-600 font-medium group-hover:underline">
                  Baca Selengkapnya →
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
