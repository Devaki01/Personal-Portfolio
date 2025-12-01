import { useState } from 'react';

const ProjectCard = ({ project }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const cardFaceBaseClasses = "absolute inset-0 h-full w-full rounded-[30px] shadow-xl p-6 flex flex-col items-center justify-center [backface-visibility:hidden]";

  return (
    <div 
      className="group h-[450px] w-[320px] cursor-pointer [perspective:1000px]" 
      onClick={handleFlip}
    >
      <div
        className={`relative h-full w-full transition-all duration-700 [transform-style:preserve-3d] ${
          isFlipped ? '[transform:rotateY(180deg)]' : ''
        }`}
      >
        {/* ================== FRONT FACE ================== */}
        <div className={`${cardFaceBaseClasses} bg-blue-300/90`}>
          <h3 className="text-white text-3xl font-bold mb-6 text-center tracking-wider drop-shadow-md">
            {project.name}
          </h3>
          
          {/* White Inner Box for Image */}
          <div className="bg-white p-3 rounded-[25px] shadow-inner w-full h-64 flex items-center justify-center overflow-hidden">
             <img 
               src={project.image} 
               alt={project.name} 
               className="w-full h-full object-cover rounded-[20px]"
             />
          </div>
        </div>

        {/* ================== BACK FACE ================== */}
        {/* Rotated 180deg initially so it's hidden until flipped */}
        <div
          className={`${cardFaceBaseClasses} bg-blue-500 text-white [transform:rotateY(180deg)] justify-between py-12`}
        >
          <div>
            <h3 className="text-2xl font-bold mb-4">{project.name}</h3>
            <p className="text-blue-50 text-lg leading-relaxed text-center">
              {project.description}
            </p>
          </div>
          
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()} 
            className="mt-6 px-8 py-3 bg-white text-blue-600 rounded-full font-bold hover:bg-blue-50 transition-colors shadow-md"
          >
            View Project
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;