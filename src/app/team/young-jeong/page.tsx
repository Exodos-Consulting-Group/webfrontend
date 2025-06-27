import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Young Jeong - Chief Technology Officer | Exodos',
  description: 'Learn more about Young Jeong, our Chief Technology Officer with deep expertise in cloud architecture and digital transformation.',
}

export default function YoungJeongPage() {
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
                  <span className="text-4xl font-bold text-green-700">YJ</span>
                </div>
                <div className="space-y-3">
                  <a href="mailto:young@exodos.com" className="flex items-center justify-center text-green-600 hover:text-green-800 transition-colors">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    young@exodos.com
                  </a>
                  <a href="#" className="flex items-center justify-center text-blue-600 hover:text-blue-800 transition-colors">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                    </svg>
                    LinkedIn
                  </a>
                  <a href="#" className="flex items-center justify-center text-gray-600 hover:text-gray-800 transition-colors">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                    </svg>
                    GitHub
                  </a>
                </div>
              </div>
            </div>

            {/* Bio Content Section */}
            <div className="md:w-2/3 p-8">
              <div className="mb-6">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Young Jeong</h1>
                <p className="text-xl text-blue-600 font-medium mb-1">Chief Technology Officer</p>
                <span className="inline-block bg-gray-100 text-gray-700 text-sm font-medium px-3 py-1 rounded-full">
                  Executive Leadership
                </span>
              </div>

              <div className="prose prose-lg max-w-none">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">About Young</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Young is a technology leader with deep expertise in cloud architecture and digital transformation. 
                  As Chief Technology Officer, he drives the technical vision and strategy for Exodos, ensuring 
                  that our solutions leverage the latest technologies and best practices to deliver exceptional 
                  value to our clients.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  With extensive experience in cloud-native architectures, containerization, and modern application 
                  development, Young has been instrumental in helping organizations modernize their technology 
                  infrastructure and adopt cloud-first strategies. His technical leadership and hands-on approach 
                  ensure that complex projects are delivered successfully.
                </p>

                <h3 className="text-lg font-semibold text-gray-900 mb-3">Technical Expertise</h3>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Cloud Architecture</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• AWS Solutions Architecture</li>
                      <li>• Kubernetes Orchestration</li>
                      <li>• Microservices Design</li>
                      <li>• Infrastructure as Code</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Development</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Cloud-Native Applications</li>
                      <li>• DevOps & CI/CD</li>
                      <li>• Container Technologies</li>
                      <li>• API Design & Integration</li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-3">Education & Certifications</h3>
                <div className="space-y-3 mb-6">
                  <div>
                    <p className="font-medium text-gray-900">M.S. Computer Science</p>
                    <p className="text-sm text-gray-600">Stanford University • 2012</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">B.S. Computer Engineering</p>
                    <p className="text-sm text-gray-600">UC Berkeley • 2010</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">AWS Certified Solutions Architect - Professional</p>
                    <p className="text-sm text-gray-600">Amazon Web Services • 2023</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Certified Kubernetes Administrator (CKA)</p>
                    <p className="text-sm text-gray-600">Cloud Native Computing Foundation • 2022</p>
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Achievements</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-medium text-gray-900">Kubernetes Migration Platform</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      Architected and implemented a comprehensive Kubernetes migration platform that has successfully 
                      containerized over 300 applications across multiple enterprise clients.
                    </p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-medium text-gray-900">Cloud-Native Transformation</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      Led the technical strategy for modernizing legacy monolithic applications into cloud-native 
                      microservices, improving scalability and reducing operational costs by 50%.
                    </p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-medium text-gray-900">VMware Alternative Solutions</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      Developed comprehensive migration strategies helping organizations transition from VMware 
                      infrastructure to cloud-native alternatives, addressing licensing challenges and cost optimization.
                    </p>
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-3">Technical Philosophy</h3>
                <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600">
                  &quot;Technology should enable business outcomes, not create barriers. I believe in building 
                  resilient, scalable systems that grow with the business while maintaining simplicity and 
                  operational excellence. The best architecture is one that solves today&apos;s problems while 
                  preparing for tomorrow&apos;s opportunities.&quot;
                </blockquote>
              </div>
            </div>
          </div>
        </div>

        {/* Other Team Members */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Other Leadership Team Members</h2>
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
            <Link href="/team/andrew-park" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center mr-4">
                  <span className="text-lg font-bold text-purple-700">AP</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Andrew Park</h3>
                  <p className="text-blue-600">Chief Operating Officer</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
