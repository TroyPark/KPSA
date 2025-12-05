import Link from 'next/link'

export default function Hero() {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-b from-light to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
            복잡한 지원사업,
            <br />
            <span className="text-accent">저희와 함께라면 쉽게 해결됩니다.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-secondary mb-4 font-medium">
            사업 성장의 지름길
          </p>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-8">
            <span className="text-accent">정책자금 & 정부지원금</span>
            <br />
            저희가 도와드립니다
          </h2>
          
          <p className="text-lg md:text-xl text-secondary mb-10 max-w-3xl mx-auto">
            대표님이 열심히 사업에 몰두하시는 동안,
            <br />
            정책자금 & 무상지원금은 저희가 책임지겠습니다.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#contact"
              className="bg-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl"
            >
              상담 신청하기
            </Link>
            <Link
              href="#services"
              className="bg-accent text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl"
            >
              서비스 알아보기
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

