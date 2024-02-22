import React from 'react'

function Banner() {

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
        <div className="md:w-2/3 w-11/12 mx-auto p-6">
            <div className="grid grid-cols-2 mb-16">
                <div className="p-6">
                    <h2 className="text-6xl mb-2">Giada Unger</h2>
                    <h3 className="text-2xl mb-4">Fullstack Utvecklare</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla labore iusto dicta sequi eius, alias non temporibus. Doloribus nihil, id eaque labore, consequatur nulla nostrum, amet deleniti minus accusamus minima porro possimus praesentium non commodi aliquid rerum. Blanditiis reprehenderit cupiditate nulla atque quaerat nisi necessitatibus. Exercitationem saepe sequi ullam distinctio?</p>
                </div>
                <div className="">jnsdj</div>
            </div>
            <button onClick={handleDownload} className="border border-[#ADA7AD] p-2 flex mx-auto w-1/5 justify-center">Download resume</button>
        </div>
    )
}

export default Banner