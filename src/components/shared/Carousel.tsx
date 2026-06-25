import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import mboto from "../../../public/assets/bq.jpg";
import fisa from "../../../public/assets/z.jpg";
import task from "../../../public/assets/by.jpg";
import safi from "../../../public/assets/bt.jpg";
import car from "../../../public/assets/bi.jpg";
import buby from "../../../public/assets/zizo.jpg";

const slides = [
  {
    image: mboto,
    text: "Built With Design",
  },
  {
    image: fisa,
    text: "Built With Design",
  },
  {
    image: safi,
    text: "Built With Design",
  },
  {
    image: car,
    text: "Built With Design",
  },
  {
    image: buby,
    text: "Built With Design",
  },
  {
    image: task,
    text: "Built with Design",
  }
];

const Carousel = () => {
  const [index, setIndex] = useState(0);

  // auto slide every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };



  return (
    <div className="relative w-inherit h-[900px] overflow-hidden rounded-2xl">
      
      <AnimatePresence mode="wait">
        <motion.img
          key={index}
          src={slides[index].image}
          alt="carousel"
          initial={{ x: 300, opacity: 0, scale: 1 }}
          animate={{ x: 0, opacity: 1, scale: 1.08 }}
          exit={{ x: -300, opacity: 0 }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
          className="absolute w-full h-full object-cover mandamano"
        />
      </AnimatePresence>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/30 z-[1]" />

      {/* ANIMATED TEXT */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[index].text}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="absolute bottom-20 left-10 z-20"
        >
          <div className="lurk text-white text-5xl font-bold ">
            {slides[index].text}
          </div>
        </motion.div>
      </AnimatePresence>


      {/* DOTS */}
      <div className="absolute  left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full ${
              i === index ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;