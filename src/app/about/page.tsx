"use client"
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

function Page() {
    const headingRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        gsap.from(headingRef.current, {
            duration: 1,
            opacity: 0,
            y: -50,
            ease: "power1.out"
        });

        gsap.from(textRef.current, {
            duration: 1,
            opacity: 0,
            y: 50,
            ease: "power1.out",
            delay: 0.5
        });
    }, []);

    return (
        <div style={{ fontFamily: "'Cinzel', serif" }}>
            <div className='flex flex-col items-center justify-center min-h-screen'>
                <div>
                    <h1
                        ref={headingRef}
                        className='text-4xl md:text-6xl font-light text-gray-800 mb-16'
                    >
                        Let’s Know Us
                    </h1>
                </div>
                <div
                    ref={textRef}
                    className='text-4xl md:text-6xl text-center w-[90%] font-light text-gray-800 mb-16'
                >
                    We are committed to delivering innovative products that shape the future of decentralized technologies, empowering and transforming digital ecosystems for a more connected and equitable world.
                </div>
            </div>
        </div>
    );
}

export default Page;
