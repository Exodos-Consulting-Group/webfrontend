import { Metadata } from 'next'
import Link from 'next/link'
import TeamTabs from '@/components/TeamTabs'

export const metadata: Metadata = {
  title: 'Our Team - Exodos',
  description: 'Meet the talented individuals behind Exodos and learn about their expertise and passion for creating exceptional digital experiences.',
}

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Meet Our Team
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            We&apos;re a diverse group of passionate professionals dedicated to creating 
            exceptional digital experiences. Get to know the people behind Exodos.
          </p>
        </div>

        {/* Team Tabs Component */}
        <TeamTabs />

        {/* Join Our Team CTA */}
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Want to Join Our Team?
          </h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            We&apos;re always looking for talented individuals who share our passion for creating 
            exceptional digital experiences. Check out our open positions or get in touch.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
              View Open Positions
            </button>
            <Link href="/contact" className="bg-white text-gray-700 border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors font-medium">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
