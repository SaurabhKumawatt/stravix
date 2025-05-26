import React, { useEffect, useRef, useState } from "react";

const LearnerResponses = () => {
  const [images, setImages] = useState([]);
  const [index, setIndex] = useState(0);
  const trackRef = useRef(null);

  useEffect(() => {
    const fetchImages = async () => {
      const data = [
        "/assets/images/learner.png",
        "/assets/images/learner1.png",
        "/assets/images/learner.png",
      ];
      setImages([...data, data[0]]); // Clone first for seamless loop
    };

    fetchImages();
  }, []);

  useEffect(() => {
    if (images.length === 0) return;

    const interval = setInterval(() => {
      setIndex((prev) => {
        if (prev === images.length - 1) return 1; // skip clone → real 1
        return prev + 1;
      });
    }, 10000); // 10 seconds

    return () => clearInterval(interval);
  }, [images]);

useEffect(() => {
  const track = trackRef.current;
  if (!track) return;

  if (index === images.length - 1) {
    // Slide to clone (last), then jump to real first (index 0) instantly
    track.style.transition = "transform 0.5s ease-in-out";
    track.style.transform = `translateX(-${index * 100}%)`;

    const timeout = setTimeout(() => {
      track.style.transition = "none";
      track.style.transform = `translateX(0%)`;
      setIndex(0);
    }, 500); // match transition duration

    return () => clearTimeout(timeout);
  } else {
    track.style.transition = "transform 0.5s ease-in-out";
    track.style.transform = `translateX(-${index * 100}%)`;
  }
}, [index, images.length]);

  return (
    <section className="bg-[#F5F6F7] py-20 overflow-hidden">
      <h2 className="text-2xl md:text-4xl font-semibold text-center mb-10">
        See How Our Learners’ Respond
      </h2>

      <div className="max-w-xl mx-auto overflow-hidden relative">
        <div
          ref={trackRef}
          className="flex w-full"
          style={{ width: `${images.length * 100}%` }}
        >
          {images.map((src, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0"
              style={{ width: `${100 / images.length}%` }}
            >
              <img
                src={src}
                alt={`Learner ${index}`}
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearnerResponses;
