import React from 'react'

function ResumeBtn() {
    const handleDownload = () => {
        const resumeUrl = "../assets/GiadaUngerResume.pdf";
        const link = document.createElement('a');
        link.href = resumeUrl;
        link.setAttribute('download', 'GiadaUngerResume.pdf');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div>
            <button
                onClick={handleDownload}
                className="border border-[#ADA7AD] p-2 flex mx-auto w-1/2 md:w-1/5 justify-center font-semibold text-[#ADA7AD] hover:text-[#ff5277] hover:border-[#ff5277] transition duration-300 hover:scale-110">
                Download resume
            </button>
        </div>
    )
}

export default ResumeBtn