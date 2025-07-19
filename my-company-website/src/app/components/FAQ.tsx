'use client'

import { useState } from 'react'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "一个典型的数据分析项目需要多长时间？",
      answer: "项目周期根据复杂程度而定。基础的市场洞察报告通常在1-2周内完成，而复杂的全链路AI分析项目可能需要4-8周。我们会在项目启动前提供详细的时间规划，并定期更新进度，确保按时交付高质量的分析结果。"
    },
    {
      question: "你们使用哪些数据源进行分析？",
      answer: "我们整合多维度数据源，包括公开市场数据、行业报告、消费者调研数据、社交媒体数据、以及与合作伙伴的专属数据库。所有数据来源都经过严格验证，确保数据的准确性和时效性。我们也可以整合客户提供的内部数据，形成更精准的分析结果。"
    },
    {
      question: "你们的AI预测准确率如何？",
      answer: "我们的AI预测模型在市场趋势分析中保持95%以上的准确率。通过持续的算法优化和机器学习模型训练，我们能够提前3-6个月预测市场变化趋势。每个预测都会提供置信度评分，让客户更好地评估风险和机会。"
    },
    {
      question: "你们主要服务哪些行业？",
      answer: "我们专注于科技消费品制造业，包括智能手机、家电、数码产品、智能家居等领域。我们深耕这些行业多年，积累了丰富的行业Know-how和数据资源，能够为制造企业提供最专业的洞察服务。"
    },
    {
      question: "你们的服务费用是怎样的？",
      answer: "我们提供灵活的定价模式，包括项目制、年度咨询服务、以及定制化解决方案。费用根据项目复杂度、数据规模和服务周期而定。我们提供免费的初步咨询和需求评估，会在充分了解您的需求后提供透明的报价方案。"
    },
    {
      question: "如何保证我们的商业数据安全？",
      answer: "数据安全是我们的重中之重。我们通过ISO27001信息安全管理体系认证，采用企业级加密技术和访问控制。所有项目都签署严格的保密协议，数据仅用于约定的分析目的。我们还提供本地化部署选项，确保敏感数据不出企业内网。"
    },
    {
      question: "项目完成后是否提供持续支持？",
      answer: "是的，我们提供全方位的后续支持服务。包括3个月的免费咨询期，在此期间您可以就报告内容提出疑问。我们还提供定期的数据更新服务、市场监测预警、以及基于新数据的分析报告更新，确保洞察结果的持续有效性。"
    },
    {
      question: "如果分析结果不符合预期怎么办？",
      answer: "我们对分析质量有严格的标准和流程保障。如果最终结果不符合既定目标，我们会免费进行深度分析和优化调整。我们也提供分阶段交付和中期评审机制，确保项目方向正确。客户满意度是我们的核心指标，我们承诺提供直到满意为止的服务。"
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="section-padding bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-4">
          <span className="inline-block bg-primary text-white px-6 py-3 rounded-full text-xl font-medium mb-4">
            ♦ 常见问题
          </span>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-background-gray rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-8">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  <div className={`w-8 h-8 bg-primary rounded-full flex items-center justify-center transform transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}>
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-8 pb-6">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-secondary rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-semibold mb-4">
              还有其他疑问？
            </h3>
            <p className="text-gray-200 mb-6 max-w-3xl mx-auto leading-relaxed">
              找不到您想要的答案？我们的专业客户服务团队随时为您提供个性化的咨询服务。
              无论是技术问题还是商务合作，我们都将竭诚为您解答。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-secondary">
                联系我们
              </button>
            </div>
          </div>
        </div>

        {/* Quick Contact Info */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-background-gray rounded-xl">
            <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">电话咨询</h4>
            <p className="text-gray-600">00000000</p>
          </div>

          <div className="text-center p-6 bg-background-gray rounded-xl">
            <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">邮件联系</h4>
            <p className="text-gray-600">marketing@yitontech.com</p>
          </div>

          <div className="text-center p-6 bg-background-gray rounded-xl">
            <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">服务时间</h4>
            <p className="text-gray-600">周一至周五: 9:00-18:00</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ