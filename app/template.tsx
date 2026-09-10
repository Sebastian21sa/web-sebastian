'use client'

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ animation: 'fadeInPage 0.4s ease' }}>
      {children}
    </div>
  )
}
