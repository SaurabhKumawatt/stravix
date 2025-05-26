import React, { useState, useEffect, useRef } from 'react'



const bundleData = [
  {
    id: 1,
    title: "The Affiliate Launchpad",
    image: "/assets/images/the-affiliate-launchpad.png",
    description: "Learn how to build a personal brand that sells.",
    features: [
      "Sub-courses related to the topic",
      "Free webinars, workshops, and trainings",
      // "Refund with 24-Hrs (Refund Policy)",
      "Globally Accepted Certification"
    ]
  },
  {
    id: 2,
    title: "Sales & Mindset Booster Workshop",
    image: "/assets/images/sales-mindset.png",
    description: "Master data skills to analyze and grow.",
    features: [
      "Sub-courses related to the topic",
      "Free webinars, workshops, and trainings",
      // "Refund with 24-Hrs (Refund Policy)",
      "Globally Accepted Certification"
    ]
  },
  {
    id: 3,
    title: "Sales & Mindset Booster Workshop",
    image: "/assets/images/coming-soon.png",
    description: "Become confident and clear communicator.",
    features: [
      "Sub-courses related to the topic",
      "Free webinars, workshops, and trainings",
      // "Refund with 24-Hrs (Refund Policy)",
      "Globally Accepted Certification"
    ]
  },
];



function BundleDetails() {

  const orbitRef = useRef(null);
  const radius = 230;

  const images = [
    "/assets/images/PERSONAL BRANDING.png",
    "/assets/images/Soft skills mastery.png",
    "/assets/images/Digital marketing.png",
    "/assets/images/Online marketing.png",
    "/assets/images/Data Science.png",
    "/assets/images/Data Science.png",
  ];

  useEffect(() => {
    const orbit = orbitRef.current;
    if (!orbit) return;

    const centerX = 250;
    const centerY = 230;

    const children = orbit.querySelectorAll("img");

    children.forEach((img, i) => {
      const angle = (Math.PI / (images.length - 1)) * i - Math.PI / 2; // right side arc
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);

      img.style.left = `${x}px`;
      img.style.top = `${y}px`;
      img.style.transform = "translate(-50%, -50%)";
    });

  }, [images]);


  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % bundleData.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const active = bundleData[activeIndex];
  const leftIndex = (activeIndex - 1 + bundleData.length) % bundleData.length;
  const rightIndex = (activeIndex + 1) % bundleData.length;

  return (
    <div >
      <section className="bg-color md:hidden py-10 text-color text-center">
        <div className="max-w-4xl mx-auto ">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-8">
            What’s inside the Courses
          </h2>

          {/* 3-Image Row */}
          <div className="flex justify-center items-center gap-6 mb-10 flex-nowrap overflow-hidden scrollbar-hide">
            {/* Left */}
            <div className="w-[180px] aspect-[2/3] bg-color1 trapezoid-shape-left flex-shrink-0 rounded-xl shadow-md px-4 py-6 flex items-center justify-center">
              <img
                src={bundleData[leftIndex].image}
                alt={bundleData[leftIndex].title}
                className="max-w-[150px] object-contain"
              />
            </div>

            {/* Center */}
            <div className="bg-primary overflow-hidden flex-shrink-0 rounded-2xl px-4 py-6 w-[170px] h-52 flex items-center justify-center transition-all duration-300">
              <img
                src={active.image}
                alt={active.title}
                className="max-w-[160px] object-contain"
              />
            </div>

            {/* Right */}
            <div className="w-[180px] aspect-[2/3] bg-color1 trapezoid-shape-right flex-shrink-0 rounded-xl shadow-md px-4 py-6 flex items-center justify-center">
              <img
                src={bundleData[rightIndex].image}
                alt={bundleData[rightIndex].title}
                className="max-w-[150px] object-contain"
              />
            </div>
          </div>

          {/* Feature Checklist */}
          <div className="text-left flex flex-col gap-4 px-4 max-w-md mx-auto">
            {active.features.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <img
                  src="/assets/icons/checkmark.svg"
                  alt="check"
                  className="w-[22px] h-[22px] mt-0.5"
                />
                <p className="text-[16px] leading-snug">
                  {item.includes("Refund Policy") ? (
                    <>
                      Refund with 24-Hrs (
                      <a href="#" className="text-primary underline">Refund Policy</a>)
                    </>
                  ) : (
                    item
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative hidden md:block bg-white pt-20 pb-10 overflow-hidden ">
        <div className="max-w-7xl flex flex-col md:flex-row items-center justify-between gap-10 m-auto relative z-10">
          <div className="relative !hidden w-full md:w-1/2 h-[500px] md:h-[600px] md:flex items-center justify-center mx-auto">
            {/* Gradient Background Circle */}
            <div className="absolute left-[-80px] w-[500px] h-[500px] bg-gradient-to-t from-[#2177F6] via-[#00A85A] to-[#F8C900] rounded-full opacity-20 z-0" />

            {/* Orbit Layer */}
            <div ref={orbitRef} className="absolute left-[-80px] w-[500px] h-[500px]">
              {images.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  className="absolute w-20 md:w-60 object-contain"
                  alt={`bundle-${i}`}
                />
              ))}
            </div>
          </div>

          <div className="flex pt-0.5 w-1/2 -space-x-18">
            {bundleData.map((bundle) => (
              <div key={bundle.id} className="flex pt-0.5">
                <img
                  src={bundle.image}
                  // alt={bundle.title}
                  className="w-56 h-min z-30 drop-shadow-2xl"
                />
              </div>
            ))}
           
          </div>


          {/* Right: Features Checklist */}
          <div className="md:w-1/2 text-left z-10">
            <h2 className="text-3xl font-semibold mb-6 text-color1">What’s Inside the Courses?</h2>
            {active.features.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <img
                  src="/assets/icons/checkmark.svg"
                  alt="check"
                  className="w-[22px] h-[22px] mt-0.5"
                />
                <p className="text-[16px] leading-snug">
                  {item.includes("Refund Policy") ? (
                    <>
                      Refund with 24-Hrs (
                      <a href="#" className="text-primary underline">Refund Policy</a>)
                    </>
                  ) : (
                    item
                  )}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

    </div>
  )
}

export default BundleDetails