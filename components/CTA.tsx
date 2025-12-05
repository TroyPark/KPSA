import Link from 'next/link'

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          정책자금 잘하는 컨설팅 회사가
        </h2>
        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-accent">
          무상지원금도 잘합니다.
        </h3>
        <p className="text-xl mb-8">
          한국정책솔루션협회 상담신청하기
        </p>
        <p className="text-lg mb-10 opacity-90">
          아래 버튼을 클릭하시면 해당 컨설팅 신청 페이지로 이동합니다
        </p>
        <Link
          href="#contact"
          className="inline-block bg-accent text-white px-10 py-4 rounded-lg text-lg font-semibold hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl"
        >
          상담신청
        </Link>
      </div>
    </section>
  )
}

