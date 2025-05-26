import React from "react";

const mediaLinks = [
  { name: "Asia News", url: "#link1" },
  { name: "ED Times", url: "#link2" },
  { name: "Hindustan Times", url: "#link3" },
  { name: "Ahmedabad Mirror", url: "#link4" },
  { name: "News Networks", url: "#link5" },
];

const PressMentions = () => {
  return (
    <section className="py-10 md:px-10 bg-color">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="md:hidden text-2xl font-semibold text-center md:text-left mb-10">
          How Media Discovered Us
        </h2>

        <div className="flex flex-row items-center md:items-start justify-between gap-4">
          {/* Left: Media Links */}
          <div className="w-1/2 space-y-1 md:flex md:flex-col">
            <h2 className="hidden md:block text-3xl font-semibold text-left md:text-left mb-10">
              How Media Discovered Us
            </h2>
            {mediaLinks.map((item, index) => (
              <a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center !text-primary font-medium text-sm xs:text-base hover:!underline"
              >
                <img
                  src="/assets/icons/arrow-bold.svg"
                  alt="arrow"
                  className="w-4 h-4 mr-2"
                />
                {item.name}
              </a>
            ))}
          </div>

          {/* Right: Image */}
          <div className="w-1/2 aspect-square md:aspect-auto flex items-center justify-center">
            <img
              src="/assets/images/speaker.JPG"
              alt="Founder or Speaker"
              className="w-full h-full md:h-1/3 md:w-10/12 object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PressMentions;
