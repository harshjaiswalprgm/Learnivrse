import React, { useState } from "react";

const projects = [
  {
    number: "001",
    title: "Street Chronicles: The Art of Everyday Moments",
    city: "Los Angeles, USA",
    date: "17/07/24",
    image: "https://img.freepik.com/free-photo/professional-programmer-working-late-dark-office_1098-18705.jpg?t=st=1755151881~exp=1755155481~hmac=4c329f487cbae2eff352b8208318ceb23022843a4511b91048ca18b97eb0c217&w=740"
  },
  {
    number: "002",
    title: "Timeless Alleyways: Streets in Analog",
    city: "New York, USA",
    date: "10/06/24",
    image: "https://img.freepik.com/free-photo/professional-programmer-working-late-dark-office_1098-18705.jpg?t=st=1755151881~exp=1755155481~hmac=4c329f487cbae2eff352b8208318ceb23022843a4511b91048ca18b97eb0c217&w=740"
  },
  {
    number: "003",
    title: "Silent Stories: The Streets Through My Lens",
    city: "London, UK",
    date: "07/03/24",
    image: "https://img.freepik.com/free-photo/professional-programmer-working-late-dark-office_1098-18705.jpg?t=st=1755151881~exp=1755155481~hmac=4c329f487cbae2eff352b8208318ceb23022843a4511b91048ca18b97eb0c217&w=740"
  },
  {
    number: "004",
    title: "In the Frame: City Rhythms on Film",
    city: "Milan, IT",
    date: "—",
    image: "https://img.freepik.com/free-photo/professional-programmer-working-late-dark-office_1098-18705.jpg?t=st=1755151881~exp=1755155481~hmac=4c329f487cbae2eff352b8208318ceb23022843a4511b91048ca18b97eb0c217&w=740"
  },
  {
    number: "005",
    title: "Street Shadows: Light, Life, and Lenses",
    city: "Warsaw, PL",
    date: "23/12/24",
    image: "https://img.freepik.com/free-photo/professional-programmer-working-late-dark-office_1098-18705.jpg?t=st=1755151881~exp=1755155481~hmac=4c329f487cbae2eff352b8208318ceb23022843a4511b91048ca18b97eb0c217&w=740"
  }
];

export default function FeaturedProjects() {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-5xl md:text-7xl font-extrabold leading-none mb-6">
        FEATURED <br /> PROJECTS
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="text-gray-500 text-sm uppercase border-b border-gray-200">
              <th className="w-16 py-3">No</th>
              <th className="py-3">Title</th>
              <th className="py-3">City</th>
              <th className="py-3">Date</th>
              <th className="w-8"></th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project, index) => (
              <tr
                key={index}
                className="border-b border-gray-200 transition-colors cursor-pointer relative"
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
              >
                <td className="py-4">{project.number}</td>
                <td className="py-4 font-medium relative">
                  {project.title}
                  {hovered === index && (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute left-full ml-4 w-80 h-auto object-cover rounded-lg shadow-lg transition-all duration-300"
                      style={{
                        top: `-${index * 10}px` // "stairs" effect
                      }}
                    />
                  )}
                </td>
                <td className="py-4">{project.city}</td>
                <td className="py-4">{project.date}</td>
                <td className="py-4">↗</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
