import React from 'react'
import { Icon } from '@iconify/react/dist/iconify.js';
import Header from '../components/Header'
import Footer from '../components/Footer'


const sections = [
  {
    heading: "About StraviX",
    content: `StraviX is an EdTech organization focused on bridging the gap between education and real-world execution. Founded by a seasoned expert in Sales, Communication, and Leadership, StraviX empowers individuals with practical, results-driven training.

We offer skill-based courses in sales, communication, and lead conversion — developed by top trainers from across the country. Our goal is to build a community of confident professionals ready to succeed in today’s competitive world.

At StraviX, we don’t just teach — we transform potential into performance.`,
    image: "/assets/logos/logo.png",
    reverse: false,
  },
  // {
  //   heading: "What We Do",
  //   points: [
  //     { icon: "mdi:book-education-outline", text: "Industry-Ready Courses on in-demand skills" },
  //     { icon: "mdi:briefcase-clock", text: "Earn-As-You-Learn with smart affiliate & MLM" },
  //     { icon: "mdi:cellphone-link", text: "Flexible Learning — any device, anytime" },
  //     { icon: "mdi:message-text-outline", text: "Community Support to stay inspired" },
  //   ],
  //   image: "/assets/images/person-collabrate.png",
  //   reverse: true,
  // },
  {

    heading: "Our Mission",
    content: `Our mission is to create a path to career stability and personal growth for every individual willing to put in the effort. We believe that talent is everywhere — but opportunity often is not. That’s why we are committed to equipping hardworking, motivated individuals with the skills, guidance, and community they need to thrive.

Whether someone is starting from scratch or looking to advance, we stand beside them with practical education, mentorship, and ongoing support — turning ambition into achievement and hard work into lasting success.`,
    image: "/assets/images/mission.png",
    reverse: true,
  },
  {
    heading: "Our Vision",
    content: `Our vision is a world where every individual — regardless of their starting point — has equal access to career-building opportunities and the chance to lead a life of dignity, purpose, and stability.

We envision a society where skill, effort, and determination are the true drivers of success — not background or circumstance. Through education, empowerment, and community, we aim to transform lives at scale, fostering a generation of skilled professionals who not only uplift themselves but also contribute meaningfully to the progress of their families, communities, and society as a whole.`,
    image: "/assets/images/vission.png",
    reverse: false,
  },
  // {
  //   heading: "Why Choose Stravix?",
  //   points: [
  //     { icon: "mdi:rocket-launch-outline", text: "Built for Hustlers, Dreamers & Digital Natives" },
  //     { icon: "mdi:school-outline", text: "Learn from Expert Mentors who walk the talk" },
  //     { icon: "mdi:currency-inr", text: "Turn Skills into Income Streams" },
  //     { icon: "mdi:diamond-outline", text: "Affordable, Accessible & Scalable Learning" },
  //     { icon: "mdi:account-group-outline", text: "A Tribe that Grows With You" },
  //   ],
  //   image: "/assets/images/person-climbing-graph.png",
  //   reverse: true,
  // },
  // {
  //   heading: "Our Mission",
  //   icon: "mdi:earth",
  //   content: `To transform ambitious learners into 21st-century leaders by equipping them with world-class skills and real earning models that scale.`,
  //   image: "/assets/images/mission.png",
  //   reverse: false,
  // },
  // {
  //   heading: "Our Vision",
  //   icon: "mdi:crystal-ball",
  //   content: `To become the go-to platform where every Indian youth can learn, grow, and thrive—without limits.`,
  //   image: "/assets/images/vission.png",
  //   reverse: true,
  // },
  {
    heading: "The Journey Starts Now",
    content: `If you’re ready to learn what schools never taught you…
If you’re done waiting for "the right time"...
If you’re hungry to grow, earn, and make your mark…`,
    image: "/assets/images/flag.png",
    reverse: true,
    cta: "🎯 Welcome to Stravix. Learn. Grow. Earn. Repeat.",
  },
];

function AboutUs() {
  return (
    <>
      <Header />
      <section className="py-12 px-4 md:px-10 max-w-7xl mx-auto space-y-24">
        {sections.map((sec, idx) => (
          <div
            key={idx}
            className={`flex flex-col-reverse ${sec.reverse ? "md:flex-row-reverse" : "md:flex-row"
              } items-center gap-10`}
          >
            {/* Image */}
            <div className="w-full md:w-1/2">
              <img
                src={sec.image}
                alt={`about-${idx}`}
                className="w-1/2 m-auto h-auto"
              />
            </div>

            {/* Text */}
            <div className="w-full md:w-1/2 space-y-4">
              <div className='flex gap-2.5 items-center'>
                {sec.icon && (
                  <Icon icon={sec.icon} className="text-primary text-4xl" />
                )}
                <h2 className="text-xl md:text-3xl font-bold text-color">{sec.heading}</h2>
              </div>
              {sec.content && (
                <p className="text-gray-700 whitespace-pre-line">{sec.content}</p>
              )}
              {sec.points && (
                <ul className="space-y-2 mt-2">
                  {sec.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-color">
                      <Icon icon={point.icon} className="text-primary mt-1" />
                      <span>{point.text}</span>
                    </li>
                  ))}
                </ul>
              )}
              {sec.cta && (
                <p className="text-lg font-semibold text-primary mt-4">{sec.cta}</p>
              )}
            </div>
          </div>
        ))}
      </section>
      <Footer />
    </>
  )
}

export default AboutUs