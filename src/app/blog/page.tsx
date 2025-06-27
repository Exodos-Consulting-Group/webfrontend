import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog - Exodos',
  description: 'Stay updated with the latest insights, tutorials, and industry trends from our team.',
}

// Sample blog posts data
const blogPosts = [
  {
    id: 1,
    title: 'Building Accessible Web Applications with Next.js',
    excerpt: 'Learn how to create inclusive web experiences that work for everyone, following WCAG guidelines and best practices.',
    author: 'Sarah Johnson',
    date: '2024-03-15',
    readTime: '8 min read',
    category: 'Accessibility',
    image: '/api/placeholder/400/250'
  },
  {
    id: 2,
    title: 'The Future of Progressive Web Apps',
    excerpt: 'Explore how PWAs are revolutionizing mobile web experiences and why they matter for your business.',
    author: 'Mike Chen',
    date: '2024-03-10',
    readTime: '6 min read',
    category: 'PWA',
    image: '/api/placeholder/400/250'
  },
  {
    id: 3,
    title: 'Optimizing Performance in React Applications',
    excerpt: 'Discover proven techniques to boost your React app performance and deliver lightning-fast user experiences.',
    author: 'Alex Rodriguez',
    date: '2024-03-05',
    readTime: '10 min read',
    category: 'Performance',
    image: '/api/placeholder/400/250'
  },
  {
    id: 4,
    title: 'TypeScript Best Practices for Large Projects',
    excerpt: 'Essential TypeScript patterns and practices that will help you maintain clean, scalable codebases.',
    author: 'Emily Davis',
    date: '2024-02-28',
    readTime: '12 min read',
    category: 'TypeScript',
    image: '/api/placeholder/400/250'
  },
  {
    id: 5,
    title: 'Mobile-First Design: A Complete Guide',
    excerpt: 'Master the art of mobile-first design and create responsive experiences that work beautifully on all devices.',
    author: 'David Kim',
    date: '2024-02-20',
    readTime: '9 min read',
    category: 'Design',
    image: '/api/placeholder/400/250'
  },
  {
    id: 6,
    title: 'SEO Optimization for Modern Web Apps',
    excerpt: 'Learn how to optimize your Next.js applications for search engines and improve your organic visibility.',
    author: 'Lisa Wang',
    date: '2024-02-15',
    readTime: '7 min read',
    category: 'SEO',
    image: '/api/placeholder/400/250'
  }
]

const categories = ['All', 'Accessibility', 'PWA', 'Performance', 'TypeScript', 'Design', 'SEO']

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Our Blog
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Insights, tutorials, and industry trends from our team of experts. 
            Stay updated with the latest in web development and design.
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  category === 'All'
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                  <span className="text-gray-500 text-sm">Blog Image Placeholder</span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-sm text-gray-500">{post.readTime}</span>
                </div>
                
                <h2 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                  {post.title}
                </h2>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center mr-3">
                      <span className="text-xs font-medium text-gray-600">
                        {post.author.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">{post.author}</p>
                      <p className="text-xs text-gray-500">
                        {new Date(post.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </p>
                    </div>
                  </div>
                  
                  <button className="text-blue-600 hover:text-blue-800 font-medium text-sm">
                    Read More →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-white text-gray-700 border border-gray-300 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors font-medium">
            Load More Posts
          </button>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-blue-600 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Stay Updated
          </h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter and never miss our latest insights, tutorials, and industry updates.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-blue-300"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
