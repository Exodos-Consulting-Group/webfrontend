import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Web Development Services - Exodos',
  description: 'Custom web applications built with modern frameworks like Next.js, React, and TypeScript. Responsive design, performance optimization, and SEO ready.',
}

export default function WebDevelopmentPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Back Navigation */}
        <div className="mb-8">
          <Link 
            href="/services" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Services
          </Link>
        </div>

        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-6">
            Web Development Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Custom web applications built with modern frameworks like Next.js, React, and TypeScript. 
            We create scalable, performant, and accessible solutions that grow with your business.
          </p>
        </div>

        {/* Service Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Responsive Design</h3>
            <p className="text-gray-600 text-sm">Mobile-first approach ensuring perfect display across all devices</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Performance Optimization</h3>
            <p className="text-gray-600 text-sm">Lightning-fast loading times and optimized user experiences</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">SEO Ready</h3>
            <p className="text-gray-600 text-sm">Built-in SEO optimization for better search engine visibility</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Cross-browser Compatible</h3>
            <p className="text-gray-600 text-sm">Works seamlessly across Chrome, Firefox, Safari, and Edge</p>
          </div>
        </div>

        {/* Technology Stack */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Our Technology Stack</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <h3 className="font-semibold text-gray-900 mb-2">Frontend</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Next.js 15</li>
                <li>React</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-gray-900 mb-2">Backend</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Node.js</li>
                <li>Express</li>
                <li>API Development</li>
                <li>Database Integration</li>
              </ul>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-gray-900 mb-2">Cloud & DevOps</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>AWS Services</li>
                <li>Docker</li>
                <li>CI/CD Pipelines</li>
                <li>Monitoring</li>
              </ul>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-gray-900 mb-2">Quality</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Automated Testing</li>
                <li>Code Reviews</li>
                <li>Performance Audits</li>
                <li>Security Scanning</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Process */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Our Development Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Discovery & Planning</h3>
              <p className="text-gray-600">We analyze your requirements, define project scope, and create a detailed development roadmap.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Design & Development</h3>
              <p className="text-gray-600">Our team creates wireframes, designs, and develops your application using modern best practices.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Testing & Launch</h3>
              <p className="text-gray-600">Comprehensive testing, optimization, and deployment with ongoing support and maintenance.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-600 rounded-lg p-8 text-center text-white">
          <h2 className="text-2xl font-semibold mb-4">Ready to Start Your Web Development Project?</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Let&apos;s discuss your requirements and create a custom solution that drives your business forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium">
              Get Started Today
            </Link>
            <Link href="/services" className="border border-white text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
              View All Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
