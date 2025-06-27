import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Mike Chen - Senior UX Designer | Exodos',
  description: 'Learn more about Mike Chen, our Senior UX Designer focused on accessibility and inclusive design.',
}

export default function MikeChenPage() {
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
            <div className="md:w-1/3 bg-gradient-to-br from-green-100 to-green-200 p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="w-48 h-48 bg-gradient-to-br from-green-200 to-green-300 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl font-bold text-green-700">MC</span>
                </div>
                <div className="space-y-3">
                  <a href="mailto:mike@exodos.com" className="flex items-center justify-center text-green-600 hover:text-green-800 transition-colors">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    mike@exodos.com
                  </a>
                  <a href="#" className="flex items-center justify-center text-blue-600 hover:text-blue-800 transition-colors">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                    </svg>
                    LinkedIn
                  </a>
                  <a href="#" className="flex items-center justify-center text-pink-600 hover:text-pink-800 transition-colors">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10c5.51 0 10-4.48 10-10S15.51 0 10 0zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM10 1.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0110 1.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM1.453 10.01v-.26c.94.03 4.691.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM10 18.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd" />
                    </svg>
                    Dribbble
                  </a>
                </div>
              </div>
            </div>

            {/* Bio Content Section */}
            <div className="md:w-2/3 p-8">
              <div className="mb-6">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Mike Chen</h1>
                <p className="text-xl text-blue-600 font-medium mb-1">Senior UX Designer</p>
                <span className="inline-block bg-gray-100 text-gray-700 text-sm font-medium px-3 py-1 rounded-full">
                  Design Team
                </span>
              </div>

              <div className="prose prose-lg max-w-none">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">About Mike</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Mike brings a user-centered approach to every project, with a strong focus on accessibility and 
                  inclusive design. His background in psychology helps him understand user behavior and create 
                  intuitive experiences that work for everyone, regardless of their abilities or circumstances.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  With over 6 years of experience in UX design, Mike has worked with Fortune 500 companies and 
                  innovative startups alike. He's passionate about bridging the gap between user needs and business 
                  objectives, creating designs that are both beautiful and functional.
                </p>

                <h3 className="text-lg font-semibold text-gray-900 mb-3">Design Expertise</h3>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Research & Strategy</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• User Research</li>
                      <li>• Persona Development</li>
                      <li>• Journey Mapping</li>
                      <li>• Usability Testing</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Design & Prototyping</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Figma & Sketch</li>
                      <li>• Design Systems</li>
                      <li>• Accessibility Design</li>
                      <li>• Responsive Design</li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-3">Education & Certifications</h3>
                <div className="space-y-3 mb-6">
                  <div>
                    <p className="font-medium text-gray-900">M.A. Human-Computer Interaction</p>
                    <p className="text-sm text-gray-600">Carnegie Mellon University • 2018</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">B.A. Psychology</p>
                    <p className="text-sm text-gray-600">Stanford University • 2016</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Certified Professional in Accessibility Core Competencies</p>
                    <p className="text-sm text-gray-600">IAAP • 2023</p>
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-3">Recent Projects</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-medium text-gray-900">Healthcare Portal Redesign</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      Led the complete redesign of a patient portal, improving task completion rates by 60% and 
                      achieving full WCAG 2.1 AA compliance.
                    </p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-medium text-gray-900">Mobile Banking App UX</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      Designed an inclusive mobile banking experience that reduced customer support calls by 35% 
                      and increased user satisfaction scores.
                    </p>
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-3">Philosophy</h3>
                <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600">
                  "Great design is invisible. It should feel natural and effortless, allowing users to accomplish 
                  their goals without thinking about the interface. When we design with empathy and inclusivity 
                  at the forefront, we create experiences that truly serve everyone."
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
            <Link href="/team/emily-davis" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center mr-4">
                  <span className="text-lg font-bold text-purple-700">ED</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Emily Davis</h3>
                  <p className="text-blue-600">Product Strategist</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
