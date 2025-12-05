'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    { name: 'ABOUT', href: '#about' },
    { name: '정책자금', href: '#services' },
    { name: '정부지원사업', href: '#services' },
    { name: '기업인증', href: '#services' },
    { name: '투자유치', href: '#services' },
    { name: '업무사례', href: '#cases' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/BI.png"
              alt="KPSA Logo"
              width={120}
              height={50}
              className="h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-primary font-medium hover:text-accent transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="#contact"
              className="bg-primary text-white px-6 py-2 rounded-md hover:bg-opacity-90 transition-colors"
            >
              상담문의
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="메뉴 열기"
          >
            <svg
              className="w-6 h-6 text-primary"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden pb-4">
            <nav className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-primary font-medium hover:text-accent transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="#contact"
                className="bg-primary text-white px-6 py-2 rounded-md hover:bg-opacity-90 transition-colors text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                상담문의
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

