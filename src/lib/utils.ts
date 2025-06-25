import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Device detection utilities
export const isMobile = () => {
  if (typeof window === 'undefined') return false
  return window.innerWidth < 768
}

export const isTablet = () => {
  if (typeof window === 'undefined') return false
  return window.innerWidth >= 768 && window.innerWidth < 1024
}

export const isDesktop = () => {
  if (typeof window === 'undefined') return false
  return window.innerWidth >= 1024
}

// Browser detection utilities
export const getBrowserInfo = () => {
  if (typeof window === 'undefined') return { name: 'unknown', version: 'unknown' }
  
  const userAgent = window.navigator.userAgent
  
  if (userAgent.includes('Chrome')) return { name: 'chrome', version: 'unknown' }
  if (userAgent.includes('Firefox')) return { name: 'firefox', version: 'unknown' }
  if (userAgent.includes('Safari')) return { name: 'safari', version: 'unknown' }
  if (userAgent.includes('Edge')) return { name: 'edge', version: 'unknown' }
  
  return { name: 'unknown', version: 'unknown' }
}

// Touch device detection
export const isTouchDevice = () => {
  if (typeof window === 'undefined') return false
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0
}
