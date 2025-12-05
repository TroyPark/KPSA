export default function Features() {
  const features = [
    {
      title: '복잡한 절차',
      subtitle: '복잡한 절차 때문에 막막한 분들',
      description: '어떤 서류를 준비하고 어떤 기관을 거쳐야 하는지 전문가의 도움을 받아보세요.',
      icon: '📋',
    },
    {
      title: '어려운 인증',
      subtitle: '어려운 인증 때문에 고민하는 분들',
      description: '인증 절차가 복잡하게 느껴진다면 쉽고 빠르게 해결할 수 있도록 도와드립니다.',
      icon: '🔐',
    },
    {
      title: '까다로운 심사',
      subtitle: '까다로운 심사로 걱정하는 분들',
      description: '계획서 작성부터 심사 준비까지 철저하게 대비해 가능성을 높여드립니다.',
      icon: '📊',
    },
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            사업 성공을 위한
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold text-accent mb-4">
            Check Point!
          </h3>
          <p className="text-xl text-secondary">
            몰라서 놓치고 못 받는 정책자금
          </p>
          <p className="text-xl font-bold text-primary mt-2">
            100% 받아가세요!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold text-primary mb-2">
                {feature.title}
              </h3>
              <h4 className="text-lg font-semibold text-accent mb-4">
                {feature.subtitle}
              </h4>
              <p className="text-secondary leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-primary text-white p-8 md:p-12 rounded-lg text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            정부는 매년 기업을 위한 예산을 편성하고 있습니다.
          </h3>
          <p className="text-xl mb-6">
            대표님 사업장에 맞춰 받을 수 있는 정책자금 추천
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div className="bg-white bg-opacity-10 p-4 rounded-lg">
              <p className="font-semibold">정책자금</p>
            </div>
            <div className="bg-white bg-opacity-10 p-4 rounded-lg">
              <p className="font-semibold">지원사업</p>
            </div>
            <div className="bg-white bg-opacity-10 p-4 rounded-lg">
              <p className="font-semibold">기업인증</p>
            </div>
            <div className="bg-white bg-opacity-10 p-4 rounded-lg">
              <p className="font-semibold">투자유치</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

