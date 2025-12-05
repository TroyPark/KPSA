import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <Image
              src="/BI.png"
              alt="KPSA Logo"
              width={120}
              height={50}
              className="h-12 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-gray-300 text-sm mb-4">
              복잡한 지원사업, 저희와 함께라면 쉽게 해결됩니다.
            </p>
            <p className="text-gray-300 text-sm">
              사업 성장의 지름길, 정책자금 & 정부지원금을 저희가 도와드립니다.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">빠른 링크</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-gray-300 hover:text-accent transition-colors">
                  ABOUT
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-300 hover:text-accent transition-colors">
                  정책자금
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-300 hover:text-accent transition-colors">
                  정부지원사업
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-300 hover:text-accent transition-colors">
                  기업인증
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-300 hover:text-accent transition-colors">
                  상담문의
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">연락처</h3>
            <div className="space-y-2 text-gray-300 text-sm">
              <p>대표번호: 1877-2925</p>
              <p>팩스: 0504-149-4900</p>
              <p>이메일: info@kpsa.co.kr</p>
              <p>업무시간: 평일 오전 10시 ~ 오후 5시</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300 text-sm">
          <p>COPYRIGHT © 2024 KPSA 한국정책솔루션협회. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

