export default function Process() {
  const processes = [
    {
      title: '재무요소 분석 및 개선',
      description: '기업의 재무상태를 분석하고 개선 방안을 제시합니다.',
    },
    {
      title: '비재무요소 컨설팅',
      description: '재무 외 요소들을 종합적으로 분석하여 경쟁력을 강화합니다.',
    },
    {
      title: '성장유망업 세팅',
      description: '기업의 성장 가능성을 높이는 전략을 수립합니다.',
    },
    {
      title: '사업계획서 컨설팅',
      description: '체계적이고 설득력 있는 사업계획서 작성을 지원합니다.',
    },
    {
      title: '정부지원사업 컨설팅',
      description: '정부지원사업 신청부터 승인까지 전 과정을 지원합니다.',
    },
    {
      title: '운영+시설+기술자금',
      description: '운영자금, 시설자금, 기술자금 등 다양한 자금 조달을 지원합니다.',
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            사업 성장의 지름길, 정책자금
          </h2>
          <p className="text-xl text-secondary mb-2">
            1:1 맞춤 컨설팅 받고 최대 자금 확보하세요!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {processes.map((process, index) => (
            <div
              key={index}
              className="bg-light p-6 rounded-lg border-l-4 border-accent hover:shadow-lg transition-all"
            >
              <div className="flex items-start">
                <div className="bg-accent text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">
                    {process.title}
                  </h3>
                  <p className="text-secondary leading-relaxed">
                    {process.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

