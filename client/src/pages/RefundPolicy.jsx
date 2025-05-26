import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function RefundPolicy() {
  return (
    <>
      <Header />
      <section className="max-w-5xl mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto px-4 py-10 text-gray-800">
          <h1 className="text-2xl font-bold mb-6">Refund Policy</h1>
          <p className="mb-4 font-semibold">Last Updated: May 17, 2025</p>

          <p className="mb-4">
            The courses offered under <strong>StraviX</strong> are strictly <strong>non-refundable</strong>.
          </p>

          <p className="mb-4">
            By enrolling in a course, you agree that you are signing up voluntarily and
            understand that applying the knowledge to get results is your sole responsibility.
          </p>

          <h2 className="font-semibold mb-2">No Refund in the Following Cases:</h2>
          <ul className="list-disc list-inside mb-4">
            <li>Copying course content</li>
            <li>Sharing your login details with others</li>
            <li>Reselling or redistributing any course</li>
            <li>Disrespecting the course, platform, or StraviX team</li>
          </ul>

          <p className="mb-4">
            Your course access may be cancelled without refund in case of any of the above violations.
          </p>

          <p className="mb-4">
            You will receive your login details within <strong>48 hours</strong> of successful payment.
          </p>

          <p className="mb-4">
            For technical issues or login problems, contact us at:{" "}
            <a href="mailto:customerfirst@stravix.in" className="text-blue-600">
              customerfirst@stravix.in
            </a>
          </p>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default RefundPolicy