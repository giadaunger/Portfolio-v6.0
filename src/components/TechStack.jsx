import React from 'react';

function TechStack() {
  return (
    <div className="md:w-2/3 w-11/12 mx-auto p-6">
      <h2 className="text-center text-6xl mb-10 mt-20">Tech Stack</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-9">
        <div className="border border-[#ADA7AD] p-2 h-20 flex justify-center items-center">
          <p className="text-center">Javascript</p>
        </div>
        <div className="border border-[#ADA7AD] p-2 h-20 flex justify-center items-center">
          <p className="text-center">Python</p>
        </div>
        <div className="border border-[#ADA7AD] p-2 h-20 flex justify-center items-center">
          <p className="text-center">C++</p>
        </div>
        <div className="border border-[#ADA7AD] p-2 h-20 flex justify-center items-center">
          <p className="text-center">SQL</p>
        </div>
        <div className="border border-[#ADA7AD] p-2 h-20 flex justify-center items-center">
          <p className="text-center">DevOps</p>
        </div>
        <div className="border border-[#ADA7AD] p-2 h-20 flex justify-center items-center">
          <p className="text-center">Machine Learning</p>
        </div>
        <div className="border border-[#ADA7AD] p-2 h-20 flex justify-center items-center">
          <p className="text-center">UX/UI</p>
        </div>
        <div className="border border-[#ADA7AD] p-2 h-20 flex justify-center items-center">
          <p className="text-center">CSS Frameworks</p>
        </div>
      </div>
    </div>
  );
}

export default TechStack;