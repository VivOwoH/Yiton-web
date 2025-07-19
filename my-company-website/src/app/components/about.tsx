const About = () => {
  const coreCapabilities = [
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M3 3h18v2H3V3zm0 4h18v2H3V7zm0 4h18v2H3v-2zm0 4h12v2H3v-2zm14 0h4v6h-4v-6z"/>
        </svg>
      ),
      title: "全链路AI研究体系",
      description: "通过人工智能技术深度解析供应链痛点、科技消费品制造商产能优化、零售场景升级及消费需求变迁，形成从多数据分析到洞察输出的闭环服务。"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          <circle cx="12" cy="8" r="2"/>
          <path d="M8 14c0-2.21 1.79-4 4-4s4 1.79 4 4"/>
        </svg>
      ),
      title: "生活方式创新引擎",
      description: "聚焦消费者生活方式，以用户需求为原点，助力企业捕捉消费趋势，开发符合生活方式的创新产品与服务。"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ),
      title: "国际视野与智库支撑",
      description: "团队成员兼具国际市场研究咨询背景、科技行业及学术机构背景，深耕数据智能与行业研究，累计服务过超百家制造业企业。"
    }
  ]

  const companyRoles = [
    {
      number: "01",
      title: "企业转型的智库伙伴",
      description: "通过精准数据洞察，助力客户破解产能过剩、需求错配、供应链低效等痛点，实现从\"制造\"到\"智造\"的价值跃升。",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
        </svg>
      )
    },
    {
      number: "02", 
      title: "趋势变革的探路者",
      description: "依托消费端数据追踪与生活方式研究，提前预判市场风口，为企业产品研发、品牌定位提供前瞻性策略支持。",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.95-2.05l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"/>
        </svg>
      )
    },
    {
      number: "03",
      title: "产业生态的共建者", 
      description: "联合政府、高校、行业协会等多方力量，推动产学研用深度融合，助力\"中国智造\"走向全球价值链中高端。",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
        </svg>
      )
    }
  ]

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="inline-block bg-secondary text-white px-6 py-3 rounded-full text-xl font-medium mb-4">
            ♦ 关于我们
          </span>
          <h2 className="section-title text-gray-900 mb-6">
            科技赋能产业，洞察连接未来
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            依托国家级孵化器的资源赋能，公司立足“产业数字化”与“数字产业化”双轮驱动，
            构建覆盖供应链-制造商-零售商-终端消费者的全链路人工智能研究体系
          </p>
        </div>

        {/* Core Capabilities */}
        <div className="mb-20">
          <div className="bg-gradient-primary py-3 text-white text-center mb-12">
            <h3 className="text-2xl font-semibold text-center">三大核心能力</h3>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {coreCapabilities.map((capability, index) => (
              <div key={index} className="relative">
                {/* Card */}
                <div className="bg-background-gray rounded-2xl p-8 h-full group hover:shadow-xl transition-all duration-300">
                  {/* Number */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {index + 1}
                  </div>
                  
                  {/* Icon */}
                  <div className="mb-6 pt-4">
                    <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                      {capability.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">
                    {capability.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {capability.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Company Roles */}
        <div>
          <div className="bg-gradient-secondary py-3 text-white text-center mb-4">
            <h3 className="text-2xl font-semibold text-center">理念与价值定位</h3>
          </div>
          <div className="space-y-8">
            {companyRoles.map((role, index) => (
              <div key={index} className={`flex items-center gap-8 ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}>
                {/* Content */}
                <div className="flex-1">
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center text-secondary mr-4">
                        {role.icon}
                      </div>
                      <div>
                        <div className="text-sm text-secondary font-medium mb-1">{role.number}</div>
                        <h4 className="text-xl font-semibold text-gray-900">{role.title}</h4>
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{role.description}</p>
                  </div>
                </div>

                {/* Visual Element */}
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 bg-gradient-secondary rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-xl">
                    {role.number}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        {/* <div className="mt-20 text-center">
          <div className="bg-accent rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-primary mb-4">
              独具“本土实践 + 全球视野”的独特优势
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              累计服务过超百家制造业企业，深耕数据智能与行业研究，
              为中国制造业数字化转型提供专业的智库支撑与创新驱动力。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                了解更多
              </button>
              <button className="btn-secondary">
                合作咨询
              </button>
            </div>
          </div>
        </div> */}

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-background-gray rounded-xl">
            <div className="text-3xl font-bold text-primary mb-2">100+</div>
            <div className="text-sm text-gray-600">服务企业</div>
          </div>
          <div className="text-center p-6 bg-background-gray rounded-xl">
            <div className="text-3xl font-bold text-primary mb-2">20+</div>
            <div className="text-sm text-gray-600">行业经验</div>
          </div>
          <div className="text-center p-6 bg-background-gray rounded-xl">
            <div className="text-3xl font-bold text-primary mb-2">全链路</div>
            <div className="text-sm text-gray-600">AI研究体系</div>
          </div>
          <div className="text-center p-6 bg-background-gray rounded-xl">
            <div className="text-3xl font-bold text-primary mb-2">国际</div>
            <div className="text-sm text-gray-600">视野支撑</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About