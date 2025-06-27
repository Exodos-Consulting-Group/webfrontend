import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Emily Davis - Product Strategist | Exodos',
  description: 'Learn more about Emily Davis, our Product Strategist who bridges business goals with technical implementation.',
}

export default function EmilyDavisPage() {
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
                  <span className="text-4xl font-bold text-purple-700">ED</span>
                </div>
                <div className="space-y-3">
                  <a href="mailto:emily@exodos.com" className="flex items-center justify-center text-purple-600 hover:text-purple-800 transition-colors">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    emily@exodos.com
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
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Emily Davis</h1>
                <p className="text-xl text-blue-600 font-medium mb-1">Product Strategist</p>
                <span className="inline-block bg-gray-100 text-gray-700 text-sm font-medium px-3 py-1 rounded-full">
                  Strategy Team
                </span>
              </div>

              <div className="prose prose-lg max-w-none">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">About Emily</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Emily bridges the gap between business goals and technical implementation. She works closely with 
                  clients to understand their needs and translates them into actionable product roadmaps that drive 
                  measurable results. Her strategic thinking and analytical approach ensure that every project 
                  delivers maximum value.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  With a background in both business consulting and product management, Emily brings a unique 
                  perspective to digital transformation projects. She has helped dozens of companies navigate 
                  complex technology decisions and build products that truly serve their customers and business objectives.
                </p>

                <h3 className="text-lg font-semibold text-gray-900 mb-3">Strategic Expertise</h3>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Business Strategy</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Product Roadmapping</li>
                      <li>• Market Analysis</li>
                      <li>• Competitive Research</li>
                      <li>• ROI Optimization</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Project Management</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Agile Methodologies</li>
                      <li>• Stakeholder Management</li>
                      <li>• Risk Assessment</li>
                      <li>• Team Leadership</li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-3">Education & Certifications</h3>
                <div className="space-y-3 mb-6">
                  <div>
                    <p className="font-medium text-gray-900">MBA, Strategy & Operations</p>
                    <p className="text-sm text-gray-600">Wharton School, University of Pennsylvania • 2019</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">B.S. Business Administration</p>
                    <p className="text-sm text-gray-600">University of Michigan • 2015</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Certified Scrum Product Owner (CSPO)</p>
                    <p className="text-sm text-gray-600">Scrum Alliance • 2021</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Google Analytics Certified</p>
                    <p className="text-sm text-gray-600">Google • 2023</p>
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-3">Recent Projects</h3>
                <div className="space-y-4 mb-6">
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-medium text-gray-900">SaaS Platform Launch Strategy</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      Developed go-to-market strategy for a B2B SaaS platform, resulting in 150% faster user 
                      acquisition and $2M ARR within the first year.
                    </p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-medium text-gray-900">Digital Transformation Roadmap</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      Led strategic planning for a Fortune 500 company's digital transformation, identifying 
                      $5M in cost savings and improving operational efficiency by 30%.
                    </p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-medium text-gray-900">E-commerce Optimization</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      Analyzed user behavior and market trends to redesign conversion funnel, increasing 
                      online sales by 45% and reducing cart abandonment by 25%.
                    </p>
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-3">Approach</h3>
                <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600">
                  "Success in digital products comes from deeply understanding both the business context and 
                  user needs. I believe in data-driven decision making, but also in the power of intuition 
                  and human insight. The best strategies are those that balance ambitious vision with 
                  practical execution."
                </blockquote>
              </div>
            </div>
          </div>
        </div>

        {/* Other Team Members */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Other Team Members</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/team/sarah-johnson" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mr-4">
                  <span className="text-lg font-bold text-blue-700">SJ</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Sarah Johnson</h3>
                  <p className="text-blue-600">Lead Developer</p>
                </div>
              </div>
            </Link>
            <Link href="/team/mike-chen" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mr-4">
                  <span className="text-lg font-bold text-green-700">MC</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Mike Chen</h3>
                  <p className="text-blue-600">Senior UX Designer</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
