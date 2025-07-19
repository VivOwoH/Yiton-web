import Link from 'next/link'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background img */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/bg.jpg')"
        }}
      ></div>
      
      {/* Color tint */}
      <div className="absolute inset-0 bg-primary opacity-80"></div>
      <div className="absolute inset-0 opacity-10">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <polygon fill="currentColor" points="0,100 100,0 100,100"/>
        </svg>
      </div>

      {/* Floating elements decor */}
      <div className="absolute top-20 left-10 opacity-20">
        <div className="w-20 h-20 border-2 border-white rounded-full animate-pulse"></div>
      </div>
      <div className="absolute top-40 right-20 opacity-20">
        <div className="w-16 h-16 border-2 border-white rounded-full animate-pulse"></div>
      </div>
      <div className="absolute bottom-40 left-20 opacity-20">
        <div className="w-12 h-12 border-2 border-white rounded-full"></div>
      </div>
      <div className="absolute bottom-32 right-16 opacity-20">
        <div className="w-14 h-14 border border-white rounded-full animate-pulse"></div>
      </div>

      {/* Main Content */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center text-white">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight fade-in">
            <div className="mb-4">通其意以贯万物</div>
            <div className="mb-8">研其理而达天下</div>
            <div className="flex justify-center mb-8">
              <span className="inline-block bg-accent text-primary px-12 py-6 rounded-full text-4xl md:text-4xl font-bold shadow-2xl">
                ♦ 数据洞察赋能产业升级
              </span>
            </div>
          </h1>
          
          {/* <p className="text-xl md:text-2xl lg:text-3xl text-gray-200 mb-12 leading-relaxed max-w-5xl mx-auto font-light">
            我们以数据驱动决策为引擎，聚焦生活方式变革趋势，<br className="hidden lg:block" />
            为中国制造业提供兼具全球视野与本土实践的多维度创新解决方案。
          </p> */}

          {/* Quick action btn */}
          <div className="pt-12 border-t border-white border-opacity-30 max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Link 
                href="/services"
                className="border-3 border-white px-10 py-4 rounded-full text-lg font-bold hover:bg-white hover:text-red-800 transition-all duration-300 backdrop-blur-sm"
              >
                预约演示
              </Link>
              <Link 
                href="/contact" 
                className="border-3 border-white px-10 py-4 rounded-full text-lg font-bold hover:bg-white hover:text-red-800 transition-all duration-300 backdrop-blur-sm"
              >
                联系我们
              </Link>
            </div>
          </div>
          

          {/* Quick Stats */}
          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-white border-opacity-30 max-w-4xl mx-auto">
            <div className="text-center group">
              <div className="text-4xl md:text-5xl font-bold text-accent-cream mb-2 group-hover:scale-110 transition-transform duration-300">20+</div>
              <div className="text-lg text-gray-300 font-medium">年行业经验</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl md:text-5xl font-bold text-accent-cream mb-2 group-hover:scale-110 transition-transform duration-300">500+</div>
              <div className="text-lg text-gray-300 font-medium">企业合作伙伴</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl md:text-5xl font-bold text-accent-cream mb-2 group-hover:scale-110 transition-transform duration-300">95%</div>
              <div className="text-lg text-gray-300 font-medium">客户满意度</div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  )
}

export default Hero