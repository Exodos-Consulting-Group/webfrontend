import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Services - Exodos',
  description: 'Explore our comprehensive web development and digital solution services.',
}

const services = [
  {
    title: 'Web Development',
    description: 'Custom web applications built with modern frameworks like Next.js, React, and TypeScript.',
    features: ['Responsive Design', 'Performance Optimization', 'SEO Ready', 'Cross-browser Compatible'],
    href: '/services/web-development'
  },
  {
    title: 'Cloud Migration',
    description: 'Expert migration services helping organizations transition to AWS and modern cloud infrastructure.',
    features: ['VMware Alternatives', 'Cost Optimization', 'Risk Mitigation', 'Minimal Downtime'],
    href: '/services/cloud-migration'
  },
  {
    title: 'Application Modernization',
    description: 'Transform legacy applications into cloud-native solutions with containerization and microservices.',
    features: ['Containerization', 'Microservices', 'DevOps Integration', 'Performance Improvement'],
    href: '/services/application-modernization'
  },
  {
    title: 'Technology Consulting',
    description: 'Strategic guidance for digital transformation and technology adoption with expert recommendations.',
    features: ['Architecture Planning', 'Technology Stack Selection', 'Performance Audits', 'Best Practices'],
    href: '/services/consulting'
  }
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Our Services
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive digital solutions tailored to your business needs, 
            from web development to strategic consulting.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                {service.title}
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-600">
                    <svg className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link 
                href={service.href}
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
              >
                Learn More
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-gray-700 mb-6">
              Let&apos;s discuss how we can help bring your vision to life with our expertise and dedication.
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
              Contact Us Today
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
