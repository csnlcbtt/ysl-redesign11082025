import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SLIDESHOW_PROJECTS } from "@/lib/constants";
// Import project images
import projectA from "@assets/a_640_300_1754928818592.jpg";
import projectB from "@assets/b_640_300_1754928818591.jpg"; 
import projectC from "@assets/c_640_300_1754928818591.jpg";
import projectD from "@assets/d_640_300 (1)_1754928818589.jpg";

// Map image imports to project IDs
const imageMap: Record<string, string> = {
  "a_640_300_1754928818592.jpg": projectA,
  "b_640_300_1754928818591.jpg": projectB,
  "c_640_300_1754928818591.jpg": projectC,
  "d_640_300 (1)_1754928818589.jpg": projectD
};

export default function Slideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % SLIDESHOW_PROJECTS.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => 
      prev === 0 ? SLIDESHOW_PROJECTS.length - 1 : prev - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Auto-advance slideshow
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden slideshow-container">
      
      <div className="slide-container relative w-full h-full">
        {SLIDESHOW_PROJECTS.map((project, index) => {
          const imageSrc = imageMap[project.image];
          return (
            <div
              key={project.id}
              className={`slide absolute inset-0 transition-opacity duration-500 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              {/* Blurred Background Layer */}
              <div 
                className="absolute inset-0 slideshow-bg-blur"
                style={{
                  backgroundImage: `url(${imageSrc})`,
                }}
              />
              
              {/* Sharp Foreground Image Container */}
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src={imageSrc}
                  alt={project.title}
                  className="h-full w-auto object-contain max-w-full"
                  style={{ 
                    maxHeight: '100%',
                    width: 'auto',
                    height: '100%'
                  }}
                />
              </div>
              
              {/* Content Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 text-white max-w-md">
                <h3 className="text-2xl font-bold mb-2 drop-shadow-lg">{project.title}</h3>
                <p className="text-lg drop-shadow-md">{project.description}</p>
              </div>
            </div>
          );
        })}
      </div>
      
      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/75 transition-all backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/75 transition-all backdrop-blur-sm"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
      
      {/* Navigation Dots */}
      <div className="absolute bottom-4 right-8 flex space-x-2">
        {SLIDESHOW_PROJECTS.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all backdrop-blur-sm ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            } hover:bg-white`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
