import '../App.css';
import{ useState } from 'react';
import ProjectCard from './projectCard.jsx';
import projectsData from './data.json'; 

const Project = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? projectsData.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === projectsData.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  if (!projectsData || projectsData.length === 0) {
    return <div className="text-center py-20">No projects found.</div>;
  }

  return (
    <section className="min-h-screen bg-white py-10 px-4 relative overflow-hidden">
      
      {/* --- Header Section (Title & Menu Icon) --- */}
      <div className="max-w-6xl mx-auto flex justify-between items-center mb-12 relative">
        {/* Centered Title */}
        <h2 className="text-5xl md:text-6xl font-black text-center w-full tracking-tight">
          Projects
        </h2>

        {/* Menu Burger Icon (Top Right) */}
        <button className="absolute right-0 top-1/2 -translate-y-1/2 p-2 hover:bg-gray-100 rounded-full transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-10 h-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>


      {/* --- Carousel Section --- */}
      <div className="max-w-5xl mx-auto flex items-center justify-center gap-8 md:gap-16 h-[600px]">
        
        {/* Left Arrow */}
        <button 
          onClick={prevSlide} 
          className="p-2 rounded-full hover:bg-gray-100 transition-colors z-10 hidden md:block"
          aria-label="Previous Project"
        >
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-12 h-12">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
         </svg>
        </button>

        {/* The Flipping Card */}
        <div className="flex justify-center items-center py-10">
             {/* Key ensures the component resets state (unflips) when changing projects */}
             <ProjectCard key={currentIndex} project={projectsData[currentIndex]} />
        </div>

        {/* Right Arrow */}
        <button 
          onClick={nextSlide}
          className="p-2 rounded-full hover:bg-gray-100 transition-colors z-10 hidden md:block"
          aria-label="Next Project"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-12 h-12">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>

         {/* Mobile Navigation controls */}
         <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-8 md:hidden">
             <button onClick={prevSlide} className="p-3 bg-gray-100 rounded-full shadow-md"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg></button>
             <button onClick={nextSlide} className="p-3 bg-gray-100 rounded-full shadow-md"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg></button>
         </div>
      </div>
    </section>
  );
};

export default Project;