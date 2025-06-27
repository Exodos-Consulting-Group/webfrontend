import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us - Exodos',
  description: 'Learn more about Exodos and our mission to deliver exceptional web solutions.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            About Exodos
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Discover our story, mission, and the values that drive our success
          </p>
        </div>

        <div className="prose prose-lg mx-auto">
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed">
              At Exodos, we are committed to delivering innovative web solutions that empower 
              businesses to thrive in the digital landscape. Our mission is to create 
              exceptional user experiences through cutting-edge technology and thoughtful design.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Story</h2>
            <p className="text-gray-700 leading-relaxed">
              Founded with a vision to bridge the gap between technology and user experience, 
              Exodos has grown from a small team of passionate developers to a trusted partner 
              for businesses seeking digital transformation. We specialize in modern web 
              technologies, accessibility-first design, and creating solutions that scale 
              with your business needs.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">What We Do</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              We combine technical expertise with strategic thinking to deliver comprehensive 
              digital solutions. From responsive web applications to progressive web apps, 
              we focus on creating experiences that are fast, accessible, and user-friendly 
              across all devices and platforms.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Modern Web Development</h3>
                <p className="text-gray-600 text-sm">
                  Building scalable applications with Next.js, React, TypeScript, and the latest web standards.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">User Experience Design</h3>
                <p className="text-gray-600 text-sm">
                  Creating intuitive, accessible interfaces that prioritize user needs and business goals.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Values</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Innovation in every project we undertake</li>
              <li>Quality that exceeds expectations</li>
              <li>Collaboration with our clients and team</li>
              <li>Accessibility and inclusivity in all our solutions</li>
              <li>Continuous learning and improvement</li>
            </ul>
          </section>

          {/* Call to Action to Team Page */}
          <section className="mb-12">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Meet the Team Behind Exodos
              </h3>
              <p className="text-gray-700 mb-4">
                Get to know our talented team of developers, designers, and strategists who make it all happen.
              </p>
              <a 
                href="/team" 
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Meet Our Team
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
