import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Andrew Park - Chief Operating Officer | Exodos',
  description: 'Learn more about Andrew Park, our Chief Operating Officer who bridges business goals with technical implementation for successful outcomes.',
}

export default function AndrewParkPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Back Navigation */}
        <div className="mb-8">
          <Link 
            href="/team" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Team
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="md:flex">
            {/* Profile Image Section */}
            <div className="md:w-1/3 bg-gradient-to-br from-purple-100 to-purple-200 p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="w-48 h-48 bg-gradient-to-br from-purple-200 to-purple-300 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl font-bold text-purple-700">AP</span>
                </div>
                <div className="space-y-3">
                  <a href="mailto:andrew@exodos.com" className="flex items-center justify-center text-purple-600 hover:text-purple-800 transition-colors">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    andrew@exodos.com
                  </a>
                  <a href="#" className="flex items-center justify-center text-blue-600 hover:text-blue-800 transition-colors">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                    </svg>
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>

            {/* Bio Content Section */}
            <div className="md:w-2/3 p-8">
              <div className="mb-6">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Andrew Park</h1>
                <p className="text-xl text-blue-600 font-medium mb-1">Chief Operating Officer</p>
                <span className="inline-block bg-gray-100 text-gray-700 text-sm font-medium px-3 py-1 rounded-full">
                  Executive Leadership
                </span>
              </div>

              <div className="prose prose-lg max-w-none">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">About Andrew</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Andrew excels at bridging business goals with technical implementation to deliver successful outcomes 
                  for our clients. As Chief Operating Officer, he ensures that every project aligns with strategic 
                  objectives while maintaining operational excellence and delivering measurable value.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  With a unique combination of technical expertise and business acumen, Andrew has successfully led 
                  numerous digital transformation initiatives. His ability to translate complex technical concepts 
                  into business value makes him an invaluable partner for organizations navigating their 
                  modernization journey.
                </p>

                <h3 className="text-lg font-semibold text-gray-900 mb-3">Core Competencies</h3>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Business Operations</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Strategic Planning</li>
                      <li>• Process Optimization</li>
                      <li>• Performance Management</li>
                      <li>• Risk Management</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Technology Leadership</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Digital Transformation</li>
                      <li>• Cloud Migration Strategy</li>
                      <li>• Technology Integration</li>
                      <li>• Solution Architecture</li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-3">Education & Certifications</h3>
                <div className="space-y-3 mb-6">
                  <div>
                    <p className="font-medium text-gray-900">MBA, Technology Management</p>
                    <p className="text-sm text-gray-600">Northwestern Kellogg • 2018</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">B.S. Computer Science</p>
                    <p className="text-sm text-gray-600">University of Illinois • 2014</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">AWS Certified Solutions Architect</p>
                    <p className="text-sm text-gray-600">Amazon Web Services • 2022</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Certified ScrumMaster (CSM)</p>
                    <p className="text-sm text-gray-600">Scrum Alliance • 2020</p>
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Achievements</h3>
                <div className="space-y-4 mb-6">
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-medium text-gray-900">Multi-Cloud Strategy Implementation</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      Led the development and execution of a comprehensive multi-cloud strategy for a global 
                      enterprise, resulting in 35% cost reduction and improved disaster recovery capabilities.
                    </p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-medium text-gray-900">Legacy System Modernization</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      Orchestrated the modernization of critical legacy systems for multiple Fortune 500 companies, 
                      improving system performance by 60% while reducing maintenance costs.
                    </p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-medium text-gray-900">Agile Transformation Program</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      Designed and implemented organization-wide agile transformation programs, improving 
                      project delivery speed by 40% and increasing customer satisfaction scores.
                    </p>
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-3">Industry Focus</h3>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Sectors</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Financial Services</li>
                      <li>• Healthcare</li>
                      <li>• Manufacturing</li>
                      <li>• Retail & E-commerce</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Specializations</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Cloud Migration</li>
                      <li>• Application Modernization</li>
                      <li>• Infrastructure Optimization</li>
                      <li>• DevOps Implementation</li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-3">Leadership Philosophy</h3>
                <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600">
                  "Successful digital transformation isn't just about technology—it's about people, processes, 
                  and culture working together. I believe in creating alignment between business objectives 
                  and technical capabilities, ensuring that every initiative delivers tangible value while 
                  building sustainable competitive advantages."
                </blockquote>
              </div>
            </div>
          </div>
        </div>

        {/* Other Team Members */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Other Team Members</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/team/curtis-rissi" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mr-4">
                  <span className="text-lg font-bold text-blue-700">CR</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Curtis Rissi</h3>
                  <p className="text-blue-600">Chief Operating Officer</p>
                </div>
              </div>
            </Link>
            <Link href="/team/young-jeong" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mr-4">
                  <span className="text-lg font-bold text-green-700">YJ</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Young Jeong</h3>
                  <p className="text-blue-600">Chief Technology Officer</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
