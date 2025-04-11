import React from 'react';
import Navbar from '../components/Layout';
import FlashNews from '../components/Flashnews';
import introVideo from '../assets/videos/srkr-intro2.mp4'
import Footer from '../components/Footer';
import About from '../components/About';

const HomePage = () => {
  return (
    <div className='w-full'>
      <Navbar />
      <div className="container mx-auto text-center">
        <FlashNews />       
        {/* Video Banner Section */}
        <div className="w-full overflow-hidden shadow-xl">
          <div className="relative pt-[40.25%]"> {/* 16:9 Aspect Ratio */}
            <video 
              className="absolute top-0 left-0 w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              poster="https://srkrec.edu.in/assets/img/college-poster.jpg"
            >
              <source src={introVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h2 className="text-3xl font-bold mb-2">Welcome to SRKR Engineering College</h2>
              <p className="mb-4">Excellence in Education Since 1980</p>
            </div>
          </div>
        </div>
        <div className="bg-[#056b9b] py-10 px-4 sm:px-10 mt-16 mb-16">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-3xl font-bold text-white mb-8">
      Find the right programme for you
    </h2>
    <div className="flex flex-col md:flex-row justify-center gap-6 mb-6">
      {/* Select Campus */}
      <div className="flex-1">
        <select className="w-full border-b-1 border-gray-300 py-2 px-3 text-white focus:outline-none focus:border-white bg-[#056b9b]">
          <option value="">Select Campus</option>
          <option value="Main">Main Campus</option>
          <option value="City">City Campus</option>
        </select>
      </div>

      {/* Select Discipline */}
      <div className="flex-1">
      <select className="w-full border-b-1 border-gray-300 py-2 px-3 text-white focus:outline-none focus:border-white bg-[#056b9b]">
      <option value="">Select Discipline *</option>
          <option value="Engineering">Engineering</option>
          <option value="Science">Science</option>
          <option value="Management">Management</option>
        </select>
      </div>

      {/* Select Level */}
      <div className="flex-1">
      <select className="w-full border-b-1 border-gray-300 py-2 px-3 text-white focus:outline-none focus:border-white bg-[#056b9b]">
      <option value="">Select Levels *</option>
          <option value="UG">Undergraduate</option>
          <option value="PG">Postgraduate</option>
          <option value="PhD">Doctorate</option>
        </select>
      </div>
    </div>

    {/* Find Programme Button */}
    <button className="bg-white border-2 border-[#056b9b] text-[#056b9b] px-6 py-2 rounded hover:bg-[#056b9b] hover:text-white transition duration-300">
      Find Programme
    </button>
      </div>
    </div>
        <About />

        {/* Placement Partners Section */}
<section className="bg-[#fdf9ec] py-12 px-4 sm:px-10">
  <div className="max-w-7xl mx-auto text-center">
    <h2 className="text-3xl font-bold text-gray-800 mb-2">
      TOP RECRUITERS AT LPU
    </h2>
    <p className="text-[#056b9b] mb-10 text-sm sm:text-base">
      Leading Companies Hiring LPU Graduates Across Diverse Industries
    </p>

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {[
        'google.png',
        'amazon.png',
        'cisco.png',
        'google.png',
        'amazon.png',
        'cisco.png',
        'google.png',
        'amazon.png',
        'cisco.png',
        'google.png',
        'amazon.png',
        'cisco.png',
        'google.png',
        'amazon.png',
        'cisco.png',  
        'google.png',
        'amazon.png',
        'cisco.png',
        'google.png',
        'amazon.png',
      ].map((logo, idx) => (
        <div key={idx} className="bg-white shadow rounded p-4 flex items-center justify-center h-24">
          <img
            src={`/public/${logo}`}
            alt={logo}
            className="max-h-full max-w-full object-contain"
          />
        </div>
      ))}
    </div>
  </div>
</section>

        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
