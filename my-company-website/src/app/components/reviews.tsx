'use client'

import { useState, useEffect } from 'react'

const Reviews = () => {
  const [currentReview, setCurrentReview] = useState(0)

  const reviews = [
    {
      name: "张明华",
      role: "制造企业CEO",
      avatar: "张",
      rating: 5,
      review: "意通研达的数据洞察服务完全超出了我们的预期！通过他们的AI分析，我们成功识别了新的市场机会，产品销量提升了30%。他们的团队专业且经验丰富，真正理解制造业的痛点。",
      company: "华东智造科技"
    },
    {
      name: "李雅文",
      role: "市场总监",
      avatar: "李",
      rating: 5,
      review: "与意通研达合作两年来，他们的消费者行为分析帮助我们精准定位目标群体，营销ROI提升了40%。数据可视化报告清晰易懂，为我们的决策提供了有力支撑。",
      company: "创新生活用品公司"
    },
    {
      name: "王建国",
      role: "产品研发总监",
      avatar: "王",
      rating: 5,
      review: "意通研达的趋势预测模型准确度令人印象深刻。他们提前6个月预测到了市场变化趋势，让我们抢占了先机。现在我们的新品开发完全依赖他们的数据支持。",
      company: "智能家电制造"
    },
    {
      name: "陈素娟",
      role: "品牌策略经理",
      avatar: "陈",
      rating: 5,
      review: "从品牌定位到市场策略，意通研达提供了全方位的数据支持。他们的竞争情报分析帮助我们重新调整了品牌战略，在激烈的市场竞争中脱颖而出。服务质量一流！",
      company: "时尚消费品牌"
    },
    {
      name: "刘德华",
      role: "数据分析经理",
      avatar: "刘",
      rating: 5,
      review: "意通研达的AI Agent系统真正实现了数据驱动决策。实时监测预警功能让我们能够快速响应市场变化，销售效能提升了25%。团队的专业水准和服务态度都无可挑剔。",
      company: "科技消费品公司"
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length)
    }, 5000) // Change review every 5 seconds

    return () => clearInterval(interval)
  }, [reviews.length])

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length)
  }

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  const StarRating = ({ rating }: { rating: number }) => {
    return (
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        ))}
      </div>
    )
  }

  return (
    <section className="section-padding bg-background-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-4">
          <span className="inline-block bg-secondary text-white px-6 py-3 rounded-full text-xl font-medium mb-4">
            ♦ 客户评价
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Reviews Carousel */}
          <div className="relative">
            <div className="bg-white rounded-3xl p-8 shadow-xl relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary bg-opacity-5 rounded-full -translate-y-16 translate-x-16"></div>
              
              {/* Quote icon */}
              <div className="absolute top-6 left-6 w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                </svg>
              </div>

              {/* Review Content */}
              <div className="pt-16">
                <StarRating rating={reviews[currentReview].rating} />
                
                <p className="text-lg text-gray-700 my-6 leading-relaxed font-medium">
                  "{reviews[currentReview].review}"
                </p>

                <div className="border-t pt-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-semibold mr-4">
                      {reviews[currentReview].avatar}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{reviews[currentReview].name}</h4>
                      <p className="text-sm text-gray-600">{reviews[currentReview].role}</p>
                      <p className="text-xs text-primary font-medium mt-1">
                        {reviews[currentReview].company}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-6">
              <button
                onClick={prevReview}
                className="w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Dots indicator */}
              <div className="flex space-x-2">
                {reviews.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentReview(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentReview ? 'bg-primary' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextReview}
                className="w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Review Summary */}
          <div className="space-y-8">
            {/* Overall Rating */}
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="text-5xl font-bold text-primary mb-2">4.8</div>
              <StarRating rating={5} />
              <p className="text-gray-600 mt-2">基于200+企业客户评价</p>
              <div className="mt-6 space-y-3">
                {[5, 4, 3, 2, 1].map((stars) => (
                  <div key={stars} className="flex items-center">
                    <span className="text-sm text-gray-600 w-8">{stars}★</span>
                    <div className="flex-1 bg-gray-200 rounded-full h-2 mx-3">
                      <div 
                        className="bg-primary h-2 rounded-full"
                        style={{ width: `${stars === 5 ? 90 : stars === 4 ? 8 : 2}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-600 w-8">{stars === 5 ? '90%' : stars === 4 ? '8%' : '2%'}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Industry Recognition */}
            <div className="bg-accent rounded-2xl p-6 text-center">
              <div className="flex items-center justify-center">
                <svg className="w-6 h-6 text-primary mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                <span className="text-primary text-xl font-semibold">国家级孵化器认证</span>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                上海市北高科集团聚能湾国家级科技企业孵化器重点培育企业，
                专业资质与服务品质的双重保障
              </p>
            </div>

            {/* CTA */}
            <div className="bg-gradient-secondary rounded-2xl p-6 text-white text-center">
              <h3 className="text-xl font-semibold mb-3">准备加入我们的成功客户行列？</h3>
              <p className="text-gray-200 mb-4 text-sm leading-relaxed">
                让AI数据洞察为您的企业发展赋能，体验专业的市场分析与战略咨询服务！
              </p>
              <button className="btn-secondary">
                免费咨询
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Reviews