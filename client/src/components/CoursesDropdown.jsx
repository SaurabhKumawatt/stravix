import React from "react";
import { Link } from "react-router-dom";

const dropdownData = {
  "Courses": [
    // "Soft Skills Mastery",
    // "Sales Mastery",
    // "Finance Mastery",
    "The Affiliate Launchpad",
    "Sales & Mindset Booster",

  ],
  // Marketing: [
  //   "Instagram Marketing",
  //   "Facebook Ads",
  //   "Google Ads",
  //   "Linkedin Marketing",
  //   "You Tube Marketing",
  //   "Microsoft Ads",
  //   "Email Marketing",
  //   "Instagram Reel Mastery",
  //   "Digital Marketing",
  // ],
  // Designing: ["Canva", "Instagram Reel Mastery", "Digital Marketing"],
  // "Data Science": [
  //   "Power BI",
  //   "Machine Learning",
  //   "Python",
  //   "CFD Aerospace",
  //   "Data Science / Data Analytics",
  // ],
  // Finance: ["Stock Market", "Option Trading"],
  // "Soft Skills": ["Communication Skills"],
};

// w-[100vw] max-w-[100vw]

const CoursesDropdown = () => {
  return (
    <div className="bg-white absolute flex shadow-lg py-6 px-10 gap-8 text-sm w-max rounded-md top-0 transform translate-x-[15%]">
      {Object.entries(dropdownData).map(([category, items], idx) => (
        <div key={idx}>
          <h3 className="font-semibold text-black mb-2">
            {category.startsWith("•") ? category : `• ${category}`}
          </h3>
          <ul className="space-y-1">
            {items.map((item, i) => (
              <li key={i}>
                <Link
                  // to={`/bundle-courses/${item.toLowerCase().replace(/\s+/g, "-")}`}
                  to={item.toLowerCase().replace(/\s+/g, '-') === "sales-&-mindset-booster"
                    ? "https://workshop.stravix.in/"
                    : "/coming-soon"}
                  target={item.toLowerCase().replace(/\s+/g, '-') === "the-affiliate-launchpad" ? "_self" : "_blank"}
                  className="text-blue-600 hover:underline"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default CoursesDropdown;
