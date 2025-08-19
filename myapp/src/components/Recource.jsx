import React from "react";

const articles = [
  {
    category: "Design",
    title: "Wanderlust Unleashed: Top Hidden Gems You Must Visit This Year",
    description: "Discover unique, off-the-radar destinations around the world that offer...",
    author: "Harsh Jaiswal",
    date: "July 20, 2024",
    image: "https://static.toiimg.com/thumb/imgsize-123456,msid-123288668,width-300,resizemode-4/123288668.jpg"
  },
  {
    category: "Sustainability",
    title: "Travel Bucket List: 25 Destinations for Every Adventurer",
    description: "Explore a curated list of must-visit places for every kind of traveler...",
    author: "Harsh Jaiswal",
    date: "July 5, 2024",
    image: "https://static.toiimg.com/thumb/imgsize-123456,msid-123288668,width-300,resizemode-4/123288668.jpg"
  },
  {
    category: "Cultural Insights",
    title: "How to Travel Like a Local: Insider Tips for Authentic Experiences",
    description: "Learn how to immerse yourself in the culture of each place you visit...",
    author: "Harsh Jaiswal",
    date: "June 30, 2024",
    image: "https://static.toiimg.com/thumb/imgsize-123456,msid-123288668,width-300,resizemode-4/123288668.jpg"
  },
  {
    category: "Environmental Awareness",
    title: "Escape the Ordinary: Unique Stays Around the World",
    description: "This guide highlights one-of-a-kind accommodations that go beyond...",
    author: "Harsh Jaiswal",
    date: "June 25, 2024",
    image: "https://static.toiimg.com/thumb/imgsize-123456,msid-123288668,width-300,resizemode-4/123288668.jpg"
  },
  {
    category: "Market Tips",
    title: "Budget to Luxury: Your Guide to Planning the Perfect Vacation",
    description: "Whether you're traveling on a tight budget or ready to splurge...",
    author: "Harsh Jaiswal",
    date: "June 15, 2024",
    image: "https://static.toiimg.com/thumb/imgsize-123456,msid-123288668,width-300,resizemode-4/123288668.jpg"
  },
  {
    category: "Global Cuisine",
    title: "Beaten-Path Places to Explore Before They Go Mainstream",
    description: "Explore areas that are still under the radar but rapidly gaining popularity...",
    author: "Harsh Jaiswal",
    date: "June 10, 2024",
    image: "https://static.toiimg.com/thumb/imgsize-123456,msid-123288668,width-300,resizemode-4/123288668.jpg"
  }
];

export default function NewsSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-10">
        <span className="bg-gray-200 text-gray-700 px-4 py-1 rounded-full text-sm font-medium">
          Latest Articles
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mt-4">Discover our latest news</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mt-2">
          Discover the achievements that set us apart. From groundbreaking projects to
          industry accolades, we take pride in our accomplishments.
        </p>
        {/* Search Bar */}
        <div className="flex justify-center mt-6">
          <input
            type="text"
            placeholder="Search articles..."
            className="px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none w-64"
          />
          <button className="bg-blue-600 text-white px-5 py-2 rounded-r-lg hover:bg-blue-700 transition">
            Find Now
          </button>
        </div>
      </div>

      {/* Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article, index) => (
          <div
            key={index}
            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 transition duration-300"
          >
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <span className="text-xs uppercase text-gray-500">{article.category}</span>
              <h3 className="text-lg font-semibold mt-2 mb-2">{article.title}</h3>
              <p className="text-sm text-gray-600">{article.description}</p>
              <div className="flex justify-between items-center mt-4 text-gray-500 text-sm">
                <span>👤 {article.author}</span>
                <span>📅 {article.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
