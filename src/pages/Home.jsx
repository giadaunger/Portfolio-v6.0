import React from 'react'
import Banner from '../components/Banner'
import ResumeBtn from '../components/ResumeBtn'
import TechStack from '../components/TechStack'
import Certificates from '../components/Certificates'

function Home() {
  return (
    <div className="text-[#ADA7AD]">
      <div className="md:w-2/3 w-11/12 mx-auto p-6 mt-20 mb-20">
        <Banner />
        <ResumeBtn />
      </div>
      <div className="md:w-2/3 w-11/12 mx-auto p-6 mb-20">
        <h2 className="text-center text-6xl mb-10 mt-20">Tech Stack</h2>
        <TechStack />
      </div>
      <div className="md:w-2/3 w-11/12 mx-auto p-6 mb-20">
        <h2 className="text-center text-6xl mb-10 mt-20">CodeCademy Certificates</h2>
        <Certificates />
      </div>
    </div>
  )
}

export default Home