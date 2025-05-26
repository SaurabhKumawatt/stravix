import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'



function PrivacyPolicy() {
    return (
        <>
            <Header />
            <section className="max-w-5xl mx-auto px-4 py-12">
                <h1 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
                    Privacy Policy
                </h1>

                <p className="text-gray-700 text-base md:text-lg mb-6">
                    At <strong>Stravix</strong>, we prioritize the security and privacy of our users' information. This privacy policy outlines how we collect, use, and protect your data.
                </p>

                <h2 className="text-xl md:text-2xl font-semibold text-black mt-8 mb-3">Information We Collect</h2>
                <ul className="list-decimal list-inside space-y-2 text-gray-700 text-base md:text-lg">
                    <li>
                        <strong>Personal Data</strong>: We collect personal data, such as name, email address, and contact information, when you register or interact with our website.
                    </li>
                    <li>
                        <strong>Usage Data</strong>: We collect usage data, such as IP addresses, browser type, and device information, to improve our website's performance.
                    </li>
                </ul>

                <h2 className="text-xl md:text-2xl font-semibold text-black mt-8 mb-3">How We Use Your Data</h2>
                <ul className="list-decimal list-inside space-y-2 text-gray-700 text-base md:text-lg">
                    <li>
                        <strong>Service Provision</strong>: To provide our services, respond to inquiries, and process transactions.
                    </li>
                    <li>
                        <strong>Improvement</strong>: To analyze trends, administer the website, and enhance user experience.
                    </li>
                    <li>
                        <strong>Communication</strong>: We may contact you with updates, promotions, or important information related to our services.
                    </li>
                </ul>

                <h2 className="text-xl md:text-2xl font-semibold text-black mt-8 mb-3">Data Protection</h2>
                <ul className="list-decimal list-inside space-y-2 text-gray-700 text-base md:text-lg">
                    <li>
                        <strong>Security Measures</strong>: We implement robust security measures to protect your data from unauthorized access, disclosure, or destruction.
                    </li>
                    <li>
                        <strong>Data Storage</strong>: Your data is stored securely on our servers, and access is restricted to authorized personnel.
                    </li>
                </ul>

                <h2 className="text-xl md:text-2xl font-semibold text-black mt-8 mb-3">Your Rights</h2>
                <ul className="list-decimal list-inside space-y-2 text-gray-700 text-base md:text-lg">
                    <li><strong>Access</strong>: You can request access to your personal data.</li>
                    <li><strong>Correction</strong>: You can request corrections to inaccurate data.</li>
                    <li><strong>Deletion</strong>: You can request deletion of your data, subject to applicable laws.</li>
                </ul>

                <h2 className="text-xl md:text-2xl font-semibold text-black mt-8 mb-3">Contact Us</h2>
                <p className="text-gray-700 text-base md:text-lg mb-6">
                    If you have questions or concerns about our privacy policy, please contact us at <a href="mailto:customerfirst@stravix.in" className="text-primary underline">customerfirst@stravix.in</a>.
                </p>

                <h2 className="text-xl md:text-2xl font-semibold text-black mt-8 mb-3">Updates</h2>
                <p className="text-gray-700 text-base md:text-lg">
                    We reserve the right to update our privacy policy. Changes will be effective immediately upon posting.
                </p>
            </section>
            <Footer />
        </>
    )
}

export default PrivacyPolicy