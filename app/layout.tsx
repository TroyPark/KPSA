import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'KPSA - 한국정책솔루션협회',
  description: '정책자금, 정부지원사업, ISO인증, 특허인증, 바우처, 투자유치, 벤처인증 전문 컨설팅',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

