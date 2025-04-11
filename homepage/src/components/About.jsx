import React from 'react';

export default function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* About Section */}
        <div className="bg-transparent overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 font-serif">About SRKR College</h2>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="md:w-1/3">
                <img 
                  src="https://srkrec.edu.in/assets/img/f1.jpg" 
                  alt="College Founder" 
                  className="rounded-md shadow-md w-full"
                />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-xl font-semibold text-blue-800 mb-2">Welcome to SRKREC!</h3>
                <p className="text-gray-700 mb-4">
                  Sagi Rama Krishnam Raju Engineering College, established in 1980, is one of the earliest self-financing Engineering Colleges in the state of Andhra Pradesh.
                </p>
                <p className="text-gray-700 mb-4">
                  Established with a noble cause to empower rural students through technical education, the institution today has evolved as one of the pioneering technical institutions in the country.
                </p>
                <p className="text-gray-700">
                  Spreading over 30 acres of green land, the institution has set in state-of-the-art facilities for science and technology and created a conducive environment for inclusive and culturally responsive teaching-learning process.
                </p>
              </div>
            </div>
            <p className="text-gray-700 mt-4">
              Alongside education and research, it established a history of work ethos that supports students in developing a creative, confident and logical approach to nation building, making them highly valued graduates and opening doors to a wide range of exciting careers.
            </p>
          </div>
        </div>

        {/* Chronicles Section */}
        <div className="bg-transparent overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 font-serif">SRKR Campus Chronicle</h2>
            <div className="mb-6">

              <div className="grid grid-cols-3 gap-2 mb-4 ">
                <img src="https://srkrec.edu.in/files/newsletter/chronicle12_thumbnail.png" alt="Chronicle Image 1" className="rounded shadow-sm h-44" />
                <img src="https://srkrec.edu.in/files/newsletter/chronicle12_thumbnail.png" alt="Chronicle Image 2" className="rounded shadow-sm h-44" />
                <img src="https://srkrec.edu.in/files/newsletter/chronicle12_thumbnail.png" alt="Chronicle Image 3" className="rounded shadow-sm h-44" />
              </div>
            </div>
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">VIEW CHRONICLE:</h3>
              <div className="mb-2">
                <span className="font-medium">Vol 1:</span> 
                <a href="#" className="text-blue-600 hover:text-blue-800 mx-2">Issue 1</a> | 
                <a href="#" className="text-blue-600 hover:text-blue-800 mx-2">Issue 2</a> | 
                <a href="#" className="text-blue-600 hover:text-blue-800 mx-2">Issue 3</a>
              </div>
              <div className="mb-2">
                <span className="font-medium">Vol 2:</span> 
                <a href="#" className="text-blue-600 hover:text-blue-800 mx-2">Issue 1</a> | 
                <a href="#" className="text-blue-600 hover:text-blue-800 mx-2">Issue 2</a> | 
                <a href="#" className="text-blue-600 hover:text-blue-800 mx-2">Issue 3</a>
              </div>
              <div className="mb-2">
                <span className="font-medium">Vol 3:</span> 
                <a href="#" className="text-blue-600 hover:text-blue-800 mx-2">Issue 1</a> | 
                <a href="#" className="text-blue-600 hover:text-blue-800 mx-2">Issue 2</a> | 
                <a href="#" className="text-blue-600 hover:text-blue-800 mx-2">Issue 3</a>
              </div>
              <div className="mb-2">
                <span className="font-medium">Vol 4:</span> 
                <a href="#" className="text-blue-600 hover:text-blue-800 mx-2">Issue 1</a> | 
                <a href="#" className="text-blue-600 hover:text-blue-800 mx-2">Issue 2</a> | 
                <a href="#" className="text-blue-600 hover:text-blue-800 mx-2">Issue 3</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}