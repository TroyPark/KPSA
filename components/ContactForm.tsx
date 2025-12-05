'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const services = [
    '정책자금',
    '정부지원사업',
    'ISO인증',
    '특허 인증',
    '바우처',
    '투자유치',
    '벤처 인증',
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    // 여기에 실제 폼 제출 로직을 추가하세요
    // 예: API 호출 또는 이메일 전송 서비스 연동
    try {
      // 시뮬레이션: 실제로는 API 호출
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setSubmitStatus('success')
      setFormData({
        name: '',
        company: '',
        phone: '',
        email: '',
        service: '',
        message: '',
      })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-light">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            상담 문의
          </h2>
          <p className="text-lg text-secondary">
            전문 컨설턴트가 직접 상담해드립니다
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">
                이름 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                placeholder="이름을 입력해주세요"
              />
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-medium text-primary mb-2">
                회사명
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                placeholder="회사명을 입력해주세요"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-primary mb-2">
                연락처 <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                placeholder="010-0000-0000"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
                이메일 <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                placeholder="example@email.com"
              />
            </div>

            <div className="md:col-span-2">
              <label htmlFor="service" className="block text-sm font-medium text-primary mb-2">
                문의 서비스 <span className="text-red-500">*</span>
              </label>
              <select
                id="service"
                name="service"
                required
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
              >
                <option value="">서비스를 선택해주세요</option>
                {services.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>

            <div className="md:col-span-2">
              <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">
                문의 내용
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                placeholder="문의하실 내용을 입력해주세요"
              />
            </div>
          </div>

          {submitStatus === 'success' && (
            <div className="mb-4 p-4 bg-green-100 text-green-700 rounded-lg">
              상담 신청이 완료되었습니다. 빠른 시일 내에 연락드리겠습니다.
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="mb-4 p-4 bg-red-100 text-red-700 rounded-lg">
              오류가 발생했습니다. 다시 시도해주세요.
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? '제출 중...' : '상담 신청하기'}
          </button>

          <p className="text-sm text-secondary text-center mt-4">
            * 필수 항목은 반드시 입력해주세요
          </p>
        </form>
      </div>
    </section>
  )
}

