import React from 'react'
import { Icon } from '@iconify/react/dist/iconify.js'

function Footer() {
    return (
        <footer className="bg-color1 text-white">
            {/* <div className="bg-[url('/assets/bg/footer-bg.jpg')] bg-cover bg-center"> */}


            {/* Newsletter */}
            {/* <div className="bg-[#F5F6F7] md:bg-white py-10 px-6 sm:px-14 md:px-36 text-center flex flex-col md:flex-row">
                <div className='text-left'>
                    <h3 className="text-xl  font-semibold text-[#646464] mb-2">
                        Subscribe to our Newsletter
                    </h3>
                    <p className="text-sm text-[#646464] mb-6">
                        Since education is the answer to all the questions we are doing our best to incorporate them all.
                    </p>
                </div>
                <form className="md:min-w-md w-full mx-auto h-min flex rounded-full overflow-hidden border border-gray-300 m-auto">
                    <input
                        type="email"
                        placeholder="Your Email Address"
                        className="flex-1 px-4 py-2 text-sm md:text-lg outline-none text-gray-700"
                    />
                    <button
                        type="submit"
                        className="bg-[#0163F8] px-6 text-white font-medium hover:bg-blue-700 transition w-max"
                        >
                        Subscribe
                        </button>
                        </form>
                        </div> */}

            {/* Footer Content */}
            <div className="max-w-7xl mx-auto pb-12  grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Logo & Tagline */}
                <div className="space-y-2 flex md:flex-col md:justify-start md:pt-12 gap-5 justify-center pt-12 px-6 ">
                    {/* <h1 className='mb-0'>Stravix</h1> */}
                    <div className='flex justify-between items-center h-12'>
                        <img src="/assets/logos/logo.png" alt="Stravix" className="w-52" />
                    </div>
                    {/* <hr className='w-[1px] mb-0 h-10 bg-white/50 text-white/50 md:hidden' /> */}
                    <div className='md:flex items-center gap-1 hidden'>
                        <Icon icon="famicons:mail" className='text-primary text-5xl bg-color1' />
                        <a
                            href="mailto:customerfirst@stravix.in"
                            className="text-primary text-[16px] underline hover:text-yellow-400 transition duration-200"
                        >
                            customerfirst@stravix.in
                        </a>
                    </div>
                    <div className='md:flex items-center gap-1 hidden'>
                        <Icon icon="ic:round-call" className='text-primary text-5xl bg-color1' />
                        <a
                            href="tel:+919211650144"
                            className="text-primary text-[16px] underline hover:text-yellow-400 transition duration-200"
                        >
                            +91 92116 50144
                        </a>
                    </div>
                    {/* <p className="text-sm text-white font-light text-center">
                        “<span className="italic">Empowering Minds With 21ST Century Skills</span>”
                    </p> */}
                </div>
                <hr className='w-full text-white/50 md:hidden' />
                {/* Quick Links */}

                <div className='px-6 md:pt-12'>
                    <h4 className="text-primary1 font-semibold mb-3">Quick Links</h4>
                    <ul className="space-y-2 text-sm text-primary font-bold">
                        {/* <li><a href="/bundle-courses">Upcoming Events</a></li>
                        <li><a href="#">Become an Instructor</a></li> */}
                        <li><a href="/coming-soon">The Affiliate Launchpad</a></li>
                        <li><a href="https://workshop.stravix.in/">Sales & Mindset Booster</a></li>
                        {/* <li><a href="/bundle-courses/sales-mastery">Sales Mastery</a></li> */}
                        {/* <li><a href="/bundle-courses/soft-skills-mastery">Soft Skills Mastery</a></li> */}
                    </ul>
                </div>

                {/* Other Links */}
                <div className='px-6 md:pt-12'>
                    <h4 className="text-primary1 font-bold mb-3">Other Links</h4>
                    <ul className="space-y-2 text-sm">
                        <li><a href="/refund-policy">Refund Policy</a></li>
                        <li><a href="terms-and-conditions">Terms & Conditions</a></li>
                        <li><a href="/privacy-policy">Privacy Policy</a></li>
                        <li><a href="/disclaimer">Disclaimer</a></li>
                    </ul>
                </div>

                {/* Social */}
                <div className='px-6 md:pt-12'>
                    <h4 className="text-primary1 font-semibold mb-3">Follow</h4>
                    <div className="flex gap-3">
                        <a
                            href="https://www.instagram.com/stravix_official"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Icon icon="bxl:instagram-alt" className='w-8 h-8 text-primary' />
                        </a>
                        <a
                            href="https://www.linkedin.com/company/stravix-officiall/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Icon icon="mdi:linkedin" className='w-8 h-8 text-primary' />
                        </a>
                        <a
                            href="https://x.com/stravix_officia"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Icon icon="prime:twitter" className='w-8 h-8 text-primary' />
                        </a>
                        <a
                            href="https://www.facebook.com/stravix.official/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Icon icon="uiw:facebook" className='w-8 h-8 text-primary' />
                        </a>
                        <a
                            href="https://www.youtube.com/@stravix_official"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Icon icon="akar-icons:youtube-fill" className='w-8 h-8 text-primary' />
                        </a>
                    </div>
                </div>
            </div>


            {/* Bottom Bar */}
            <div className="border-t border-white/20 text-center py-4 text-sm text-primary font-bold">
                All Rights Reserved © 2025 | StraviX
            </div>
            {/* </div> */}
        </footer>
    )
}

export default Footer