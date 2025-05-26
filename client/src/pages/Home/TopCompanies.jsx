import React from 'react'

const companies = [
    { name: "Zomato", logo: "/assets/logos/zomato.png" },
    { name: "Uber", logo: "/assets/logos/uber.png" },
    { name: "RAASA", logo: "/assets/logos/raasa.png" },
    { name: "TCS", logo: "/assets/logos/tcs.png" },
    { name: "Winuall", logo: "/assets/logos/winuall.png" },
    { name: "Deloitte", logo: "/assets/logos/deloitte.png" },
    { name: "Accenture", logo: "/assets/logos/accenture.png" },
  ];
  

function TopCompanies() {
  return (
    
    <section className="py-12 bg-color">
    <div className="max-w-7xl mx-auto px-6 text-center md:max-w-[85rem]">
      <h3 className="text-2xl font-semibold text-color mb-8 sm:text-right">
        Where Our Learners’ Work
      </h3>

      <div className="flex flex-nowrap overflow-auto scrollbar-hide scroll-smooth justify-center items-center gap-1 md:gap-5">
        {companies.map((company, index) => (
          <img
            key={index}
            src={company.logo}
            alt={company.name}
            className="h-16 sm:h-20 md:h-40 object-contain transition duration-300"
          />
        ))}
      </div>
    </div>
  </section>
  )
}

export default TopCompanies