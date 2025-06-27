'use client'

import { useState } from 'react'
import Link from 'next/link'

// Leadership team members (CEO, CTO, COO)
const leadershipTeam = [
  {
    id: 1,
    name: 'Curtis Rissi',
    role: 'Chief Operating Officer',
    department: 'Leadership',
    bio: '20+ years of experience helping customers achieve their desired business outcomes through strategic technology initiatives and operational excellence.',
    expertise: ['Operations Management', 'Digital Transformation', 'Client Relations', 'Strategic Planning', 'VMware Modernization'],
    image: '/api/placeholder/300/300',
    linkedin: '#',
    email: 'curtis@exodos.com',
    link: '/team/curtis-rissi'
  },
  {
    id: 2,
    name: 'Young Jeong',
    role: 'Chief Technology Officer',
    department: 'Leadership',
    bio: 'Technology leader with deep expertise in cloud architecture and digital transformation, driving technical vision and strategy.',
    expertise: ['Cloud Architecture', 'AWS Solutions', 'Kubernetes', 'DevOps', 'Application Modernization'],
    image: '/api/placeholder/300/300',
    linkedin: '#',
    github: '#',
    email: 'young@exodos.com',
    link: '/team/young-jeong'
  },
  {
    id: 3,
    name: 'Andrew Park',
    role: 'Chief Operating Officer',
    department: 'Leadership',
    bio: 'Bridges business goals with technical implementation for successful outcomes, ensuring strategic alignment and operational excellence.',
    expertise: ['Strategic Planning', 'Technology Integration', 'Business Operations', 'Digital Strategy', 'Project Management'],
    image: '/api/placeholder/300/300',
    linkedin: '#',
    email: 'andrew@exodos.com',
    link: '/team/andrew-park'
  }
]

// Sample team members for other departments
const allTeamMembers = [
  ...leadershipTeam
]

const departments = ['All', 'Leadership']

export default function TeamTabs() {
  const [activeTab, setActiveTab] = useState('Leadership')

  const getFilteredMembers = () => {
    if (activeTab === 'All') {
      return allTeamMembers
    }
    if (activeTab === 'Leadership') {
      return leadershipTeam
    }
    return allTeamMembers.filter(member => member.department === activeTab)
  }

  const filteredMembers = getFilteredMembers()

  return (
    <div>
      {/* Tab Navigation */}
      <div className="mb-12">
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
          {departments.map((department) => (
            <button
              key={department}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === department
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
              }`}
              onClick={() => setActiveTab(department)}
            >
              {department}
            </button>
          ))}
        </div>
      </div>

      {/* Team Members Section */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
          {activeTab === 'All' ? 'Our Team' : 
           activeTab === 'Leadership' ? 'Leadership Team' : 
           `${activeTab} Team`}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMembers.map((member) => (
            <div key={member.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              {/* Profile Image */}
              <div className="aspect-w-1 aspect-h-1 bg-gray-200">
                <div className="w-full h-64 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <div className="w-24 h-24 bg-gray-300 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-gray-600">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                {/* Name and Role */}
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-medium">{member.role}</p>
                  <span className={`inline-block text-xs font-medium px-2.5 py-0.5 rounded-full mt-2 ${
                    member.department === 'Leadership' 
                      ? 'bg-blue-100 text-blue-800'
                      : member.department === 'Engineering'
                      ? 'bg-green-100 text-green-800'
                      : member.department === 'Design'
                      ? 'bg-purple-100 text-purple-800'
                      : 'bg-orange-100 text-orange-800'
                  }`}>
                    {member.department}
                  </span>
                </div>
                
                {/* Bio */}
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {member.bio}
                </p>
                
                {/* Expertise Tags */}
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Expertise</h4>
                  <div className="flex flex-wrap gap-1">
                    {member.expertise.slice(0, 3).map((skill, index) => (
                      <span key={index} className="inline-block bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded">
                        {skill}
                      </span>
                    ))}
                    {member.expertise.length > 3 && (
                      <span className="inline-block bg-gray-50 text-gray-600 text-xs px-2 py-1 rounded">
                        +{member.expertise.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
                
                {/* Actions */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    {member.linkedin && (
                      <a href={member.linkedin} className="text-gray-400 hover:text-blue-600 transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                        </svg>
                      </a>
                    )}
                    {member.github && (
                      <a href={member.github} className="text-gray-400 hover:text-gray-900 transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                        </svg>
                      </a>
                    )}
                    <a href={`mailto:${member.email}`} className="text-gray-400 hover:text-blue-600 transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </a>
                  </div>
                  
                  {member.link && (
                    <Link href={member.link} className="text-blue-600 hover:text-blue-800 font-medium text-sm">
                      View Profile →
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
