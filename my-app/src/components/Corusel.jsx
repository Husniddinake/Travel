import React from 'react';
import Corusel1 from '../assets/Corusel1.jpg';
import Corusel2 from '../assets/Corusel2.jpg';
import Corusel3 from '../assets/Corusel3.jpg';
import Corusel4 from '../assets/Corusel4.jpg';
import Corusel5 from '../assets/Corusel5.jpg';
import Corusel6 from '../assets/Corusel6.jpg';
import Corusel7 from '../assets/Corusel7.jpg';


const TESTIMONIAL_ITEMS = [
  {
  quote: "Community that truly feels like home",
  description: "The staff are always kind and supportive, creating a warm and welcoming space. Katie constantly helps with care and attention, even when I was living abroad for a short while.",
  name: "Olga",
  location: "Weave Studios – Kai Tak",
  image: Corusel1,
  rating: 5,
  id: 1
},
{
  quote: "Amazing facilities and friendly vibes",
  description: "Everything here is spotless, bright, and thoughtfully designed. The team makes sure residents feel comfortable and connected. Katie’s support and kindness have truly stood out every single time.",
  name: "Thomas",
  location: "Weave Studios – Olympic",
  image: Corusel2,
  rating: 5,
  id: 2
},
{
  quote: "Feels like a big family here",
  description: "There’s a genuine sense of belonging in this place. Katie is always ready to help with patience and care, and the whole staff make life smoother for everyone every single day, always taking time to listen and offer real help when needed most.",
  name: "Eliot",
  location: "Weave Studios – Hung Hom",
  image: Corusel3,
  rating: 5,
  id: 3
},
{
  quote: "A caring community that stands out",
  description: "From the moment I arrived, I felt completely supported and safe. The staff handle everything with professionalism and kindness for everyone every single day.",
  name: "Eliot",
  location: "Weave Studios – Kennedy Town",
  image: Corusel4,
  rating: 5,
  id: 4
},
{
  quote: "Home away from home",
  description: "Living here has been incredibly comforting and easy. Katie and the team are always available to assist, even when I was overseas, ensuring everything stayed organized and stress-free throughout.",
  name: "Eliot",
  location: "Weave Studios – Mong Kok",
  image: Corusel5,
  rating: 5,
  id: 5
},
{
  quote: "Supportive staff and great community",
  description: "The environment here is welcoming and positive. The staff genuinely care about residents’ well-being, and Katie goes above and beyond to make sure every small detail is perfectly handled always.",
  name: "Eliot",
  location: "Weave Studios – Central West",
  image: Corusel6,
  rating: 5,
  id: 6
},
{
  quote: "Warm atmosphere, helpful team",
  description: "Katie and the team make this place special with their warmth and reliability. Every request is handled quickly, making life simpler and more enjoyable for everyone who calls this home.",
  name: "Eliot",
  location: "Weave Studios – Tsuen Wan",
  image: Corusel1,
  rating: 5,
  id: 7
},
{
  quote: "Exceptional service and comfort",
  description: "I’ve never felt more at ease in a living space. The staff’s constant support and Katie’s thoughtful care make every day smoother, brighter, and full of genuine comfort and peace here.",
  name: "Olga",
  location: "Weave Studios – Prince Edward",
  image: Corusel7,
  rating: 5,
  id: 8
}

];

const DRAG_BUFFER = 10;
const GAP = 60;

const Corusel = ({ value = 3, onChange, className = '' }) => {
  const containerPadding = 26;
  const baseWidth = 425;
  const itemWidth = baseWidth - containerPadding * 2;
  const trackItemOffset = itemWidth + GAP;

  const carouselItems = [...TESTIMONIAL_ITEMS, ...TESTIMONIAL_ITEMS];
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [dragStart, setDragStart] = React.useState(0);
  const [isDragging, setIsDragging] = React.useState(false);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prev => {
        if (prev === TESTIMONIAL_ITEMS.length - 1) {
          return 0;
        }
        return prev + 1;
      });
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  const handleDragStart = (e) => {
    setIsDragging(true);
    setDragStart(e.clientX || e.touches[0].clientX);
  };

  const handleDragEnd = (e) => {
    if (!isDragging) return;
    setIsDragging(false);
    
    const dragEnd = e.clientX || e.changedTouches[0].clientX;
    const offset = dragEnd - dragStart;

    if (offset < -DRAG_BUFFER) {
      setCurrentIndex(prev => Math.min(prev + 1, TESTIMONIAL_ITEMS.length - 1));
    } else if (offset > DRAG_BUFFER) {
      setCurrentIndex(prev => Math.max(prev - 1, 0));
    }
  };

  const VISIBLE_SLIDES = 3;
  const containerWidth = (itemWidth + GAP) * VISIBLE_SLIDES - GAP;

  return (
    <div className={`flex h-full w-full max-w-[1600px] mx-auto mt-[100px] ${className}`}>
      <div
        className="mx-auto relative overflow-hidden "
        style={{ width: `${containerWidth}px` }}
      >
        <div
          className="flex transition-transform duration-500 ease-out cursor-grab active:cursor-grabbing"
          style={{
            gap: `${GAP}px`,
            transform: `translateX(-${currentIndex * trackItemOffset}px)`
          }}
          onMouseDown={handleDragStart}
          onMouseUp={handleDragEnd}
          onMouseLeave={() => setIsDragging(false)}
          onTouchStart={handleDragStart}
          onTouchEnd={handleDragEnd}
        >
          {TESTIMONIAL_ITEMS.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="relative flex flex-col flex-shrink-0 pl-[10px] rounded-2xl bg-white overflow-hidden select-none shadow-[0_5px_7px_-2px_rgba(107,114,128,0.5)]"
              style={{
                width: itemWidth,
                height: '584px'
              }}
            >
              <p className="text-[26px] font-semibold pt-[20px] leading-tight">
                {item.quote}
              </p>
              
              <p className="pt-[10px] text-gray-600 leading-relaxed">
                {item.description}
              </p>

              <div className="flex pt-[15px] gap-1">
                {[...Array(5)].map((_, starIndex) => (
                  <span 
                    key={starIndex} 
                    className={`text-2xl ${starIndex < item.rating ? 'text-yellow-500' : 'text-gray-300'}`}
                  >
                    ★
                  </span>
                ))}
              </div>

              <p className="text-[20px] pt-[10px] font-medium">{item.name}</p>
              <p className="pt-[5px] text-gray-600">{item.location}</p>

              <img 
                src={item.image} 
                alt="Testimonial" 
                className=" relative bottom-[-10px] pr-[10px] rounded-2xl" 
              />
            </div>
          ))}
        </div>

        <div className="flex w-full justify-center mt-4 pb-4 ">
          <div className="flex gap-2">
            {TESTIMONIAL_ITEMS.map((_, index) => (
              <div
                key={index}
                className={`h-2 w-2 rounded-full cursor-pointer transition-all duration-300 ${
                  currentIndex === index ? 'bg-black scale-125' : 'bg-gray-400'
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Corusel;
