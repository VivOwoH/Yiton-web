'use client'

import { useState, useEffect } from 'react'

const Statistics = () => {
  const [isVisible, setIsVisible] = useState(false)

  const stats = [
    {
      number: 20,
      suffix: "+",
      label: "年行业积淀",
      description: "深耕数据智能与制造业研究的专业经验"
    },
    {
      number: 100,
      suffix: "+",
      label: "服务企业",
      description: "累计为制造业企业提供数据洞察服务"
    },
    {
      number: 500,
      suffix: "万+",
      label: "数据样本",
      description: "多维度数据采集与分析处理能力"
    },
    {
      number: 95,
      suffix: "%",
      label: "洞察准确率",
      description: "AI驱动的市场预测与趋势分析成功率"
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    const element = document.getElementById('statistics-section')
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  const CountUp = ({ end, suffix }: { end: number; suffix: string }) => {
    const [count, setCount] = useState(0)

    useEffect(() => {
      if (!isVisible) return

      const duration = 2000 // 2 seconds
      const steps = 60
      const stepValue = end / steps
      const stepDuration = duration / steps

      let currentStep = 0
      const timer = setInterval(() => {
        currentStep++
        setCount(Math.min(Math.round(stepValue * currentStep), end))

        if (currentStep >= steps) {
          clearInterval(timer)
        }
      }, stepDuration)

      return () => clearInterval(timer)
    }, [isVisible, end])

    return (
      <span className="text-4xl md:text-6xl font-bold text-white">
        {count}{suffix}
      </span>
    )
  }

  return (
    <section 
      id="statistics-section" 
      className="section-padding bg-gradient-primary relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white rounded-full"></div>
        <div className="absolute top-20 right-20 w-20 h-20 border border-white rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 border border-white rounded-full"></div>
        <div className="absolute bottom-32 right-1/3 w-24 h-24 border-2 border-white rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-white bg-opacity-20 text-white px-6 py-3 rounded-full text-xl font-medium mb-4 backdrop-blur-sm">
            ♦ 过往成就
          </span>
          <h2 className="section-title text-white mb-6">
            用数据诠释专业实力
          </h2>
          <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            多年来，我们以专业的数据洞察能力和AI技术创新，为众多制造业企业提供精准的市场分析与战略指导，
            在产业数字化转型的道路上积累了丰富的实战经验与卓越成果。
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative mb-6">
                {/* Background circle */}
                <div className="w-32 h-32 mx-auto bg-white bg-opacity-10 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:bg-opacity-20 transition-all duration-300 group-hover:scale-105">
                  <div className="text-center">
                    <CountUp end={stat.number} suffix={stat.suffix} />
                  </div>
                </div>
                
                {/* Decorative ring */}
                <div className="absolute inset-0 w-32 h-32 mx-auto border-2 border-white border-opacity-30 rounded-full animate-pulse"></div>
              </div>

              <h3 className="text-xl font-semibold text-white mb-3">
                {stat.label}
              </h3>
              <p className="text-gray-200 text-sm leading-relaxed">
                {stat.description}
              </p>

              {/* Hover effect icon */}
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-8 h-8 mx-auto bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievement highlight */}
        <div className="mt-16 flex justify-center">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 border border-white border-opacity-20 max-w-2xl w-full text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-accent rounded-xl flex items-center justify-center mr-4">
                <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-white">专业认证</h4>
            </div>
            <p className="text-gray-200 text-lg leading-relaxed">上海市北高科集团聚能湾国家级科技企业孵化器重点培育企业</p>
          </div>
        </div>

        {/* Bottom CTA */}
        {/* <div className="text-center mt-16">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto border border-white border-opacity-20">
            <h3 className="text-2xl font-semibold text-white mb-4">
              准备体验数据驱动的智能洞察？
            </h3>
            <p className="text-gray-200 mb-6 leading-relaxed">
              加入众多信赖意通研达的制造业企业，让AI技术和数据洞察为您的业务发展赋能。
              我们致力于通过精准的市场分析，助力您的企业实现数字化转型升级。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                免费咨询
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors">
                预约演示
              </button>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  )
}

export default Statistics