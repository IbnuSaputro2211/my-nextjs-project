"use client";
import React from "react";
import { FaCode, FaPaintBrush, FaLaptopCode, FaEnvelope } from "react-icons/fa";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6">
      {/* About Section */}
      <section className="text-center py-10">
        <Image
          src="/images/p.jpg"
          alt="Profile Picture"
          width={150}
          height={150}
          className="rounded-full mx-auto border-4 border-white"
        />
        <h1 className="text-3xl font-bold mt-4">Ibnu Risqi Saputro</h1>
        <p className="text-lg">Mahasiswa Sistem Informasi | Web Developer</p>
      </section>
      
      {/* Skills Section */}
      <section className="py-10">
        <h2 className="text-2xl font-bold text-center">Skills</h2>
        <ul className="flex justify-center gap-4 mt-4">
          <li className="bg-white text-black px-4 py-2 rounded-lg">Next.js</li>
          <li className="bg-white text-black px-4 py-2 rounded-lg">React.js</li>
          <li className="bg-white text-black px-4 py-2 rounded-lg">Tailwind CSS</li>
        </ul>
      </section>
      
      {/* Services Section */}
      <section className="py-10">
        <h2 className="text-2xl font-bold text-center">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <div className="bg-white text-black p-4 rounded-lg text-center">
            <FaCode className="text-3xl mx-auto text-blue-500" />
            <h3 className="font-bold mt-2">Web Development</h3>
          </div>
          <div className="bg-white text-black p-4 rounded-lg text-center">
            <FaPaintBrush className="text-3xl mx-auto text-green-500" />
            <h3 className="font-bold mt-2">UI/UX Design</h3>
          </div>
          <div className="bg-white text-black p-4 rounded-lg text-center">
            <FaLaptopCode className="text-3xl mx-auto text-red-500" />
            <h3 className="font-bold mt-2">Freelance Projects</h3>
          </div>
        </div>
      </section>
      
      {/* Portfolios Section */}
      <section className="py-10">
        <h2 className="text-2xl font-bold text-center">Portfolios</h2>
        <div className="text-center mt-4">
          <div className="bg-white text-black p-4 rounded-lg mb-4">
            <h3 className="text-xl font-bold">Website Portofolio Pribadi</h3>
            <p className="mt-2">Website pribadi yang menampilkan informasi tentang diri saya, keahlian, serta proyek-proyek yang telah saya kerjakan.</p>
            <p className="mt-2">Teknologi: Next.js, Tailwind CSS, Node.js</p>
            <a 
              href="https://github.com/IbnuSaputro2211/biodata-saya" 
              className="text-blue-500 mt-4 inline-block"
            >
              GitHub Repository
            </a> 
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="py-10 text-center">
        <h2 className="text-2xl font-bold">Contact</h2>
        <p className="mt-2">Email: ibnusaputro123@gmail.com</p>
        <a 
          href="mailto:ibnusaputro123@gmail.com" 
          className="bg-white text-blue-500 px-6 py-2 rounded-lg mt-4 inline-flex items-center mx-auto"
        >
          <FaEnvelope className="mr-2" /> Get in Touch
        </a>
      </section>
    </div>
  );
}
