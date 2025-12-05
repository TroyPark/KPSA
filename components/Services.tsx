export default function Services() {
  const services = [
    {
      title: '정책자금',
      description: '기업 성장을 위한 다양한 정책자금 상담 및 신청 지원',
      icon: '💰',
    },
    {
      title: '정부지원사업',
      description: '정부가 지원하는 기업용 무상지원금 최대한 활용',
      icon: '🏛️',
    },
    {
      title: 'ISO인증',
      description: '국제표준 인증 절차를 쉽고 빠르게 해결',
      icon: '✅',
    },
    {
      title: '특허 인증',
      description: '특허 출원부터 인증까지 전문 컨설팅',
      icon: '📜',
    },
    {
      title: '바우처',
      description: '정부 바우처 사업 신청 및 활용 컨설팅',
      icon: '🎫',
    },
    {
      title: '투자유치',
      description: 'AC/VC 투자연계 및 투자유치 컨설팅',
      icon: '💼',
    },
    {
      title: '벤처 인증',
      description: '벤처기업 인증 신청 및 관리 지원',
      icon: '🚀',
    },
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            정책자금 & 정부지원사업
          </h2>
          <p className="text-xl text-secondary">
            성공의 지름길로 이끌어드립니다
          </p>
          <p className="text-lg text-secondary mt-2">
            정책자금부터 무상지원금까지 지금 신청하세요
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-light p-8 rounded-lg hover:shadow-xl transition-all border-2 border-transparent hover:border-accent"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold text-primary mb-4">
                {service.title}
              </h3>
              <p className="text-secondary leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

