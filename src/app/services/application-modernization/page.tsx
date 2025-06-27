import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Application Modernization Services - Exodos',
  description: 'Transform legacy applications into cloud-native solutions with containerization, microservices architecture, and modern development practices.',
}

export default function ApplicationModernizationPage() {
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
            Application Modernization
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform legacy applications into cloud-native solutions with containerization, microservices architecture, 
            and modern development practices that improve scalability, maintainability, and performance.
          </p>
        </div>

        {/* Modernization Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">Improved Scalability</h3>
            <p className="text-gray-600 text-center">
              Scale applications dynamically based on demand with cloud-native architectures.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">Reduced Costs</h3>
            <p className="text-gray-600 text-center">
              Lower maintenance costs and improved resource utilization through modernization.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">Faster Development</h3>
            <p className="text-gray-600 text-center">
              Accelerate feature delivery with modern CI/CD pipelines and DevOps practices.
            </p>
          </div>
        </div>

        {/* Modernization Approaches */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Modernization Approaches</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                Containerization
              </h3>
              <p className="text-gray-600 mb-4">
                Package applications into containers for consistent deployment across environments.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Docker containerization</li>
                <li>• Kubernetes orchestration</li>
                <li>• Container registry management</li>
                <li>• Multi-environment deployment</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                  </svg>
                </div>
                Microservices Architecture
              </h3>
              <p className="text-gray-600 mb-4">
                Break down monolithic applications into manageable, scalable microservices.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Service decomposition strategy</li>
                <li>• API gateway implementation</li>
                <li>• Inter-service communication</li>
                <li>• Data management patterns</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                Code Modernization
              </h3>
              <p className="text-gray-600 mb-4">
                Update legacy codebases with modern frameworks and best practices.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Framework upgrades</li>
                <li>• Code refactoring</li>
                <li>• Performance optimization</li>
                <li>• Security enhancements</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                DevOps Integration
              </h3>
              <p className="text-gray-600 mb-4">
                Implement modern CI/CD pipelines and automation practices.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Automated testing</li>
                <li>• Continuous deployment</li>
                <li>• Infrastructure as Code</li>
                <li>• Monitoring and observability</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Modernization Process */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Our Modernization Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Assessment</h3>
              <p className="text-gray-600 text-sm">Analyze current applications, dependencies, and modernization opportunities.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Strategy</h3>
              <p className="text-gray-600 text-sm">Define modernization approach, architecture, and implementation roadmap.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Refactor</h3>
              <p className="text-gray-600 text-sm">Modernize code, implement new architecture, and containerize applications.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Deploy</h3>
              <p className="text-gray-600 text-sm">Implement CI/CD pipelines and deploy to cloud-native infrastructure.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">5</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Optimize</h3>
              <p className="text-gray-600 text-sm">Monitor performance, optimize resources, and provide ongoing support.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-8 text-center text-white">
          <h2 className="text-2xl font-semibold mb-4">Ready to Modernize Your Applications?</h2>
          <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
            Transform your legacy applications into scalable, maintainable, and cost-effective cloud-native solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-purple-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium">
              Start Your Modernization
            </Link>
            <Link href="/services" className="border border-white text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors font-medium">
              View All Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
