import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function Disclaimer() {
  return (
    <>
      <Header />
      <section className="max-w-5xl mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
          Disclaimer
        </h1>

        <p className="text-gray-700 text-base md:text-lg mb-6">
          The information provided on the <strong>Stravix</strong> website is for general purposes only. Stravix makes no representations or warranties of any kind, express or implied, regarding the accuracy, completeness, or reliability of the information.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-3">Limitation of Liability</h2>
        <ul className="list-decimal list-inside space-y-2 text-gray-700 text-base md:text-lg">
          <li><strong>No Liability</strong>: Stravix shall not be liable for any damages or losses resulting from the use of our website or services.</li>
          <li><strong>Indirect Damages</strong>: Stravix shall not be liable for any indirect, incidental, special, or consequential damages.</li>
        </ul>

        <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-3">Accuracy of Information</h2>
        <ul className="list-decimal list-inside space-y-2 text-gray-700 text-base md:text-lg">
          <li><strong>No Guarantee</strong>: Stravix does not guarantee the accuracy, completeness, or reliability of the information on our website.</li>
          <li><strong>Subject to Change</strong>: Information on our website is subject to change without notice.</li>
        </ul>

        <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-3">External Links</h2>
        <ul className="list-decimal list-inside space-y-2 text-gray-700 text-base md:text-lg">
          <li><strong>Third-Party Links</strong>: Our website may contain links to third-party websites.</li>
          <li><strong>No Endorsement</strong>: Stravix does not endorse or assume responsibility for the content of these websites.</li>
        </ul>

        <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-3">Professional Advice</h2>
        <p className="text-gray-700 text-base md:text-lg">
          <strong>Consult Professionals</strong>: Stravix recommends consulting qualified professionals for specific advice or guidance.
        </p>

        <p className="text-gray-700 text-base md:text-lg mt-6">
          By using our website, you acknowledge that you have read, understood, and agree to the terms of this disclaimer.
        </p>

        <p className="text-gray-700 text-base md:text-lg mt-4">
          Contact us at <a href="mailto:customerfirst@stravix.in" className="text-primary underline">customerfirst@stravix.in</a> with questions or concerns.
        </p>
      </section>
      <Footer />
    </>
  )
}

export default Disclaimer