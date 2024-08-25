"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import Particles from "@/components/magicui/particles";
import { OrbitingCirclesDemo } from "./OrbitingCirclesDemo";
import ScrollUpButton from "@/pages/Components/ScrollUpButton";

const teamMembers = [
  {
    id: 1,
    name: "Jane Doe",
    role: "Founder & CEO",
    bio: "Jane is passionate about sports and technology. With over a decade of experience in the industry, she founded this platform to make sports booking simple and accessible.",
    photo: "https://i.ibb.co/rmvjrxZ/106021267-1.jpg", // Replace with actual image path
  },
  {
    id: 2,
    name: "John Smith",
    role: "Chief Technology Officer",
    bio: "John oversees the technology and development of the platform. He has a background in software engineering and a love for innovative tech solutions.",
    photo: "https://i.ibb.co/4K7MwQk/IMG-8417-2.jpg", // Replace with actual image path
  },
  {
    id: 3,
    name: "Emily Johnson",
    role: "Marketing Director",
    bio: "Emily is responsible for spreading the word about our platform. With her extensive marketing background, she ensures we reach the right audience.",
    photo: "https://i.ibb.co/rmvjrxZ/106021267-1.jpg", // Replace with actual image path
  },
];

const ParticlesDemo = () => {
  const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(theme === "dark" ? "#ffffff" : "#ffffff");
  }, [theme]);

  return (
    <div className="relative flex h-full w-full flex-col  overflow-hidden  bg-background md:shadow-xl">
      <ScrollUpButton/>
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          {/* Mission Statement */}
          <div className="text-center mb-16 text-white ">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg lg:text-xl max-w-7xl mx-auto">
              At Fortune Sports Arena, our mission is to make sports booking
              easy and enjoyable for everyone. We believe in promoting an active
              lifestyle by providing a user-friendly platform that connects
              sports enthusiasts with top-quality facilities. Our core values
              include accessibility, convenience, and excellence in service.
            </p>
          </div>
          {/* Team Section */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-8">
              Meet Our Team
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member) => (
                <div
                  key={member.id}
                  className="bg-transparent backdrop-blur-lg text-white shadow-lg rounded-lg p-6 flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-2xl"
                >
                  <div className="w-24 h-24 mb-4">
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-white mb-4">{member.role}</p>
                  <p className="text-white">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>

          {/* History & Milestones */}
        <div className="mb-12 ">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-8">History & Milestones</h2>
          <div className="bg-black p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Our Journey</h3>
            <ul className="list-disc pl-5 space-y-4">
              <li><strong>2018:</strong> Platform launched with initial features.</li>
              <li><strong>2019:</strong> Expanded to include more sports facilities and features.</li>
              <li><strong>2020:</strong> Reached 10,000+ active users.</li>
              <li><strong>2021:</strong> Introduced premium and pro membership plans.</li>
              <li><strong>2022:</strong> Became the leading sports booking platform in the region.</li>
            </ul>
          </div>
        </div>


           {/* Contact Information */}
           <div className="mt-16">
          
          <div className="flex flex-col lg:flex-row items-center">
            {/* Contact Information Text */}
            <div className="flex-1 p-6 lg:p-12">
              <p className="text-lg lg:text-xl mb-4">
                <strong>Office Address:</strong> 123 Sports Avenue, City, Country
              </p>
              <p className="text-lg lg:text-xl mb-4">
                <strong>Phone Number:</strong> (123) 456-7890
              </p>
              <p className="text-lg lg:text-xl mb-4">
                <strong>Email:</strong> support@yourplatform.com
              </p>
              <p className="text-lg lg:text-xl">
                We would love to hear from you! If you have any questions or need assistance, feel free to reach out to us.
              </p>
            </div>

            {/* Vertical Divider */}
            <div className="w-px h-full bg-gray-300 mx-6 lg:mx-12"></div>

            {/* Contact Image */}
            <OrbitingCirclesDemo/>
          </div>
        </div>


        </div>
      </section>
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color={color}
        refresh
      />
    </div>
  );
};

export default ParticlesDemo;