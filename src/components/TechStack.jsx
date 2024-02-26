import React from 'react';

function TechStack() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-9 text-[#ADA7AD] font-semibold">
      <div className="border border-[#ADA7AD] rounded-md p-2 h-20 relative group flex justify-center items-center hover:text-[#ff5277] hover:border-[#ff5277] transition duration-300 hover:scale-110">
        <p className="text-center">Javascript</p>
        <div className="dropdown-content rounded-md hidden absolute left-0 top-full mt-1 bg-white border border-[#ff5277] text-[#ff5277] p-2 group-hover:block w-full text-center z-20">
          <p>React</p>
          <p>NodeJS</p>
          <p>Vue</p>
          <p>TypeScript</p>
        </div>
      </div>
      <div className="border border-[#ADA7AD] rounded-md p-2 h-20 relative group flex justify-center items-center hover:text-[#ff5277] hover:border-[#ff5277] transition duration-300 hover:scale-110">
        <p className="text-center">Python</p>
        <div className="dropdown-content rounded-md hidden absolute left-0 top-full mt-1 bg-white border border-[#ff5277] text-[#ff5277] p-2 group-hover:block w-full text-center">
          <p>FastAPI</p>
          <p>Flask</p>
          <p>Pandas</p>
        </div>
      </div>
      <div className="border border-[#ADA7AD] rounded-md p-2 h-20 flex justify-center items-center">
        <p className="text-center">C++</p>
      </div>
      <div className="border border-[#ADA7AD] rounded-md p-2 h-20 relative group flex justify-center items-center hover:text-[#ff5277] hover:border-[#ff5277] transition duration-300 hover:scale-110">
        <p className="text-center">SQL</p>
        <div className="dropdown-content rounded-md hidden absolute left-0 top-full mt-1 bg-white border border-[#ff5277] text-[#ff5277] p-2 group-hover:block w-full text-center">
          <p>PostgreSQL</p>
        </div>
      </div>
      <div className="border border-[#ADA7AD] rounded-md p-2 h-20 relative group flex justify-center items-center hover:text-[#ff5277] hover:border-[#ff5277] transition duration-300 hover:scale-110">
        <p className="text-center">DevOps</p>
        <div className="dropdown-content rounded-md hidden absolute left-0 top-full mt-1 bg-white border border-[#ff5277] text-[#ff5277] p-2 group-hover:block w-full text-center">
          <p>Linux, Ubuntu</p>
          <p>AWS</p>
        </div>
      </div>
      <div className="border border-[#ADA7AD] rounded-md p-2 h-20 flex justify-center items-center">
        <p className="text-center">Machine Learning</p>
      </div>
      <div className="border border-[#ADA7AD] rounded-md p-2 h-20 flex justify-center items-center">
        <p className="text-center">UX/UI</p>
      </div>
      <div className="border border-[#ADA7AD] rounded-md p-2 h-20 relative group flex justify-center items-center hover:text-[#ff5277] hover:border-[#ff5277] transition duration-300 hover:scale-110">
        <p className="text-center">Styling Frameworks</p>
        <div className="dropdown-content rounded-md hidden absolute left-0 top-full mt-1 bg-white border border-[#ff5277] text-[#ff5277] p-2 group-hover:block w-full text-center">
          <p>Chakra UI</p>
          <p>Tailwind</p>
        </div>
      </div>
    </div>
  );
}

export default TechStack;
