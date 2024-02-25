import React from 'react'
import TypingAnimation from './TypingAnimation'

function Banner() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 mb-10 text-[#ADA7AD]">
            <div className="bg-red-300">jnsdj</div>
            <div className="p-6">
                <h2 className="text-6xl mb-2">
                    <TypingAnimation />
                </h2>
                <h3 className="text-2xl mb-4 text-[#fb6384] font-semibold">Fullstack Utvecklare</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla labore iusto dicta sequi eius, alias non temporibus. Doloribus nihil, id eaque labore, consequatur nulla nostrum, amet deleniti minus accusamus minima porro possimus praesentium non commodi aliquid rerum. Blanditiis reprehenderit cupiditate nulla atque quaerat nisi necessitatibus. Exercitationem saepe sequi ullam distinctio?</p>
            </div>
        </div>
    )
}

export default Banner