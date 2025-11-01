import { useEffect, useState } from 'react';
import heroImage from '../assets/images/hero_section.png';

const HeroSection = () => {
  return (
    <section id="hero" className="pt-28 pb-16 md:pt-36 md:pb-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 z-0"></div>
      <div className="absolute top-0 right-0 w-1/3 h-96 bg-gradient-to-b from-accent/5 to-transparent rounded-bl-full z-0"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-64 bg-gradient-to-t from-gray-200/50 to-transparent z-0"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full border border-gray-200 opacity-60"></div>
      <div className="absolute top-40 left-20 w-40 h-40 rounded-full border border-gray-300 opacity-40"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full border border-gray-200 opacity-60"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-8 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-black">thinnan</span>
              <span className="text-accent">.</span><br />
              <span className="text-black">the social</span><br />
              <span className="text-accent">food </span>
              <span className="text-black">network</span>
              <span className="text-accent">.</span>
            </h1>
            <p className="text-gray-700 text-2xl md:text-3xl font-light tracking-wide md:pr-12 mx-auto md:mx-0 max-w-md relative">
              <span className="relative inline-block">
                bringing people together
              </span>
              <br />
              <span className="text-accent font-medium">plate by plate!</span>
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
              <a href="https://thinnan.page.link/download" className="btn-primary text-center shadow-lg relative overflow-hidden group rounded-xl px-6 py-3">
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-accent to-accent bg-size-200 bg-pos-0 group-hover:bg-pos-100 transition-all duration-500 opacity-0 group-hover:opacity-20 rounded-xl"></span>
                <span className="relative">Download App</span>
              </a>
              <a href="#how-it-works" className="btn-secondary text-center shadow-md hover:shadow-lg transition-all duration-300 rounded-xl px-6 py-3">
                Learn More
              </a>
            </div>
          </div>
          <div className="relative flex justify-center mt-8 md:mt-0">
            <div className="relative">
              <div className="absolute -inset-4 md:-inset-6 bg-gradient-to-tr from-gray-100 to-gray-50 rounded-[2.5rem] -z-10 shadow-inner"></div>
              
              {/* Phone mockup with reflection effect */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-black/5 to-black/0 rounded-3xl pointer-events-none"></div>
                <img 
                  src={heroImage} 
                  alt="thinnan app screenshot" 
                  className="max-w-full h-auto shadow-lg rounded-3xl relative z-10"
                  style={{ maxHeight: '600px' }} 
                />
                {/* Reflection effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent rounded-3xl"></div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent rounded-full opacity-10 blur-lg"></div>
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-primary rounded-full opacity-5 blur-md"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 