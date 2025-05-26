import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function TermsAndConditions() {
  return (
    <>
    <Header />
    <section className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
        Terms and Conditions
      </h1>

      <p className="text-gray-700 text-base md:text-lg mb-6">
        Welcome to <strong>Stravix</strong>! These terms and conditions outline the rules and guidelines for using our website and services.
      </p>

      <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-3">Agreement to Terms</h2>
      <p className="text-gray-700 text-base md:text-lg">
        By accessing or using our website, you agree to be bound by these terms and conditions.
      </p>

      <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-3">Intellectual Property</h2>
      <ul className="list-decimal list-inside space-y-2 text-gray-700 text-base md:text-lg">
        <li><strong>Ownership</strong>: Stravix owns all intellectual property rights to our website, content, and services.</li>
        <li><strong>Usage</strong>: You may not reproduce, distribute, or modify our content without prior written permission.</li>
      </ul>

      <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-3">User Responsibilities</h2>
      <ul className="list-decimal list-inside space-y-2 text-gray-700 text-base md:text-lg">
        <li><strong>Account Security</strong>: You are responsible for maintaining the confidentiality of your account information.</li>
        <li><strong>Compliance</strong>: You must comply with all applicable laws and regulations when using our services.</li>
      </ul>

      <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-3">Payment Terms</h2>
      <ul className="list-decimal list-inside space-y-2 text-gray-700 text-base md:text-lg">
        <li><strong>Fees</strong>: You agree to pay all fees associated with our services.</li>
        <li><strong>Refunds</strong>: Refunds are subject to our refund policy.</li>
      </ul>

      <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-3">Disclaimer</h2>
      <ul className="list-decimal list-inside space-y-2 text-gray-700 text-base md:text-lg">
        <li><strong>No Warranties</strong>: Stravix provides services "as-is" without warranties of any kind.</li>
        <li><strong>Limitation of Liability</strong>: Stravix is not liable for damages resulting from use of our services.</li>
      </ul>

      <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-3">Governing Law</h2>
      <p className="text-gray-700 text-base md:text-lg">
        These terms and conditions are governed by and construed in accordance with the laws of India.
      </p>

      <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-3">Changes to Terms</h2>
      <p className="text-gray-700 text-base md:text-lg">
        We reserve the right to update our terms and conditions. Changes will be effective immediately upon posting.
      </p>

      <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-3">Contact Us</h2>
      <p className="text-gray-700 text-base md:text-lg">
        If you have questions or concerns about our terms and conditions, please contact us at{" "}
        <a href="mailto:customerfirst@stravix.in" className="text-primary underline">customerfirst@stravix.in</a>.
      </p>
    </section>
    <Footer />
    </>
  )
}

export default TermsAndConditions