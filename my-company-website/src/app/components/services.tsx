const Services = () => {
  const services = [
    {
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          <circle cx="12" cy="8" r="2"/>
          <path d="M8 14c0-2.21 1.79-4 4-4s4 1.79 4 4"/>
        </svg>
      ),
      title: "AI Agent 智能决策系统",
      description: "Smart Decision Dynamics Nexus - 构建智能化决策支持系统，通过AI技术整合多维数据源，为企业提供实时、精准的商业洞察与决策建议。",
      features: ["智能数据整合", "实时决策支持", "多维度分析", "自动化洞察生成"]
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M3 3h18v2H3V3zm0 4h18v2H3V7zm0 4h18v2H3v-2zm0 4h12v2H3v-2zm14 0h4v6h-4v-6z"/>
          <path d="M19 10v4h2v-4h-2zm0-2h2V6h-2v2z"/>
        </svg>
      ),
      title: "科技消费品全链路研究",
      description: "深度覆盖科技消费品制造业全产业链，从供应链到终端消费的完整研究体系，助力企业把握行业脉搏。",
      features: ["供应链分析", "制造环节优化", "零售渠道研究", "消费趋势洞察"]
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          <circle cx="12" cy="12" r="3"/>
        </svg>
      ),
      title: "中国制造品牌洞察咨询",
      description: "专注中国制造业品牌建设与升级，提供从品牌定位到市场表现的全方位咨询服务，助力中国品牌走向全球。",
      features: ["品牌定位策略", "市场竞争分析", "品牌价值提升", "全球化布局"]
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.95-2.05l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"/>
        </svg>
      ),
      title: "消费生活方式演进研究",
      description: "深入研究消费者生活方式变迁趋势，识别新兴消费需求，为企业产品创新和市场策略提供前瞻性指导。",
      features: ["生活方式趋势", "消费行为分析", "需求预测建模", "创新机会识别"]
    }
  ]

  const solutions = [
    {
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
        </svg>
      ),
      title: "营销管理效果评估",
      description: "一站式解决品牌管理、营销效果与新品上市三大核心痛点。精准定位品牌形象，营销效果实时监控，新品上市全流程追踪。",
      highlights: ["品牌管理优化", "营销ROI提升", "新品上市策略"]
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 11H7v6h2v-6zm4 0h-2v6h2v-6zm4 0h-2v6h2v-6zm2.5-5H19V4h-2v2H7V4H5v2H4.5C3.67 6 3 6.67 3 7.5v11C3 19.33 3.67 20 4.5 20h15c.83 0 1.5-.67 1.5-1.5v-11C21 6.67 20.33 6 19.5 6z"/>
        </svg>
      ),
      title: "战略规划预测洞察",
      description: "精准战略规划与预测，抢占市场先机。提供精准的市场规模预测，深入研究市场、竞品、消费者及政策法规。",
      highlights: ["市场规模预测", "竞品动态分析", "政策环境研究"]
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      ),
      title: "产品生命周期监测",
      description: "全方位全产品生命周期决策研究，成就产品卓越表现。零部件计划管理，新品研发策略规划，畅销品分析。",
      highlights: ["全生命周期管理", "新品开发策略", "市场潜力分析"]
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-1 16H9V7h9v14z"/>
        </svg>
      ),
      title: "销售效能提升研究",
      description: "数据驱动市场/价格/渠道三维策略，全链诊断提升销售效能，构建可持续增长护城河，实现销售全流程高效运作。",
      highlights: ["市场经营优化", "价格策略管理", "渠道效能提升"]
    }
  ]

  return (
    <section className="section-padding bg-background-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block bg-primary text-white px-6 py-3 rounded-full text-xl font-medium mb-4">
            ♦ 产品服务
          </span>
          <h2 className="section-title text-primary mb-6">
            AI智能化市场洞察
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            以数据驱动决策为引擎，聚焦生活方式变革趋势，
            为中国制造业提供兼具全球视野与本土实践的多维度创新解决方案。
          </p>
        </div>


        {/* Platform */}
        <div className="mb-12">
          <div className="relative max-w-4xl mx-auto fade-in">
            {/* frame */}
            <div className="relative bg-gray-800 rounded-t-3xl p-6 shadow-2xl">
              {/* screen */}
              <div className="bg-black rounded-2xl p-4">
                <div className="relative bg-white rounded-lg overflow-hidden">
                  <img 
                    src="/website_img1.png" 
                    alt="YitonTech 数据分析平台界面"
                    className="w-full h-auto"
                  />
                  
                  <div className="absolute bottom-4 left-12 right-8">
                    <div className="bg-gray-900/75 backdrop-blur-md rounded-lg p-4 border border-gray-700">
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                          <div className="text-lg font-bold text-accent-cream">实时</div>
                          <div className="text-sm text-gray-300">数据更新</div>
                        </div>
                        <div>
                          <div className="text-lg font-bold text-accent-cream">多维</div>
                          <div className="text-sm text-gray-300">分析视角</div>
                        </div>
                        <div>
                          <div className="text-lg font-bold text-accent-cream">智能</div>
                          <div className="text-sm text-gray-300">预测模型</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-600 rounded-full"></div>
            </div>
            
            {/* base */}
            <div className="relative">
              <div className="bg-gray-700 h-6 rounded-b-3xl shadow-xl"></div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-2 bg-gray-600 rounded-b-xl"></div>
            </div>
          </div>
        </div>

        {/* Core Services */}
        <div className="mb-20">
          <div className="bg-gradient-primary py-3 text-white text-center mb-4">
            <h3 className="text-2xl font-semibold text-center">核心产品服务</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="card p-6 group hover:shadow-xl transition-all duration-300">
                {/* Icon */}
                <div className="mb-4">
                  <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                </div>

                {/* Content */}
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  {service.title}
                </h4>
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-xs text-gray-600">
                      <svg className="w-3 h-3 text-primary mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Four major solutions */}
        <div className="mb-16">
          <div className="bg-gradient-secondary py-3 text-white text-center mb-4">
            <h3 className="text-2xl font-semibold text-center">四大解决方案</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="card p-8 group hover:shadow-xl transition-all duration-300">
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-20 h-20 bg-gradient-secondary rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                    {solution.icon}
                  </div>
                </div>

                {/* Content */}
                <h4 className="text-xl font-semibold text-gray-900 mb-4">
                  {solution.title}
                </h4>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {solution.description}
                </p>

                {/* Items */}
                <div className="space-y-3 mb-6">
                  {solution.highlights.map((highlight, highlightIndex) => (
                    <div key={highlightIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      <span className="text-sm font-medium text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Btns */}
                <button className="w-full py-3 px-6 btn-secondary font-semibold rounded-lg">
                  了解详情
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-5xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              需要更多定制化服务？
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              我们提供灵活的定制化解决方案，根据您的具体业务需求，
              量身打造专属的数据分析和市场洞察服务。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                获取方案
              </button>
              <button className="btn-secondary">
                免费咨询
              </button>
            </div>
          </div>
        </div>

        {/* Company Advantages */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-white rounded-xl shadow-sm">
            <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 3h18v2H3V3zm0 4h18v2H3V7zm0 4h18v2H3v-2z"/>
              </svg>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">全域数据整合</h4>
            <p className="text-sm text-gray-600">多源数据采集分析能力</p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-sm">
            <div className="w-12 h-12 bg-secondary bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">行业深度积淀</h4>
            <p className="text-sm text-gray-600">科技消费品制造专业经验</p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-sm">
            <div className="w-12 h-12 bg-accent bg-opacity-60 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
              </svg>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">4050专家团队</h4>
            <p className="text-sm text-gray-600">丰富行业经验与专业积淀</p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-sm">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">可持续创新</h4>
            <p className="text-sm text-gray-600">产品创新力与品牌引领力</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services